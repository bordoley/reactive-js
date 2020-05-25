import { EnumeratorLike, EnumerableOperator } from "./interfaces.ts";
import { lift } from "./lift.ts";

class TakeFirstEnumerator<T> implements EnumeratorLike<T> {
  private count = 0;
  hasCurrent = false;

  constructor(
    private readonly delegate: EnumeratorLike<T>,
    private readonly maxCount: number,
  ) {}

  get current() {
    return this.delegate.current;
  }

  move(): boolean {
    this.hasCurrent = false;

    if (this.count < this.maxCount && this.delegate.move()) {
      this.count++;
      this.hasCurrent = this.delegate.hasCurrent;
    }

    return this.hasCurrent;
  }
}

/**
 * Returns an EnumerableLike that only yields the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeFirst = <T>(
  options: { readonly count?: number } = {},
): EnumerableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (enumerator: EnumeratorLike<T>) =>
    new TakeFirstEnumerator(enumerator, count);
  return lift(operator);
};
