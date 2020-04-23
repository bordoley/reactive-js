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
import { HttpContentEncoding } from "@reactive-js/http";
import { Option } from "@reactive-js/option";
import { DisposableValueLike } from "@reactive-js/disposable";
import { createDisposableStream } from "@reactive-js/node";

/** @ignore */
export const createEncodingCompressTransform = (
  encoding: HttpContentEncoding,
  options: BrotliOptions | ZlibOptions,
) => (): DisposableValueLike<Transform> => {
  switch (encoding) {
    case HttpContentEncoding.Brotli:
      return createDisposableStream(createBrotliCompress(options));
    case HttpContentEncoding.Deflate:
      return createDisposableStream(createDeflate(options));
    case HttpContentEncoding.GZip:
      return createDisposableStream(createGzip(options));
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
      return createDisposableStream(createBrotliDecompress(options));
    case HttpContentEncoding.Deflate:
      return createDisposableStream(createInflate(options));
    case HttpContentEncoding.GZip:
      return createDisposableStream(createGunzip(options));
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
