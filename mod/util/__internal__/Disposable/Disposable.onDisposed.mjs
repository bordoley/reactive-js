/// <reference types="./Disposable.onDisposed.d.ts" />
import Disposable$addDisposableOrTeardown from './Disposable.addDisposableOrTeardown.mjs';

const Disposable$onDisposed = (teardown) => disposable => {
    Disposable$addDisposableOrTeardown(disposable, teardown);
    return disposable;
};

export { Disposable$onDisposed as default };
