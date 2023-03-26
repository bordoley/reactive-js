/// <reference types="./Disposable.onError.d.ts" />

import { isSome } from "../../../functions.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_onError = (teardown) => disposable => {
    Disposable_addDisposableOrTeardown(disposable, e => {
        if (isSome(e)) {
            teardown(e);
        }
    });
    return disposable;
};
export default Disposable_onError;
