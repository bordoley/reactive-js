import { EnumerableOperator, EnumeratorLike } from "../enumerable";
import { pipe } from "../functions";
import { Option, isNone, none } from "../option";
import { enumerate } from "./enumerator";
import { empty, fromArray } from "./fromArray";
import { lift } from "./lift";

class TakeLastEnumerator<T> implements EnumeratorLike<T> {
  private enumerator: Option<EnumeratorLike<T>> = none;

  constructor(
    private readonly delegate: EnumeratorLike<T>,
    private readonly maxCount: number,
  ) {}

  get current() {
    return this.enumerator?.current as any;
  }

  get hasCurrent() {
    return this.enumerator?.hasCurrent ?? false;
  }

  move(): boolean {
    const delegate = this.delegate;

    if (isNone(this.enumerator)) {
      const last = [];
      while (delegate.move()) {
        last.push(delegate.current);

        if (last.length > this.maxCount) {
          last.shift();
        }
      }
      this.enumerator = pipe(last, fromArray(), enumerate);
    }

    this.enumerator.move();
    return this.hasCurrent;
  }
}

/**
 * Returns an EnumerableLike that only yields the last `count` items yielded by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeLast = <T>(
  options: { readonly count?: number } = {},
): EnumerableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (enumerator: EnumeratorLike<T>) =>
    new TakeLastEnumerator(enumerator, count);
  return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
