import { Factory, Updater } from "../functions";
import { RunnableLike } from "../runnable";
import { createRunnable } from "./createRunnable";
import { SinkLike } from "../sink";

export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
): RunnableLike<T> => {
  const run = (sink: SinkLike<T>) => {
    let acc = initialValue();
    while (!sink.isDisposed) {
      acc = generator(acc);
      sink.notify(acc);
    }
  };
  return createRunnable(run);
};
