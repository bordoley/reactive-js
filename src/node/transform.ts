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
import { FlowableOperator, createLiftedFlowable } from "../flowable";
import { Factory, pipe, pipeLazy, returns } from "../functions";
import { createObservable, onNotify, subscribe } from "../observable";
import { getDispatcher, getScheduler } from "../observer";
import { sinkInto } from "../reactive";
import { sourceFrom, stream } from "../streamable";
import { createReadableSource } from "./createReadableSource";
import { createWritableSink } from "./createWritableSink";
import { addDisposable, addToDisposable, addToNodeStream } from "./nodeStream";

export const transform =
  (factory: Factory<Transform>): FlowableOperator<Uint8Array, Uint8Array> =>
  src =>
    createLiftedFlowable(modeObs =>
      createObservable(observer => {
        const transform = pipe(
          factory(),
          addToDisposable(observer),
          addDisposable(getDispatcher(observer)),
        );

        pipe(
          createWritableSink(transform),
          stream(getScheduler(observer)),
          sourceFrom(src),
          addToNodeStream(transform),
        );

        const transformReadableStream = pipe(
          createReadableSource(returns(transform)),
          stream(getScheduler(observer)),
          addToNodeStream(transform),
          sinkInto(observer),
        );

        pipe(
          modeObs,
          onNotify(dispatchTo(transformReadableStream)),
          subscribe(getScheduler(observer)),
          addToNodeStream(transform),
        );
      }),
    );

export const brotliDecompress = (
  options: BrotliOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createBrotliDecompress));

export const gunzip = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createGunzip));

export const inflate = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createInflate));

export const brotliCompress = (
  options: BrotliOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createBrotliCompress));

export const gzip = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createGzip));

export const deflate = (
  options: ZlibOptions = {},
): FlowableOperator<Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createDeflate));
