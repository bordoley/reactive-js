/// <reference types="./Disposable.onComplete.d.ts" />

import { isNone } from "../../../functions.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_onComplete = (teardown) => disposable => {
    Disposable_addDisposableOrTeardown(disposable, e => {
        if (isNone(e)) {
            teardown();
        }
    });
    return disposable;
};
export default Disposable_onComplete;
