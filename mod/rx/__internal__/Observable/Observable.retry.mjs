/// <reference types="./Observable.retry.d.ts" />
import { isSome, isNone } from '../../../functions.mjs';
import Observable$repeatOrRetry from './Observable.repeatOrRetry.mjs';

const Observable$retry = /*@__PURE__*/ (() => {
    const defaultRetryPredicate = (_, error) => isSome(error);
    return (predicate) => {
        const retryPredicate = isNone(predicate)
            ? defaultRetryPredicate
            : (count, error) => isSome(error) && predicate(count, error);
        return Observable$repeatOrRetry(retryPredicate);
    };
})();

export { Observable$retry as default };
