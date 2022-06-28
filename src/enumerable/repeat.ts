import { Repeat } from "../container";
import { addTo, dispose } from "../disposable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { Enumerator, hasCurrent, move } from "../enumerator";
import { Predicate, alwaysTrue, pipe, raise } from "../functions";
import { Option, isNone } from "../option";
import { createEnumerable, enumerate } from "./enumerable";

class RepeatEnumerator<T> extends Enumerator<T> {
  private enumerator: Option<Enumerator<T>>;
  private count = 0;

  constructor(
    readonly src: EnumerableLike<T>,
    private readonly shouldRepeat: Predicate<number>,
  ) {
    super();
  }

  get current(): T {
    return hasCurrent(this) ? this.enumerator?.current ?? raise() : raise();
  }

  get hasCurrent() {
    return this.enumerator?.hasCurrent ?? false;
  }

  move(): boolean {
    if (isNone(this.enumerator)) {
      this.enumerator = pipe(this.src, enumerate, addTo(this));
    }

    while (!move(this.enumerator)) {
      this.count++;

      try {
        if (this.shouldRepeat(this.count)) {
          this.enumerator = pipe(this.src, enumerate, addTo(this));
        } else {
          break;
        }
      } catch (cause) {
        pipe(this, dispose({ cause }));
        break;
      }
    }

    return hasCurrent(this);
  }
}

/**
 * Returns an EnumerableLike that applies the predicate function each time the source
 * completes to determine if the enumerable should be repeated.
 *
 * @param predicate The predicate function to apply.
 */
export function repeat<T>(
  predicate: Predicate<number>,
): EnumerableOperator<T, T>;

/**
 * Returns an EnumerableLike that repeats the source count times.
 * @param count
 */
export function repeat<T>(count: number): EnumerableOperator<T, T>;

/**
 * Returns an EnumerableLike` that continually repeats the source.
 */
export function repeat<T>(): EnumerableOperator<T, T>;

export function repeat<T>(
  predicate?: Predicate<number> | number,
): EnumerableOperator<T, T> {
  const repeatPredicate = isNone(predicate)
    ? alwaysTrue
    : typeof predicate === "number"
    ? (count: number) => count < predicate
    : (count: number) => predicate(count);

  return enumerable =>
    createEnumerable(() => new RepeatEnumerator(enumerable, repeatPredicate));
}

export const repeatT: Repeat<EnumerableLike<unknown>> = {
  repeat,
};
