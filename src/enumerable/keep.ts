import { EnumerableOperator, EnumeratorLike } from "../enumerable";
import { Predicate, TypePredicate } from "../functions";
import { AbstractDelegatingEnumerator } from "./enumerator";
import { lift } from "./lift";

class KeepTypeEnumerator<TA, TB extends TA>
  extends AbstractDelegatingEnumerator<TA, TB>
  implements EnumeratorLike<TB>
{
  constructor(
    delegate: EnumeratorLike<TA>,
    private readonly predicate: TypePredicate<TA, TB>,
  ) {
    super(delegate);
  }

  get current() {
    return this.delegate.current as TB;
  }

  get hasCurrent() {
    return this.delegate.hasCurrent;
  }

  move(): boolean {
    const delegate = this.delegate;
    const predicate = this.predicate;

    try {
      while (delegate.move() && !predicate(delegate.current)) {}
    } catch (cause) {
      this.dispose({ cause });
    }

    return this.hasCurrent;
  }
}

/**
 * Returns an `EnumerableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
export const keepType = <TA, TB extends TA>(
  predicate: TypePredicate<TA, TB>,
): EnumerableOperator<TA, TB> => {
  const operator = (enumerator: EnumeratorLike<TA>) =>
    new KeepTypeEnumerator(enumerator, predicate);
  return lift(operator);
};

/**
 * Returns an `EnumerableLike` that only emits items produced by the
 * source that satisfy the specified predicate.
 *
 * @param predicate The predicate function.
 */
export const keep = <T>(predicate: Predicate<T>): EnumerableOperator<T, T> =>
  keepType(predicate as TypePredicate<T, T>);
