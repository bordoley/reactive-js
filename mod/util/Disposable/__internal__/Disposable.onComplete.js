/// <reference types="./Disposable.onComplete.d.ts" />

import { isNone } from "../../../functions.js";
import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_onComplete = (teardown) => disposable => {
    addDisposableOrTeardown(disposable, e => {
        if (isNone(e)) {
            teardown.call(disposable);
        }
    });
    return disposable;
};
export default Disposable_onComplete;
