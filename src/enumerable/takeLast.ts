import { empty } from "../container";
import {
  AbstractDisposable,
  addDisposableDisposeParentOnChildError,
  bindDisposables,
} from "../disposable";
import {
  EnumerableLike,
  EnumerableOperator,
  EnumeratorLike,
} from "../enumerable";
import { pipe } from "../functions";
import { Option, isNone, none } from "../option";
import { enumerate } from "./enumerator";
import { fromArray, fromArrayT } from "./fromArray";
import { lift } from "./lift";

class TakeLastEnumerator<T>
  extends AbstractDisposable
  implements EnumeratorLike<T>
{
  private enumerator: Option<EnumeratorLike<T>> = none;

  constructor(
    private readonly delegate: EnumeratorLike<T>,
    private readonly maxCount: number,
  ) {
    super();
  }

  get current() {
    return this.enumerator?.current as any;
  }

  get hasCurrent() {
    return this.enumerator?.hasCurrent ?? false;
  }

  move(): boolean {
    const delegate = this.delegate;

    if (isNone(this.enumerator)) {
      const last: Array<T> = [];

      while (delegate.move()) {
        last.push(delegate.current);

        if (last.length > this.maxCount) {
          last.shift();
        }
      }
      this.enumerator = pipe(last, fromArray(), enumerate);
      bindDisposables(this, this.enumerator);
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
  const operator = (delegate: EnumeratorLike<T>) => {
    const enumerator = new TakeLastEnumerator(delegate, count);
    addDisposableDisposeParentOnChildError(enumerator, delegate);
    return enumerator;
  };
  return enumerable =>
    count > 0
      ? pipe(enumerable, lift(operator))
      : // FIXME: why do we need the annotations?
        empty<EnumerableLike<unknown>, T>(fromArrayT);
};
