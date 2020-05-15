import { alwaysTrue, Predicate } from "../../functions";
import { isNone } from "../../option";
import { RunnableLike, SinkLike, RunnableFunction } from "./interfaces";
import { createRunnable } from "./createRunnable";

class RepeatSink<T> implements SinkLike<T> {
  private count = 0;
  isDone = false;

  constructor(
    private readonly delegate: SinkLike<T>,
    private readonly src: RunnableLike<T>,
    private readonly shouldRepeat: Predicate<number>,
  ) {}

  notify(next: T): void {
    this.delegate.notify(next);
  }

  done(): void {
    this.count++;
    if (!this.delegate.isDone && this.shouldRepeat(this.count)) {
      this.src.run(this);
    } else {
      this.isDone = true;
    }
  }
}

/**
 * Returns an EnumerableLike that applies the predicate function each time the source
 * completes to determine if the enumerable should be repeated.
 *
 * @param predicate The predicate function to apply.
 */
export function repeat<T>(predicate: Predicate<number>): RunnableFunction<T, T>;

/**
 * Returns an EnumerableLike that repeats the source count times.
 * @param count
 */
export function repeat<T>(count: number): RunnableFunction<T, T>;

/**
 * Returns an EnumerableLike` that continually repeats the source.
 */
export function repeat<T>(): RunnableFunction<T, T>;

export function repeat<T>(
  predicate?: Predicate<number> | number,
): RunnableFunction<T, T> {
  const repeatPredicate = isNone(predicate)
    ? alwaysTrue
    : typeof predicate === "number"
    ? (count: number) => count < predicate
    : (count: number) => predicate(count);

  return runnable =>
    createRunnable(sink =>
      runnable.run(new RepeatSink(sink, runnable, repeatPredicate)),
    );
}
