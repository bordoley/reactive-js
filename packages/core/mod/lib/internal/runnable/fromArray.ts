import { createRunnable } from "./createRunnable.ts";
import { Function } from "../../functions.ts";
import { RunnableLike, SinkLike } from "./interfaces.ts";

export const fromArray = <T>(
  options: {
    startIndex: number;
  } = {
    startIndex: 0,
  },
): Function<readonly T[], RunnableLike<T>> => values => {
  const valuesLength = values.length;
  const startIndex = Math.max(Math.min(options.startIndex, valuesLength), 0);

  const run = (sink: SinkLike<T>) => {
    const valuesLength = values.length;
    for (let index = startIndex; index < valuesLength; index++) {
      sink.notify(values[index]);
    }
    sink.done();
  };
  return createRunnable(run);
};
