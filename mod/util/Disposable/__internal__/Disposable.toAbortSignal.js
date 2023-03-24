/// <reference types="./Disposable.toAbortSignal.d.ts" />

import { newInstance, pipe } from "../../../functions.js";
import Disposable_onDisposed from "./Disposable.onDisposed.js";
const Disposable_toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    pipe(disposable, Disposable_onDisposed(abortController.abort, abortController));
    return abortController.signal;
};
export default Disposable_toAbortSignal;
