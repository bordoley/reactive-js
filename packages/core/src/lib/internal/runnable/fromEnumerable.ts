import { createRunnable } from "./createRunnable";
import { Factory } from "../../functions";
import { RunnableLike, SinkLike } from "./interfaces";
import { EnumerableLike, EnumeratorLike } from "../../enumerable";

export const fromEnumerator = <T>(
  f: Factory<EnumeratorLike<T>>,
): RunnableLike<T> => {
  const run = (sink: SinkLike<T>) => {
    const enumerator = f();
    while (!sink.isDone && enumerator.move()) {
      sink.notify(enumerator.current);
    }
    sink.done();
  };
  return createRunnable(run);
};

export const fromEnumerable = <T>(
  enumerable: EnumerableLike<T>,
): RunnableLike<T> => fromEnumerator(() => enumerable.enumerate());
