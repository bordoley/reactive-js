import { ConcatAll } from "../container";
import {
  SerialDisposableLike,
  add,
  bindTo,
  createSerialDisposable,
  dispose,
  isDisposed,
} from "../disposable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import {
  AbstractDelegatingEnumerator,
  Enumerator,
  current,
  hasCurrent,
  move,
  reset,
} from "../enumerator";
import { newInstanceWith, pipe } from "../functions";
import { enumerate } from "./enumerable";
import { lift } from "./lift";

class ConcatAllEnumerator<T> extends AbstractDelegatingEnumerator<
  EnumerableLike<T>,
  T
> {
  constructor(
    delegate: Enumerator<EnumerableLike<T>>,
    readonly enumerator: SerialDisposableLike,
  ) {
    super(delegate);
  }

  move(): boolean {
    reset(this);

    const { delegate, enumerator } = this;

    if (isDisposed(enumerator.inner) && move(delegate)) {
      enumerator.inner = pipe(delegate, current, enumerate);
    }

    while (
      enumerator.inner instanceof Enumerator &&
      !isDisposed(enumerator.inner)
    ) {
      if (move(enumerator.inner)) {
        this.current = current(enumerator.inner);
        break;
      } else if (move(delegate)) {
        enumerator.inner = pipe(delegate, current, enumerate);
      } else {
        pipe(this, dispose());
      }
    }

    return hasCurrent(this);
  }
}

const operator = <T>(delegate: Enumerator<EnumerableLike<T>>) => {
  const inner = createSerialDisposable();
  return pipe(
    ConcatAllEnumerator,
    newInstanceWith<
      Enumerator<EnumerableLike<T>>,
      SerialDisposableLike,
      ConcatAllEnumerator<T>
    >(delegate, inner),
    bindTo(inner),
    add(delegate),
  );
};

/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
export const concatAll = <T>(): EnumerableOperator<EnumerableLike<T>, T> =>
  lift(operator);

export const concatAllT: ConcatAll<EnumerableLike<unknown>> = {
  concatAll,
};
