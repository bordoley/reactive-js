import { EnumerableOperator, EnumeratorLike } from "../enumerable";
import { Equality, strictEquality } from "../functions";
import { AbstractDelegatingEnumerator } from "./enumerator";
import { lift } from "./lift";

class DistinctUntilChangedEnumerator<T>
  extends AbstractDelegatingEnumerator<T, T>
  implements EnumeratorLike<T>
{
  constructor(
    delegate: EnumeratorLike<T>,
    private readonly equality: Equality<T>,
  ) {
    super(delegate);
  }

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
  options: { readonly equality?: Equality<T> } = {},
): EnumerableOperator<T, T> => {
  const { equality = strictEquality } = options;
  const operator = (enumerator: EnumeratorLike<T>) =>
    new DistinctUntilChangedEnumerator(enumerator, equality);
  return lift(operator);
};
