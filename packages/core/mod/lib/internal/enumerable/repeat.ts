import { alwaysTrue, Predicate } from "../../functions.ts";
import { isNone } from "../../option.ts";
import { enumerate } from "./enumerator.ts";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumerableOperator,
} from "./interfaces.ts";

class RepeatEnumerator<T> implements EnumeratorLike<T> {
  private enumerator: EnumeratorLike<T>;
  private count = 0;

  constructor(
    private readonly src: EnumerableLike<T>,
    private readonly shouldRepeat: Predicate<number>,
  ) {
    this.enumerator = enumerate(src);
  }

  get current() {
    return this.enumerator.current;
  }

  get hasCurrent() {
    return this.enumerator.hasCurrent;
  }

  move(): boolean {
    if (!this.enumerator.move()) {
      this.count++;
      if (this.shouldRepeat(this.count)) {
        this.enumerator = enumerate(this.src);
        this.enumerator.move();
      }
    }

    return this.hasCurrent;
  }
}

class RepeatEnumerable<T> implements EnumerableLike<T> {
  constructor(
    private readonly src: EnumerableLike<T>,
    private readonly shouldRepeat: Predicate<number>,
  ) {}

  enumerate() {
    return new RepeatEnumerator(this.src, this.shouldRepeat);
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

  return enumerable => new RepeatEnumerable(enumerable, repeatPredicate);
}
