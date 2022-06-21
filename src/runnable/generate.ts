import { Factory, Updater } from "../functions";
import { RunnableLike } from "../runnable";
import { Sink } from "./sinks";
import { createRunnable } from "./createRunnable";

export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
): RunnableLike<T> => {
  const run = (sink: Sink<T>) => {
    let acc = initialValue();
    while (!sink.isDisposed) {
      acc = generator(acc);
      sink.notify(acc);
    }
  };
  return createRunnable(run);
};
