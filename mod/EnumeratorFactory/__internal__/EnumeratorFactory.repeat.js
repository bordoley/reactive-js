/// <reference types="./EnumeratorFactory.repeat.d.ts" />

import { isNone, isNumber } from "../../functions.js";
import EnumeratorFactory_repeatOrRetry from "./EnumeratorFactory.repeatOrRetry.js";
const defaultRepeatPredicate = (_, e) => isNone(e);
const EnumeratorFactory_repeat = (predicate) => {
    const repeatPredicate = isNone(predicate)
        ? defaultRepeatPredicate
        : isNumber(predicate)
            ? (count, e) => isNone(e) && count < predicate
            : (count, e) => isNone(e) && predicate(count);
    return EnumeratorFactory_repeatOrRetry(repeatPredicate);
};
export default EnumeratorFactory_repeat;
