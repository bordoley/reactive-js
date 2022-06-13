import {
  AbstractDisposable,
  addDisposableDisposeParentOnChildError,
  addTeardown,
} from "../disposable";
import {
  EnumerableLike,
  EnumerableOperator,
  EnumeratorLike,
} from "../enumerable";
import { Option, isNone, isSome, none } from "../option";
import { enumerate } from "./enumerator";
import { lift } from "./lift";

class ConcatAllEnumerator<T>
  extends AbstractDisposable
  implements EnumeratorLike<T>
{
  current = none as unknown as T;
  hasCurrent = false;

  private enumerator: Option<EnumeratorLike<T>> = none;

  constructor(private readonly delegate: EnumeratorLike<EnumerableLike<T>>) {
    super();
    addDisposableDisposeParentOnChildError(this, delegate);
    addTeardown(this, () => {
      this.enumerator = none;
    });
  }

  move(): boolean {
    this.current = none as unknown as T;
    this.hasCurrent = false;

    const delegate = this.delegate;
    if (isNone(this.enumerator) && delegate.move()) {
      const enumerator = enumerate(delegate.current);
      addDisposableDisposeParentOnChildError(this, enumerator);
      this.enumerator = enumerator;
    }

    while (isSome(this.enumerator)) {
      const enumerator = this.enumerator;

      if (enumerator.move()) {
        this.current = enumerator.current;
        this.hasCurrent = true;
        break;
      } else if (delegate.move()) {
        this.enumerator = enumerate(delegate.current);
      } else {
        this.enumerator = none;
      }
    }

    if (!this.hasCurrent) {
      this.dispose();
    }

    return this.hasCurrent;
  }
}

const operator = <T>(enumerator: EnumeratorLike<EnumerableLike<T>>) =>
  new ConcatAllEnumerator(enumerator);

const _concatAll = lift(operator);

/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
export const concatAll = <T>(): EnumerableOperator<EnumerableLike<T>, T> =>
  _concatAll;
