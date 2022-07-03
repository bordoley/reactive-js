/// <reference types="./__internal__.asyncEnumerator.d.ts" />
import { getDelegate } from './__internal__.liftable.mjs';
import { AsyncEnumerator } from './asyncEnumerator.mjs';
import { dispatch } from './dispatcher.mjs';
import { pipe } from './functions.mjs';
import { getObserverCount, getReplay } from './observable.mjs';

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

export { AbstractDelegatingAsyncEnumerator };
