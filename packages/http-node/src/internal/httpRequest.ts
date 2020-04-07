import { IncomingMessage } from "http";
import { URL } from "url";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  DisposableLike,
  add,
  dispose,
  createDisposable,
} from "@reactive-js/disposable";
import {
  HttpRequestLike,
  HttpContentEncoding,
  HttpMethod,
  HttpContentLike,
} from "@reactive-js/http";
import { OperatorLike } from "@reactive-js/pipe";
import {
  decodeHttpContent,
  createIncomingMessageHttpContent,
} from "./httpContent";
import { ReadableMode, ReadableEvent } from "@reactive-js/node";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";

export const decodeHttpRequest = (
  options: BrotliOptions | ZlibOptions = {},
): OperatorLike<
  HttpRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  HttpRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
> => request => {
  const { content } = request;
  return content !== undefined && content.contentEncodings.length > 0
    ? {
        ...request,
        content: decodeHttpContent(content, options),
      }
    : request;
};

class HttpIncomingMessageRequestImpl
  implements
    DisposableLike,
    HttpRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> {
  readonly add = add;
  readonly content:
    | HttpContentLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
    | undefined;
  readonly disposable: DisposableLike;
  readonly dispose = dispose;

  constructor(private readonly msg: IncomingMessage) {
    this.disposable = createDisposable(() => {
      msg.destroy();
    });

    const content = createIncomingMessageHttpContent(msg);
    this.content = content.contentLength !== 0 ? content : undefined;
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

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get method() {
    return (this.msg.method as HttpMethod) || HttpMethod.GET;
  }

  get uri() {
    const msg = this.msg;

    const forwardedProtocol = msg.headers["x-forwarded-proto"];
    const protocol =
      (msg.socket as any).encrypted || false
        ? "https"
        : forwardedProtocol !== undefined && !Array.isArray(forwardedProtocol)
        ? forwardedProtocol.split(/\s*,\s*/, 1)[0]
        : "http";

    const forwardedHost = msg.headers["x-forwarded-host"];
    const http2Authority = msg.headers[":authority"];
    const http1Host = msg.headers["host"];

    const unfilteredHost =
      forwardedHost !== undefined && !Array.isArray(forwardedHost)
        ? forwardedHost
        : http2Authority !== undefined &&
          msg.httpVersionMajor >= 2 &&
          !Array.isArray(http2Authority)
        ? http2Authority
        : http1Host !== undefined && !Array.isArray(http1Host)
        ? http1Host
        : "";

    const host = unfilteredHost.split(/\s*,\s*/, 1)[0];

    return new URL(`${protocol}://${host}${msg.url || ""}`);
  }
}

/** @ignore */
export const createIncomingMessageHttpRequest = (
  msg: IncomingMessage,
): DisposableLike &
  HttpRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => {
  return new HttpIncomingMessageRequestImpl(msg);
};
