import {
  IncomingMessage,
  OutgoingHttpHeaders,
  request as httpRequest,
} from "http";
import { request as httpsRequest } from "https";
import { URL } from "url";
import { createAsyncEnumerator } from "@reactive-js/async-enumerable";
import {
  DisposableLike,
  dispose,
  add,
  createDisposableWrapper,
} from "@reactive-js/disposable";
import {
  createObservable,
  ObservableLike,
  map,
  ObservableOperatorLike,
  ofValue,
  switchAll,
  throws,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import {
  HttpResponseLike,
  HttpRequestLike,
  HttpContentBodyLike,
  HttpMethod,
} from "./http";
import { createIncomingMessageContentBody } from "./httpContentBody";
import {
  ReadableMode,
  ReadableEvent,
  ReadableEventType,
  emptyReadableAsyncEnumerable,
} from "./readable";
import { createWritableAsyncEnumerator } from "./writable";

/** @ignore */
export interface HttpClientRequestLike
  extends HttpRequestLike<HttpContentBodyLike> {}

/** @ignore */
export interface HttpClientResponseLike
  extends HttpResponseLike<HttpContentBodyLike>,
    DisposableLike {
  readonly request: HttpClientRequestLike;
}

class HttpClientResponseImpl implements HttpClientResponseLike {
  readonly add = add;
  readonly content: HttpContentBodyLike;
  readonly disposable: DisposableLike;
  readonly dispose = dispose;

  constructor(
    readonly request: HttpClientRequestLike,
    private readonly msg: IncomingMessage,
  ) {
    const disposable = createDisposableWrapper(msg, msg => msg.destroy());

    this.disposable = disposable;
    this.content = createIncomingMessageContentBody(disposable);
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
}

/** @ignore */
export const send = (
  clientRequest: HttpClientRequestLike,
): ObservableLike<HttpClientResponseLike> => {
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

  return createObservable<HttpClientResponseLike>(subscriber => {
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

    const contentEnumerator = (
      content || emptyReadableAsyncEnumerable
    ).enumerateAsync(subscriber);

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
}: HttpClientResponseLike): HttpClientRequestLike => {
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
  HttpClientResponseLike,
  HttpClientResponseLike
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
        return throws<HttpClientResponseLike>(
          () => new Error("Too many redirects"),
        );
      } else {
        return ofValue(resp);
      }
    }),
    switchAll(),
  );
