import { RunnableLike, SinkLike, RunnableFunction } from "./interfaces.ts";
import { Function, compose } from "../../functions.ts";
import { createRunnable } from "./createRunnable.ts";
import { fromArray } from "./fromArray.ts";
import { lift } from "./lift.ts";
import { map } from "./map.ts";
import { AbstractDelegatingSink } from "./sink.ts";

const concatSinkDone = Symbol("@reactive-js/core/lib/runnable/concatSinkDone");

class ConcatSink<T> implements SinkLike<T> {
  isDone = false;
  constructor(private readonly delegate: SinkLike<T>) {}

  done() {
    this.isDone = true;
    throw concatSinkDone;
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
): RunnableFunction<T, T> => first => concat(first, snd);

export function endWith<T>(value: T, ...values: T[]): RunnableFunction<T, T>;
export function endWith<T>(...values: T[]): RunnableFunction<T, T> {
  return concatWith(fromArray()(values));
}

export function startWith<T>(value: T, ...values: T[]): RunnableFunction<T, T>;
export function startWith<T>(...values: T[]): RunnableFunction<T, T> {
  return obs => concat(fromArray()(values), obs);
}

class FlattenSink<T> extends AbstractDelegatingSink<RunnableLike<T>, T> {
  constructor(delegate: SinkLike<T>) {
    super(delegate);
  }

  notify(next: RunnableLike<T>) {
    runConcatUnsafe(next, this.delegate);
  }
}

const _concatAll = lift(s => new FlattenSink(s));
export const concatAll = <T>(): RunnableFunction<RunnableLike<T>, T> =>
  _concatAll;

export const concatMap = <TA, TB>(
  mapper: Function<TA, RunnableLike<TB>>,
): RunnableFunction<TA, TB> => compose(map(mapper), concatAll());
