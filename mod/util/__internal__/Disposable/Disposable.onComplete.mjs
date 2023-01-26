/// <reference types="./Disposable.onComplete.d.ts" />
import { isNone } from '../../../functions.mjs';
import Disposable_addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable_onComplete = (teardown) => disposable => {
    Disposable_addDisposableOrTeardown(disposable, e => {
        if (isNone(e)) {
            teardown.call(disposable);
        }
    });
    return disposable;
};

export { Disposable_onComplete as default };
