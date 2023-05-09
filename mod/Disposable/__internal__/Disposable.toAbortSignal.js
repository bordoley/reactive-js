/// <reference types="./Disposable.toAbortSignal.d.ts" />

import { bindMethod, newInstance, pipe } from "../../functions.js";
import Disposable_onDisposed from "./Disposable.onDisposed.js";
const Disposable_toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    pipe(disposable, Disposable_onDisposed(bindMethod(abortController, "abort")));
    return abortController.signal;
};
export default Disposable_toAbortSignal;
