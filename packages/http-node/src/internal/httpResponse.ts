import compressible from "compressible";
import { IncomingMessage } from "http";
import { URL } from "url";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  DisposableLike,
  add,
  createDisposable,
  dispose,
} from "@reactive-js/disposable";
import {
  HttpRequestLike,
  HttpResponseLike,
  HttpContentEncoding,
  HttpContentLike,
} from "@reactive-js/http";
import { OperatorLike } from "@reactive-js/pipe";
import {
  createIncomingMessageHttpContent,
  decodeHttpContent,
  encodeHttpContent,
} from "./httpContent";
import { getFirstSupportedEncoding } from "./httpContentEncoding";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import { ReadableMode, ReadableEvent } from "@reactive-js/node";

const responseIsCompressible = (resp: HttpResponseLike<unknown>): boolean => {
  const contentType = resp.content?.contentType;
  return (contentType !== undefined && compressible(contentType)) || false;
};

export interface EncodeHttpResponseOptions {
  readonly shouldEncode?: (
    req: HttpRequestLike<unknown>,
    resp: HttpResponseLike<unknown>,
  ) => boolean | undefined;
}

export const encodeHttpResponse = (
  request: HttpRequestLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  options: EncodeHttpResponseOptions & (BrotliOptions | ZlibOptions) = {},
): OperatorLike<
  HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
> => (
  response: HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
) => {
  const { shouldEncode: shouldEncodeOption, ...zlibOptions } = options;
  // FIXME:
  // Don't compress for Cache-Control: no-transform
  // https://tools.ietf.org/html/rfc7234#section-5.2.2.4

  const shouldEncodeOptionResult =
    shouldEncodeOption !== undefined
      ? shouldEncodeOption(request, response)
      : undefined;

  const shouldEncode =
    shouldEncodeOptionResult !== undefined
      ? shouldEncodeOptionResult
      : responseIsCompressible(response);

  const acceptedEncodings = shouldEncode ? request.acceptedEncodings : [];

  const { content, vary } = response;

  const encoding = getFirstSupportedEncoding(acceptedEncodings || []);

  const encodeBody = encoding !== undefined && content !== undefined;

  return {
    ...response,
    content:
      encoding !== undefined && content !== undefined
        ? encodeHttpContent(content, encoding, zlibOptions)
        : content,
    vary: encodeBody ? [...vary, "Accept-Encoding"] : vary,
  };
};

class HttpIncomingMessageResponseImpl
  implements
    DisposableLike,
    HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> {
  readonly add = add;
  readonly content:
    | HttpContentLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
    | undefined;
  readonly disposable: DisposableLike;
  readonly dispose = dispose;

  constructor(private readonly msg: IncomingMessage) {
    const disposable = createDisposable(() => msg.destroy());
    const content = createIncomingMessageHttpContent(msg);

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
export const createIncomingMessageResponse = (
  msg: IncomingMessage,
): DisposableLike &
  HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => {
  return new HttpIncomingMessageResponseImpl(msg);
};

class HttpContentBodyDecodingResponseImpl
  implements
    DisposableLike,
    HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> {
  readonly add = add;
  readonly content:
    | HttpContentLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
    | undefined;
  readonly dispose = dispose;

  constructor(
    readonly disposable: DisposableLike &
      HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
    options: BrotliOptions | ZlibOptions,
  ) {
    const { content } = disposable;
    this.content =
      content !== undefined ? decodeHttpContent(content, options) : undefined;
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

/** @ignore */
export const createHttpContentDecodingResponse = (
  response: DisposableLike &
    HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  options: BrotliOptions | ZlibOptions,
): DisposableLike &
  HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => {
  return new HttpContentBodyDecodingResponseImpl(response, options);
};
