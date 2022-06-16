import { FromArray, FromArrayOptions } from "../container";
import { Function1 } from "../functions";
import { RunnableLike } from "../runnable";
import { SinkLike } from "../sink";
import { createRunnable } from "./createRunnable";

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

    const run = (sink: SinkLike<T>) => {
      for (
        let index = startIndex;
        index < endIndex && !sink.isDisposed;
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
