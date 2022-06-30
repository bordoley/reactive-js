/// <reference types="./asyncEnumerator.d.ts" />
import { dispatch } from './dispatcher.mjs';
import { pipe } from './functions.mjs';
import { AbstractDisposableLiftable, delegate } from './liftable.mjs';
import { observerCount, replay } from './observable.mjs';

class AsyncEnumerator extends AbstractDisposableLiftable {
    constructor() {
        super(...arguments);
        this.isEnumerable = false;
    }
}
class AbstractDelegatingAsyncEnumerator extends AsyncEnumerator {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    get observerCount() {
        return observerCount(this.delegate);
    }
    get replay() {
        return replay(this.delegate);
    }
    get scheduler() {
        return this.delegate.scheduler;
    }
    dispatch(req) {
        pipe(delegate(this), dispatch(req));
    }
}

export { AbstractDelegatingAsyncEnumerator, AsyncEnumerator };
