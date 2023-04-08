/// <reference types="./Disposable.onError.d.ts" />

import { isSome } from "../../../functions.js";
import { DisposableLike_add } from "../../../util.js";
const Disposable_onError = (teardown) => disposable => {
    disposable[DisposableLike_add](e => {
        if (isSome(e)) {
            teardown(e);
        }
    });
    return disposable;
};
export default Disposable_onError;
