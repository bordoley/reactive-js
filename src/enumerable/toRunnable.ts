import { addDisposableDisposeParentOnChildError } from "../disposable";
import { EnumerableLike, EnumeratorLike } from "../enumerable";
import { Factory, Function1 } from "../functions";
import { RunnableLike, SinkLike, createRunnable } from "../runnable";

const enumeratorToRunnable = <T>(
  f: Factory<EnumeratorLike<T>>,
): RunnableLike<T> => {
  const run = (sink: SinkLike<T>) => {
    const enumerator = f();
    addDisposableDisposeParentOnChildError(enumerator, sink);
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
