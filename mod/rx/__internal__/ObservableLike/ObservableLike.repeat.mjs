/// <reference types="./ObservableLike.repeat.d.ts" />
import { isNone, isNumber } from '../../../functions.mjs';
import ObservableLike__repeatOrRetry from './ObservableLike.repeatOrRetry.mjs';

const ObservableLike__repeat = /*@__PURE__*/ (() => {
    const defaultRepeatPredicate = (_, e) => isNone(e);
    return (predicate) => {
        const repeatPredicate = isNone(predicate)
            ? defaultRepeatPredicate
            : isNumber(predicate)
                ? (count, e) => isNone(e) && count < predicate
                : (count, e) => isNone(e) && predicate(count);
        return ObservableLike__repeatOrRetry(repeatPredicate);
    };
})();

export { ObservableLike__repeat as default };
