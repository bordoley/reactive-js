import { createRunnable } from "./createRunnable";
import { Function } from "../../functions";
import { RunnableLike, SinkLike } from "./interfaces";

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
    for (
      let index = startIndex;
      index < valuesLength && !sink.isDone;
      index++
    ) {
      sink.push(values[index]);
    }
    sink.done();
  };
  return createRunnable(run);
};
