import { FromArray, FromArrayOptions } from "../container";
import { isDisposed } from "../disposable";
import { Function1, ignore } from "../functions";
import { RunnableLike } from "../runnable";
import { createRunnable } from "./createRunnable";
import { Sink } from "./sinks";

export const fromArray =
  <T>(
    options: {
      readonly startIndex?: number;
      readonly endIndex?: number;
    } = {},
  ): Function1<readonly T[], RunnableLike<T>> =>
  values => {
    const valuesLength = values.length;
    const startIndex = Math.min(options.startIndex ?? 0, valuesLength);
    const endIndex = Math.max(
      Math.min(options.endIndex ?? values.length, valuesLength),
      0,
    );
    const count = endIndex - startIndex;

    const run =
      count === 0
        ? ignore
        : (sink: Sink<T>) => {
            for (
              let index = startIndex;
              index < endIndex && !isDisposed(sink);
              index++
            ) {
              sink.notify(values[index]);
            }
          };
    return createRunnable(run);
  };

export const fromArrayT: FromArray<RunnableLike<unknown>, FromArrayOptions> = {
  fromArray,
};
