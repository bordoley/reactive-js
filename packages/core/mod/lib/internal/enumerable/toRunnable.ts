import { EnumerableLike, EnumeratorLike } from "./interfaces.ts";
import { RunnableLike, createRunnable, SinkLike } from "../../runnable.ts";
import { Factory, Function } from "../../functions.ts";

const enumeratorToRunnable = <T>(
  f: Factory<EnumeratorLike<T>>,
): RunnableLike<T> => {
  const run = (sink: SinkLike<T>) => {
    const enumerator = f();
    while (enumerator.move()) {
      sink.notify(enumerator.current);
    }
    sink.done();
  };
  return createRunnable(run);
};

const _toRunnable = <T>(enumerable: EnumerableLike<T>): RunnableLike<T> =>
  enumeratorToRunnable(() => enumerable.enumerate());

export const toRunnable = <T>(): Function<EnumerableLike<T>, RunnableLike<T>> =>
  _toRunnable;
