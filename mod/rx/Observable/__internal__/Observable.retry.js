/// <reference types="./Observable.retry.d.ts" />

import { isNone, isSome } from "../../../functions.js";
import Observable_repeatOrRetry from "./Observable.repeatOrRetry.js";
const Observable_retry = /*@__PURE__*/ (() => {
    const defaultRetryPredicate = (_, error) => isSome(error);
    return (predicate) => {
        const retryPredicate = isNone(predicate)
            ? defaultRetryPredicate
            : (count, error) => isSome(error) && predicate(count, error);
        return Observable_repeatOrRetry(retryPredicate);
    };
})();
export default Observable_retry;
