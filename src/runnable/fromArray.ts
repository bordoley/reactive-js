import { FromArray, FromArrayOptions } from "../container";
import { isDisposed } from "../disposable";
import { Function1, ignore, length, max, min } from "../functions";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";
import { createRunnable } from "./createRunnable";

export const fromArray =
  <T>(
    options: {
      readonly startIndex?: number;
      readonly endIndex?: number;
    } = {},
  ): Function1<readonly T[], RunnableLike<T>> =>
  values => {
    const valuesLength = length(values);
    const startIndex = min(options.startIndex ?? 0, valuesLength);
    const endIndex = max(
      min(options.endIndex ?? length(values), valuesLength),
      0,
    );
    const count = endIndex - startIndex;

    const run =
      count === 0
        ? ignore
        : (sink: RunnableSink<T>) => {
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
