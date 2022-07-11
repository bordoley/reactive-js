import { DisposableLike, add, dispose } from "./disposable";
import { pipe } from "./functions";

// FIXME: Should really be generic
export class DisposableRef<T extends DisposableLike> {
  private _current: T;

  constructor(private readonly disposable: DisposableLike, defaultValue: T) {
    this._current = defaultValue;
  }

  get current(): T {
    return this._current;
  }

  set current(newCurrent: T) {
    const oldInner = this._current;
    this._current = newCurrent;

    if (oldInner !== newCurrent) {
      pipe(this.disposable, add(newCurrent));
      pipe(oldInner, dispose());
    }
  }
}
