import { addDisposableDisposeParentOnChildError } from "../disposable";
import { RunnableLike, RunnableOperator, SinkLike } from "../runnable";
import { createRunnable } from "./createRunnable";
import { lift } from "./lift";
import { AbstractDelegatingSink, createDelegatingSink } from "./sink";

/**
 * Creates an `RunnableLike` which emits all values from each source sequentially.
 */
export function concat<T>(
  fst: RunnableLike<T>,
  snd: RunnableLike<T>,
  ...tail: readonly RunnableLike<T>[]
): RunnableLike<T>;

export function concat<T>(
  ...runnables: readonly RunnableLike<T>[]
): RunnableLike<T> {
  return createRunnable((sink: SinkLike<T>) => {
    const runnablesLength = runnables.length;
    for (let i = 0; i < runnablesLength && !sink.isDisposed; i++) {
      const concatSink = createDelegatingSink(sink);
      addDisposableDisposeParentOnChildError(sink, concatSink);

      runnables[i].run(concatSink);
    }
    sink.dispose();
  });
}

class FlattenSink<T> extends AbstractDelegatingSink<RunnableLike<T>, T> {
  notify(next: RunnableLike<T>) {
    const concatSink = createDelegatingSink(this.delegate);
    addDisposableDisposeParentOnChildError(concatSink, concatSink);

    next.run(createDelegatingSink(this.delegate));
  }
}

const _concatAll = lift(s => new FlattenSink(s));
export const concatAll = <T>(): RunnableOperator<RunnableLike<T>, T> =>
  _concatAll;
