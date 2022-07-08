import { createFromArray } from "../__internal__.container";
import { FromArray, FromArrayOptions } from "../container";
import { isDisposed } from "../disposable";
import { ignore } from "../functions";
import { ReactiveSinkLike } from "../reactiveSink";
import { RunnableLike } from "../runnable";
import { createRunnable } from "./createRunnable";

export const fromArray: FromArray<
  RunnableLike<unknown>,
  FromArrayOptions
>["fromArray"] = /*@__PURE__*/ createFromArray<RunnableLike<unknown>>(
  <T>(values: readonly T[], startIndex: number, endIndex: number) => {
    const count = endIndex - startIndex;

    const run =
      count === 0
        ? ignore
        : (sink: ReactiveSinkLike<T>) => {
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
