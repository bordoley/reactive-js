/// <reference types="./asyncEnumerator.d.ts" />
import { Disposable } from './disposable.mjs';
import { raise } from './functions.mjs';

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
}

export { AsyncEnumerator };
