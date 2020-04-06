import {
  ServerResponse,
  IncomingMessage,
} from "http";
import { URL } from "url";
import {
  HttpRequestLike,
  HttpResponseLike,
  HttpMethod,
  HttpContentEncoding,
  createHttpResponse,
  HttpStatusCode,
  URI,
} from "@reactive-js/http";
import {
  emptyReadableAsyncEnumerable,
  createWritableAsyncEnumerator,
} from "@reactive-js/node";
import {
  ObservableLike,
  createObservable,
  subscribe,
  onNotify,
  ofValue,
  catchError,
  await_,
  compute,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  HttpContentBodyLike,
  createIncomingMessageContentBody,
  createStringContentBody,
} from "./httpContentBody";
import { writeResponseHeaders } from "./httpHeaders";

class HttpServerRequestImpl implements HttpRequestLike<HttpContentBodyLike> {
  readonly content: HttpContentBodyLike | undefined;
  readonly uri: URI;

  constructor(
    private readonly msg: IncomingMessage,
  ) {
    const content = createIncomingMessageContentBody(msg);
    this.content = content.contentLength !== 0 ? content : undefined;
    
    const forwardedProtocol = msg.headers["x-forwarded-proto"];
    const protocol = (msg.socket as any).encrypted || false
      ? 'https'
      : forwardedProtocol !== undefined && !Array.isArray(forwardedProtocol)
      ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
      : "http";

    const forwardedHost = msg.headers["x-forwarded-host"];
    const http2Authority = msg.headers[":authority"];
    const http1Host = msg.headers["host"];

    const unfilteredHost = forwardedHost !== undefined && !Array.isArray(forwardedHost)
      ? forwardedHost
      : http2Authority !== undefined && msg.httpVersionMajor >= 2 && !Array.isArray(http2Authority)
      ? http2Authority
      : http1Host !== undefined && !Array.isArray(http1Host)
      ? http1Host
      : "";
   
    const host = unfilteredHost.split(/\s*,\s*/, 1)[0];

    this.uri = new URL(`${protocol}://${host}${msg.url || "" }`);
  }

  get acceptedEncodings() {
    // FIXME: This parsing is completely not abnf compliant
    // FIXME: Special case Identity
    // FIXME: Add support for determining if content should be encoded.
    const rawAcceptHeader = String(this.headers["accept-encoding"] || "");
    return rawAcceptHeader
      .split(",")
      .map(x => x.trim()) as HttpContentEncoding[];
  }

  get expectContinue(): boolean {
    const rawExpectHeader = String(this.headers.expect || "");
    return rawExpectHeader === "100-continue";
  }

  get headers() {
    return this.msg.headers;
  }

  get method() {
    return (this.msg.method as HttpMethod) || HttpMethod.GET;
  }
}

const writeResponseMessage = (resp: ServerResponse) => (
  response: HttpResponseLike<HttpContentBodyLike>,
) => {
  resp.statusCode = response.statusCode;

  writeResponseHeaders(response, (header, value) =>
    resp.setHeader(header, value),
  );
};

const writeResponseContentBody = (resp: ServerResponse) => ({
  content,
}: HttpResponseLike<HttpContentBodyLike>) =>
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

// FIXME: Don't include content in prod mode
// FIXME: Special case some exceptions like URI parsing exceptions that are due to bad user input
const defaultOnError = (
  e: unknown,
): ObservableLike<HttpResponseLike<HttpContentBodyLike>> =>
  ofValue(
    createHttpResponse(HttpStatusCode.InternalServerError, {
      content: createStringContentBody(
        e instanceof Error ? e.stack || "" : String(e),
        "text/plain",
      ),
    }),
  );

export interface HttpServerOptions {
  readonly onError?: (
    e: unknown,
  ) => ObservableLike<HttpResponseLike<HttpContentBodyLike>>;
  readonly protocol?: "http:" | "https:" | undefined;
}

export const createHttpServer = (
  requestHandler: (
    req: HttpRequestLike<HttpContentBodyLike>,
  ) => ObservableLike<HttpResponseLike<HttpContentBodyLike>>,
  scheduler: SchedulerLike,
  options: HttpServerOptions = {},
): (req: IncomingMessage, resp: ServerResponse) => void => {
  const {
    onError = defaultOnError,
  } = options;

  return (req: IncomingMessage, resp: ServerResponse) => {
    const responseSubscription = pipe(
      compute(() => new HttpServerRequestImpl(req)),
      await_(requestHandler),
      catchError(onError),
      onNotify(writeResponseMessage(resp)),
      await_(writeResponseContentBody(resp)),
      subscribe(scheduler),
    );

    req.on("error", cause => {
      responseSubscription.dispose({cause});
    })
    resp.on("close", () => {
      responseSubscription.dispose();
    })
  };
};
