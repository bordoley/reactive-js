import db from "mime-db";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  HttpStandardHeader,
  httpResponseIsCompressible,
  HttpRequest,
  HttpResponse,
} from "@reactive-js/http";
import { BufferStreamLike, transform } from "@reactive-js/node";
import { isSome, none, Option } from "@reactive-js/option";
import { Operator, pipe } from "@reactive-js/pipe";
import {
  getFirstSupportedEncoding,
  createEncodingCompressTransform,
  createEncodingDecompressTransform,
} from "./httpContentEncoding";

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
  HttpResponse<BufferStreamLike>,
  HttpResponse<BufferStreamLike>
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

export const decodeHttpResponse = (
  options: BrotliOptions | ZlibOptions,
): Operator<
  HttpResponse<BufferStreamLike>,
  HttpResponse<BufferStreamLike>
> => response => {
  const { body, contentInfo } = response;

  return isSome(contentInfo) && contentInfo.contentEncodings.length > 0
    ? {
        ...response,
        body: contentInfo.contentEncodings
          .map(encoding => createEncodingDecompressTransform(encoding, options))
          .reduceRight((acc, decoder) => pipe(acc, transform(decoder)), body),
        content: {
          ...contentInfo,
          contentEncodings: [],
          contentLength: -1,
        },
      }
    : response;
};
