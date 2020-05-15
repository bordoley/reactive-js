import { RunnableLike, SinkLike, RunnableFunction } from "./interfaces";
import { createRunnable } from "./createRunnable";
import { fromArray } from "./fromArray";

class ConcatSink<T> implements SinkLike<T> {
  isDone = false;

  constructor(
    private readonly delegate: SinkLike<T>,
    private readonly runnables: RunnableLike<T>[],
    private next: number,
  ) {}

  done() {
    const delegate = this.delegate;
    const runnables = this.runnables;
    const next = this.next;
    this.next++;

    if (next < runnables.length) {
      runnables[next].run(this);
    } else {
      this.isDone = true;
      delegate.done();
    }
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
  return createRunnable((sink: SinkLike<T>) =>
    runnables[0].run(new ConcatSink(sink, runnables, 1)),
  );
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
