import { none } from "../../option.ts";
import { EnumeratorLike, EnumerableOperator } from "./interfaces.ts";
import { DisposableLike, AbstractDisposable } from "../../disposable.ts";
import { lift } from "./lift.ts";

class MapEnumerator<TA, TB> extends AbstractDisposable
  implements EnumeratorLike<TB>, DisposableLike {
  current = (none as unknown) as TB;
  hasCurrent = false;

  constructor(
    private readonly delegate: EnumeratorLike<TA>,
    private readonly mapper: (v: TA) => TB,
  ) {
    super();
  }

  move(): boolean {
    this.current = (none as unknown) as TB;
    this.delegate.move();
    const hasCurrent = this.delegate.hasCurrent;
    this.hasCurrent = hasCurrent;
    this.current = this.mapper(this.delegate.current);
    return hasCurrent;
  }
}

export const map = <TA, TB>(
  mapper: (v: TA) => TB,
): EnumerableOperator<TA, TB> => {
  const operator = (enumerator: EnumeratorLike<TA>) =>
    new MapEnumerator(enumerator, mapper);
  return lift(operator);
};
