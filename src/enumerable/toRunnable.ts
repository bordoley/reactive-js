import { add, dispose } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { Enumerator, forEach } from "../enumerator";
import { Factory, Function1, pipe } from "../functions";
import { RunnableLike, ToRunnable, createRunnable } from "../runnable";
import { RunnableSink } from "../runnableSink";
import { notifySink } from "../source";

const enumeratorToRunnable = <T>(
  f: Factory<Enumerator<T>>,
): RunnableLike<T> => {
  const run = (sink: RunnableSink<T>) => {
    pipe(f(), add(sink), forEach(notifySink(sink)), dispose());
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
