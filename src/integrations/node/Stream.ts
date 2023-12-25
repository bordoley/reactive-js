import { Readable, Transform, Writable } from "stream";
import {
  DeferredObservableWithSideEffectsLike,
  DispatcherLike_complete,
  FlowableLike,
  PauseableLike_pause,
  PauseableLike_resume,
  PauseableObservableLike,
} from "../../concurrent.js";
import * as Flowable from "../../concurrent/Flowable.js";
import * as Observable from "../../concurrent/Observable.js";
import {
  Factory,
  Function1,
  bindMethod,
  ignore,
  isFunction,
  pipe,
} from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";

interface NodeStreamModule {
  flow(): Function1<Factory<Readable> | Readable, FlowableLike<Uint8Array>>;

  sinkInto(
    factory: Writable | Factory<Writable>,
  ): Function1<
    PauseableObservableLike<Uint8Array>,
    DeferredObservableWithSideEffectsLike<void>
  >;
}

type Signature = NodeStreamModule;

type NodeStream = Readable | Writable | Transform;

const disposeStream = (stream: NodeStream) => () => {
  stream.removeAllListeners();
  // Calling destory can result in onError being called
  // if we don't catch the error, it crashes the process.
  // This kind of sucks, but its the best we can do;
  stream.once("error", ignore);
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

export const flow: Signature["flow"] = () => factory =>
  Flowable.create(mode =>
    Observable.create<Uint8Array>(observer => {
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

export const sinkInto: Signature["sinkInto"] =
  (
    factory: Writable | Factory<Writable>,
  ): Function1<
    PauseableObservableLike<Uint8Array>,
    DeferredObservableWithSideEffectsLike<void>
  > =>
  flowable =>
    Observable.create<void>(observer => {
      const writable = isFunction(factory)
        ? pipe(factory(), addToDisposable(observer), addDisposable(observer))
        : pipe(factory, addDisposable(observer));

      pipe(
        flowable,
        Observable.forEach((ev: Uint8Array) => {
          // FIXME: when writing to an outgoing node ServerResponse with a UInt8Array
          // node throws a type Error regarding expecting a Buffer, though the docs
          // say a UInt8Array should be accepted. Need to file a bug.
          if (!writable.write(Buffer.from(ev))) {
            flowable[PauseableLike_pause]();
          }
        }),
        Observable.subscribe(observer),
        Disposable.onComplete(bindMethod(writable, "end")),
        Disposable.addTo(observer),
      );

      const onDrain = bindMethod(flowable, PauseableLike_resume);
      const onFinish = bindMethod(observer, DisposableLike_dispose);

      writable.on("drain", onDrain);
      writable.on("finish", onFinish);

      flowable[PauseableLike_resume]();
    });
