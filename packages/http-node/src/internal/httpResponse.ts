import db from "mime-db";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  HttpContentResponse,
  HttpContentRequest,
  HttpStandardHeader,
  httpContentResponseIsCompressible,
} from "@reactive-js/http";
import { BufferStreamLike } from "@reactive-js/node";
import { isSome, none, Option } from "@reactive-js/option";
import { Operator } from "@reactive-js/pipe";
import { encodeHttpContent, decodeHttpContent } from "./httpContent";
import { getFirstSupportedEncoding } from "./httpContentEncoding";

export type EncodeHttpResponseOptions = {
  readonly shouldEncode?: <T, TResp>(
    req: HttpContentRequest<T>,
    resp: HttpContentResponse<TResp>,
  ) => Option<boolean>;
};

export const encodeHttpResponse = <TReq>(
  request: HttpContentRequest<TReq>,
  options: EncodeHttpResponseOptions & (BrotliOptions | ZlibOptions) = {},
): Operator<
  HttpContentResponse<BufferStreamLike>,
  HttpContentResponse<BufferStreamLike>
> => response => {
  const { shouldEncode: shouldEncodeOption, ...zlibOptions } = options;

  const shouldEncodeOptionResult = isSome(shouldEncodeOption)
    ? shouldEncodeOption(request, response)
    : none;

  const shouldEncode = isSome(shouldEncodeOptionResult)
    ? shouldEncodeOptionResult
    : httpContentResponseIsCompressible(response, db);

  const { preferences } = request;
  const acceptedEncodings =
    isSome(preferences) && shouldEncode ? preferences.acceptedEncodings : [];

  const { content, vary } = response;

  const encoding = getFirstSupportedEncoding(acceptedEncodings ?? []);

  const encodeBody = isSome(encoding) && isSome(content);

  return {
    ...response,
    content:
      isSome(encoding) && isSome(content)
        ? encodeHttpContent(content, encoding, zlibOptions)
        : content,
    vary: encodeBody ? [...vary, HttpStandardHeader.AcceptEncoding] : vary,
  };
};

export const decodeHttpContentResponse = (
  options: BrotliOptions | ZlibOptions,
): Operator<
  HttpContentResponse<BufferStreamLike>,
  HttpContentResponse<BufferStreamLike>
> => response => {
  const { content } = response;

  return {
    ...response,
    content: isSome(content) ? decodeHttpContent(content, options) : none,
  };
};
