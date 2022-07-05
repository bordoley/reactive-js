/// <reference types="./__internal__.enumerator.d.ts" />
import { everySatisfy, map, forEach } from './__internal__.readonlyArray.mjs';
import { onDisposed, isDisposed, dispose, addTo } from './disposable.mjs';
import { Enumerator, hasCurrent, move, getCurrent } from './enumerator.mjs';
import { pipe, pipeLazy, raise, newInstance } from './functions.mjs';
import { none } from './option.mjs';

class AbstractEnumerator extends Enumerator {
    constructor() {
        super();
        this._current = none;
        this._hasCurrent = false;
        pipe(this, onDisposed(pipeLazy(this, reset)));
    }
    get current() {
        return hasCurrent(this) ? this._current : raise();
    }
    set current(v) {
        if (!isDisposed(this)) {
            this._current = v;
            this._hasCurrent = true;
        }
    }
    get hasCurrent() {
        return this._hasCurrent;
    }
    reset() {
        this._current = none;
        this._hasCurrent = false;
    }
}
const reset = (enumerator) => enumerator.reset();
const moveAll = (enumerators) => {
    for (const enumerator of enumerators) {
        move(enumerator);
    }
};
const allHaveCurrent = (enumerators) => pipe(enumerators, everySatisfy(hasCurrent));
class ZipEnumerator extends AbstractEnumerator {
    constructor(enumerators) {
        super();
        this.enumerators = enumerators;
    }
    move() {
        reset(this);
        if (!isDisposed(this)) {
            const { enumerators } = this;
            moveAll(enumerators);
            if (allHaveCurrent(enumerators)) {
                this.current = pipe(enumerators, map(getCurrent));
            }
            else {
                pipe(this, dispose());
            }
        }
        return hasCurrent(this);
    }
}
function zip(...enumerators) {
    const enumerator = newInstance(ZipEnumerator, enumerators);
    pipe(enumerators, forEach(addTo(enumerator)));
    return enumerator;
}

export { AbstractEnumerator, reset, zip };
