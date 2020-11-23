import { EnumeratorLike, EnumerableOperator } from "../enumerable";
import { Predicate, TypePredicate } from "../functions";
import { none } from "../option";
import { lift } from "./lift";

class KeepTypeEnumerator<TA, TB extends TA> implements EnumeratorLike<TB> {
  hasCurrent = false;
  current: any = none;

  constructor(
    private readonly delegate: EnumeratorLike<TA>,
    private readonly predicate: TypePredicate<TA, TB>,
  ) {}

  move(): boolean {
    const delegate = this.delegate;
    const predicate = this.predicate;

    let hasCurrent = false;
    while ((hasCurrent = delegate.move()) && !predicate(delegate.current)) {}
    this.hasCurrent = hasCurrent;
    this.current = delegate.current;
    return hasCurrent;
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
