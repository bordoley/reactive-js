import { Predicate } from "../../functions.ts";
import { EnumeratorLike, EnumerableOperator } from "./interfaces.ts";
import { lift } from "./lift.ts";

class TakeWhileEnumerator<T> implements EnumeratorLike<T> {
  private state = 0;

  constructor(
    private readonly delegate: EnumeratorLike<T>,
    private readonly predicate: Predicate<T>,
    private readonly inclusive: boolean,
  ) {}

  get current() {
    return this.delegate.current;
  }

  get hasCurrent() {
    return this.state < 2 && this.delegate.hasCurrent;
  }

  move(): boolean {
    const delegate = this.delegate;
    const state = this.state;

    if (state === 0 && delegate.move()) {
      const satisfiesPredicate = this.predicate(delegate.current);

      if (!satisfiesPredicate && this.inclusive) {
        this.state++;
      } else if (!satisfiesPredicate) {
        this.state = 2;
      }
    } else if (state < 2 && this.inclusive) {
      this.state++;
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
  predicate: Predicate<T>,
  { inclusive } = { inclusive: false },
): EnumerableOperator<T, T> => {
  const operator = (observer: EnumeratorLike<T>) =>
    new TakeWhileEnumerator(observer, predicate, inclusive);
  return lift(operator);
};
