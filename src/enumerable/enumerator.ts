import { AbstractDisposableContainer } from "../container";
import { isDisposed, onDisposed } from "../disposable";
import { EnumerableLike } from "../enumerable";
import { pipe, raise } from "../functions";
import { LiftedStateLike } from "../liftable";
import { Option, none } from "../option";

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
    pipe(
      this,
      onDisposed(_ => this.reset()),
    );
  }

  get current(): T {
    return this.hasCurrent ? (this._current as T) : raise();
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
    return this.delegate.current;
  }

  get hasCurrent(): boolean {
    return this.delegate.hasCurrent;
  }

  abstract move(): boolean;
}

export const enumerate = <T>(enumerable: EnumerableLike<T>): Enumerator<T> =>
  enumerable.enumerate();

export const current = <T>(enumerator: Enumerator<T>) => enumerator.current;

export const hasCurrent = <T>(enumerator: Enumerator<T>) =>
  enumerator.hasCurrent;

export const move = <T>(enumerator: Enumerator<T>) => enumerator.move();
