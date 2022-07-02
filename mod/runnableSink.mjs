/// <reference types="./runnableSink.d.ts" />
import { DisposableContainer } from './container.mjs';
import { isDisposed } from './disposable.mjs';
import { __DEV__ } from './env.mjs';
import { raise, pipe, newInstance } from './functions.mjs';
import { getDelegate } from './liftable.mjs';
import { notify } from './source.mjs';

class RunnableSink extends DisposableContainer {
    assertState() { }
    notify(_) { }
}
if (__DEV__) {
    RunnableSink.prototype.assertState = function () {
        if (isDisposed(this)) {
            raise("RunnableSink is disposed");
        }
    };
}
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

export { AbstractDelegatingRunnableSink, RunnableSink, createDelegatingRunnableSink };
