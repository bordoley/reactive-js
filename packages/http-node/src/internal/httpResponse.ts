import { BrotliOptions, ZlibOptions } from "zlib";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import {
  HttpRequestLike,
  HttpResponseLike,
} from "@reactive-js/http";
import {
  ReadableMode,
  ReadableEvent,
} from "@reactive-js/node";
import { OperatorLike } from "@reactive-js/pipe";
import {
  contentIsCompressible,
  encodeHttpContent,
  decodeHttpContent,
} from "./httpContent";
import { getFirstSupportedEncoding } from "./httpContentEncoding";

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

export const decodeDisposableHttpResponse = (
  options: BrotliOptions | ZlibOptions,
): OperatorLike<
  HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  HttpResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
> => response => {
  const { content } = response;

  return {
    ...response,
    content: content !== undefined ? decodeHttpContent(content, options) : undefined,
  }
};
