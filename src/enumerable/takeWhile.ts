import { EnumerableOperator, EnumeratorLike } from "../enumerable";
import { Predicate } from "../functions";
import { AbstractDelegatingEnumerator } from "./enumerator";
import { lift } from "./lift";

class TakeWhileEnumerator<T>
  extends AbstractDelegatingEnumerator<T, T>
  implements EnumeratorLike<T>
{
  private state = 0;

  constructor(
    delegate: EnumeratorLike<T>,
    private readonly predicate: Predicate<T>,
    private readonly inclusive: boolean,
  ) {
    super(delegate);
  }

  get current() {
    return this.delegate.current;
  }

  get hasCurrent() {
    return this.state < 2 && this.delegate.hasCurrent;
  }

  move(): boolean {
    const delegate = this.delegate;
    const state = this.state;

    if (state === 0 && delegate.move()) {
      try {
        const satisfiesPredicate = this.predicate(delegate.current);

        if (!satisfiesPredicate && this.inclusive) {
          this.state++;
        } else if (!satisfiesPredicate) {
          this.state = 2;
        }
      } catch (cause) {
        this.dispose({ cause });
        this.state = 2;
      }
    } else if (state < 2 && this.inclusive) {
      this.state++;
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
export const takeWhile = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
): EnumerableOperator<T, T> => {
  const { inclusive = false } = options;
  const operator = (observer: EnumeratorLike<T>) =>
    new TakeWhileEnumerator(observer, predicate, inclusive);
  return lift(operator);
};
