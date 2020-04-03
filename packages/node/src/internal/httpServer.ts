import {
  createServer as createHttpServer,
  ServerResponse,
  IncomingMessage,
} from "http";
import {
  createDisposable,
  add,
  dispose,
  createDisposableWrapper,
  DisposableLike,
} from "@reactive-js/disposable";
import {
  HttpRequestLike,
  HttpContentBodyLike,
  HttpResponseLike,
  HttpMethod,
  //HttpContentEncoding,
} from "./http";
import {
  ObservableLike,
  createObservable,
  subscribe,
  onNotify,
  map,
  switchAll,
  //fromArray,
  //keep,
  //takeFirst,
} from "@reactive-js/observable";
import { OperatorLike, pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { emptyReadableAsyncEnumerable } from "./readable";
import { createWritableAsyncEnumerator } from "./writable";
import {
  createIncomingMessageContentBody,
  decodeContentBody /*supportedEncodings*/,
} from "./httpContentBody";

/** @ignore */
export interface HttpServerRequestLike
  extends HttpRequestLike<HttpContentBodyLike> {}

/** @ignore */
export interface HttpServerResponseLike
  extends HttpResponseLike<HttpContentBodyLike> {}

class HttpServerRequestImpl implements HttpServerRequestLike {
  readonly add = add;
  readonly content: HttpContentBodyLike;
  readonly disposable: DisposableLike;
  readonly dispose = dispose;

  constructor(private readonly msg: IncomingMessage) {
    const disposable = createDisposableWrapper(msg, msg => msg.destroy());

    this.disposable = disposable;
    this.content = createIncomingMessageContentBody(disposable);
  }

  get headers() {
    return this.msg.headers;
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get method() {
    return (this.msg.method as HttpMethod) || HttpMethod.GET;
  }

  get url() {
    return this.msg.url || "";
  }
}

const writeResponseContentHeaders = (
  resp: ServerResponse,
  content: HttpContentBodyLike,
) => {
  const { contentLength, contentType, contentEncodings } = content;
  if (contentLength > 0) {
    resp.setHeader("content-length", contentLength);
  }

  if (contentType.length > 0) {
    resp.setHeader("content-type", contentType);
  }

  if (contentEncodings.length > 0) {
    resp.setHeader("content-encoding", contentEncodings.join(", "));
  }
};

const decodeServerRequest = (
  req: HttpServerRequestLike,
): HttpServerRequestLike => {
  const { content, headers, method, url } = req;
  if (content !== undefined && content.contentEncodings.length > 0) {
    return {
      content: decodeContentBody(content),
      headers,
      method,
      url,
    };
  } else {
    return req;
  }
};
/*
const encodeServerResponse = (req: HttpServerRequestLike) => (resp: HttpServerResponseLike): ObservableLike<HttpServerResponseLike> => {
  // FIXME: This parsing is completely not abnf compliant
  // FIXME: Special case Identity
  // FIXME: Add support for determining if content should be encoded.
  const rawAcceptHeader = String(req.headers["accept-encoding"]) || "";
  const acceptedEncodings = rawAcceptHeader.split(",").map(x => x.trim()) as HttpContentEncoding[];

  if(rawAcceptHeader.length > 0) {
    const encodings = pipe(
      acceptedEncodings,
      fromArray,
      keep(x => supportedEncodings.indexOf(x) > -1),
      takeFirst(),
      map(x => )
    );
  

  return resp;
}*/

const writeResponseMessage = (resp: ServerResponse) => ({
  content,
  statusCode,
}: HttpServerResponseLike) => {
  resp.statusCode = statusCode;

  if (content !== undefined) {
    writeResponseContentHeaders(resp, content);
  }
};

const writeResponseContentBody = (resp: ServerResponse) => ({
  content,
}: HttpServerResponseLike) =>
  createObservable(subscriber => {
    const contentReadableEnumerator = (
      content || emptyReadableAsyncEnumerable
    ).enumerateAsync(subscriber);
    const responseWritableEnumerator = createWritableAsyncEnumerator(
      resp,
      subscriber,
    );

    subscriber.add(contentReadableEnumerator).add(responseWritableEnumerator);
    responseWritableEnumerator.add(subscriber);

    contentReadableEnumerator.subscribe(responseWritableEnumerator);
    responseWritableEnumerator.subscribe(contentReadableEnumerator);
  });

/** @ignore */
export const createServer = (
  requestHandler: (
    req: HttpServerRequestLike,
  ) => ObservableLike<HttpServerResponseLike>,
  options: {
    port: number;
    scheduler: SchedulerLike;
  } & any,
): OperatorLike<void, ObservableLike<void>> => {
  let close: ObservableLike<void> | undefined = undefined;
  const { port, scheduler, ...nodeOptions } = options;

  return () => {
    if (close === undefined) {
      const disposable = createDisposable().add(() => server.close());

      const handler = (req: IncomingMessage, resp: ServerResponse) => {
        const serverRequest = new HttpServerRequestImpl(req);

        const responseSubscription = pipe(
          serverRequest,
          decodeServerRequest,
          requestHandler,
          //map(encodeServerResponse(serverRequest)),
          onNotify(writeResponseMessage(resp)),
          map(writeResponseContentBody(resp)),
          switchAll(),
          subscribe(scheduler),
        ).add(serverRequest);

        disposable.add(responseSubscription);
      };

      const server = createHttpServer(nodeOptions, handler).listen(port);

      close = createObservable(subscriber => {
        if (disposable.isDisposed) {
          subscriber.dispatch();
          subscriber.dispose();
        } else {
          server.once("close", () => {
            close = undefined;
            subscriber.dispatch();
            subscriber.dispose();
          });
          disposable.dispose();
        }
      });
    }

    return close;
  };
};
