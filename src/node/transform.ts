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
import { DisposableValue, add, addTo, dispose, onError } from "../disposable";
import { FlowableOperator, createLiftedFlowable } from "../flowable";
import {
  Factory,
  ignore,
  newInstance,
  pipe,
  pipeLazy,
  returns,
} from "../functions";
import { createObservable, onNotify, subscribe } from "../observable";
import { scheduler } from "../observer";
import { sinkInto } from "../source";
import { sourceFrom, stream } from "../streamable";
import { createReadableIOSource } from "./createReadableIOSource";
import { createWritableIOSink } from "./createWritableIOSink";
import { createDisposableNodeStream } from "./nodeStream";

export const transform =
  (
    factory: Factory<DisposableValue<Transform>>,
  ): FlowableOperator<Uint8Array, Uint8Array> =>
  src =>
    createLiftedFlowable(modeObs =>
      createObservable(observer => {
        const transform = factory();

        pipe(
          createWritableIOSink(() =>
            pipe(
              newInstance(DisposableValue, transform.value, ignore),
              // only dispose the transform when the writable is disposed.
              onError(e => pipe(transform, dispose(e))),
            ),
          ),
          stream(scheduler(observer)),
          sourceFrom(src),
        );

        const transformReadableStream = pipe(
          createReadableIOSource(returns(transform)),
          stream(scheduler(observer)),
          addTo(observer),
        );

        const modeSubscription = pipe(
          modeObs,
          onNotify(dispatchTo(transformReadableStream)),
          subscribe(scheduler(observer)),
          addTo(observer),
        );

        pipe(
          transformReadableStream,
          add(modeSubscription),
          sinkInto(observer),
        );
      }),
    );

export const brotliDecompress = (
  options: BrotliOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(
    pipeLazy(options, createBrotliDecompress, createDisposableNodeStream),
  );

export const gunzip = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createGunzip, createDisposableNodeStream));

export const inflate = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createInflate, createDisposableNodeStream));

export const brotliCompress = (
  options: BrotliOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(
    pipeLazy(options, createBrotliCompress, createDisposableNodeStream),
  );

export const gzip = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createGzip, createDisposableNodeStream));

export const deflate = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createDeflate, createDisposableNodeStream));
