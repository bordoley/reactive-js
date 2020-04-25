import {none } from "../../option.ts";
import { EnumeratorLike, EnumerableOperator } from "./interfaces.ts";
import { DisposableLike, AbstractDisposable } from "../../disposable.ts";
import { lift } from "./lift.ts";

class KeepTypeEnumerator<TA, TB> extends AbstractDisposable implements EnumeratorLike<TB>, DisposableLike {
  current: TB = none as unknown as TB;
  hasCurrent = false;

  constructor(
    private readonly delegate: EnumeratorLike<TA>,
    private readonly predicate: (data: unknown) => data is TB,
  ) {
    super();
  }

  move(): boolean {
    this.hasCurrent = false;
    this.current = none as unknown as TB;

    while(this.delegate.move() && !this.predicate(this.delegate.current)) {}
    const hasCurrent = this.delegate.hasCurrent;
    this.hasCurrent = hasCurrent;
    this.current = this.delegate.current as unknown as TB;
    return hasCurrent;
  }
}

/**
 * Returns an `EnumerableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
export const keepType = <TA, TB>(
  predicate: (data: unknown) => data is TB,
): EnumerableOperator<TA, TB> => {
  const operator = (enumerator: EnumeratorLike<TA>) =>
    new KeepTypeEnumerator(enumerator, predicate);
  operator.isSynchronous = true;
  return lift(operator);
};

/**
 * Returns an `EnumerableLike` that only emits items produced by the
 * source that satisfy the specified predicate.
 *
 * @param predicate The predicate function.
 */
export const keep = <T>(
  predicate: (data: T) => boolean,
): EnumerableOperator<T, T> =>
  keepType(predicate as (data: unknown) => data is T);
