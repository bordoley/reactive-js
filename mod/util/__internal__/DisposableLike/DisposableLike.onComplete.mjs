/// <reference types="./DisposableLike.onComplete.d.ts" />
import { isNone } from '../../../functions.mjs';
import addDisposableOrTeardown from './DisposableLike.addDisposableOrTeardown.mjs';

const onComplete = (teardown) => disposable => {
    addDisposableOrTeardown(disposable, e => {
        if (isNone(e)) {
            teardown.call(disposable);
        }
    });
    return disposable;
};

export { onComplete as default };
