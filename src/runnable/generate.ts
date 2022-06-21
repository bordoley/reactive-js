import { Factory, Updater } from "../functions";
import { RunnableLike } from "../runnable";
import { createRunnable } from "./createRunnable";
import { Sink } from "./sinks";

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
