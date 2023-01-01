/// <reference types="./DisposableLike.onError.d.ts" />
import { isSome } from '../../../functions.mjs';
import DisposableLike__addDisposableOrTeardown from './DisposableLike.addDisposableOrTeardown.mjs';

const DisposableLike__onError = (teardown) => disposable => {
    DisposableLike__addDisposableOrTeardown(disposable, e => {
        if (isSome(e)) {
            teardown.call(disposable, e);
        }
    });
    return disposable;
};

export { DisposableLike__onError as default };
