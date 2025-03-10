/// <reference types="./DisposableContainer.onComplete.d.ts" />

import { isNone, memoize, } from "../../../functions.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
const DisposableContainer_onComplete = 
/*@__PURE__*/ (() => {
    const createOnDisposed = memoize((teardown) => function onDisposableContainerOnCompleteDisposed(e) {
        if (isNone(e)) {
            teardown.call(this);
        }
    });
    return (teardown) => {
        const onDisposed = createOnDisposed(teardown);
        return (disposable) => {
            disposable[DisposableContainerLike_add](onDisposed);
            return disposable;
        };
    };
})();
export default DisposableContainer_onComplete;
