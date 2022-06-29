import { AbstractDisposableContainer } from "./container";
import { addTo, dispose, isDisposed, onDisposed } from "./disposable";
import { Function1, SideEffect1, pipe, pipeLazy, raise } from "./functions";
import { LiftableStateLike, delegate } from "./liftable";
import { Option, none } from "./option";
import {
  everySatisfy,
  forEach as forEachReadonlyArray,
  map,
} from "./readonlyArray";

export abstract class Enumerator<T>
  extends AbstractDisposableContainer
  implements LiftableStateLike
{
  abstract get current(): T;
  abstract get hasCurrent(): boolean;

  abstract move(): boolean;
}

export abstract class AbstractEnumerator<T> extends Enumerator<T> {
  private _current: Option<T> = none;
  private _hasCurrent = false;

  constructor() {
    super();
    pipe(this, onDisposed(pipeLazy(this, reset)));
  }

  get current(): T {
    return hasCurrent(this) ? (this._current as T) : raise();
  }

  set current(v: T) {
    if (!isDisposed(this)) {
      this._current = v;
      this._hasCurrent = true;
    }
  }

  get hasCurrent(): boolean {
    return this._hasCurrent;
  }

  reset() {
    this._current = none;
    this._hasCurrent = false;
  }

  abstract move(): boolean;
}

export abstract class AbstractDelegatingEnumerator<
  TIn,
  TOut,
> extends AbstractEnumerator<TOut> {
  constructor(readonly delegate: Enumerator<TIn>) {
    super();
  }
}

export abstract class AbstractPassThroughEnumerator<T> extends Enumerator<T> {
  constructor(readonly delegate: Enumerator<T>) {
    super();
  }

  get current(): T {
    return current(delegate(this));
  }

  get hasCurrent(): boolean {
    return hasCurrent(delegate(this));
  }

  abstract move(): boolean;
}

export const current = <T>(enumerator: Enumerator<T>): T => enumerator.current;

export const hasCurrent = <T>(enumerator: Enumerator<T>) =>
  enumerator.hasCurrent;

export const move = <T>(enumerator: Enumerator<T>) => enumerator.move();

export const forEach =
  <T, TEnumerator extends Enumerator<T> = Enumerator<T>>(
    f: SideEffect1<T>,
  ): Function1<TEnumerator, TEnumerator> =>
  enumerator => {
    while (move(enumerator)) {
      f(current(enumerator));
    }
    return enumerator;
  };

export const reset = <T>(enumerator: AbstractEnumerator<T>) =>
  enumerator.reset();

const moveAll = (enumerators: readonly Enumerator<any>[]) => {
  for (const enumerator of enumerators) {
    move(enumerator);
  }
};

const allHaveCurrent = (enumerators: readonly Enumerator<any>[]) =>
  pipe(enumerators, everySatisfy(hasCurrent));

class ZipEnumerator<T> extends AbstractEnumerator<readonly T[]> {
  constructor(private readonly enumerators: readonly Enumerator<T>[]) {
    super();
  }

  move(): boolean {
    reset(this);

    if (!isDisposed(this)) {
      const { enumerators } = this;
      moveAll(enumerators);

      if (allHaveCurrent(enumerators)) {
        this.current = pipe(enumerators, map(current));
      } else {
        pipe(this, dispose());
      }
    }

    return hasCurrent(this);
  }
}

export function zip<TA, TB>(
  a: Enumerator<TA>,
  b: Enumerator<TB>,
): Enumerator<readonly [TA, TB]>;
export function zip<TA, TB, TC>(
  a: Enumerator<TA>,
  b: Enumerator<TB>,
  c: Enumerator<TC>,
): Enumerator<readonly [TA, TB, TC]>;
export function zip<TA, TB, TC, TD>(
  a: Enumerator<TA>,
  b: Enumerator<TB>,
  c: Enumerator<TC>,
  d: Enumerator<TD>,
): Enumerator<readonly [TA, TB, TC, TD]>;
export function zip<TA, TB, TC, TD, TE>(
  a: Enumerator<TA>,
  b: Enumerator<TB>,
  c: Enumerator<TC>,
  d: Enumerator<TD>,
  e: Enumerator<TE>,
): Enumerator<readonly [TA, TB, TC, TD, TE]>;
export function zip<TA, TB, TC, TD, TE, TF>(
  a: Enumerator<TA>,
  b: Enumerator<TB>,
  c: Enumerator<TC>,
  d: Enumerator<TD>,
  e: Enumerator<TE>,
  f: Enumerator<TF>,
): Enumerator<readonly [TA, TB, TC, TD, TE, TF]>;
export function zip<TA, TB, TC, TD, TE, TF, TG>(
  a: Enumerator<TA>,
  b: Enumerator<TB>,
  c: Enumerator<TC>,
  d: Enumerator<TD>,
  e: Enumerator<TE>,
  f: Enumerator<TF>,
  g: Enumerator<TG>,
): Enumerator<readonly [TA, TB, TC, TD, TE, TF, TG]>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH>(
  a: Enumerator<TA>,
  b: Enumerator<TB>,
  c: Enumerator<TC>,
  d: Enumerator<TD>,
  e: Enumerator<TE>,
  f: Enumerator<TF>,
  g: Enumerator<TG>,
  h: Enumerator<TH>,
): Enumerator<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
export function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  a: Enumerator<TA>,
  b: Enumerator<TB>,
  c: Enumerator<TC>,
  d: Enumerator<TD>,
  e: Enumerator<TE>,
  f: Enumerator<TF>,
  g: Enumerator<TG>,
  h: Enumerator<TH>,
  i: Enumerator<TI>,
): Enumerator<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
export function zip<T>(
  ...enumerators: readonly Enumerator<T>[]
): Enumerator<readonly T[]>;
export function zip(
  ...enumerators: readonly Enumerator<unknown>[]
): Enumerator<readonly any[]> {
  const enumerator = new ZipEnumerator(enumerators);
  pipe(enumerators, forEachReadonlyArray(addTo(enumerator)));
  return enumerator;
}
