/// <reference types="./DisposableLike.onComplete.d.ts" />
import { isNone } from '../../../functions.mjs';
import DisposableLike__addDisposableOrTeardown from './DisposableLike.addDisposableOrTeardown.mjs';

const DisposableLike__onComplete = (teardown) => disposable => {
    DisposableLike__addDisposableOrTeardown(disposable, e => {
        if (isNone(e)) {
            teardown.call(disposable);
        }
    });
    return disposable;
};

export { DisposableLike__onComplete as default };
