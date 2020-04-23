import {none } from "@reactive-js/option";
import { EnumeratorLike, EnumerableOperator } from "./interfaces";
import { DisposableLike, AbstractDisposable } from "@reactive-js/disposable";
import { lift } from "./lift";

class MapEnumerator<TA, TB> extends AbstractDisposable implements EnumeratorLike<TB>, DisposableLike {
  current = none as unknown as TB;
  hasCurrent = false;

  constructor(
    private readonly delegate: EnumeratorLike<TA>,
    private readonly mapper: (v: TA) => TB,
  ) {
    super();
  }

  move(): boolean {
    this.current = none as unknown as TB;
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
  const operator =  (enumerator: EnumeratorLike<TA>) => new MapEnumerator(enumerator, mapper);
  return lift(operator);
}
