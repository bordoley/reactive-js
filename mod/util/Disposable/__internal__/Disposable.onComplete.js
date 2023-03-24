/// <reference types="./Disposable.onComplete.d.ts" />

import { call, isNone } from "../../../functions.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_onComplete = (teardown, ctx) => disposable => {
    Disposable_addDisposableOrTeardown(disposable, e => {
        if (isNone(e)) {
            call(teardown, ctx);
        }
    });
    return disposable;
};
export default Disposable_onComplete;
