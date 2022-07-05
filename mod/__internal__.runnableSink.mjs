/// <reference types="./__internal__.runnableSink.d.ts" />
import { getDelegate } from './__internal__.liftable.mjs';
import { pipe, newInstance } from './functions.mjs';
import { notify } from './reactiveSink.mjs';
import { RunnableSink } from './runnableSink.mjs';

class AbstractDelegatingRunnableSink extends RunnableSink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    notify(_) { }
}
class DelegatingRunnableSink extends AbstractDelegatingRunnableSink {
    notify(next) {
        pipe(this, getDelegate, notify(next));
    }
}
const createDelegatingRunnableSink = (delegate) => newInstance(DelegatingRunnableSink, delegate);

export { AbstractDelegatingRunnableSink, createDelegatingRunnableSink };
