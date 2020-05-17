import { Function1, compose } from "../../functions";
import { createRunnable } from "./createRunnable";
import { fromArray } from "./fromArray";
import { RunnableLike, SinkLike, RunnableOperator } from "./interfaces";
import { lift } from "./lift";
import { map } from "./map";
import { AbstractDelegatingSink } from "./sink";

const concatSinkDone = Symbol("@reactive-js/core/lib/runnable/concatSinkDone");

class ConcatSink<T> implements SinkLike<T> {
  isDone = false;
  constructor(private readonly delegate: SinkLike<T>) {}

  done() {
    if (!this.isDone) {
      this.isDone = true;
      throw concatSinkDone;
    }
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

const runConcatUnsafe = <T>(runnable: RunnableLike<T>, sink: SinkLike<T>) => {
  try {
    runnable.run(new ConcatSink(sink));
  } catch (e) {
    if (e !== concatSinkDone) {
      throw e;
    }
  }
};

/**
 * Creates an `RunnableLike` which emits all values from each source sequentially.
 */
export function concat<T>(
  fst: RunnableLike<T>,
  snd: RunnableLike<T>,
  ...tail: Array<RunnableLike<T>>
): RunnableLike<T>;

export function concat<T>(...runnables: RunnableLike<T>[]): RunnableLike<T> {
  return createRunnable((sink: SinkLike<T>) => {
    const runnablesLength = runnables.length;
    for (let i = 0; i < runnablesLength; i++) {
      runConcatUnsafe(runnables[i], sink);
    }
    sink.done();
  });
}

export const concatWith = <T>(
  snd: RunnableLike<T>,
): RunnableOperator<T, T> => first => concat(first, snd);

export function endWith<T>(value: T, ...values: T[]): RunnableOperator<T, T>;
export function endWith<T>(...values: T[]): RunnableOperator<T, T> {
  return concatWith(fromArray()(values));
}

export function startWith<T>(value: T, ...values: T[]): RunnableOperator<T, T>;
export function startWith<T>(...values: T[]): RunnableOperator<T, T> {
  return obs => concat(fromArray()(values), obs);
}

class FlattenSink<T> extends AbstractDelegatingSink<RunnableLike<T>, T> {
  notify(next: RunnableLike<T>) {
    runConcatUnsafe(next, this.delegate);
  }
}

const _concatAll = lift(s => new FlattenSink(s));
export const concatAll = <T>(): RunnableOperator<RunnableLike<T>, T> =>
  _concatAll;

export const concatMap = <TA, TB>(
  mapper: Function1<TA, RunnableLike<TB>>,
): RunnableOperator<TA, TB> => compose(map(mapper), concatAll());
