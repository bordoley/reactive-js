/// <reference types="./Disposable.onDisposed.d.ts" />

import { bind, isSome, } from "../../../functions.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_onDisposed = (teardown, ctx) => disposable => {
    const onDisposed = isSome(ctx) ? bind(teardown, ctx) : teardown;
    Disposable_addDisposableOrTeardown(disposable, onDisposed);
    return disposable;
};
export default Disposable_onDisposed;
