/// <reference types="./Disposable.onError.d.ts" />
import { isSome } from '../../../functions.mjs';
import Disposable$addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable$onError = (teardown) => disposable => {
    Disposable$addDisposableOrTeardown(disposable, e => {
        if (isSome(e)) {
            teardown.call(disposable, e);
        }
    });
    return disposable;
};

export { Disposable$onError as default };
