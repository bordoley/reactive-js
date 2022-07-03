/// <reference types="./__internal__.observer.d.ts" />
import { getDelegate } from './__internal__.liftable.mjs';
import { pipe, newInstance } from './functions.mjs';
import { Observer, getScheduler } from './observer.mjs';
import { notify } from './source.mjs';

class AbstractDelegatingObserver extends Observer {
    constructor(delegate) {
        super(getScheduler(delegate));
        this.delegate = delegate;
    }
    notify(_) { }
}
class DelegatingObserver extends AbstractDelegatingObserver {
    notify(next) {
        pipe(this, getDelegate, notify(next));
    }
}
const createDelegatingObserver = (delegate) => newInstance(DelegatingObserver, delegate);

export { AbstractDelegatingObserver, createDelegatingObserver };
