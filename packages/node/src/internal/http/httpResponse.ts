import db from "mime-db";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  HttpStandardHeader,
  httpResponseIsCompressible,
  HttpRequest,
  HttpResponse,
} from "@reactive-js/core/dist/js/http";
import { isSome, none, Option } from "@reactive-js/core/dist/js/option";
import { Operator, pipe } from "@reactive-js/core/dist/js/functions";
import {
  getFirstSupportedEncoding,
  createContentEncodingCompressTransform,
} from "./httpContentEncoding";
import { FlowableLike } from "@reactive-js/core/dist/js/flowable";

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
  HttpResponse<FlowableLike<Uint8Array>>,
  HttpResponse<FlowableLike<Uint8Array>>
> => {
  const getEncoder = createContentEncodingCompressTransform(options);

  return response => {
    const { shouldEncode: shouldEncodeOption } = options;

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
    const encoder = isSome(encoding) ? getEncoder(encoding) : none;

    return isSome(encoding) &&
      isSome(contentInfo) &&
      isSome(encoder) &&
      contentInfo.contentEncodings.length === 0
      ? {
          ...response,
          body: pipe(body, encoder.encode),
          contentInfo: {
            ...contentInfo,
            contentEncodings: [encoding],
            contentLength: -1,
          },
          vary: [...vary, HttpStandardHeader.AcceptEncoding],
        }
      : response;
  };
};
