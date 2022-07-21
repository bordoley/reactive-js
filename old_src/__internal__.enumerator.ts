import {
  everySatisfy,
  forEach as forEachReadonlyArray,
  map,
} from "./__internal__.readonlyArray";
import {
  Disposable,
  addTo,
  dispose,
  isDisposed,
  onDisposed,
} from "./disposable";
import { EnumeratorLike, getCurrent, hasCurrent, move } from "./enumerator";
import { newInstance, pipe, pipeLazy, raise } from "./functions";
import { Option, none } from "./option";

const moveAll = (enumerators: readonly EnumeratorLike<any>[]) => {
  for (const enumerator of enumerators) {
    move(enumerator);
  }
};

const allHaveCurrent = (enumerators: readonly EnumeratorLike<any>[]) =>
  pipe(enumerators, everySatisfy(hasCurrent));

class ZipEnumerator<T> extends AbstractEnumerator<readonly T[]> {
  constructor(private readonly enumerators: readonly EnumeratorLike<T>[]) {
    super();
  }

  move(): boolean {
    reset(this);

    if (!isDisposed(this)) {
      const { enumerators } = this;
      moveAll(enumerators);

      if (allHaveCurrent(enumerators)) {
        this.current = pipe(enumerators, map(getCurrent));
      } else {
        pipe(this, dispose());
      }
    }

    return hasCurrent(this);
  }
}

export function zip<TA, TB>(
  a: EnumeratorLike<TA>,
  b: EnumeratorLike<TB>,
): EnumeratorLike<readonly [TA, TB]>;
export function zip<TA, TB, TC>(
  a: EnumeratorLike<TA>,
  b: EnumeratorLike<TB>,
  c: EnumeratorLike<TC>,
): EnumeratorLike<readonly [TA, TB, TC]>;
export function zip<TA, TB, TC, TD>(
  a: EnumeratorLike<TA>,
  b: EnumeratorLike<TB>,
  c: EnumeratorLike<TC>,
  d: EnumeratorLike<TD>,
): EnumeratorLike<readonly [TA, TB, TC, TD]>;
export function zip<TA, TB, TC, TD, TE>(
  a: EnumeratorLike<TA>,
  b: EnumeratorLike<TB>,
  c: EnumeratorLike<TC>,
  d: EnumeratorLike<TD>,
  e: EnumeratorLike<TE>,
): EnumeratorLike<readonly [TA, TB, TC, TD, TE]>;
export function zip<TA, TB, TC, TD, TE, TF>(
  a: EnumeratorLike<TA>,
  b: EnumeratorLike<TB>,
  c: EnumeratorLike<TC>,
  d: EnumeratorLike<TD>,
  e: EnumeratorLike<TE>,
  f: EnumeratorLike<TF>,
): EnumeratorLike<readonly [TA, TB, TC, TD, TE, TF]>;
export function zip<TA, TB, TC, TD, TE, TF, TG>(
  a: EnumeratorLike<TA>,
  b: EnumeratorLike<TB>,
  c: EnumeratorLike<TC>,
  d: EnumeratorLike<TD>,
  e: EnumeratorLike<TE>,
  f: EnumeratorLike<TF>,
  g: EnumeratorLike<TG>,
): EnumeratorLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH>(
  a: EnumeratorLike<TA>,
  b: EnumeratorLike<TB>,
  c: EnumeratorLike<TC>,
  d: EnumeratorLike<TD>,
  e: EnumeratorLike<TE>,
  f: EnumeratorLike<TF>,
  g: EnumeratorLike<TG>,
  h: EnumeratorLike<TH>,
): EnumeratorLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: EnumeratorLike<TA>,
  b: EnumeratorLike<TB>,
  c: EnumeratorLike<TC>,
  d: EnumeratorLike<TD>,
  e: EnumeratorLike<TE>,
  f: EnumeratorLike<TF>,
  g: EnumeratorLike<TG>,
  h: EnumeratorLike<TH>,
  i: EnumeratorLike<TI>,
): EnumeratorLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
export function zip<T>(
  ...enumerators: readonly EnumeratorLike<T>[]
): EnumeratorLike<readonly T[]>;
export function zip(
  ...enumerators: readonly EnumeratorLike<unknown>[]
): EnumeratorLike<readonly any[]> {
  const enumerator = newInstance(ZipEnumerator, enumerators);
  pipe(enumerators, forEachReadonlyArray(addTo(enumerator)));
  return enumerator;
}
