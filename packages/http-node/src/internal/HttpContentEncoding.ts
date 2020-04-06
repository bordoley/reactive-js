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

/** @ignore */
export const createEncodingCompressTransform = (
  encoding: HttpContentEncoding,
  options: BrotliOptions | ZlibOptions,
) => (): Transform => {
  switch (encoding) {
    case HttpContentEncoding.Brotli:
      return createBrotliCompress(options);
    case HttpContentEncoding.Deflate:
      return createDeflate(options);
    case HttpContentEncoding.GZip:
      return createGzip(options);
    case HttpContentEncoding.Compress:
    case HttpContentEncoding.Identity:
      throw new Error("unsupported encoding");
  }
};

/** @ignore */
export const createEncodingDecompressTransform = (
  encoding: HttpContentEncoding,
  options: BrotliOptions | ZlibOptions,
) => (): Transform => {
  switch (encoding) {
    case HttpContentEncoding.Brotli:
      return createBrotliDecompress(options);
    case HttpContentEncoding.Deflate:
      return createInflate(options);
    case HttpContentEncoding.GZip:
      return createGunzip(options);
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
): HttpContentEncoding | undefined =>
  acceptedEncodings.find(encoding => supportedEncodings.includes(encoding));
