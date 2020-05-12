import { Transform } from "stream";
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
import {
  DisposableValueLike,
  createDisposableValue,
  disposeOnError,
  add,
} from "../../disposable";
import { FlowableOperator } from "../../flowable";
import { defer, ignore, pipe, returns, Factory } from "../../functions";
import { using, subscribe, onNotify, dispatchTo } from "../../observable";
import { createStreamable, sink, stream } from "../../streamable";
import { createReadableFlowable } from "./createReadableFlowable";
import { createWritableFlowableSink } from "./createWritableFlowableSink";
import { createDisposableNodeStream } from "./nodeStream";

export const transform = (
  factory: Factory<DisposableValueLike<Transform>>,
): FlowableOperator<Uint8Array, Uint8Array> => src =>
  createStreamable(modeObs =>
    using(
      scheduler => {
        const transform = factory();

        const transformSink = createWritableFlowableSink(
          // don't dispose the transform when the writable is disposed.
          () =>
            add(
              createDisposableValue<Transform>(transform.value, ignore),
              disposeOnError(transform),
            ),
        );

        const sinkSubscription = pipe(
          sink(src, transformSink),
          subscribe(scheduler),
        );

        const transformReadableStream = stream(
          createReadableFlowable(returns(transform)),
          scheduler,
        );

        const modeSubscription = pipe(
          modeObs,
          onNotify(dispatchTo(transformReadableStream)),
          subscribe(scheduler),
        );

        return add(
          transformReadableStream,
          sinkSubscription,
          transform,
          modeSubscription,
        );
      },
      t => t,
    ),
  );

export const brotliDecompress = (
  options: BrotliOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createBrotliDecompress, createDisposableNodeStream));

export const gunzip = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createGunzip, createDisposableNodeStream));

export const inflate = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createInflate, createDisposableNodeStream));

export const brotliCompress = (
  options: BrotliOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createBrotliCompress, createDisposableNodeStream));

export const gzip = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createGzip, createDisposableNodeStream));

export const deflate = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(defer(options, createDeflate, createDisposableNodeStream));
