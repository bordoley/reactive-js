import { EnumeratorLike, EnumerableOperator } from "./interfaces";
import { lift } from "./lift";
import { Predicate } from "../../functions";

class KeepTypeEnumerator<TA, TB extends TA> implements EnumeratorLike<TB> {
  constructor(
    private readonly delegate: EnumeratorLike<TA>,
    private readonly predicate: (data: TA) => data is TB,
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
  predicate: (data: TA) => data is TB,
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
): EnumerableOperator<T, T> => keepType(predicate as (data: T) => data is T);
