/// <reference types="./DeferredObservable.retry.d.ts" />

import { isNone, isSome } from "../../functions.js";
import DeferredObservablee_repeatOrRetry from "./DeferredObservable.repeatOrRetry.js";
const DeferredObservable_retry = 
/*@__PURE__*/ (() => {
    const defaultRetryPredicate = (_, error) => isSome(error);
    return (predicate) => {
        const retryPredicate = isNone(predicate)
            ? defaultRetryPredicate
            : (count, error) => isSome(error) && predicate(count, error);
        return DeferredObservablee_repeatOrRetry(retryPredicate);
    };
})();
export default DeferredObservable_retry;
