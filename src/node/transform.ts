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
import {
  Factory,
  Function1,
  ignore,
  pipe,
  pipeLazy,
  returns,
} from "../functions";
import { createObservable, onNotify, subscribe } from "../observable";
import { sinkInto } from "../source";

import {
  FlowableLike,
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
  ): Function1<FlowableLike<Uint8Array>, FlowableLike<Uint8Array>> =>
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
): Function1<FlowableLike<Uint8Array>, FlowableLike<Uint8Array>> =>
  transform(
    pipeLazy(options, createBrotliDecompress, createDisposableNodeStream),
  );

export const gunzip = (
  options: ZlibOptions = {},
): Function1<FlowableLike<Uint8Array>, FlowableLike<Uint8Array>> =>
  transform(pipeLazy(options, createGunzip, createDisposableNodeStream));

export const inflate = (
  options: ZlibOptions = {},
): Function1<FlowableLike<Uint8Array>, FlowableLike<Uint8Array>> =>
  transform(pipeLazy(options, createInflate, createDisposableNodeStream));

export const brotliCompress = (
  options: BrotliOptions = {},
): Function1<FlowableLike<Uint8Array>, FlowableLike<Uint8Array>> =>
  transform(
    pipeLazy(options, createBrotliCompress, createDisposableNodeStream),
  );

export const gzip = (
  options: ZlibOptions = {},
): Function1<FlowableLike<Uint8Array>, FlowableLike<Uint8Array>> =>
  transform(pipeLazy(options, createGzip, createDisposableNodeStream));

export const deflate = (
  options: ZlibOptions = {},
): Function1<FlowableLike<Uint8Array>, FlowableLike<Uint8Array>> =>
  transform(pipeLazy(options, createDeflate, createDisposableNodeStream));
