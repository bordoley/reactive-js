/// <reference types="./DisposableLike.onDisposed.d.ts" />
import { addDisposableOrTeardown } from './DisposableLike.addDisposableOrTeardown.mjs';

const onDisposed = (teardown) => disposable => {
    addDisposableOrTeardown(disposable, teardown);
    return disposable;
};

export { onDisposed };
