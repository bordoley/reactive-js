import { FromArray, FromArrayOptions, createFromArray } from "../container";
import { dispose, isDisposed } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { AbstractEnumerator, hasCurrent, reset } from "../enumerator";
import { callWith, instanceFactory, pipe, pipeLazy } from "../functions";
import { createEnumerable } from "./enumerable";

class ArrayEnumerator<T> extends AbstractEnumerator<T> {
  constructor(
    private readonly array: readonly T[],
    private index: number,
    private readonly endIndex: number,
  ) {
    super();
  }

  move(): boolean {
    reset(this);

    const { array } = this;

    if (!isDisposed(this)) {
      this.index++;
      const { index, endIndex } = this;

      if (index < endIndex) {
        this.current = array[index];
      } else {
        pipe(this, dispose());
      }
    }

    return hasCurrent(this);
  }
}

/**
 * Returns an EnumerableLike view over the `values` array.
 *
 * @param values
 */
export const fromArray = createFromArray<EnumerableLike<unknown>>(
  <T>(values: readonly T[], startIndex: number, endIndex: number) =>
    createEnumerable(
      pipeLazy(
        instanceFactory<readonly T[], number, number, ArrayEnumerator<T>>(
          ArrayEnumerator,
        ),
        callWith(values, startIndex - 1, endIndex),
      ),
    ),
);

export const fromArrayT: FromArray<
  EnumerableLike<unknown>,
  FromArrayOptions
> = {
  fromArray,
};
