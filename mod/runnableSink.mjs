/// <reference types="./runnableSink.d.ts" />
import { AbstractDisposableContainer } from './container.mjs';
import { isDisposed } from './disposable.mjs';
import { __DEV__ } from './env.mjs';
import { raise, newInstance } from './functions.mjs';
import { delegate } from './liftable.mjs';

class RunnableSink extends AbstractDisposableContainer {
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
        delegate(this).notify(next);
    }
}
const createDelegatingRunnableSink = (delegate) => newInstance(DelegatingRunnableSink, delegate);

export { AbstractDelegatingRunnableSink, RunnableSink, createDelegatingRunnableSink };
