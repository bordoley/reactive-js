import { Readable, Transform, Writable } from "stream";
import {
  DisposableLike,
  dispose,
  onDisposed,
  onError,
  toErrorHandler,
} from "../disposable";
import { Function1, ignore, pipe, pipeLazy } from "../functions";

export type NodeStream = Readable | Writable | Transform;

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

export const addToNodeStream =
  <TDisposable extends DisposableLike>(
    stream: NodeStream,
  ): Function1<TDisposable, TDisposable> =>
  disposable => {
    pipe(stream, addDisposable(disposable));
    return disposable;
  };

export const addDisposable =
  <TNodeStream extends NodeStream>(
    disposable: DisposableLike,
  ): Function1<TNodeStream, TNodeStream> =>
  stream => {
    stream.on("error", toErrorHandler(disposable));
    stream.once("close", pipeLazy(disposable, dispose()));
    pipe(disposable, onError(disposeStream(stream)));
    return stream;
  };

export const addToDisposable =
  <TNodeStream extends NodeStream>(
    disposable: DisposableLike,
  ): Function1<TNodeStream, TNodeStream> =>
  stream => {
    pipe(disposable, onDisposed(disposeStream(stream)));
    stream.on("error", toErrorHandler(disposable));
    return stream;
  };
