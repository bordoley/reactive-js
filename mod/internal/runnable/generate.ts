import { Factory, Updater } from "../../functions.ts";
import { createRunnable } from "./createRunnable.ts";
import { RunnableLike, SinkLike } from "./interfaces.ts";

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
