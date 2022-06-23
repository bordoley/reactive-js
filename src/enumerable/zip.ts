import { Zip } from "../container";
import { addDisposableDisposeParentOnChildError } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { pipe } from "../functions";
import { everySatisfy, map } from "../readonlyArray";
import { AbstractEnumerable } from "./enumerable";
import {
  Enumerator,
  EnumeratorBase,
  current,
  enumerate,
  hasCurrent,
} from "./enumerator";

const moveAll = (enumerators: readonly Enumerator<any>[]) => {
  for (const enumerator of enumerators) {
    enumerator.move();
  }
};

const allHaveCurrent = (enumerators: readonly Enumerator<any>[]) =>
  pipe(enumerators, everySatisfy(hasCurrent));

class ZipEnumerator extends EnumeratorBase<readonly unknown[]> {
  constructor(private readonly enumerators: readonly Enumerator<any>[]) {
    super();
  }

  move(): boolean {
    this.reset();

    if (!this.isDisposed) {
      const { enumerators } = this;
      moveAll(enumerators);

      if (allHaveCurrent(enumerators)) {
        this.current = pipe(enumerators, map(current));
      } else {
        this.dispose();
      }
    }

    return this.hasCurrent;
  }
}

export const zipEnumerators = (
  enumerators: readonly Enumerator<unknown>[],
): Enumerator<readonly unknown[]> => {
  const enumerator = new ZipEnumerator(enumerators);
  for (const delegate of enumerators) {
    addDisposableDisposeParentOnChildError(enumerator, delegate);
  }
  return enumerator;
};

class ZipEnumerable extends AbstractEnumerable<readonly unknown[]> {
  constructor(
    private readonly enumerables: readonly EnumerableLike<unknown>[],
  ) {
    super();
  }

  enumerate() {
    return pipe(this.enumerables, map(enumerate), zipEnumerators);
  }
}

export function zip<TA, TB>(
  a: EnumerableLike<TA>,
  b: EnumerableLike<TB>,
): EnumerableLike<[TA, TB]>;
export function zip<TA, TB, TC>(
  a: EnumerableLike<TA>,
  b: EnumerableLike<TB>,
  c: EnumerableLike<TC>,
): EnumerableLike<[TA, TB, TC]>;
export function zip<TA, TB, TC, TD>(
  a: EnumerableLike<TA>,
  b: EnumerableLike<TB>,
  c: EnumerableLike<TC>,
  d: EnumerableLike<TD>,
): EnumerableLike<[TA, TB, TC, TD]>;
export function zip<TA, TB, TC, TD, TE>(
  a: EnumerableLike<TA>,
  b: EnumerableLike<TB>,
  c: EnumerableLike<TC>,
  d: EnumerableLike<TD>,
  e: EnumerableLike<TE>,
): EnumerableLike<[TA, TB, TC, TD, TE]>;
export function zip<TA, TB, TC, TD, TE, TF>(
  a: EnumerableLike<TA>,
  b: EnumerableLike<TB>,
  c: EnumerableLike<TC>,
  d: EnumerableLike<TD>,
  e: EnumerableLike<TE>,
  f: EnumerableLike<TF>,
): EnumerableLike<[TA, TB, TC, TD, TE, TF]>;
export function zip<TA, TB, TC, TD, TE, TF, TG>(
  a: EnumerableLike<TA>,
  b: EnumerableLike<TB>,
  c: EnumerableLike<TC>,
  d: EnumerableLike<TD>,
  e: EnumerableLike<TE>,
  f: EnumerableLike<TF>,
  g: EnumerableLike<TG>,
): EnumerableLike<[TA, TB, TC, TD, TE, TF, TG]>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH>(
  a: EnumerableLike<TA>,
  b: EnumerableLike<TB>,
  c: EnumerableLike<TC>,
  d: EnumerableLike<TD>,
  e: EnumerableLike<TE>,
  f: EnumerableLike<TF>,
  g: EnumerableLike<TG>,
  h: EnumerableLike<TH>,
): EnumerableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: EnumerableLike<TA>,
  b: EnumerableLike<TB>,
  c: EnumerableLike<TC>,
  d: EnumerableLike<TD>,
  e: EnumerableLike<TE>,
  f: EnumerableLike<TF>,
  g: EnumerableLike<TG>,
  h: EnumerableLike<TH>,
  i: EnumerableLike<TI>,
): EnumerableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;

/**
 * Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
 * in order, of each of its inputs.
 */
export function zip(
  ...enumerables: readonly EnumerableLike<unknown>[]
): EnumerableLike<readonly unknown[]> {
  return new ZipEnumerable(enumerables);
}

export const zipT: Zip<EnumerableLike<unknown>> = {
  zip,
};
