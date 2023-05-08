/// <reference types="./Disposable.onComplete.d.ts" />

import { DisposableLike_add } from "../../../core.js";
import { isNone } from "../../../functions.js";
const Disposable_onComplete = (teardown) => disposable => {
    disposable[DisposableLike_add](e => {
        if (isNone(e)) {
            teardown();
        }
    });
    return disposable;
};
export default Disposable_onComplete;
