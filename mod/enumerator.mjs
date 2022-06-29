/// <reference types="./enumerator.d.ts" />
import { AbstractDisposableContainer } from './container.mjs';
import { onDisposed, isDisposed, dispose, addTo } from './disposable.mjs';
import { pipe, pipeLazy, raise } from './functions.mjs';
import { delegate } from './liftable.mjs';
import { none } from './option.mjs';
import { everySatisfy, map, forEach as forEach$1 } from './readonlyArray.mjs';

class Enumerator extends AbstractDisposableContainer {
}
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
class AbstractDelegatingEnumerator extends AbstractEnumerator {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
}
class AbstractPassThroughEnumerator extends Enumerator {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    get current() {
        return current(delegate(this));
    }
    get hasCurrent() {
        return hasCurrent(delegate(this));
    }
}
const current = (enumerator) => enumerator.current;
const hasCurrent = (enumerator) => enumerator.hasCurrent;
const move = (enumerator) => enumerator.move();
const forEach = (f) => enumerator => {
    while (move(enumerator)) {
        f(current(enumerator));
    }
    return enumerator;
};
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
                this.current = pipe(enumerators, map(current));
            }
            else {
                pipe(this, dispose());
            }
        }
        return hasCurrent(this);
    }
}
function zip(...enumerators) {
    const enumerator = new ZipEnumerator(enumerators);
    pipe(enumerators, forEach$1(addTo(enumerator)));
    return enumerator;
}

export { AbstractDelegatingEnumerator, AbstractEnumerator, AbstractPassThroughEnumerator, Enumerator, current, forEach, hasCurrent, move, reset, zip };
