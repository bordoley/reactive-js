/// <reference types="./asyncEnumerator.d.ts" />
import { AbtractDisposableLiftable } from './liftable.mjs';

class AsyncEnumerator extends AbtractDisposableLiftable {
    constructor() {
        super(...arguments);
        this.isEnumerable = false;
    }
}

export { AsyncEnumerator };
