/// <reference types="./DisposableContainer.onComplete.d.ts" />

import { isNone } from "../../../functions.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
const DisposableContainer_onComplete = (teardown) => {
    function onDisposableContainerOnCompleteDisposed(e) {
        if (isNone(e)) {
            teardown.call(this);
        }
    }
    return (disposable) => {
        disposable[DisposableContainerLike_add](onDisposableContainerOnCompleteDisposed);
        return disposable;
    };
};
export default DisposableContainer_onComplete;
