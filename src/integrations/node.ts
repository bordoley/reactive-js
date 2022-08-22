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
import {
  createLiftedFlowable,
  createLiftedStreamable,
} from "../__internal__/streaming/__internal__StreamableLike";
import { ContainerOperator } from "../containers";
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
  ignore,
  pipe,
  pipeLazy,
} from "../functions";
import { ObservableLike } from "../rx";
import {
  create as createObservable,
  forEach,
  subscribe,
} from "../rx/ObservableLike";
import { sinkInto } from "../rx/ReactiveContainerLike";
import { ObserverLike_dispatcher } from "../scheduling";
import {
  dispatch,
  dispatchTo,
  getScheduler as dispatcherGetScheduler,
} from "../scheduling/DispatcherLike";
import { getDispatcher, getScheduler } from "../scheduling/ObserverLike";
import { FlowMode, FlowableLike, StreamableLike } from "../streaming";
import { sourceFrom } from "../streaming/StreamLike";
import { stream } from "../streaming/StreamableLike";
import { DisposableLike } from "../util";
import {
  dispose,
  onComplete,
  onDisposed,
  onError,
  toErrorHandler,
} from "../util/DisposableLike";

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
    return createObservable(({ [ObserverLike_dispatcher]: dispatcher }) => {
      const handler = (cause: unknown, arg: unknown) => {
        if (cause) {
          pipe(dispatcher, dispose({ cause }));
        } else {
          pipe(dispatcher, dispatch(arg), dispose());
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
    stream.on("error", toErrorHandler(disposable));
    stream.once("close", pipeLazy(disposable, dispose()));
    pipe(disposable, onError(disposeStream(stream)));
    return stream;
  };

const addToDisposable =
  <TNodeStream extends NodeStream>(
    disposable: DisposableLike,
  ): Function1<TNodeStream, TNodeStream> =>
  stream => {
    pipe(disposable, onDisposed(disposeStream(stream)));
    stream.on("error", toErrorHandler(disposable));
    return stream;
  };

export const createReadableSource = (
  factory: Factory<Readable> | Readable,
): FlowableLike<Uint8Array> =>
  createLiftedFlowable(mode =>
    createObservable(observer => {
      const { [ObserverLike_dispatcher]: dispatcher } = observer;

      const readable =
        typeof factory === "function"
          ? pipe(
              factory(),
              addToDisposable(observer),
              addDisposable(dispatcher),
            )
          : pipe(factory, addDisposable(dispatcher));

      readable.pause();

      pipe(
        mode,
        forEach<FlowMode>(ev => {
          switch (ev) {
            case "pause":
              readable.pause();
              break;
            case "resume":
              readable.resume();
              break;
          }
        }),
        subscribe(getScheduler(observer)),
        addToNodeStream(readable),
      );

      const onData = dispatchTo(dispatcher);
      const onEnd = () => {
        pipe(dispatcher, dispose());
      };

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
  const NODE_JS_PAUSE_EVENT = "__REACTIVE_JS_NODE_WRITABLE_PAUSE__";
  return (
    factory: Factory<Writable> | Writable,
  ): StreamableLike<Uint8Array, FlowMode> =>
    createLiftedStreamable(events =>
      createObservable(observer => {
        const { [ObserverLike_dispatcher]: dispatcher } = observer;

        const writable =
          typeof factory === "function"
            ? pipe(
                factory(),
                addToDisposable(observer),
                addDisposable(dispatcher),
              )
            : pipe(factory, addDisposable(dispatcher));

        pipe(
          events,
          forEach<Uint8Array>(ev => {
            // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
            // node throws a type Error regarding expecting a Buffer, though the docs
            // say a UInt8Array should be accepted. Need to file a bug.
            if (!writable.write(Buffer.from(ev))) {
              // Hack in a custom event here for pause request
              writable.emit(NODE_JS_PAUSE_EVENT);
            }
          }),
          subscribe(dispatcherGetScheduler(dispatcher)),
          addToNodeStream(writable),
          onComplete(() => {
            writable.end();
          }),
        );

        const onDrain = pipeLazy(dispatcher, dispatch("resume"));
        const onFinish = pipeLazy(dispatcher, dispose());
        const onPause = pipeLazy(dispatcher, dispatch("pause"));

        writable.on("drain", onDrain);
        writable.on("finish", onFinish);
        writable.on(NODE_JS_PAUSE_EVENT, onPause);

        pipe(dispatcher, dispatch("resume"));
      }),
    );
})();

export const transform =
  (
    factory: Factory<Transform>,
  ): ContainerOperator<FlowableLike, Uint8Array, Uint8Array> =>
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
          createReadableSource(transform),
          stream(getScheduler(observer)),
          addToNodeStream(transform),
          sinkInto(observer),
        );

        pipe(
          modeObs,
          forEach<FlowMode>(dispatchTo(transformReadableStream)),
          subscribe(getScheduler(observer)),
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
