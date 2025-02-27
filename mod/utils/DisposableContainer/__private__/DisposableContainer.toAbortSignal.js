/// <reference types="./DisposableContainer.toAbortSignal.d.ts" />

import { bindMethod, newInstance, pipe } from "../../../functions.js";
import DisposableContainer_onDisposed from "./DisposableContainer.onDisposed.js";
const DisposableContainer_toAbortSignal = 
/*@__PURE__*/ (() => {
    const abortSignalCache = newInstance(WeakMap);
    return (disposable) => abortSignalCache.get(disposable) ??
        (() => {
            const abortController = newInstance(AbortController);
            pipe(disposable, DisposableContainer_onDisposed(bindMethod(abortController, "abort")));
            const abortSignal = abortController.signal;
            abortSignalCache.set(disposable, abortSignal);
            return abortSignal;
        })();
})();
export default DisposableContainer_toAbortSignal;
