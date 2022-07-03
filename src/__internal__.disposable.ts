import { Disposable, add, dispose, disposed } from "./disposable";
import { pipe } from "./functions";

// FIXME: Should really be generic
export class DisposableRef {
  private _current: Disposable = disposed;

  constructor(private readonly disposable: Disposable) {}

  get current() {
    return this._current;
  }

  set current(newCurrent: Disposable) {
    const oldInner = this._current;
    this._current = newCurrent;

    if (oldInner !== newCurrent) {
      pipe(this.disposable, add(newCurrent));
      pipe(oldInner, dispose());
    }
  }
}
