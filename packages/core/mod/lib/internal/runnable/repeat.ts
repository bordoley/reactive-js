import { alwaysTrue, Predicate } from "../../functions.ts";
import { isNone } from "../../option.ts";
import { SinkLike, RunnableFunction } from "./interfaces.ts";
import { createRunnable } from "./createRunnable.ts";

class RepeatSink<T> implements SinkLike<T> {
  isDone = false;

  constructor(
    private readonly delegate: SinkLike<T>,
  ) {}

  notify(next: T): void {
    this.delegate.notify(next);
  }

  done(): void {
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
  const shouldRepeat = isNone(predicate)
    ? alwaysTrue
    : typeof predicate === "number"
    ? (count: number) => count < predicate
    : (count: number) => predicate(count);

  return runnable =>
    createRunnable(sink => {
      let count = 0;
      do {
        runnable.run(new RepeatSink(sink));
        count++;
      } while(!sink.isDone && shouldRepeat(count));
    });
}
