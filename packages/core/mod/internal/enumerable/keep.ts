import { EnumeratorLike, EnumerableOperator } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { Predicate, TypePredicate } from "../../functions.ts";

class KeepTypeEnumerator<TA, TB extends TA> implements EnumeratorLike<TB> {
  constructor(
    private readonly delegate: EnumeratorLike<TA>,
    private readonly predicate: TypePredicate<TA, TB>
  ) {}

  get current() {
    return (this.delegate.current as unknown) as TB;
  }

  get hasCurrent() {
    return this.delegate.hasCurrent;
  }

  move(): boolean {
    const delegate = this.delegate;

    while (delegate.move() && !this.predicate(delegate.current)) {}
    return delegate.hasCurrent;
  }
}

/**
 * Returns an `EnumerableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
export const keepType = <TA, TB extends TA>(
  predicate: TypePredicate<TA, TB>
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
export const keep = <T>(
  predicate: Predicate<T>,
): EnumerableOperator<T, T> => keepType(predicate as TypePredicate<T, T>);
