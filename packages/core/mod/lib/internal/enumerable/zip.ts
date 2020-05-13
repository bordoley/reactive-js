import {
  Function2,
  Function3,
  Function4,
  Function5,
  Function6,
  Function7,
  Function8,
  Function9,
} from "../../functions.ts";
import { none } from "../../option.ts";
import { current, enumerate, hasCurrent } from "./enumerator.ts";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumerableFunction,
} from "./interfaces.ts";

const moveAll = (enumerators: readonly EnumeratorLike<any>[]) => {
  for (const enumerator of enumerators) {
    enumerator.move();
  }
};

const allHaveCurrent = (enumerators: readonly EnumeratorLike<any>[]) =>
  enumerators.every(hasCurrent);

class ZipEnumerator<T> implements EnumeratorLike<T> {
  current = (none as unknown) as T;
  hasCurrent = false;

  constructor(
    private readonly enumerators: readonly EnumeratorLike<any>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {}

  move(): boolean {
    this.current = (none as unknown) as T;
    this.hasCurrent = false;

    const enumerators = this.enumerators;
    moveAll(enumerators);
    const hasCurrent = allHaveCurrent(enumerators);
    this.hasCurrent = hasCurrent;

    if (hasCurrent) {
      this.current = this.selector(...enumerators.map(current));
    }

    return hasCurrent;
  }
}

export function zipEnumerators<T>(
  enumerators: EnumeratorLike<unknown>[],
  selector: (...values: unknown[]) => T,
): EnumeratorLike<T> {
  return new ZipEnumerator(enumerators, selector);
}

class ZipEnumerable<T> implements EnumerableLike<T> {
  constructor(
    private readonly enumerables: EnumerableLike<unknown>[],
    private readonly selector: (...values: unknown[]) => T,
  ) {}

  enumerate() {
    return zipEnumerators(this.enumerables.map(enumerate), this.selector);
  }
}

export function zip<TA, TB, T>(
  observables: [EnumerableLike<TA>, EnumerableLike<TB>],
  selector: Function2<TA, TB, T>,
): EnumerableLike<T>;
export function zip<TA, TB, TC, T>(
  observables: [EnumerableLike<TA>, EnumerableLike<TB>, EnumerableLike<TC>],
  selector: Function3<TA, TB, TC, T>,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
  ],
  selector: Function4<TA, TB, TC, TD, T>,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, TE, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
    EnumerableLike<TE>,
  ],
  selector: Function5<TA, TB, TC, TD, TE, T>,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
    EnumerableLike<TE>,
    EnumerableLike<TF>,
  ],
  selector: Function6<TA, TB, TC, TD, TE, TF, T>,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
    EnumerableLike<TE>,
    EnumerableLike<TF>,
    EnumerableLike<TG>,
  ],
  selector: Function7<TA, TB, TC, TD, TE, TF, TG, T>,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
    EnumerableLike<TE>,
    EnumerableLike<TF>,
    EnumerableLike<TG>,
    EnumerableLike<TH>,
  ],
  selector: Function8<TA, TB, TC, TD, TE, TF, TG, TH, T>,
): EnumerableLike<T>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI, T>(
  observables: [
    EnumerableLike<TA>,
    EnumerableLike<TB>,
    EnumerableLike<TC>,
    EnumerableLike<TD>,
    EnumerableLike<TE>,
    EnumerableLike<TF>,
    EnumerableLike<TG>,
    EnumerableLike<TH>,
    EnumerableLike<TI>,
  ],
  selector: Function9<TA, TB, TC, TD, TE, TF, TG, TH, TI, T>,
): EnumerableLike<T>;

/**
 * Combines multiple EnumerableLikes to create an EnumerableLike whose values are calculated from the values,
 * in order, of each of its inputs.
 */
export function zip<T>(
  enumerables: EnumerableLike<unknown>[],
  selector: (...values: unknown[]) => T,
): EnumerableLike<T> {
  return new ZipEnumerable(enumerables, selector);
}

export const zipWith = <TA, TB, T>(
  snd: EnumerableLike<TB>,
  selector: Function2<TA, TB, T>,
): EnumerableFunction<TA, T> => fst => zip([fst, snd], selector);
