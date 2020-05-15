import { Factory, Generator } from "../../functions";
import { RunnableLike, SinkLike } from "./interfaces";
import { createRunnable } from "./createRunnable";

export const generate = <T>(
  generator: Generator<T>,
  initialValue: Factory<T>,
): RunnableLike<T> => {
  const run = (sink: SinkLike<T>) => {
    let acc = initialValue();
    while (true) {
      acc = generator(acc);
      sink.notify(acc);
    }
  };
  return createRunnable(run);
};
