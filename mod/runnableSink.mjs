/// <reference types="./runnableSink.d.ts" />
import { AbstractDisposableContainer } from './container.mjs';
import { isDisposed } from './disposable.mjs';
import { __DEV__ } from './env.mjs';
import { raise } from './functions.mjs';

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
class DelegatingRunnableSink extends RunnableSink {
    constructor(delegate) {
        super();
        this.delegate = delegate;
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
const createDelegatingRunnableSink = (delegate) => new DelegatingRunnableSink(delegate);

export { RunnableSink, createDelegatingRunnableSink };
