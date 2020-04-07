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
  HttpContentLike,
  HttpPreferencesLike,
} from "@reactive-js/http";
import { OperatorLike } from "@reactive-js/pipe";
import {
  contentIsCompressible,
  createIncomingMessageHttpContent,
  decodeHttpContent,
  encodeHttpContent,
} from "./httpContent";
import { getFirstSupportedEncoding } from "./httpContentEncoding";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import { ReadableMode, ReadableEvent } from "@reactive-js/node";
import { createIncomingMessageHttpPreferencesLike } from "./httpPreferences";

const responseIsCompressible = (
  response: HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
): boolean => {
  const { content } = response;
  return content !== undefined ? contentIsCompressible(content) : false;
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

  const { preferences } = request;
  const acceptedEncodings =
    preferences !== undefined && shouldEncode
      ? preferences.acceptedEncodings
      : [];

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
  readonly preferences: HttpPreferencesLike | undefined;

  constructor(private readonly msg: IncomingMessage) {
    this.disposable = createDisposable(() => msg.destroy());
    this.content = createIncomingMessageHttpContent(msg);
    this.preferences = createIncomingMessageHttpPreferencesLike(msg);
  }

  get headers() {
    return this.msg.headers;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get lastModified() {
    const date = this.headers["last-modified"];
    return date !== undefined
      // FIXME: Maybe return UTC milliseconds?
      ? new Date(date).getTime()
      : undefined;
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
export const createIncomingMessageDisposableHttpResponse = (
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

  get headers() {
    return this.disposable.headers;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  get location() {
    return this.disposable.location;
  }

  get preferences() {
    return this.disposable.preferences;
  }

  get statusCode(): number {
    return this.disposable.statusCode;
  }

  get vary(): readonly string[] {
    return this.disposable.vary;
  }
}

/** @ignore */
export const decodeDisposableHttpResponse = (
  options: BrotliOptions | ZlibOptions,
) => (
  response: DisposableLike &
    HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
): DisposableLike &
  HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>> => {
  return new HttpContentBodyDecodingResponseImpl(response, options);
};
