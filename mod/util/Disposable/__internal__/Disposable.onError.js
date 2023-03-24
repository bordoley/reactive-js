/// <reference types="./Disposable.onError.d.ts" />

import { call, isSome } from "../../../functions.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";
const Disposable_onError = (teardown, ctx) => disposable => {
    Disposable_addDisposableOrTeardown(disposable, e => {
        if (isSome(e)) {
            call(teardown, ctx, e);
        }
    });
    return disposable;
};
export default Disposable_onError;
