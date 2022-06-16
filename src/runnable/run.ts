import { isSome } from "../option";
import { RunnableLike } from "../runnable";
import { SinkLike } from "../sink";

export interface RunnableSinkLike<T, TResult> extends SinkLike<T> {
  readonly result: TResult;
}

export const run =
  <T, TResult>(f: () => RunnableSinkLike<T, TResult>) =>
  (runnable: RunnableLike<T>): TResult => {
    const sink = f();
    runnable.run(sink);

    sink.dispose();

    const { error } = sink;
    if (isSome(error)) {
      throw error.cause;
    }

    return sink.result;
  };
