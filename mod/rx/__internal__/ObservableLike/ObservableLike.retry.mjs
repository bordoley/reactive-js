/// <reference types="./ObservableLike.retry.d.ts" />
import { isSome, isNone } from '../../../functions.mjs';
import ObservableLike__repeatOrRetry from './ObservableLike.repeatOrRetry.mjs';

const ObservableLike__retry = /*@__PURE__*/ (() => {
    const defaultRetryPredicate = (_, error) => isSome(error);
    return (predicate) => {
        const retryPredicate = isNone(predicate)
            ? defaultRetryPredicate
            : (count, error) => isSome(error) && predicate(count, error.cause);
        return ObservableLike__repeatOrRetry(retryPredicate);
    };
})();

export { ObservableLike__retry as default };
