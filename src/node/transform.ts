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
import {
  DisposableValueLike,
  addChildAndDisposeOnError,
  addOnDisposedWithError,
  addToParentAndDisposeOnError,
  createDisposableValue,
} from "../disposable";
import { Factory, defer, ignore, pipe, returns } from "../functions";
import { createObservable, subscribe } from "../observable";
import { sinkInto } from "../source";

import {
  FlowMode,
  StreamableOperator,
  createStreamable,
  sink,
  stream,
} from "../streamable";
import { createReadableIOSource } from "./createReadableIOSource";
import { createWritableIOSink } from "./createWritableIOSink";
import { createDisposableNodeStream } from "./nodeStream";

export const transform =
  (
    factory: Factory<DisposableValueLike<Transform>>,
  ): StreamableOperator<FlowMode, Uint8Array, FlowMode, Uint8Array> =>
  src =>
    createStreamable(modeObs =>
      createObservable(observer => {
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
          stream(observer.scheduler),
          addToParentAndDisposeOnError(observer),
        );

        const sinkSubscription = pipe(
          sink(src, transformSink),
          subscribe(observer.scheduler),
          addToParentAndDisposeOnError(observer),
        );

        const modeSubscription = pipe(
          modeObs,
          subscribe(
            observer.scheduler,
            transformReadableStream.dispatch,
            transformReadableStream,
          ),
          addToParentAndDisposeOnError(observer),
        );

        pipe(
          transformReadableStream,
          addChildAndDisposeOnError(sinkSubscription),
          addChildAndDisposeOnError(modeSubscription),
          sinkInto(observer),
        );
      }),
    );

export const brotliDecompress = (
  options: BrotliOptions = {},
): StreamableOperator<FlowMode, Uint8Array, FlowMode, Uint8Array> =>
  transform(defer(options, createBrotliDecompress, createDisposableNodeStream));

export const gunzip = (
  options: ZlibOptions = {},
): StreamableOperator<FlowMode, Uint8Array, FlowMode, Uint8Array> =>
  transform(defer(options, createGunzip, createDisposableNodeStream));

export const inflate = (
  options: ZlibOptions = {},
): StreamableOperator<FlowMode, Uint8Array, FlowMode, Uint8Array> =>
  transform(defer(options, createInflate, createDisposableNodeStream));

export const brotliCompress = (
  options: BrotliOptions = {},
): StreamableOperator<FlowMode, Uint8Array, FlowMode, Uint8Array> =>
  transform(defer(options, createBrotliCompress, createDisposableNodeStream));

export const gzip = (
  options: ZlibOptions = {},
): StreamableOperator<FlowMode, Uint8Array, FlowMode, Uint8Array> =>
  transform(defer(options, createGzip, createDisposableNodeStream));

export const deflate = (
  options: ZlibOptions = {},
): StreamableOperator<FlowMode, Uint8Array, FlowMode, Uint8Array> =>
  transform(defer(options, createDeflate, createDisposableNodeStream));
