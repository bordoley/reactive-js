/// <reference types="./AsyncIterable.retry.d.ts" />

import { isNone, isSome } from "../../functions.js";
import AsyncIterablee_repeatOrRetry from "./AsyncIterable.repeatOrRetry.js";
const AsyncIterable_retry = 
/*@__PURE__*/ (() => {
    const defaultRetryPredicate = (_, error) => isSome(error);
    return (predicate) => {
        const retryPredicate = isNone(predicate)
            ? defaultRetryPredicate
            : (count, error) => isSome(error) && predicate(count, error);
        return AsyncIterablee_repeatOrRetry(retryPredicate);
    };
})();
export default AsyncIterable_retry;
