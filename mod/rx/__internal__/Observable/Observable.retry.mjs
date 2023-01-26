/// <reference types="./Observable.retry.d.ts" />
import { isSome, isNone } from '../../../functions.mjs';
import Observable_repeatOrRetry from './Observable.repeatOrRetry.mjs';

const Observable_retry = /*@__PURE__*/ (() => {
    const defaultRetryPredicate = (_, error) => isSome(error);
    return (predicate) => {
        const retryPredicate = isNone(predicate)
            ? defaultRetryPredicate
            : (count, error) => isSome(error) && predicate(count, error);
        return Observable_repeatOrRetry(retryPredicate);
    };
})();

export { Observable_retry as default };
