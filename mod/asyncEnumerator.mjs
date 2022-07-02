/// <reference types="./asyncEnumerator.d.ts" />
import { dispatch } from './dispatcher.mjs';
import { pipe } from './functions.mjs';
import { DisposableLiftable, getDelegate } from './liftable.mjs';
import { getObserverCount, getReplay } from './observable.mjs';

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
        return pipe(this, getDelegate, getObserverCount);
    }
    get replay() {
        return pipe(this, getDelegate, getReplay);
    }
    get scheduler() {
        return getDelegate(this).scheduler;
    }
    dispatch(req) {
        pipe(this, getDelegate, dispatch(req));
    }
}

export { AbstractDelegatingAsyncEnumerator, AsyncEnumerator };
