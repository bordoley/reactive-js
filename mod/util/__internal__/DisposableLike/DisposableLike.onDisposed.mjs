/// <reference types="./DisposableLike.onDisposed.d.ts" />
import DisposableLike__addDisposableOrTeardown from './DisposableLike.addDisposableOrTeardown.mjs';

const DisposableLike__onDisposed = (teardown) => disposable => {
    DisposableLike__addDisposableOrTeardown(disposable, teardown);
    return disposable;
};

export { DisposableLike__onDisposed as default };
