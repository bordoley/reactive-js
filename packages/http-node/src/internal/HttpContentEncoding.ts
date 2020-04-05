import { Transform } from "stream";
import {
  createBrotliCompress,
  createDeflate,
  createGzip,
  createBrotliDecompress,
  createInflate,
  createGunzip,
} from "zlib";

export const enum HttpContentEncoding {
  Brotli = "br",
  Compress = "compress",
  Deflate = "deflate",
  GZip = "gzip",
  Identity = "identity",
}

/** @ignore */
export const createEncodingCompressTransform = (
  encoding: HttpContentEncoding,
) => (): Transform => {
  switch (encoding) {
    case HttpContentEncoding.Brotli:
      return createBrotliCompress();
    case HttpContentEncoding.Deflate:
      return createDeflate();
    case HttpContentEncoding.GZip:
      return createGzip();
    case HttpContentEncoding.Compress:
    case HttpContentEncoding.Identity:
      throw new Error("unsupported encoding");
  }
};

/** @ignore */
export const createEncodingDecompressTransform = (
  encoding: HttpContentEncoding,
) => (): Transform => {
  switch (encoding) {
    case HttpContentEncoding.Brotli:
      return createBrotliDecompress();
    case HttpContentEncoding.Deflate:
      return createInflate();
    case HttpContentEncoding.GZip:
      return createGunzip();
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
