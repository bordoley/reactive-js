import { addDisposable, addToParentAndDisposeOnError } from "../disposable";
import { pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { createRunnable } from "./createRunnable";
import { lift } from "./lift";
import { Sink, createDelegatingSink } from "./sinks";

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
  return createRunnable((sink: Sink<T>) => {
    const runnablesLength = runnables.length;
    for (let i = 0; i < runnablesLength && !sink.isDisposed; i++) {
      const concatSink = pipe(
        createDelegatingSink(sink),
        addToParentAndDisposeOnError(sink),
      );

      runnables[i].sink(concatSink);
      concatSink.dispose();
    }
  });
}

class FlattenSink<T> extends Sink<RunnableLike<T>> {
  constructor(readonly delegate: Sink<T>) {
    super();
  }

  notify(next: RunnableLike<T>) {
    const { delegate } = this;
    const concatSink = pipe(
      createDelegatingSink(delegate),
      addToParentAndDisposeOnError(delegate),
    );

    next.sink(concatSink);
    concatSink.dispose();
  }
}

const _concatAll = lift(delegate => {
  const sink = new FlattenSink(delegate);
  addDisposable(delegate, sink);
  return sink;
});
export const concatAll = <T>(): RunnableOperator<RunnableLike<T>, T> =>
  _concatAll;
