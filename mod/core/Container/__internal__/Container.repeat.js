/// <reference types="./Container.repeat.d.ts" />

import { clampPositiveInteger } from "../../../__internal__/math.js";
import { alwaysTrue, isNone, isNumber, lessThan, } from "../../../functions.js";
const Container_repeat = (repeat) => (predicate) => {
    const shouldRepeat = isNone(predicate)
        ? alwaysTrue
        : isNumber(predicate)
            ? lessThan(clampPositiveInteger(predicate))
            : predicate;
    return (c) => repeat(c, shouldRepeat);
};
export default Container_repeat;
