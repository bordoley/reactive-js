import { isSome } from "../option";
import { RunnableLike } from "../runnable";
import { Sink } from "./sinks";

export const run =
  <T, TResult>(
    f: () => Sink<T> & {
      readonly result: TResult;
    },
  ) =>
  (runnable: RunnableLike<T>): TResult => {
    const sink = f();
    runnable.sink(sink);

    sink.dispose();

    const { error } = sink;
    if (isSome(error)) {
      throw error.cause;
    }

    return sink.result;
  };
