import { AbstractDisposableContainer } from "./container";
import { addTo, dispose, isDisposed, onDisposed } from "./disposable";
import { Function1, SideEffect1, pipe, pipeLazy, raise } from "./functions";
import { LiftedStateLike } from "./liftable";
import { Option, none } from "./option";
import {
  everySatisfy,
  forEach as forEachReadonlyArray,
  map,
} from "./readonlyArray";

export abstract class Enumerator<T>
  extends AbstractDisposableContainer
  implements LiftedStateLike
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

export abstract class AbstractDelegatingEnumerator<T> extends Enumerator<T> {
  constructor(readonly delegate: Enumerator<T>) {
    super();
  }

  get current(): T {
    return current(this.delegate);
  }

  get hasCurrent(): boolean {
    return hasCurrent(this.delegate);
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

export const zip = <T>(
  enumerators: readonly Enumerator<T>[],
): Enumerator<readonly T[]> => {
  const enumerator = new ZipEnumerator(enumerators);
  pipe(enumerators, forEachReadonlyArray(addTo(enumerator)));
  return enumerator;
};
