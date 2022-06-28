import { dispose } from "../disposable";
import { pipe, raise } from "../functions";
import { isSome } from "../option";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";
import { sourceFrom } from "../source";

export const run =
  <T, TResult>(
    f: () => RunnableSink<T> & {
      readonly result: TResult;
    },
  ) =>
  (runnable: RunnableLike<T>): TResult =>
    pipe(f(), sourceFrom(runnable), dispose(), ({ error, result }) =>
      isSome(error) ? raise(error.cause) : result,
    );
