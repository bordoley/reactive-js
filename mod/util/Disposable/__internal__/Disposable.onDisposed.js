/// <reference types="./Disposable.onDisposed.d.ts" />

import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_onDisposed = (teardown) => disposable => {
    addDisposableOrTeardown(disposable, teardown);
    return disposable;
};
export default Disposable_onDisposed;
