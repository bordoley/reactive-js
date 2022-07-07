/// <reference types="./__internal__.disposable.d.ts" />
import { add, dispose } from './disposable.mjs';
import { pipe } from './functions.mjs';

// FIXME: Should really be generic
class DisposableRef {
    constructor(disposable, defaultValue) {
        this.disposable = disposable;
        this._current = defaultValue;
    }
    get current() {
        return this._current;
    }
    set current(newCurrent) {
        const oldInner = this._current;
        this._current = newCurrent;
        if (oldInner !== newCurrent) {
            pipe(this.disposable, add(newCurrent));
            pipe(oldInner, dispose());
        }
    }
}

export { DisposableRef };
