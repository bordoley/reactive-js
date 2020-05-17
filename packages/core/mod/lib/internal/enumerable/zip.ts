import { current, enumerate, hasCurrent } from "./enumerator.ts";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumerableOperator,
} from "./interfaces.ts";

const moveAll = (enumerators: readonly EnumeratorLike<any>[]) => {
  for (const enumerator of enumerators) {
    enumerator.move();
  }
};

const allHaveCurrent = (enumerators: readonly EnumeratorLike<any>[]) =>
  enumerators.every(hasCurrent);

class ZipEnumerator implements EnumeratorLike<unknown[]> {
  current: unknown[] = [];
  hasCurrent = false;

  constructor(private readonly enumerators: readonly EnumeratorLike<any>[]) {}

  move(): boolean {
    this.hasCurrent = false;

    const enumerators = this.enumerators;
    moveAll(enumerators);
    const hasCurrent = allHaveCurrent(enumerators);
    this.hasCurrent = hasCurrent;

    this.current = hasCurrent ? enumerators.map(current) : [];

    return hasCurrent;
  }
}

export function zipEnumerators(
  enumerators: EnumeratorLike<unknown>[],
): EnumeratorLike<unknown[]> {
  return new ZipEnumerator(enumerators);
}

class ZipEnumerable implements EnumerableLike<unknown[]> {
  constructor(private readonly enumerables: EnumerableLike<unknown>[]) {}

  enumerate() {
    return zipEnumerators(this.enumerables.map(enumerate));
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
  ...enumerables: EnumerableLike<unknown>[]
): EnumerableLike<unknown[]> {
  return new ZipEnumerable(enumerables);
}

export const zipWith = <TA, TB>(
  snd: EnumerableLike<TB>,
): EnumerableOperator<TA, [TA, TB]> => fst => zip(fst, snd);
