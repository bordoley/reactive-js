import { BrotliOptions, ZlibOptions } from "zlib";
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
  ["br"]: brotliDecompress(options),
  ["deflate"]: deflate(options),
  ["gzip"]: gunzip(options),
});

export const createContentEncodingCompressTransforms = (
  options: BrotliOptions | ZlibOptions = {},
): ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>> => ({
  ["br"]: brotliCompress(options),
  ["deflate"]: inflate(options),
  ["gzip"]: gzip(options),
});
