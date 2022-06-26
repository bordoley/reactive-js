import { Concat, ConcatAll } from "../container";
import { addToParentAndDisposeOnError } from "../disposable";
import { pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { createRunnable } from "./createRunnable";
import { lift } from "./lift";
import { Sink, createDelegatingSink } from "./sinks";

export const concat: Concat<RunnableLike<unknown>>["concat"] = <T>(
  ...runnables: readonly RunnableLike<T>[]
) =>
  createRunnable((sink: Sink<T>) => {
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

export const concatT: Concat<RunnableLike<unknown>> = {
  concat,
};

class FlattenSink<T> extends Sink<RunnableLike<T>> {
  constructor(readonly delegate: Sink<T>) {
    super();
  }

  notify(next: RunnableLike<T>) {
    const { delegate } = this;
    const concatSink = pipe(
      createDelegatingSink(delegate),
      addToParentAndDisposeOnError(this),
    );

    next.sink(concatSink);
    concatSink.dispose();
  }
}

const _concatAll = lift(delegate =>
  pipe(new FlattenSink(delegate), addToParentAndDisposeOnError(delegate)),
);

export const concatAll: ConcatAll<RunnableLike<unknown>>["concatAll"] = <
  T,
>(): RunnableOperator<RunnableLike<T>, T> => _concatAll;

export const concatAllT: ConcatAll<RunnableLike<unknown>> = {
  concatAll,
};
