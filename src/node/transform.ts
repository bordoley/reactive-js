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
  add,
  addTo,
  createDisposableValue,
  dispose,
  onError,
} from "../disposable";
import { Factory, defer, ignore, pipe, returns } from "../functions";
import { createObservable, onNotify, subscribe } from "../observable";
import { sinkInto } from "../source";

import {
  FlowMode,
  StreamableOperator,
  createLiftedStreamable,
  sinkInto as sinkIntoTransformSink,
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
    createLiftedStreamable(modeObs =>
      createObservable(observer => {
        const transform = factory();

        const transformSink = createWritableIOSink(() =>
          pipe(
            createDisposableValue<Transform>(transform.value, ignore),
            // only dispose the transform when the writable is disposed.
            onError(e => pipe(transform, dispose(e))),
          ),
        );

        const transformReadableStream = pipe(
          createReadableIOSource(returns(transform)),
          stream(observer.scheduler),
          addTo(observer),
        );

        const sinkSubscription = pipe(
          src,
          sinkIntoTransformSink(transformSink),
          subscribe(observer.scheduler),
          addTo(observer),
        );

        const modeSubscription = pipe(
          modeObs,
          onNotify(dispatchTo(transformReadableStream)),
          subscribe(observer.scheduler),
          addTo(observer),
        );

        pipe(
          transformReadableStream,
          add(sinkSubscription),
          add(modeSubscription),
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
