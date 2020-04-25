import { Transform } from "stream";
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
import { Option } from "@reactive-js/core/dist/js/option";
import { DisposableValueLike } from "@reactive-js/core/dist/js/disposable";
import { createDisposableNodeStream } from "../../streams";

/** @ignore */
export const createEncodingCompressTransform = (
  encoding: HttpContentEncoding,
  options: BrotliOptions | ZlibOptions,
) => (): DisposableValueLike<Transform> => {
  switch (encoding) {
    case HttpContentEncoding.Brotli:
      return createDisposableNodeStream(createBrotliCompress(options));
    case HttpContentEncoding.Deflate:
      return createDisposableNodeStream(createDeflate(options));
    case HttpContentEncoding.GZip:
      return createDisposableNodeStream(createGzip(options));
    case HttpContentEncoding.Compress:
    case HttpContentEncoding.Identity:
      throw new Error("unsupported encoding");
  }
};

/** @ignore */
export const createEncodingDecompressTransform = (
  encoding: HttpContentEncoding,
  options: BrotliOptions | ZlibOptions,
) => (): DisposableValueLike<Transform> => {
  switch (encoding) {
    case HttpContentEncoding.Brotli:
      return createDisposableNodeStream(createBrotliDecompress(options));
    case HttpContentEncoding.Deflate:
      return createDisposableNodeStream(createInflate(options));
    case HttpContentEncoding.GZip:
      return createDisposableNodeStream(createGunzip(options));
    case HttpContentEncoding.Compress:
    case HttpContentEncoding.Identity:
      throw new Error("unsupported encoding");
  }
};

/** @ignore */
export const supportedEncodings = [
  HttpContentEncoding.GZip,
  HttpContentEncoding.Deflate,
  HttpContentEncoding.Brotli,
];

/** @ignore */
export const getFirstSupportedEncoding = (
  acceptedEncodings: readonly HttpContentEncoding[],
): Option<HttpContentEncoding> =>
  acceptedEncodings.find(encoding => supportedEncodings.includes(encoding));
