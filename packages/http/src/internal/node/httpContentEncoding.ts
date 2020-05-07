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
import { HttpContentEncoding } from "../../http";
import {
  createDisposableNodeStream,
  transform,
} from "@reactive-js/core/lib/node";
import { FlowableOperator } from "@reactive-js/core/lib/flowable";

export const createContentEncodingDecompressTransforms = (
  options: BrotliOptions | ZlibOptions = {},
): { [key: string]: FlowableOperator<Uint8Array, Uint8Array> } => {
  const brotli = transform(() =>
    createDisposableNodeStream(createBrotliDecompress(options)),
  );

  const gzip = transform(() =>
    createDisposableNodeStream(createGunzip(options)),
  );

  const deflate = transform(() =>
    createDisposableNodeStream(createInflate(options)),
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
  const brotli = transform(() =>
    createDisposableNodeStream(createBrotliCompress(options)),
  );

  const gzip = transform(() => createDisposableNodeStream(createGzip(options)));

  const deflate = transform(() =>
    createDisposableNodeStream(createDeflate(options)),
  );

  return {
    [HttpContentEncoding.Brotli]: brotli,
    [HttpContentEncoding.Deflate]: deflate,
    [HttpContentEncoding.GZip]: gzip,
  };
};
