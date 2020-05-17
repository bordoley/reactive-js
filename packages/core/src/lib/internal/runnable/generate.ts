import { Factory, Updater } from "../../functions";
import { createRunnable } from "./createRunnable";
import { RunnableLike, SinkLike } from "./interfaces";

export const generate = <T>(
  generator: Updater<T>,
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
