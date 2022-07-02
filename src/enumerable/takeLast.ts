import { TakeLast, empty } from "../container";
import { add, bindTo, isDisposed } from "../disposable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { Enumerator, getCurrent, hasCurrent, move } from "../enumerator";
import { length, newInstanceWith, pipe, raise } from "../functions";
import { Option, isNone, isSome, none } from "../option";
import { enumerate } from "./enumerable";
import { fromArray, fromArrayT } from "./fromArray";
import { lift } from "./lift";

class TakeLastEnumerator<T> extends Enumerator<T> {
  private enumerator: Option<Enumerator<T>> = none;

  constructor(
    private readonly delegate: Enumerator<T>,
    private readonly maxCount: number,
  ) {
    super();
  }

  get current(): T {
    return hasCurrent(this) ? (this.enumerator?.current as T) : raise();
  }

  get hasCurrent() {
    return this.enumerator?.hasCurrent ?? false;
  }

  move(): boolean {
    const { delegate } = this;

    if (!isDisposed(this) && isNone(this.enumerator)) {
      const last: Array<T> = [];

      while (move(delegate)) {
        last.push(getCurrent(delegate));

        if (length(last) > this.maxCount) {
          last.shift();
        }
      }
      this.enumerator = pipe(last, fromArray(), enumerate, bindTo(this));
    }

    if (isSome(this.enumerator)) {
      move(this.enumerator);
    }

    return hasCurrent(this);
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
  const operator = (delegate: Enumerator<T>) =>
    pipe(
      TakeLastEnumerator,
      newInstanceWith<TakeLastEnumerator<T>, Enumerator<T>, number>(
        delegate,
        count,
      ),
      add(delegate),
    );
  return enumerable =>
    count > 0
      ? pipe(enumerable, lift(operator))
      : // FIXME: why do we need the annotations?
        empty<EnumerableLike<unknown>, T>(fromArrayT);
};

export const takeLastT: TakeLast<EnumerableLike<unknown>> = {
  takeLast,
};
