import {
  createBrotliCompress,
  createDeflate,
  createGzip,
  createBrotliDecompress,
  createInflate,
  createGunzip,
  ZlibOptions,
  BrotliOptions,
} from "zlib";
import { HttpContentEncoding } from "@reactive-js/core/dist/js/http";
import { Option, none } from "@reactive-js/core/dist/js/option";
import { createDisposableNodeStream, transform } from "../../streams";
import { FlowableOperator } from "@reactive-js/core/dist/js/flowable";

export const createContentEncodingDecompressTransform = (
  options: BrotliOptions | ZlibOptions = {},
) => (
  encoding: HttpContentEncoding,
): Option<FlowableOperator<Uint8Array, Uint8Array>> => {
  switch (encoding) {
    case HttpContentEncoding.Brotli:
      return transform(() =>
        createDisposableNodeStream(createBrotliDecompress(options)),
      );
    case HttpContentEncoding.Deflate:
      return transform(() =>
        createDisposableNodeStream(createInflate(options)),
      );
    case HttpContentEncoding.GZip:
      return transform(() => createDisposableNodeStream(createGunzip(options)));
    case HttpContentEncoding.Compress:
    case HttpContentEncoding.Identity:
      return none;
  }
};

export const supportedEncodings = [
  HttpContentEncoding.GZip,
  HttpContentEncoding.Deflate,
  HttpContentEncoding.Brotli,
];

export const getFirstSupportedEncoding = (
  acceptedEncodings: readonly HttpContentEncoding[],
): Option<HttpContentEncoding> =>
  acceptedEncodings.find(encoding => supportedEncodings.includes(encoding));

export const createContentEncodingCompressTransform = (
  options: BrotliOptions | ZlibOptions,
) => {
  const brotli = {
    encode: transform(() =>
      createDisposableNodeStream(createBrotliCompress(options)),
    ),
    encoding: HttpContentEncoding.Brotli,
  };

  const gzip = {
    encode: transform(() => createDisposableNodeStream(createGzip(options))),
    encoding: HttpContentEncoding.GZip,
  };

  const deflate = {
    encode: transform(() => createDisposableNodeStream(createDeflate(options))),
    encoding: HttpContentEncoding.Deflate,
  };

  return (encoding: HttpContentEncoding) => {
    switch (encoding) {
      case HttpContentEncoding.Brotli:
        return brotli;
      case HttpContentEncoding.GZip:
        return gzip;
      case HttpContentEncoding.Deflate:
        return deflate;
      case HttpContentEncoding.Compress:
      case HttpContentEncoding.Identity:
        return none;
    }
  };
};
