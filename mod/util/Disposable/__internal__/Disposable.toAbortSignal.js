/// <reference types="./Disposable.toAbortSignal.d.ts" />

import { newInstance, pipe } from "../../../functions.js";
import onDisposed from "./Disposable.onDisposed.js";
const Disposable_toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    pipe(disposable, onDisposed(e => abortController.abort(e)));
    return abortController.signal;
};
export default Disposable_toAbortSignal;
