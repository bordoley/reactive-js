import { ZlibOptions, BrotliOptions } from "zlib";
import { IOSourceOperator } from "@reactive-js/core/lib/io";
import {
  brotliDecompress,
  gunzip,
  inflate,
  brotliCompress,
  gzip,
  deflate,
} from "@reactive-js/core/lib/node";
import { HttpContentEncoding } from "../../http";

export const createContentEncodingDecompressTransforms = (
  options: BrotliOptions | ZlibOptions = {},
): { [key: string]: IOSourceOperator<Uint8Array, Uint8Array> } => ({
  [HttpContentEncoding.Brotli]: brotliDecompress(options),
  [HttpContentEncoding.Deflate]: deflate(options),
  [HttpContentEncoding.GZip]: gunzip(options),
});

export const createContentEncodingCompressTransforms = (
  options: BrotliOptions | ZlibOptions = {},
): { [key: string]: IOSourceOperator<Uint8Array, Uint8Array> } => ({
  [HttpContentEncoding.Brotli]: brotliCompress(options),
  [HttpContentEncoding.Deflate]: inflate(options),
  [HttpContentEncoding.GZip]: gzip(options),
});
