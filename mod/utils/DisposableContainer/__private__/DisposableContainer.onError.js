/// <reference types="./DisposableContainer.onError.d.ts" />

import { isSome, memoize, } from "../../../functions.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
const DisposableContainer_onError = 
/*@__PURE__*/ (() => {
    const createOnDisposed = memoize((teardown) => function onDisposableContainerOnErrorDisposed(e) {
        if (isSome(e)) {
            teardown.call(this, e);
        }
    });
    return (teardown) => {
        const onDisposed = createOnDisposed(teardown);
        return disposable => {
            disposable[DisposableContainerLike_add](onDisposed);
            return disposable;
        };
    };
})();
export default DisposableContainer_onError;
