/// <reference types="./Observable.repeat.d.ts" />
import { isNone, isNumber } from '../../../functions.mjs';
import Observable$repeatOrRetry from './Observable.repeatOrRetry.mjs';

const Observable$repeat = /*@__PURE__*/ (() => {
    const defaultRepeatPredicate = (_, e) => isNone(e);
    return (predicate) => {
        const repeatPredicate = isNone(predicate)
            ? defaultRepeatPredicate
            : isNumber(predicate)
                ? (count, e) => isNone(e) && count < predicate
                : (count, e) => isNone(e) && predicate(count);
        return Observable$repeatOrRetry(repeatPredicate);
    };
})();

export { Observable$repeat as default };
