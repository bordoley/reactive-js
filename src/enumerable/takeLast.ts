import { TakeLast, empty } from "../container";
import { addChildAndDisposeOnError, bindTo } from "../disposable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { pipe, raise } from "../functions";
import { Option, isNone, isSome, none } from "../option";
import { Enumerator, enumerate } from "./enumerator";
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
    return this.hasCurrent ? (this.enumerator?.current as T) : raise();
  }

  get hasCurrent() {
    return this.enumerator?.hasCurrent ?? false;
  }

  move(): boolean {
    const { delegate } = this;

    if (!this.isDisposed && isNone(this.enumerator)) {
      const last: Array<T> = [];

      while (delegate.move()) {
        last.push(delegate.current);

        if (last.length > this.maxCount) {
          last.shift();
        }
      }
      this.enumerator = pipe(last, fromArray(), enumerate, bindTo(this));
    }

    if (isSome(this.enumerator)) {
      this.enumerator.move();
    }

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
  const operator = (delegate: Enumerator<T>) =>
    pipe(
      new TakeLastEnumerator(delegate, count),
      addChildAndDisposeOnError(delegate),
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
