import { pipe } from "../../functions.ts";
import { isNone, Option, none } from "../../option.ts";
import { fromArray, empty } from "./fromArray.ts";
import { EnumeratorLike, EnumerableOperator } from "./interfaces.ts";
import { lift } from "./lift.ts";

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
      this.enumerator = fromArray(last).enumerate();
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
export const takeLast = <T>(count = 1): EnumerableOperator<T, T> => {
  const operator = (enumerator: EnumeratorLike<T>) =>
    new TakeLastEnumerator(enumerator, count);
  return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
