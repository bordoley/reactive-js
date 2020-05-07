import { EnumeratorLike, EnumerableOperator } from "./interfaces";
import { lift } from "./lift";

class TakeWhileEnumerator<T> implements EnumeratorLike<T> {
  private done = false;

  constructor(
    private readonly delegate: EnumeratorLike<T>,
    private readonly predicate: (next: T) => boolean,
  ) {}

  get current() {
    return this.delegate.current;
  }

  get hasCurrent() {
    return !this.done && this.delegate.hasCurrent;
  }

  move(): boolean {
    const delegate = this.delegate;
    if (!this.done && delegate.move()) {
      this.done = !this.predicate(delegate.current);
    }

    return this.hasCurrent;
  }
}

/**
 * Returns an EnumerableLike which yields values emitted by the source as long
 * as each value satisfies the given predicate.
 *
 * @param predicate The predicate function.
 */
export const takeWhile = <T>(
  predicate: (next: T) => boolean,
): EnumerableOperator<T, T> => {
  const operator = (subscriber: EnumeratorLike<T>) =>
    new TakeWhileEnumerator(subscriber, predicate);
  return lift(operator);
};
