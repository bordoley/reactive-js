/// <reference types="./DisposableContainer.onError.d.ts" />

import { isSome } from "../../../functions.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
const DisposableContainer_onError = (teardown) => {
    function onDisposableContainerOnErrorDisposed(e) {
        if (isSome(e)) {
            teardown.call(this, e);
        }
    }
    return disposable => {
        disposable[DisposableContainerLike_add](onDisposableContainerOnErrorDisposed);
        return disposable;
    };
};
export default DisposableContainer_onError;
