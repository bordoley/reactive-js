import db from "mime-db";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  HttpStandardHeader,
  httpResponseIsCompressible,
  HttpRequest,
  HttpResponse,
  MediaType,
} from "@reactive-js/core/dist/js/http";
import { BufferFlowableLike, transform } from "../../streams";
import { isSome, none, Option } from "@reactive-js/core/dist/js/option";
import { Operator, pipe } from "@reactive-js/core/dist/js/pipe";
import {
  getFirstSupportedEncoding,
  createEncodingCompressTransform,
} from "./httpContentEncoding";
import { decodeHttpMessage, encodeCharsetHttpMessage } from "./httpMessage";

export const decodeHttpResponse = (
  options: BrotliOptions | ZlibOptions,
): Operator<
  HttpResponse<BufferFlowableLike>,
  HttpResponse<BufferFlowableLike>
> => response => decodeHttpMessage(response, options);

export type EncodeHttpResponseOptions = {
  readonly shouldEncode?: <T, TResp>(
    req: HttpRequest<T>,
    resp: HttpResponse<TResp>,
  ) => Option<boolean>;
};

export const encodeHttpResponse = <TReq>(
  request: HttpRequest<TReq>,
  options: EncodeHttpResponseOptions & (BrotliOptions | ZlibOptions) = {},
): Operator<
  HttpResponse<BufferFlowableLike>,
  HttpResponse<BufferFlowableLike>
> => response => {
  const { shouldEncode: shouldEncodeOption, ...zlibOptions } = options;

  const shouldEncodeOptionResult = isSome(shouldEncodeOption)
    ? shouldEncodeOption(request, response)
    : none;

  const shouldEncode = isSome(shouldEncodeOptionResult)
    ? shouldEncodeOptionResult
    : httpResponseIsCompressible(response, db);

  const { preferences } = request;
  const acceptedEncodings =
    isSome(preferences) && shouldEncode ? preferences.acceptedEncodings : [];

  const { body, contentInfo, vary } = response;

  const encoding = getFirstSupportedEncoding(acceptedEncodings ?? []);

  return isSome(encoding) &&
    isSome(contentInfo) &&
    contentInfo.contentEncodings.length === 0
    ? {
        ...response,
        body: pipe(
          body,
          transform(createEncodingCompressTransform(encoding, zlibOptions)),
        ),
        contentInfo: {
          ...contentInfo,
          contentEncodings: [encoding],
          contentLength: -1,
        },
        vary: [...vary, HttpStandardHeader.AcceptEncoding],
      }
    : response;
};

export const encodeCharsetHttpResponse = (
  contentType: string | MediaType,
): Operator<HttpResponse<string>, HttpResponse<BufferFlowableLike>> => {
  const messageEncoder = encodeCharsetHttpMessage(contentType);
  return resp => messageEncoder(resp) as HttpResponse<BufferFlowableLike>;
};
