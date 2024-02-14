/// <reference types="./DisposableContainer.toAbortSignal.d.ts" />

import { bindMethod, newInstance, pipe } from "../../../functions.js";
import DisposableContainer_onDisposed from "./DisposableContainer.onDisposed.js";
const DisposableContainer_toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    pipe(disposable, DisposableContainer_onDisposed(bindMethod(abortController, "abort")));
    return abortController.signal;
};
export default DisposableContainer_toAbortSignal;
