import { Predicate, alwaysTrue } from "../functions";
import { isNone } from "../option";
import { RunnableOperator } from "../runnable";
import { createRunnable } from "./createRunnable";
import { createDelegatingSink } from "./sinks";

/**
 * Returns an RunnableLike that applies the predicate function each time the source
 * completes to determine if the enumerable should be repeated.
 *
 * @param predicate The predicate function to apply.
 */
export function repeat<T>(predicate: Predicate<number>): RunnableOperator<T, T>;

/**
 * Returns an RunnableLike that repeats the source count times.
 * @param count
 */
export function repeat<T>(count: number): RunnableOperator<T, T>;

/**
 * Returns an RunnableLike that continually repeats the source.
 */
export function repeat<T>(): RunnableOperator<T, T>;

export function repeat<T>(
  predicate?: Predicate<number> | number,
): RunnableOperator<T, T> {
  const shouldRepeat = isNone(predicate)
    ? alwaysTrue
    : typeof predicate === "number"
    ? (count: number) => count < predicate
    : (count: number) => predicate(count);

  return runnable =>
    createRunnable(sink => {
      let count = 0;
      do {
        const delegateSink = createDelegatingSink(sink);
        runnable.run(delegateSink);
        delegateSink.dispose();
        count++;
      } while (!sink.isDisposed && shouldRepeat(count));
    });
}
