import { Readable, Transform, Writable } from "stream";
import { __NODE_JS_PAUSE_EVENT } from "../../__internal__/symbols.js";
import {
  Factory,
  Function1,
  bindMethod,
  ignore,
  isFunction,
  pipe,
} from "../../functions.js";
import { FlowableObservableLike, ObservableLike } from "../../rx.js";
import FlowableObservable_create from "../../rx/FlowableObservable/__internal__/FlowableObservable.create.js";
import * as Observable from "../../rx/Observable.js";
import { SchedulerLike } from "../../scheduling.js";
import {
  DispatcherLike_complete,
  DisposableLike,
  DisposableLike_dispose,
  PauseableLike_pause,
  PauseableLike_resume,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../util.js";
import * as Disposable from "../../util/Disposable.js";

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

export const flow =
  (
    scheduler: SchedulerLike,
    options?: {
      readonly replay?: number;
      readonly capacity?: number;
      readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ): Function1<
    Factory<Readable> | Readable,
    FlowableObservableLike<Uint8Array> & DisposableLike
  > =>
  factory =>
    FlowableObservable_create(
      mode =>
        Observable.create(observer => {
          const dispatchDisposable = pipe(
            Disposable.create(),
            Disposable.onError(Disposable.toErrorHandler(observer)),
            Disposable.onComplete(
              bindMethod(observer, DispatcherLike_complete),
            ),
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
      scheduler,
      options,
    );

export const sinkInto =
  (factory: Writable | Factory<Writable>) =>
  (flowable: FlowableObservableLike<Uint8Array>): ObservableLike<void> =>
    Observable.create(observer => {
      const writable = isFunction(factory)
        ? pipe(factory(), addToDisposable(observer), addDisposable(observer))
        : pipe(factory, addDisposable(observer));

      pipe(
        flowable,
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
        Disposable.onComplete(bindMethod(writable, "end")),
        Disposable.addTo(observer),
      );

      const onDrain = bindMethod(flowable, PauseableLike_resume);
      const onFinish = bindMethod(observer, DisposableLike_dispose);
      const onPause = bindMethod(flowable, PauseableLike_pause);

      writable.on("drain", onDrain);
      writable.on("finish", onFinish);
      writable.on(__NODE_JS_PAUSE_EVENT, onPause);

      flowable[PauseableLike_resume]();
    });
