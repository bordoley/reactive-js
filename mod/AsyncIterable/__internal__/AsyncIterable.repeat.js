/// <reference types="./AsyncIterable.repeat.d.ts" />

import { isNone, isNumber } from "../../functions.js";
import AsyncIterable_repeatOrRetry from "./AsyncIterable.repeatOrRetry.js";
const AsyncIterable_repeat = 
/*@__PURE__*/ (() => {
    const defaultRepeatPredicate = (_, e) => isNone(e);
    return (predicate) => {
        const repeatPredicate = isNone(predicate)
            ? defaultRepeatPredicate
            : isNumber(predicate)
                ? (count, e) => isNone(e) && count < predicate
                : (count, e) => isNone(e) && predicate(count);
        return AsyncIterable_repeatOrRetry(repeatPredicate);
    };
})();
export default AsyncIterable_repeat;
