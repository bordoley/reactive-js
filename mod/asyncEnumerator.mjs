/// <reference types="./asyncEnumerator.d.ts" />
import { dispatch } from './dispatcher.mjs';
import { pipe } from './functions.mjs';
import { DisposableLiftable, delegate } from './liftable.mjs';
import { observerCount, replay } from './observable.mjs';

class AsyncEnumerator extends DisposableLiftable {
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
        return pipe(this, delegate, observerCount);
    }
    get replay() {
        return pipe(this, delegate, replay);
    }
    get scheduler() {
        return delegate(this).scheduler;
    }
    dispatch(req) {
        pipe(this, delegate, dispatch(req));
    }
}

export { AbstractDelegatingAsyncEnumerator, AsyncEnumerator };
