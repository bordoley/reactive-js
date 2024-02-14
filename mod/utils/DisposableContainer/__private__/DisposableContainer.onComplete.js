/// <reference types="./DisposableContainer.onComplete.d.ts" />

import { isNone } from "../../../functions.js";
import { DisposableContainerLike_add, } from "../../../utils.js";
const DisposableContainer_onComplete = (teardown) => disposable => {
    disposable[DisposableContainerLike_add](e => {
        if (isNone(e)) {
            teardown();
        }
    });
    return disposable;
};
export default DisposableContainer_onComplete;
