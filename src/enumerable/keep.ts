import { Keep } from "../container";
import {
  EnumerableLike,
  EnumerableOperator,
  EnumeratorLike,
} from "../enumerable";
import { Predicate } from "../functions";
import { AbstractDelegatingEnumerator } from "./enumerator";
import { lift } from "./lift";

class KeepEnumerator<T>
  extends AbstractDelegatingEnumerator<T, T>
  implements EnumeratorLike<T>
{
  constructor(
    delegate: EnumeratorLike<T>,
    private readonly predicate: Predicate<T>,
  ) {
    super(delegate);
  }

  get current() {
    return this.delegate.current;
  }

  get hasCurrent() {
    return this.delegate.hasCurrent;
  }

  move(): boolean {
    const delegate = this.delegate;
    const predicate = this.predicate;

    try {
      while (delegate.move() && !predicate(delegate.current)) {}
    } catch (cause) {
      this.dispose({ cause });
    }

    return this.hasCurrent;
  }
}

/**
 * Returns an `EnumerableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
export const keep = <T>(predicate: Predicate<T>): EnumerableOperator<T, T> => {
  const operator = (enumerator: EnumeratorLike<T>) =>
    new KeepEnumerator(enumerator, predicate);
  return lift(operator);
};

export const keepT: Keep<EnumerableLike<unknown>> = {
  keep,
};
