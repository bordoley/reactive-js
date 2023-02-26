/// <reference types="./Disposable.onError.d.ts" />

import { call, isSome } from "../../../functions.js";
import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_onError = (teardown) => disposable => {
    addDisposableOrTeardown(disposable, e => {
        if (isSome(e)) {
            call(teardown, disposable, e);
        }
    });
    return disposable;
};
export default Disposable_onError;
