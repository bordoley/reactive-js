import { DisposableRef } from "../__internal__.disposable";
import { reset } from "../__internal__.enumerator";
import { ConcatAll } from "../container";
import { add, dispose, isDisposed } from "../disposable";
import { EnumerableLike, EnumerableOperator } from "../enumerable";
import { Enumerator, getCurrent, hasCurrent, move } from "../enumerator";
import { newInstance, newInstanceWith, pipe } from "../functions";
import { enumerate } from "./enumerable";
import { AbstractDelegatingEnumerator } from "./enumerator";
import { lift } from "./lift";

class ConcatAllEnumerator<T> extends AbstractDelegatingEnumerator<
  EnumerableLike<T>,
  T
> {
  private readonly enumerator = newInstance(DisposableRef, this);

  move(): boolean {
    reset(this);

    const { delegate, enumerator } = this;

    if (isDisposed(enumerator.current) && move(delegate)) {
      enumerator.current = pipe(delegate, getCurrent, enumerate);
    }

    while (
      enumerator.current instanceof Enumerator &&
      !isDisposed(enumerator.current)
    ) {
      if (move(enumerator.current)) {
        this.current = getCurrent(enumerator.current);
        break;
      } else if (move(delegate)) {
        enumerator.current = pipe(delegate, getCurrent, enumerate);
      } else {
        pipe(this, dispose());
      }
    }

    return hasCurrent(this);
  }
}

const operator = <T>(delegate: Enumerator<EnumerableLike<T>>) =>
  pipe(
    ConcatAllEnumerator,
    newInstanceWith<ConcatAllEnumerator<T>, Enumerator<EnumerableLike<T>>>(
      delegate,
    ),
    add(delegate),
  );

/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
export const concatAll = <T>(): EnumerableOperator<EnumerableLike<T>, T> =>
  lift(operator);

export const concatAllT: ConcatAll<EnumerableLike<unknown>> = {
  concatAll,
};
