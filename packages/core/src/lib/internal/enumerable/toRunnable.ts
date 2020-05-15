import { EnumerableLike, EnumeratorLike } from "./interfaces";
import { RunnableLike, createRunnable, SinkLike } from "../../runnable";
import { Factory, Function } from "../../functions";

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
