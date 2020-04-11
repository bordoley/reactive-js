import { BrotliOptions, ZlibOptions } from "zlib";
import { AsyncEnumerableLike } from "@reactive-js/async-enumerable";
import {
  HttpContentResponseLike,
  HttpContentRequestLike,
} from "@reactive-js/http";
import { ReadableMode, ReadableEvent } from "@reactive-js/node";
import { OperatorLike } from "@reactive-js/pipe";
import {
  contentIsCompressible,
  encodeHttpContent,
  decodeHttpContent,
} from "./httpContent";
import { getFirstSupportedEncoding } from "./httpContentEncoding";
import { HttpStandardHeader } from "@reactive-js/http/src";

const responseIsCompressible = (
  response: HttpContentResponseLike<
    AsyncEnumerableLike<ReadableMode, ReadableEvent>
  >,
): boolean => {
  const { content } = response;
  return content !== undefined ? contentIsCompressible(content) : false;
};

export interface EncodeHttpResponseOptions {
  readonly shouldEncode?: <T, TResp>(
    req: HttpContentRequestLike<T>,
    resp: HttpContentResponseLike<TResp>,
  ) => boolean | undefined;
}

export const encodeHttpResponse = <TReq>(
  request: HttpContentRequestLike<TReq>,
  options: EncodeHttpResponseOptions & (BrotliOptions | ZlibOptions) = {},
): OperatorLike<
  HttpContentResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  HttpContentResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
> => response => {
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
    vary: encodeBody ? [...vary, HttpStandardHeader.AcceptEncoding] : vary,
  };
};

export const decodeHttpContentResponse = (
  options: BrotliOptions | ZlibOptions,
): OperatorLike<
  HttpContentResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>,
  HttpContentResponseLike<AsyncEnumerableLike<ReadableMode, ReadableEvent>>
> => response => {
  const { content } = response;

  return {
    ...response,
    content:
      content !== undefined ? decodeHttpContent(content, options) : undefined,
  };
};
