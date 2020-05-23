import { Factory, Reducer } from "../../functions";
import { EnumeratorLike, EnumerableOperator } from "./interfaces";
import { lift } from "./lift";

class ScanEnumerator<T, TAcc> implements EnumeratorLike<TAcc> {
  constructor(
    private readonly delegate: EnumeratorLike<T>,
    private readonly reducer: Reducer<T, TAcc>,
    public current: TAcc,
  ) {}

  get hasCurrent() {
    return this.delegate.hasCurrent;
  }

  move(): boolean {
    const delegate = this.delegate;
    if (delegate.move()) {
      this.current = this.reducer(this.current, this.delegate.current);
    }

    return this.hasCurrent;
  }
}

/**
 * Returns an EnumerableLike which yields values emitted by the source as long
 * as each value satisfies the given predicate.
 *
 * @param predicate The predicate function.
 */
export const scan = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): EnumerableOperator<T, TAcc> => {
  const operator = (observer: EnumeratorLike<T>) =>
    new ScanEnumerator(observer, reducer, initialValue());
  return lift(operator);
};
