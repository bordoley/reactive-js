/// <reference types="./Disposable.onComplete.d.ts" />

import { isNone } from "../../../functions.js";
import { DisposableLike_add } from "../../../util.js";
const Disposable_onComplete = (teardown) => disposable => {
    disposable[DisposableLike_add](e => {
        if (isNone(e)) {
            teardown();
        }
    });
    return disposable;
};
export default Disposable_onComplete;
