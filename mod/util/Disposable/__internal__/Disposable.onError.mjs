/// <reference types="./Disposable.onError.d.ts" />
import { isSome } from '../../../functions.mjs';
import Disposable_addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable_onError = (teardown) => disposable => {
    Disposable_addDisposableOrTeardown(disposable, e => {
        if (isSome(e)) {
            teardown.call(disposable, e);
        }
    });
    return disposable;
};

export { Disposable_onError as default };
