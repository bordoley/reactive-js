/// <reference types="./DisposableContainer.onComplete.d.ts" />

import { isNone, newInstance, } from "../../../functions.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
const DisposableContainer_onComplete = 
/*@__PURE__*/ (() => {
    const onDisposedCache = newInstance(WeakMap);
    return (teardown) => {
        const onDisposed = onDisposedCache.get(teardown) ??
            (() => {
                function onDisposableContainerOnCompleteDisposed(e) {
                    if (isNone(e)) {
                        teardown.call(this);
                    }
                }
                onDisposedCache.set(teardown, onDisposableContainerOnCompleteDisposed);
                return onDisposableContainerOnCompleteDisposed;
            })();
        return (disposable) => {
            disposable[DisposableContainerLike_add](onDisposed);
            return disposable;
        };
    };
})();
export default DisposableContainer_onComplete;
