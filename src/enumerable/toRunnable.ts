import { addChildAndDisposeOnError } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { Factory, Function1, pipe } from "../functions";
import { RunnableLike, Sink, ToRunnable, createRunnable } from "../runnable";
import { Enumerator } from "./enumerator";

const enumeratorToRunnable = <T>(
  f: Factory<Enumerator<T>>,
): RunnableLike<T> => {
  const run = (sink: Sink<T>) => {
    const enumerator = pipe(f(), addChildAndDisposeOnError(sink));
    while (enumerator.move()) {
      sink.notify(enumerator.current);
    }
    enumerator.dispose();
  };
  return createRunnable(run);
};

const _toRunnable = <T>(enumerable: EnumerableLike<T>): RunnableLike<T> =>
  enumeratorToRunnable(() => enumerable.enumerate());

export const toRunnable = <T>(): Function1<
  EnumerableLike<T>,
  RunnableLike<T>
> => _toRunnable;

export const toRunnableT: ToRunnable<EnumerableLike<unknown>> = {
  toRunnable,
};
