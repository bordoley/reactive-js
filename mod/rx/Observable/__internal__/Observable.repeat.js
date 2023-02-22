/// <reference types="./Observable.repeat.d.ts" />

import { isNone, isNumber } from "../../../functions.js";
import Observable_repeatOrRetry from "./Observable.repeatOrRetry.js";
const Observable_repeat = 
/*@__PURE__*/ (() => {
    const defaultRepeatPredicate = (_, e) => isNone(e);
    return (predicate) => {
        const repeatPredicate = isNone(predicate)
            ? defaultRepeatPredicate
            : isNumber(predicate)
                ? (count, e) => isNone(e) && count < predicate
                : (count, e) => isNone(e) && predicate(count);
        return Observable_repeatOrRetry(repeatPredicate);
    };
})();
export default Observable_repeat;
