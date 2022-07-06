/// <reference types="./runnableSink.d.ts" />
import { __DEV__ } from './__internal__.env.mjs';
import { Disposable, isDisposed } from './disposable.mjs';
import { raise } from './functions.mjs';
import { reactive } from './liftable.mjs';

class RunnableSink extends Disposable {
    get TLiftableContainerStateType() {
        return reactive;
    }
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

export { RunnableSink };
