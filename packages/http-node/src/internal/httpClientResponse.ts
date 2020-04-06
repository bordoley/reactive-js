import { IncomingMessage } from "http";
import { URL } from "url";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  DisposableLike,
  add,
  dispose,
  createDisposable,
} from "@reactive-js/disposable";
import { HttpResponseLike, HttpContentEncoding } from "@reactive-js/http";
import {
  HttpContentBodyLike,
  createIncomingMessageContentBody,
  decodeContentBody,
} from "./httpContentBody";

export interface HttpClientResponseLike
  extends HttpResponseLike<HttpContentBodyLike>,
    DisposableLike {}

/** @ignore */
export class HttpClientResponseImpl implements HttpClientResponseLike {
  readonly add = add;
  readonly content: HttpContentBodyLike | undefined;
  readonly disposable: DisposableLike;
  readonly dispose = dispose;

  constructor(private readonly msg: IncomingMessage) {
    const disposable = createDisposable(() => msg.destroy());
    const content = createIncomingMessageContentBody(msg);

    this.disposable = disposable;
    this.content = content.contentLength !== 0 ? content : undefined;
  }

  get acceptedEncodings(): readonly HttpContentEncoding[] {
    return [];
  }

  get headers() {
    return this.msg.headers;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get location() {
    try {
      return new URL(this.msg.headers.location || "");
    } catch (_) {
      return undefined;
    }
  }

  get statusCode(): number {
    return this.msg.statusCode || -1;
  }

  get vary(): readonly string[] {
    // We're not going to use this so just return empty string.
    return [];
  }
}

/** @ignore */
export class HttpContentDecodingClientResponse
  implements HttpClientResponseLike {
  readonly add = add;
  readonly content: HttpContentBodyLike | undefined;
  readonly dispose = dispose;

  constructor(
    readonly disposable: HttpClientResponseLike,
    options: BrotliOptions | ZlibOptions,
  ) {
    const { content } = disposable;
    this.content =
      content !== undefined ? decodeContentBody(content, options) : undefined;
  }

  get acceptedEncodings() {
    return this.disposable.acceptedEncodings;
  }

  get headers() {
    return this.disposable.headers;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get location() {
    return this.disposable.location;
  }

  get statusCode(): number {
    return this.disposable.statusCode;
  }

  get vary(): readonly string[] {
    return this.disposable.vary;
  }
}
