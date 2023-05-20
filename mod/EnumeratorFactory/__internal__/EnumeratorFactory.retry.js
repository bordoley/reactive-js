/// <reference types="./EnumeratorFactory.retry.d.ts" />

import { isNone, isSome } from "../../functions.js";
import EnumeratorFactory_repeatOrRetry from "./EnumeratorFactory.repeatOrRetry.js";
const defaultRetryPredicate = (_, error) => isSome(error);
const EnumeratorFactory_retry = (predicate) => {
    const retryPredicate = isNone(predicate)
        ? defaultRetryPredicate
        : (count, error) => isSome(error) && predicate(count, error);
    return EnumeratorFactory_repeatOrRetry(retryPredicate);
};
export default EnumeratorFactory_retry;
