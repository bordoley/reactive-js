import { dispose } from "../disposable";
import { pipe, raise } from "../functions";
import { isSome } from "../option";
import { RunnableLike } from "../runnable";
import { sourceFrom } from "../source";
import { Sink } from "./sinks";

export const run =
  <T, TResult>(
    f: () => Sink<T> & {
      readonly result: TResult;
    },
  ) =>
  (runnable: RunnableLike<T>): TResult =>
    pipe(f(), sourceFrom(runnable), dispose(), ({ error, result }) =>
      isSome(error) ? raise(error.cause) : result,
    );
