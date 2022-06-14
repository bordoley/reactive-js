import { EnumerableOperator, EnumeratorLike } from "../enumerable";
import { Function1, returns } from "../functions";
import { none } from "../option";
import { AbstractDelegatingEnumerator } from "./enumerator";
import { lift } from "./lift";

class MapEnumerator<TA, TB>
  extends AbstractDelegatingEnumerator<TA, TB>
  implements EnumeratorLike<TB>
{
  current = none as unknown as TB;
  hasCurrent = false;

  constructor(
    delegate: EnumeratorLike<TA>,
    readonly mapper: Function1<TA, TB>,
  ) {
    super(delegate);
  }

  move(): boolean {
    this.current = none as unknown as TB;
    this.hasCurrent = false;

    try {
      if (this.delegate.move()) {
        this.current = this.mapper(this.delegate.current);
        this.hasCurrent = true;
      }
    } catch (cause) {
      this.hasCurrent = false;
    }

    return this.hasCurrent;
  }
}

/**
 * Returns an `EnumerableLike` that applies the `mapper` function to each
 * value emitted by the source.
 *
 * @param mapper The map function to apply each value. Must be a pure function.
 */
export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): EnumerableOperator<TA, TB> => {
  const operator = (enumerator: EnumeratorLike<TA>) =>
    new MapEnumerator(enumerator, mapper);
  return lift(operator);
};

export const mapTo = <TA, TB>(v: TB): EnumerableOperator<TA, TB> =>
  map(returns(v));
