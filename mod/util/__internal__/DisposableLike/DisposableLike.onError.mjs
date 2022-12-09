/// <reference types="./DisposableLike.onError.d.ts" />
import { isSome } from '../../../functions.mjs';
import { addDisposableOrTeardown } from './DisposableLike.addDisposableOrTeardown.mjs';

const onError = (teardown) => disposable => {
    addDisposableOrTeardown(disposable, e => {
        if (isSome(e)) {
            teardown.call(disposable, e);
        }
    });
    return disposable;
};

export { onError };
