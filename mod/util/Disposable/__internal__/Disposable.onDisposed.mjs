/// <reference types="./Disposable.onDisposed.d.ts" />
import Disposable_addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable_onDisposed = (teardown) => disposable => {
    Disposable_addDisposableOrTeardown(disposable, teardown);
    return disposable;
};

export { Disposable_onDisposed as default };
