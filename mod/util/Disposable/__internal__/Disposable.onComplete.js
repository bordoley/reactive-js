/// <reference types="./Disposable.onComplete.d.ts" />

import { call, isNone } from "../../../functions.js";
import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_onComplete = (teardown) => disposable => {
    addDisposableOrTeardown(disposable, e => {
        if (isNone(e)) {
            call(teardown, disposable);
        }
    });
    return disposable;
};
export default Disposable_onComplete;
