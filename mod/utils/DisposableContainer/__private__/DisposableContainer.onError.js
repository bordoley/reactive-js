/// <reference types="./DisposableContainer.onError.d.ts" />

import { isSome } from "../../../functions.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
const DisposableContainer_onError = (teardown) => disposable => {
    disposable[DisposableContainerLike_add](e => {
        if (isSome(e)) {
            teardown(e);
        }
    });
    return disposable;
};
export default DisposableContainer_onError;
