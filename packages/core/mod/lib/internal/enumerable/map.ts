import { Function } from "../../functions.ts";
import { none } from "../../option.ts";
import { EnumeratorLike, EnumerableFunction } from "./interfaces.ts";
import { lift } from "./lift.ts";

class MapEnumerator<TA, TB> implements EnumeratorLike<TB> {
  current = (none as unknown) as TB;
  hasCurrent = false;

  constructor(
    readonly delegate: EnumeratorLike<TA>,
    readonly mapper: Function<TA, TB>,
  ) {}

  move(): boolean {
    this.current = (none as unknown) as TB;
    
    const hasCurrent = this.delegate.move();
    this.hasCurrent = hasCurrent;

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
  mapper: Function<TA, TB>,
): EnumerableFunction<TA, TB> => {
  const operator = (enumerator: EnumeratorLike<TA>) =>
    new MapEnumerator(enumerator, mapper);
  return lift(operator);
};
