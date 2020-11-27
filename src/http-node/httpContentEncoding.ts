import { BrotliOptions, ZlibOptions } from "zlib";
import { HttpContentEncoding } from "../http";
import { IOSourceOperator } from "../io";
import {
  brotliCompress,
  brotliDecompress,
  deflate,
  gunzip,
  gzip,
  inflate,
} from "../node";
import { ReadonlyObjectMap } from "../readonlyObjectMap";

export const createContentEncodingDecompressTransforms = (
  options: BrotliOptions | ZlibOptions = {},
): ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>> => ({
  [HttpContentEncoding.Brotli]: brotliDecompress(options),
  [HttpContentEncoding.Deflate]: deflate(options),
  [HttpContentEncoding.GZip]: gunzip(options),
});

export const createContentEncodingCompressTransforms = (
  options: BrotliOptions | ZlibOptions = {},
): ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>> => ({
  [HttpContentEncoding.Brotli]: brotliCompress(options),
  [HttpContentEncoding.Deflate]: inflate(options),
  [HttpContentEncoding.GZip]: gzip(options),
});
