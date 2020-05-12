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
import { FlowableOperator } from "@reactive-js/core/lib/flowable";
import { defer } from "@reactive-js/core/lib/functions";
import {
  createDisposableNodeStream,
  transform,
} from "@reactive-js/core/lib/node";
import { HttpContentEncoding } from "../../http";

export const createContentEncodingDecompressTransforms = (
  options: BrotliOptions | ZlibOptions = {},
): { [key: string]: FlowableOperator<Uint8Array, Uint8Array> } => {
  const brotli = transform(
    defer(options, createBrotliDecompress, createDisposableNodeStream),
  );

  const gzip = transform(
    defer(options, createGunzip, createDisposableNodeStream),
  );

  const deflate = transform(
    defer(options, createInflate, createDisposableNodeStream),
  );

  return {
    [HttpContentEncoding.Brotli]: brotli,
    [HttpContentEncoding.Deflate]: deflate,
    [HttpContentEncoding.GZip]: gzip,
  };
};

export const createContentEncodingCompressTransforms = (
  options: BrotliOptions | ZlibOptions = {},
): { [key: string]: FlowableOperator<Uint8Array, Uint8Array> } => {
  const brotli = transform(
    defer(options, createBrotliCompress, createDisposableNodeStream),
  );

  const gzip = transform(
    defer(options, createGzip, createDisposableNodeStream),
  );

  const deflate = transform(
    defer(options, createDeflate, createDisposableNodeStream),
  );

  return {
    [HttpContentEncoding.Brotli]: brotli,
    [HttpContentEncoding.Deflate]: deflate,
    [HttpContentEncoding.GZip]: gzip,
  };
};
