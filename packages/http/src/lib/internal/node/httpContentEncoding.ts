import {
  ZlibOptions,
  BrotliOptions,
} from "zlib";
import {
  brotliDecompress,
  gunzip,
  inflate,
  brotliCompress,
  gzip,
  deflate,
} from "@reactive-js/core/lib/node";
import { FlowableOperator } from "@reactive-js/core/lib/flowable";
import { HttpContentEncoding } from "../../http";

export const createContentEncodingDecompressTransforms = (
  options: BrotliOptions | ZlibOptions = {},
): { [key: string]: FlowableOperator<Uint8Array, Uint8Array> } => ({
  [HttpContentEncoding.Brotli]: brotliDecompress(options),
  [HttpContentEncoding.Deflate]: deflate(options),
  [HttpContentEncoding.GZip]: gunzip(options),
});

export const createContentEncodingCompressTransforms = (
  options: BrotliOptions | ZlibOptions = {},
): { [key: string]: FlowableOperator<Uint8Array, Uint8Array> } => ({
  [HttpContentEncoding.Brotli]: brotliCompress(options),
  [HttpContentEncoding.Deflate]: inflate(options),
  [HttpContentEncoding.GZip]: gzip(options),
});
