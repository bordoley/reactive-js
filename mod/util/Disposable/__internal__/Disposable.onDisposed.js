/// <reference types="./Disposable.onDisposed.d.ts" />

import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_onDisposed = (teardown) => disposable => {
    Disposable_addDisposableOrTeardown(disposable, teardown);
    return disposable;
};
export default Disposable_onDisposed;
