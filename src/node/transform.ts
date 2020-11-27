import { Transform } from "stream";
import {
  BrotliOptions,
  ZlibOptions,
  createBrotliCompress,
  createBrotliDecompress,
  createDeflate,
  createGunzip,
  createGzip,
  createInflate,
} from "zlib";
import { dispatchTo } from "../dispatcher";
import {
  DisposableValueLike,
  addDisposableDisposeParentOnChildError,
  addOnDisposedWithError,
  createDisposableValue,
} from "../disposable";
import { Factory, defer, identity, ignore, pipe, returns } from "../functions";
import { IOSourceOperator } from "../io";
import { onNotify, subscribe, using } from "../observable";
import { createStreamable, sink, stream } from "../streamable";
import { createReadableIOSource } from "./createReadableIOSource";
import { createWritableIOSink } from "./createWritableIOSink";
import { createDisposableNodeStream } from "./nodeStream";

export const transform = (
  factory: Factory<DisposableValueLike<Transform>>,
): IOSourceOperator<Uint8Array, Uint8Array> => src =>
  createStreamable(modeObs =>
    using(scheduler => {
      const transform = factory();

      const transformSink = createWritableIOSink(
        // don't dispose the transform when the writable is disposed.
        () => {
          const disposable = createDisposableValue<Transform>(
            transform.value,
            ignore,
          );
          addOnDisposedWithError(disposable, transform);
          return disposable;
        },
      );

      const transformReadableStream = pipe(
        createReadableIOSource(returns(transform)),
        stream(scheduler),
      );

      const sinkSubscription = pipe(
        sink(src, transformSink),
        subscribe(scheduler),
      );

      const modeSubscription = pipe(
        modeObs,
        onNotify(dispatchTo(transformReadableStream)),
        subscribe(scheduler),
      );

      addDisposableDisposeParentOnChildError(
        transformReadableStream,
        sinkSubscription,
      );
      addDisposableDisposeParentOnChildError(
        transformReadableStream,
        modeSubscription,
      );

      return transformReadableStream;
    }, identity),
  );

export const brotliDecompress = (
  options: BrotliOptions = {},
): IOSourceOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createBrotliDecompress, createDisposableNodeStream));

export const gunzip = (
  options: ZlibOptions = {},
): IOSourceOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createGunzip, createDisposableNodeStream));

export const inflate = (
  options: ZlibOptions = {},
): IOSourceOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createInflate, createDisposableNodeStream));

export const brotliCompress = (
  options: BrotliOptions = {},
): IOSourceOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createBrotliCompress, createDisposableNodeStream));

export const gzip = (
  options: ZlibOptions = {},
): IOSourceOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createGzip, createDisposableNodeStream));

export const deflate = (
  options: ZlibOptions = {},
): IOSourceOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createDeflate, createDisposableNodeStream));
