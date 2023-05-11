/// <reference types="./DeferredObservable.repeat.d.ts" />

import { isNone, isNumber } from "../../functions.js";
import DeferredObservable_repeatOrRetry from "./DeferredObservable.repeatOrRetry.js";
const DeferredObservable_repeat = 
/*@__PURE__*/ (() => {
    const defaultRepeatPredicate = (_, e) => isNone(e);
    return (predicate) => {
        const repeatPredicate = isNone(predicate)
            ? defaultRepeatPredicate
            : isNumber(predicate)
                ? (count, e) => isNone(e) && count < predicate
                : (count, e) => isNone(e) && predicate(count);
        return DeferredObservable_repeatOrRetry(repeatPredicate);
    };
})();
export default DeferredObservable_repeat;
