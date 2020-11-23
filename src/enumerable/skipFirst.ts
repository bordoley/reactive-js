import { EnumeratorLike, EnumerableOperator } from "../enumerable";
import { lift } from "./lift";

class SkipFirstEnumerator<T> implements EnumeratorLike<T> {
  private count = 0;

  constructor(
    private readonly delegate: EnumeratorLike<T>,
    private readonly skipCount: number,
  ) {}

  get current() {
    return this.delegate.current;
  }

  get hasCurrent() {
    return this.delegate.hasCurrent;
  }

  move(): boolean {
    const skipCount = this.skipCount;

    for (let count = this.count; count < skipCount; count++) {
      if (!this.delegate.move()) {
        break;
      }
    }

    this.count = skipCount;
    return this.delegate.move();
  }
}

/**
 * Returns an EnumerableLike that skips the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const skipFirst = <T>(
  options: { readonly count?: number } = {},
): EnumerableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (enumerator: EnumeratorLike<T>) =>
    new SkipFirstEnumerator(enumerator, count);
  return lift(operator);
};
