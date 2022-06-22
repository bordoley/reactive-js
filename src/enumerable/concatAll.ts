import {
  SerialDisposableLike,
  addDisposableDisposeParentOnChildError,
  bindDisposables,
  createSerialDisposable,
} from "../disposable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { Enumerator, EnumeratorBase, enumerate } from "./enumerator";
import { lift } from "./lift";

class ConcatAllEnumerator<T> extends EnumeratorBase<T> {
  constructor(
    private readonly delegate: Enumerator<EnumerableLike<T>>,
    readonly enumerator: SerialDisposableLike,
  ) {
    super();
  }

  move(): boolean {
    this.reset();

    const { delegate, enumerator } = this;

    if (enumerator.inner.isDisposed && delegate.move()) {
      enumerator.inner = enumerate(delegate.current);
    }

    while (
      enumerator.inner instanceof Enumerator &&
      !enumerator.inner.isDisposed
    ) {
      if (enumerator.inner.move()) {
        this.current = enumerator.inner.current;
        break;
      } else if (delegate.move()) {
        enumerator.inner = enumerate(delegate.current);
      } else {
        this.dispose();
      }
    }

    return this.hasCurrent;
  }
}

const operator = <T>(delegate: Enumerator<EnumerableLike<T>>) => {
  const inner = createSerialDisposable();
  const enumerator = new ConcatAllEnumerator(delegate, inner);
  bindDisposables(enumerator, inner);
  addDisposableDisposeParentOnChildError(enumerator, delegate);

  return enumerator;
};

/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
export const concatAll = <T>(): EnumerableOperator<EnumerableLike<T>, T> =>
  lift(operator);
