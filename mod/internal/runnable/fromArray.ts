import { Function1 } from "../../functions.ts";
import { createRunnable } from "./createRunnable.ts";
import { RunnableLike, SinkLike } from "./interfaces.ts";

export const fromArray = <T>(
  options: {
    readonly startIndex?: number;
    readonly endIndex?: number;
  } = {},
): Function1<readonly T[], RunnableLike<T>> => values => {
  const valuesLength = values.length;
  const startIndex = Math.min(options.startIndex ?? 0, valuesLength);
  const endIndex = Math.max(
    Math.min(options.endIndex ?? values.length, valuesLength),
    0,
  );

  const run = (sink: SinkLike<T>) => {
    for (let index = startIndex; index < endIndex; index++) {
      sink.notify(values[index]);
    }
    sink.done();
  };
  return createRunnable(run);
};
