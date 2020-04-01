import {
  IncomingMessage,
  OutgoingHttpHeaders,
  request as httpRequest,
} from "http";
import { request as httpsRequest } from "https";
import { URL } from "url";
import {
  AsyncEnumerableLike,
  AsyncEnumeratorLike,
  createAsyncEnumerator,
} from "@reactive-js/async-enumerable";
import {
  DisposableLike,
  createDisposable,
  dispose,
  add,
} from "@reactive-js/disposable";
import {
  createObservable,
  ObservableLike,
  map,
  onNotify,
  subscribe,
  onDispose,
  ObservableOperatorLike,
  ofValue,
  switchAll,
  throws,
} from "@reactive-js/observable";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  ReadableMode,
  ReadableEvent,
  createReadableAsyncEnumerator,
  ReadableEventType,
} from "./readable";
import { createWritableAsyncEnumerator } from "./writable";

/** @ignore */
export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

/** @ignore */
export interface HttpContentBody
  extends AsyncEnumerableLike<ReadableMode, ReadableEvent> {
  readonly contentLength: number;
  readonly contentType: string;
}

/** @ignore */
export interface HttpRequest<T> {
  content?: T;

  // FIXME: Limit the allowed set of headers
  headers?: OutgoingHttpHeaders;
  method: HttpMethod;
  url: string | URL;
}

/** @ignore */
export interface HttpResponse<T> {
  readonly httpVersion: string;
  readonly location?: string;
  readonly statusCode: number;
  readonly statusMessage: string;
  readonly content: T;
}

/** @ignore */
export interface HttpClientRequest extends HttpRequest<HttpContentBody> {}

/** @ignore */
export interface HttpClientResponse
  extends HttpResponse<HttpContentBody>,
    DisposableLike {
  readonly request: HttpClientRequest;
}

/** @ignore */
class HttpIncomingMessageContentBody implements HttpContentBody {
  constructor(
    private readonly response: DisposableLike,
    private readonly msg: IncomingMessage,
  ) {}

  get contentLength(): number {
    try {
      return Number.parseInt(this.msg.headers["content-length"] || "0");
    } catch (_) {
      return 0;
    }
  }

  get contentType(): string {
    return this.msg.headers["content-type"] || "";
  }

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<ReadableMode, ReadableEvent> {
    const enumerator = createReadableAsyncEnumerator(
      this.msg,
      scheduler,
      replayCount,
    );
    this.response.add(enumerator);
    return enumerator;
  }
}

class HttpClientResponseImpl implements HttpClientResponse {
  readonly add = add;
  readonly content: HttpContentBody;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  constructor(
    readonly request: HttpClientRequest,
    private readonly msg: IncomingMessage,
  ) {
    this.add(() => msg.destroy());
    this.content = new HttpIncomingMessageContentBody(this, msg);
  }

  get httpVersion() {
    return this.msg.httpVersion;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get location() {
    return this.msg.headers.location;
  }

  get statusCode(): number {
    return this.msg.statusCode || -1;
  }

  get statusMessage(): string {
    return this.msg.statusMessage || "";
  }
}

/** @ignore */
export const send = (
  clientRequest: HttpClientRequest,
): ObservableLike<HttpClientResponse> => {
  const { content, headers, method, url } = clientRequest;

  const reqUrl = url instanceof URL ? url : new URL(url);

  const send =
    reqUrl.protocol === "https:"
      ? httpsRequest
      : reqUrl.protocol === "http:"
      ? httpRequest
      : (() => {
          throw new Error();
        })();

  return createObservable<HttpClientResponse>(subscriber => {
    const reqHeaders: OutgoingHttpHeaders = { ...headers };
    if (content !== undefined) {
      reqHeaders["content-length"] = content.contentLength;
      reqHeaders["content-type"] = content.contentType;
    }
    const req = send(reqUrl, {
      headers: reqHeaders,
      method,
    });

    const onError = (cause: any) => {
      subscriber.dispose({ cause });
    };
    req.on("error", onError);

    const onResponse = (resp: IncomingMessage) => {
      const response = new HttpClientResponseImpl(clientRequest, resp).add(
        subscriber,
      );
      subscriber.dispatch(response);
    };
    req.on("response", onResponse);

    const contentEnumerator: AsyncEnumeratorLike<ReadableMode, ReadableEvent> =
      content?.enumerateAsync(subscriber) ||
      createAsyncEnumerator<ReadableMode, ReadableEvent>(
        map(_ => ({ type: ReadableEventType.End })),
        subscriber,
      );

    const reqBodyEnumerator = createWritableAsyncEnumerator(req, subscriber);

    subscriber
      .add(contentEnumerator)
      .add(reqBodyEnumerator)
      .add(_ => {
        req.abort();

        req.removeListener("error", onError);
        req.removeListener("data", onResponse);

        req.destroy();
      });

    contentEnumerator.subscribe(reqBodyEnumerator);
    reqBodyEnumerator.subscribe(contentEnumerator);

    // unhandled events: abort, connect, continue, information, socket, timeout, upgrade,
  });
};

const redirectCodes = [301, 302, 303, 307, 308];

const makeRedirectRequest = ({
  request: { content, headers, method },
  location,
  statusCode,
}: HttpClientResponse): HttpClientRequest => {
  const redirectToGet =
    statusCode === 303 ||
    ((statusCode === 301 || statusCode === 302) && method === "POST");

  return {
    content: redirectToGet ? undefined : content,
    headers,
    method: redirectToGet ? HttpMethod.GET : method,
    url: location || "",
  };
};

/** @ignore */
export const handleRedirects = (
  maxAttempts = 10,
): ObservableOperatorLike<
  HttpClientResponse,
  HttpClientResponse
> => observable =>
  pipe(
    observable,
    map(resp => {
      const isRedirect = redirectCodes.includes(resp.statusCode);
      const location = resp.location;

      if (isRedirect && location !== undefined && maxAttempts > 0) {
        resp.dispose();
        return pipe(
          resp,
          makeRedirectRequest,
          send,
          handleRedirects(maxAttempts - 1),
        );
      } else if (isRedirect && location !== undefined) {
        resp.dispose();
        // FIXME: would prefer to remove exceptions
        return throws<HttpClientResponse>(
          () => new Error("Too many redirects"),
        );
      } else {
        return ofValue(resp);
      }
    }),
    switchAll(),
  );

import { pipe } from "@reactive-js/pipe";
import { getHostScheduler } from "./scheduler";
pipe(
  {
    method: HttpMethod.GET,
    url: "http://google.com/index.html",
  },
  send,
  onNotify(console.log),
  handleRedirects(0),
  onNotify(console.log),
  onNotify(resp => {
    resp.dispose();
  }),
  onDispose(e => {
    console.log("dispose: " + e);
    console.log(e);
  }),
  subscribe(getHostScheduler()),
);
