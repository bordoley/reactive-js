import fs from "fs";
import { Readable, Transform, Writable } from "stream";
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
import { __NODE_JS_PAUSE_EVENT } from "../__internal__/symbols.js";
import { ContainerOperator } from "../containers.js";
import {
  Factory,
  Function1,
  bindMethod,
  ignore,
  invoke,
  isFunction,
  pipe,
  pipeLazy,
} from "../functions.js";
import {
  DispatcherLike_complete,
  ObservableLike,
  ObservableLike_observe,
} from "../rx.js";
import * as Observable from "../rx/Observable.js";
import {
  FlowableLike,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming.js";
import * as Flowable from "../streaming/Flowable.js";
import * as Streamable from "../streaming/Streamable.js";
import {
  BufferLike_capacity,
  DisposableLike,
  DisposableLike_dispose,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../util.js";
import * as Disposable from "../util/Disposable.js";

type NodeStream = Readable | Writable | Transform;

const disposeStream = (stream: NodeStream) => () => {
  stream.removeAllListeners();
  // Calling destory can result in onError being called
  // if we don't catch the error, it crashes the process.
  // This kind of sucks, but its the best we can do;
  stream.once("error", ignore);
  stream.once("close", () => {
    stream.removeAllListeners();
  });
  stream.destroy();
};

const addToNodeStream =
  <TDisposable extends DisposableLike>(
    stream: NodeStream,
  ): Function1<TDisposable, TDisposable> =>
  disposable => {
    pipe(stream, addDisposable(disposable));
    return disposable;
  };

const addDisposable =
  <TNodeStream extends NodeStream>(
    disposable: DisposableLike,
  ): Function1<TNodeStream, TNodeStream> =>
  stream => {
    stream.on("error", Disposable.toErrorHandler(disposable));
    stream.once("close", bindMethod(disposable, DisposableLike_dispose));
    pipe(disposable, Disposable.onError(disposeStream(stream)));
    return stream;
  };

const addToDisposable =
  <TNodeStream extends NodeStream>(
    disposable: DisposableLike,
  ): Function1<TNodeStream, TNodeStream> =>
  stream => {
    pipe(disposable, Disposable.onDisposed(disposeStream(stream)));
    stream.on("error", Disposable.toErrorHandler(disposable));
    return stream;
  };

export const createReadableSource = (
  factory: Factory<Readable> | Readable,
): FlowableLike<Uint8Array> =>
  Flowable.create(mode =>
    Observable.create(observer => {
      const dispatchDisposable = pipe(
        Disposable.create(),
        Disposable.onError(Disposable.toErrorHandler(observer)),
        Disposable.onComplete(bindMethod(observer, DispatcherLike_complete)),
      );

      const readable = isFunction(factory)
        ? pipe(
            factory(),
            addToDisposable(observer),
            addDisposable(dispatchDisposable),
          )
        : pipe(factory, addDisposable(dispatchDisposable));

      readable.pause();

      pipe(
        mode,
        Observable.forEach(isPaused => {
          if (isPaused) {
            readable.pause();
          } else {
            readable.resume();
          }
        }),
        Observable.subscribe(observer),
        addToNodeStream(readable),
      );

      const onData = bindMethod(observer, QueueableLike_enqueue);
      const onEnd = bindMethod(observer, DispatcherLike_complete);

      readable.on("data", onData);
      readable.on("end", onEnd);
    }),
  );

export const readFile = (
  path: fs.PathLike,
  options?: {
    readonly flags?: string;
    readonly mode?: number;
    readonly start?: number;
    readonly end?: number;
    readonly highWaterMark?: number;
  },
) => createReadableSource(() => fs.createReadStream(path, options));

export const createWritableSink = /*@__PURE__*/ (() => {
  return (
    factory: Factory<Writable> | Writable,
  ): StreamableLike<Uint8Array, boolean> =>
    Streamable.create((events: ObservableLike<Uint8Array>) =>
      Observable.create(observer => {
        const dispatchDisposable = pipe(
          Disposable.create(),
          Disposable.onError(Disposable.toErrorHandler(observer)),
          Disposable.onComplete(bindMethod(observer, DispatcherLike_complete)),
        );

        const writable = isFunction(factory)
          ? pipe(
              factory(),
              addToDisposable(observer),
              addDisposable(dispatchDisposable),
            )
          : pipe(factory, addDisposable(dispatchDisposable));

        pipe(
          events,
          Observable.forEach<Uint8Array>(ev => {
            // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
            // node throws a type Error regarding expecting a Buffer, though the docs
            // say a UInt8Array should be accepted. Need to file a bug.
            if (!writable.write(Buffer.from(ev))) {
              // Hack in a custom event here for pause request
              writable.emit(__NODE_JS_PAUSE_EVENT);
            }
          }),
          Observable.subscribe(observer),
          addToNodeStream(writable),
          Disposable.onComplete(bindMethod(writable, "end")),
        );

        const onDrain = () => {
          observer[QueueableLike_enqueue](false);
        };
        const onFinish = bindMethod(observer, DispatcherLike_complete);
        const onPause = () => {
          observer[QueueableLike_enqueue](true);
        };

        writable.on("drain", onDrain);
        writable.on("finish", onFinish);
        writable.on(__NODE_JS_PAUSE_EVENT, onPause);

        observer[QueueableLike_enqueue](false);
      }),
    );
})();

export const transform =
  (
    factory: Factory<Transform>,
  ): ContainerOperator<FlowableLike, Uint8Array, Uint8Array> =>
  src =>
    Flowable.create(modeObs =>
      Observable.create(observer => {
        const transform = pipe(factory(), addToDisposable(observer));
        const backpressureStrategy =
          observer[QueueableLike_backpressureStrategy];
        const capacity = observer[BufferLike_capacity];

        const transformWritableStream = pipe(
          transform,
          createWritableSink,
          invoke(StreamableLike_stream, observer, {
            backpressureStrategy,
            capacity,
          }),
          Disposable.addTo(observer),
        );

        const transformReadableStream = pipe(
          transform,
          createReadableSource,
          invoke(StreamableLike_stream, observer, { capacity }),
          Disposable.addTo(observer),
        );

        pipe(
          src,
          Streamable.sinkInto(transformWritableStream),
          Disposable.addTo(observer),
        );

        transformReadableStream[ObservableLike_observe](observer);

        pipe(
          modeObs,
          Observable.enqueue(transformReadableStream),
          Observable.subscribe(observer),
          addToNodeStream(transform),
        );
      }),
    );

export const brotliDecompress = (
  options: BrotliOptions = {},
): ContainerOperator<FlowableLike, Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createBrotliDecompress));

export const gunzip = (
  options: ZlibOptions = {},
): ContainerOperator<FlowableLike, Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createGunzip));

export const inflate = (
  options: ZlibOptions = {},
): ContainerOperator<FlowableLike, Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createInflate));

export const brotliCompress = (
  options: BrotliOptions = {},
): ContainerOperator<FlowableLike, Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createBrotliCompress));

export const gzip = (
  options: ZlibOptions = {},
): ContainerOperator<FlowableLike, Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createGzip));

export const deflate = (
  options: ZlibOptions = {},
): ContainerOperator<FlowableLike, Uint8Array, Uint8Array> =>
  transform(pipeLazy(options, createDeflate));
