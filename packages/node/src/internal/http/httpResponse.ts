import db from "mime-db";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  httpResponseIsCompressible,
  HttpRequest,
  HttpResponse,
} from "@reactive-js/core/dist/js/http";
import { isSome, none } from "@reactive-js/core/dist/js/option";
import {
  getFirstSupportedEncoding,
  createContentEncodingCompressTransform,
} from "./httpContentEncoding";

export const createHttpClientResponseContentEncoderProvider = (
  options: BrotliOptions | ZlibOptions = {},
) => {
  const getEncoder = createContentEncodingCompressTransform(options);

  return (request: HttpRequest<unknown>) => (
    response: HttpResponse<unknown>,
  ) => {
    const { preferences } = request;
    const shouldEncode = httpResponseIsCompressible(response, db);
    const acceptedEncodings =
      shouldEncode && isSome(preferences) ? preferences.acceptedEncodings : [];

    const contentEncoding = getFirstSupportedEncoding(acceptedEncodings);
    return isSome(contentEncoding) ? getEncoder(contentEncoding) : none;
  };
};
