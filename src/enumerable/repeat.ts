import { AbstractContainer } from "../container";
import {
  AbstractDisposable,
  addDisposableDisposeParentOnChildError,
} from "../disposable";
import {
  EnumerableLike,
  EnumerableOperator,
  EnumeratorLike,
} from "../enumerable";
import { Predicate, alwaysTrue } from "../functions";
import { isNone } from "../option";
import { enumerate } from "./enumerator";

function enumerateSrc<T>(self: RepeatEnumerator<T>) {
  self.enumerator = enumerate(self.src);
  addDisposableDisposeParentOnChildError(self, self.enumerator);
}

class RepeatEnumerator<T>
  extends AbstractDisposable
  implements EnumeratorLike<T>
{
  enumerator: EnumeratorLike<T> = undefined as any;
  private count = 0;

  constructor(
    readonly src: EnumerableLike<T>,
    private readonly shouldRepeat: Predicate<number>,
  ) {
    super();
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

      let doRepeat = false;
      try {
        doRepeat = this.shouldRepeat(this.count);
      } catch (cause) {
        this.dispose({ cause });
      }

      if (doRepeat) {
        enumerateSrc(this);
        this.enumerator.move();
      }
    }

    return this.hasCurrent;
  }
}

class RepeatEnumerable<T>
  extends AbstractContainer
  implements EnumerableLike<T>
{
  constructor(
    private readonly src: EnumerableLike<T>,
    private readonly shouldRepeat: Predicate<number>,
  ) {
    super();
  }

  enumerate() {
    const enumerator = new RepeatEnumerator(this.src, this.shouldRepeat);
    enumerateSrc(enumerator);
    return enumerator;
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
