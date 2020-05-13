import { strictEquality, Equality } from "../../functions.ts";
import { EnumerableFunction, EnumeratorLike } from "./interfaces.ts";
import { lift } from "./lift.ts";

class DistinctUntilChangedEnumerator<T> implements EnumeratorLike<T> {
  constructor(
    private readonly delegate: EnumeratorLike<T>,
    private readonly equality: Equality<T>,
  ) {}

  get current() {
    return this.delegate.current;
  }

  get hasCurrent() {
    return this.delegate.hasCurrent;
  }

  move(): boolean {
    const prevCurrent = this.current;
    const hadCurrent = this.hasCurrent;

    while (this.delegate.move()) {
      if (!hadCurrent || !this.equality(prevCurrent, this.delegate.current)) {
        break;
      }
    }

    return this.hasCurrent;
  }
}

/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
export const distinctUntilChanged = <T>(
  equality: Equality<T> = strictEquality,
): EnumerableFunction<T, T> => {
  const operator = (enumerator: EnumeratorLike<T>) =>
    new DistinctUntilChangedEnumerator(enumerator, equality);
  return lift(operator);
};
