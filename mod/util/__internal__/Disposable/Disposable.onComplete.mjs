/// <reference types="./Disposable.onComplete.d.ts" />
import { isNone } from '../../../functions.mjs';
import Disposable$addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable$onComplete = (teardown) => disposable => {
    Disposable$addDisposableOrTeardown(disposable, e => {
        if (isNone(e)) {
            teardown.call(disposable);
        }
    });
    return disposable;
};

export { Disposable$onComplete as default };
