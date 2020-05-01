import db from "mime-db";
import { BrotliOptions, ZlibOptions } from "zlib";
import {
  httpRequestIsCompressible,
  HttpClientRequest,
  HttpContentEncoding,
} from "@reactive-js/core/dist/js/http";
import { Option, isSome, none } from "@reactive-js/core/dist/js/option";
import {
  getFirstSupportedEncoding,
  createContentEncodingCompressTransform,
} from "./httpContentEncoding";
import {
  FlowableOperator,
  FlowableLike,
} from "@reactive-js/core/dist/js/flowable";

export const createHttpClientRequestContentEncoder = (
  options: BrotliOptions | ZlibOptions = {},
) => {
  const getEncoder = createContentEncodingCompressTransform(options);

  return (
    request: HttpClientRequest<FlowableLike<Uint8Array>>,
  ): Option<{
    readonly encoding: HttpContentEncoding;
    readonly encode: FlowableOperator<Uint8Array, Uint8Array>;
  }> => {
    const contentEncoding = getFirstSupportedEncoding(
      request?.acceptedEncodings ?? [],
    );

    return isSome(contentEncoding) && httpRequestIsCompressible(request, db)
      ? getEncoder(contentEncoding)
      : none;
  };
};
