/// <reference types="./Disposable.onComplete.d.ts" />

import { isNone } from "../../functions.js";
import { DisposableLike_add } from "../../types.js";
const Disposable_onComplete = (teardown) => disposable => {
    disposable[DisposableLike_add](e => {
        if (isNone(e)) {
            teardown();
        }
    });
    return disposable;
};
export default Disposable_onComplete;
