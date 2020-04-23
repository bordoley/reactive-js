import { ServerResponse, IncomingMessage } from "http";
import { Http2ServerRequest, Http2ServerResponse } from "http2";
import {
  StreamMode,
  StreamEvent,
  sink,
  AsyncEnumeratorLike,
} from "@reactive-js/async-enumerable";
import {
  writeHttpResponseHeaders,
  HttpMethod,
  HttpHeaders,
  parseHttpRequestFromHeaders,
  HttpResponse,
  HttpServerRequest,
} from "@reactive-js/http";
import { HttpServer } from "@reactive-js/http-common";
import {
  createBufferStreamFromReadable,
  BufferStreamLike,
  createBufferStreamSinkFromWritable,
  BufferStreamSinkLike,
  createDisposableStream,
} from "@reactive-js/node";
import {
  ObservableLike,
  await_,
  catchError,
  onNotify,
  subscribe,
  empty,
  compute,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AbstractDisposable } from "@reactive-js/disposable";
import { isSome } from "@reactive-js/option";

class RequestBody extends AbstractDisposable implements BufferStreamLike {
  private consumed = false;

  constructor(readonly req: IncomingMessage) {
    super();

    this.add(_ => {
      req.removeAllListeners();

      // Calling destory can result in onError being called
      // if we don't catch the error, it crashes the process.
      // This kind of sucks, but its the best we can do;
      req.once("error", () => {});
      req.once("close", () => {
        req.removeAllListeners();
      });
      req.destroy();
    });

    const onError = (cause: any) => {
      this.dispose({ cause });
    };
    req.on("error", onError);
  }

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<StreamMode, StreamEvent<Buffer>> {
    if (this.consumed) {
      throw new Error("Request body already consumed");
    }
    this.consumed = true;
    const sink = createBufferStreamFromReadable(() =>
      createDisposableStream(this.req),
    )
      .enumerateAsync(scheduler, replayCount)
      .add(this);
    this.add(sink);
    return sink;
  }
}

class ResponseBody extends AbstractDisposable implements BufferStreamSinkLike {
  private consumed = false;

  constructor(readonly resp: ServerResponse) {
    super();

    this.add(_ => {
      resp.removeAllListeners();

      // Calling destory can result in onError being called
      // if we don't catch the error, it crashes the process.
      // This kind of sucks, but its the best we can do;
      resp.once("error", () => {});
      resp.once("close", () => {
        resp.removeAllListeners();
      });
      resp.destroy();
    });

    const onError = (cause: any) => {
      this.dispose({ cause });
    };
    resp.on("error", onError);
  }

  enumerateAsync(
    scheduler: SchedulerLike,
    replayCount?: number,
  ): AsyncEnumeratorLike<StreamEvent<Buffer>, StreamMode> {
    if (this.consumed) {
      throw new Error("Response body already consumed");
    }
    this.consumed = true;
    const sink = createBufferStreamSinkFromWritable(
      () => createDisposableStream(this.resp),
      true,
    )
      .enumerateAsync(scheduler, replayCount)
      .add(this);
    this.add(sink);
    return sink;
  }
}

const writeResponseMessage = (responseBody: ResponseBody) => (
  response: HttpResponse<BufferStreamLike>,
) => {
  responseBody.resp.statusCode = response.statusCode;

  writeHttpResponseHeaders(response, (header, value) =>
    responseBody.resp.setHeader(header, value),
  );
};

const writeResponseBody = (responseBody: BufferStreamSinkLike) => ({
  body,
  contentInfo,
}: HttpResponse<BufferStreamLike>) =>
  isSome(contentInfo) ? sink(body, responseBody) : empty();

const defaultOnError = (_: unknown): ObservableLike<void> => empty();

export type HttpRequestListenerOptions = {
  readonly onError?: (e: unknown) => ObservableLike<unknown>;
};

export type HttpRequestListener = (
  req: IncomingMessage | Http2ServerRequest,
  resp: ServerResponse | Http2ServerResponse,
) => void;

export const createHttpRequestListener = (
  handler: HttpServer<
    HttpServerRequest<BufferStreamLike>,
    HttpResponse<BufferStreamLike>
  >,
  scheduler: SchedulerLike,
  options: HttpRequestListenerOptions = {},
): HttpRequestListener => {
  const { onError = defaultOnError } = options;

  const handleRequest = (
    requestBody: RequestBody,
    responseBody: ResponseBody,
  ) => {
    const {
      method,
      url: path = "/",
      headers,
      httpVersionMajor,
      httpVersionMinor,
    } = requestBody.req;
    const isTransportSecure =
      (requestBody.req.socket as any).encrypted ?? false;

    return pipe(
      () =>
        parseHttpRequestFromHeaders({
          method: method as HttpMethod,
          path,
          headers: headers as HttpHeaders,
          httpVersionMajor,
          httpVersionMinor,
          isTransportSecure,
          body: requestBody,
        }),
      compute,
      await_(handler),
      onNotify(writeResponseMessage(responseBody)),
      await_(writeResponseBody(responseBody)),
      catchError(onError),
    );
  };

  return (req, resp) => {
    const requestBody = new RequestBody(req as IncomingMessage);
    const responseBody = new ResponseBody(resp as ServerResponse);

    responseBody.add(
      pipe(handleRequest(requestBody, responseBody), subscribe(scheduler)).add(
        requestBody,
      ),
    );
  };
};
