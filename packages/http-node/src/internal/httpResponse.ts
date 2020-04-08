import { IncomingMessage } from "http";
import fresh from "fresh";
import { URL } from "url";
import { BrotliOptions, ZlibOptions } from "zlib";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
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
  HttpMethod,
  HttpStatusCode,
  createHttpResponse,
  HttpHeadersLike,
  URI,
} from "@reactive-js/http";
import {
  ReadableMode,
  ReadableEvent,
  createReadableAsyncEnumerable,
} from "@reactive-js/node";
import { OperatorLike } from "@reactive-js/pipe";
import {
  contentIsCompressible,
  createHttpContentFromHeaders,
  decodeHttpContent,
  encodeHttpContent,
} from "./httpContent";
import { getFirstSupportedEncoding } from "./httpContentEncoding";
import { createHttpPreferencesFromHeaders } from "./httpPreferences";

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

export const checkIfNotModified = <T>({
  headers: reqHeaders,
  method,
}: HttpRequestLike<unknown>): OperatorLike<
  HttpResponseLike<T>,
  HttpResponseLike<T>
> => response => {
  const {
    expires,
    headers,
    lastModified,
    location,
    preferences,
    statusCode,
    vary,
  } = response;
  const methodSupportsFresh =
    method === HttpMethod.GET || method === HttpMethod.HEAD;
  const statusCodeSupportsFresh = statusCode >= 200 && statusCode < 300;

  return methodSupportsFresh &&
    statusCodeSupportsFresh &&
    fresh(reqHeaders as any, headers as any)
    ? createHttpResponse(HttpStatusCode.NotModified, {
        expires,
        headers,
        lastModified,
        location,
        preferences,
        vary,
      })
    : response;
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
  readonly expires: number | undefined;
  readonly headers: HttpHeadersLike;
  readonly lastModified: number | undefined;
  readonly location: URI | undefined;
  readonly preferences: HttpPreferencesLike | undefined;
  readonly statusCode: HttpStatusCode;
  readonly vary: readonly string[];

  constructor(private readonly msg: IncomingMessage) {
    this.disposable = createDisposable(() => msg.destroy());
    this.content = createHttpContentFromHeaders(
      msg.headers as HttpHeadersLike,
      createReadableAsyncEnumerable(() => msg),
    );
    this.preferences = createHttpPreferencesFromHeaders(
      msg.headers as HttpHeadersLike,
    );

    const expiresDateValue = msg.headers["expires"] || "";
    const expiresDate = new Date(expiresDateValue);
    const expiresTims = expiresDate.getTime();
    this.expires =
      expiresDateValue !== "" && !Number.isNaN(expiresTims)
        ? expiresTims
        : undefined;

    this.headers = msg.headers as HttpHeadersLike;

    const lastModifiedValue = msg.headers["last-modified"] || "";
    const lastModifiedDate = new Date(lastModifiedValue);
    const lastModifiedTime = lastModifiedDate.getTime();
    this.lastModified =
      lastModifiedValue !== "" && !Number.isNaN(lastModifiedTime)
        ? lastModifiedTime
        : undefined;

    try {
      this.location = new URL(this.msg.headers.location || "");
    } catch (_) {
      this.location = undefined;
    }

    this.statusCode = msg.statusCode || -1;

    // We're not going to use this so just return empty string.
    this.vary = [];
  }

  get isDisposed() {
    return this.disposable.isDisposed;
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
  readonly expires: number | undefined;
  readonly headers: HttpHeadersLike;
  readonly lastModified: number | undefined;
  readonly location: URI | undefined;
  readonly preferences: HttpPreferencesLike | undefined;
  readonly statusCode: HttpStatusCode;
  readonly vary: readonly string[];

  constructor(
    readonly disposable: DisposableLike &
      HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
    options: BrotliOptions | ZlibOptions,
  ) {
    const { content } = disposable;
    this.content =
      content !== undefined ? decodeHttpContent(content, options) : undefined;

    this.expires = disposable.expires;
    this.headers = disposable.headers;
    this.lastModified = disposable.lastModified;
    this.location = disposable.location;
    this.preferences = disposable.preferences;
    this.statusCode = disposable.statusCode;
    this.vary = disposable.vary;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
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
