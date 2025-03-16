import { Readable, Transform, Writable } from "stream";
import { Function1, bindMethod, ignore, pipe } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import { DisposableLike, DisposableLike_dispose } from "../utils.js";

interface NodeStreamModule {
  add<TNodeStream extends NodeStream>(
    disposable: DisposableLike,
  ): Function1<TNodeStream, TNodeStream>;

  addTo<TNodeStream extends NodeStream>(
    disposable: DisposableLike,
  ): Function1<TNodeStream, TNodeStream>;

  addToNodeStream<TDisposable extends DisposableLike>(
    stream: NodeStream,
  ): Function1<TDisposable, TDisposable>;
}

export type Signature = NodeStreamModule;

export type NodeStream = Readable | Writable | Transform;

const dispose = (stream: NodeStream) => () => {
  stream.removeAllListeners();
  // Calling destory can result in onError being called
  // if we don't catch the error, it crashes the process.
  // This kind of sucks, but its the best we can do;
  stream.once("error", ignore);
  stream.destroy();
};

export const add: Signature["add"] =
  <TNodeStream extends NodeStream>(
    disposable: DisposableLike,
  ): Function1<TNodeStream, TNodeStream> =>
  stream => {
    stream.on("error", Disposable.toErrorHandler(disposable));
    stream.once("close", bindMethod(disposable, DisposableLike_dispose));
    pipe(disposable, DisposableContainer.onError(dispose(stream)));
    return stream;
  };

export const addTo: Signature["addTo"] =
  <TNodeStream extends NodeStream>(
    disposable: DisposableLike,
  ): Function1<TNodeStream, TNodeStream> =>
  stream => {
    pipe(disposable, DisposableContainer.onDisposed(dispose(stream)));
    stream.on("error", Disposable.toErrorHandler(disposable));
    return stream;
  };

export const addToNodeStream: Signature["addToNodeStream"] =
  <TDisposable extends DisposableLike>(
    stream: NodeStream,
  ): Function1<TDisposable, TDisposable> =>
  disposable => {
    pipe(stream, add(disposable));
    return disposable;
  };
