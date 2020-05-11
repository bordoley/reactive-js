import { none } from "../../option";
import { EnumeratorLike, EnumerableOperator } from "./interfaces";
import { lift } from "./lift";
import { Operator } from "../../functions";

class MapEnumerator<TA, TB> implements EnumeratorLike<TB> {
  current = (none as unknown) as TB;

  constructor(
    private readonly delegate: EnumeratorLike<TA>,
    private readonly mapper: Operator<TA, TB>,
  ) {}

  get hasCurrent() {
    return this.delegate.hasCurrent;
  }

  move(): boolean {
    this.current = (none as unknown) as TB;
    this.delegate.move();
    const hasCurrent = this.hasCurrent;
    if (hasCurrent) {
      this.current = this.mapper(this.delegate.current);
    }
    return hasCurrent;
  }
}

/**
 * Returns an `EnumerableLike` that applies the `mapper` function to each
 * value emitted by the source.
 *
 * @param mapper The map function to apply each value. Must be a pure function.
 */
export const map = <TA, TB>(
  mapper: Operator<TA, TB>,
): EnumerableOperator<TA, TB> => {
  const operator = (enumerator: EnumeratorLike<TA>) =>
    new MapEnumerator(enumerator, mapper);
  return lift(operator);
};
