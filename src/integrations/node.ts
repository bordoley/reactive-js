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
import { ContainerOperator } from "../containers.js";
import {
  Factory,
  Function1,
  Function2,
  Function3,
  Function4,
  Function5,
  SideEffect1,
  SideEffect2,
  SideEffect3,
  SideEffect4,
  SideEffect5,
  SideEffect6,
  error,
  ignore,
  isFunction,
  isSome,
  pipe,
  pipeLazy,
} from "../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
  ObservableLike,
} from "../rx.js";
import * as Observable from "../rx/Observable.js";
import {
  FlowableLike,
  FlowableState,
  FlowableState_paused,
  FlowableState_running,
  StreamableLike,
  StreamableLike_stream,
} from "../streaming.js";
import Flowable_createLifted from "../streaming/Flowable/__internal__/Flowable.createLifted.js";
import * as Stream from "../streaming/Stream.js";
import Streamable_createLifted from "../streaming/Streamable/__internal__/Streamable.createLifted.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  QueueableLike_push,
} from "../util.js";
import * as Disposable from "../util/Disposable.js";
import * as Queueable from "../util/Queueable.js";

interface BindNodeCallback {
  <T>(callbackFunc: SideEffect1<SideEffect2<unknown, T>>): Factory<
    ObservableLike<T>
  >;
  (callbackFunc: SideEffect1<SideEffect1<unknown>>): Factory<
    ObservableLike<void>
  >;

  <A1, T>(callbackFunc: SideEffect2<A1, SideEffect2<unknown, T>>): Function1<
    A1,
    ObservableLike<T>
  >;
  <A1>(callbackFunc: SideEffect2<A1, SideEffect1<unknown>>): Function1<
    A1,
    ObservableLike<void>
  >;

  <A1, A2, T>(
    callbackFunc: SideEffect3<A1, A2, SideEffect2<unknown, T>>,
  ): Function2<A1, A2, ObservableLike<T>>;
  <A1, A2>(callbackFunc: SideEffect3<A1, A2, SideEffect1<unknown>>): Function2<
    A1,
    A2,
    ObservableLike<void>
  >;

  <A1, A2, A3, T>(
    callbackFunc: SideEffect4<A1, A2, A3, SideEffect2<unknown, T>>,
  ): Function3<A1, A2, A3, ObservableLike<T>>;
  <A1, A2, A3>(
    callbackFunc: SideEffect4<A1, A2, A3, SideEffect1<unknown>>,
  ): Function3<A1, A2, A3, ObservableLike<void>>;

  <A1, A2, A3, A4, T>(
    callbackFunc: SideEffect5<A1, A2, A3, A4, SideEffect2<unknown, T>>,
  ): Function4<A1, A2, A3, A4, ObservableLike<T>>;
  <A1, A2, A3, A4>(
    callbackFunc: SideEffect5<A1, A2, A3, A4, SideEffect1<unknown>>,
  ): Function4<A1, A2, A3, A4, ObservableLike<void>>;

  <A1, A2, A3, A4, A5, T>(
    callbackFunc: SideEffect6<A1, A2, A3, A4, A5, SideEffect2<unknown, T>>,
  ): Function5<A1, A2, A3, A4, A5, ObservableLike<T>>;
  <A1, A2, A3, A4, A5>(
    callbackFunc: SideEffect6<A1, A2, A3, A4, A5, SideEffect1<unknown>>,
  ): Function5<A1, A2, A3, A4, A5, ObservableLike<void>>;
}
export const bindNodeCallback: BindNodeCallback = <T>(
  callback: (...args: readonly any[]) => unknown,
): ((...args: readonly unknown[]) => ObservableLike<T | void>) =>
  function (this: unknown, ...args: readonly unknown[]) {
    return Observable.create<unknown>(observer => {
      const handler = (err: unknown, arg: unknown) => {
        if (err) {
          observer[DisposableLike_dispose](error(err));
        } else {
          observer[QueueableLike_push](arg);
          observer[DispatcherLike_complete]();
        }
      };

      callback.apply(this, [...args, handler]);
    });
  };

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
    stream.once("close", () => disposable[DisposableLike_dispose]());
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
  Flowable_createLifted(
    mode =>
      Observable.create(observer => {
        const dispatchDisposable = pipe(
          Disposable.create(),
          Disposable.onDisposed(e => {
            if (isSome(e)) {
              observer[DisposableLike_dispose](e);
            } else {
              observer[DispatcherLike_complete]();
            }
          }),
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
          Observable.forEach(ev => {
            switch (ev) {
              case FlowableState_paused:
                readable.pause();
                break;
              case FlowableState_running:
                readable.resume();
                break;
            }
          }),
          Observable.subscribe(observer[DispatcherLike_scheduler]),
          addToNodeStream(readable),
        );

        const onData = Queueable.pushTo(observer);
        const onEnd = () => {
          observer[DispatcherLike_complete]();
        };

        readable.on("data", onData);
        readable.on("end", onEnd);
      }),
    false,
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
  const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";
  return (
    factory: Factory<Writable> | Writable,
  ): StreamableLike<Uint8Array, FlowableState> =>
    Streamable_createLifted<Uint8Array, FlowableState>(
      events =>
        Observable.create(observer => {
          const dispatchDisposable = pipe(
            Disposable.create(),
            Disposable.onDisposed(e => {
              if (isSome(e)) {
                observer[DisposableLike_dispose](e);
              } else {
                observer[DispatcherLike_complete]();
              }
            }),
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
                writable.emit(NODE_JS_PAUSE_EVENT);
              }
            }),
            Observable.subscribe(observer[DispatcherLike_scheduler]),
            addToNodeStream(writable),
            Disposable.onComplete(() => {
              writable.end();
            }),
          );

          const onDrain = () => {
            observer[QueueableLike_push](FlowableState_running);
          };
          const onFinish = () => observer[DispatcherLike_complete]();
          const onPause = () => {
            observer[QueueableLike_push](FlowableState_paused);
          };

          writable.on("drain", onDrain);
          writable.on("finish", onFinish);
          writable.on(NODE_JS_PAUSE_EVENT, onPause);

          observer[QueueableLike_push](FlowableState_running);
        }),
      false,
      false,
      false,
    );
})();

export const transform =
  (
    factory: Factory<Transform>,
  ): ContainerOperator<FlowableLike, Uint8Array, Uint8Array> =>
  src =>
    Flowable_createLifted(
      modeObs =>
        Observable.create(observer => {
          const transform = pipe(factory(), addToDisposable(observer));

          pipe(
            createWritableSink(transform)[StreamableLike_stream](
              observer[DispatcherLike_scheduler],
            ),
            Stream.sourceFrom(src),
            addToNodeStream(transform),
          );

          const transformReadableStream = pipe(
            createReadableSource(transform)[StreamableLike_stream](
              observer[DispatcherLike_scheduler],
            ),
            addToNodeStream(transform),
            Observable.observeWith(observer),
          );

          pipe(
            modeObs,
            Observable.forEach(Queueable.pushTo(transformReadableStream)),
            Observable.subscribe(observer[DispatcherLike_scheduler]),
            addToNodeStream(transform),
          );
        }),
      false,
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
