/// <reference types="./runnableSink.d.ts" />
import { __DEV__ } from './__internal__.env.mjs';
import { getDelegate } from './__internal__.liftable.mjs';
import { AbstractDisposableContainer } from './container.mjs';
import { isDisposed } from './disposable.mjs';
import { raise, pipe, newInstance } from './functions.mjs';
import { notify } from './sink.mjs';

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
        pipe(this, getDelegate, notify(next));
    }
}
const createDelegatingRunnableSink = (delegate) => newInstance(DelegatingRunnableSink, delegate);

export { AbstractDelegatingRunnableSink, RunnableSink, createDelegatingRunnableSink };
