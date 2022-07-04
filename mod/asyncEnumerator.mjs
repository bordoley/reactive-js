/// <reference types="./asyncEnumerator.d.ts" />
import { dispatch } from './dispatcher.mjs';
import { Disposable } from './disposable.mjs';
import { raise, pipe } from './functions.mjs';
import { none } from './option.mjs';

class AsyncEnumerator extends Disposable {
    constructor() {
        super(...arguments);
        this.isEnumerable = false;
    }
    get T() {
        return raise();
    }
    get TContainerOf() {
        return this;
    }
    get TLiftableState() {
        return raise();
    }
    move() {
        pipe(this, dispatch(none));
    }
}

export { AsyncEnumerator };
