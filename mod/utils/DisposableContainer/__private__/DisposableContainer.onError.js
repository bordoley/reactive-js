/// <reference types="./DisposableContainer.onError.d.ts" />

import { isSome, newInstance, } from "../../../functions.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
const DisposableContainer_onError = 
/*@__PURE__*/ (() => {
    const onDisposedCache = newInstance(WeakMap);
    return (teardown) => {
        const onDisposed = onDisposedCache.get(teardown) ??
            (() => {
                function onDisposableContainerOnErrorDisposed(e) {
                    if (isSome(e)) {
                        teardown.call(this, e);
                    }
                }
                onDisposedCache.set(teardown, onDisposableContainerOnErrorDisposed);
                return onDisposableContainerOnErrorDisposed;
            })();
        return disposable => {
            disposable[DisposableContainerLike_add](onDisposed);
            return disposable;
        };
    };
})();
export default DisposableContainer_onError;
