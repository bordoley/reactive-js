import { RunnableLike, SinkLike, RunnableFunction } from "./interfaces.ts";
import { createRunnable } from "./createRunnable.ts";
import { fromArray } from "./fromArray.ts";
import { AbstractDelegatingSink } from "./sink.ts";

class ConcatSink<T> extends AbstractDelegatingSink<T, T> {
  isDone = false;

  constructor(delegate: SinkLike<T>) {
    super(delegate);
  }

  done() {
    this.isDone = true;
  }

  notify(next: T) {
    this.delegate.notify(next);
  }
}

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
    for (let i = 0; i < runnablesLength && !sink.isDone; i++) {
      runnables[i].run(new ConcatSink(sink));
    }
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
