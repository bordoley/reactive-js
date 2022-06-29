import { FromArray, FromArrayOptions, createFromArray } from "../container";
import { isDisposed } from "../disposable";
import { ignore } from "../functions";
import { RunnableLike } from "../runnable";
import { RunnableSink } from "../runnableSink";
import { createRunnable } from "./createRunnable";

export const fromArray = /*@__PURE__*/ createFromArray<RunnableLike<unknown>>(
  <T>(values: readonly T[], startIndex: number, endIndex: number) => {
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
  },
);

export const fromArrayT: FromArray<RunnableLike<unknown>, FromArrayOptions> = {
  fromArray,
};
