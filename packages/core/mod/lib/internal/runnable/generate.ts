import { Factory, Generator } from "../../functions.ts";
import { RunnableLike, SinkLike } from "./interfaces.ts";
import { createRunnable } from "./createRunnable.ts";

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
