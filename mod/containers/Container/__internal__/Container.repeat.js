/// <reference types="./Container.repeat.d.ts" />

import { alwaysTrue, isNone, isNumber } from "../../../functions.js";
const Container_repeat = (repeat) => (predicate) => {
    const shouldRepeat = isNone(predicate)
        ? alwaysTrue
        : isNumber(predicate)
            ? (count) => count < predicate
            : (count) => predicate(count);
    return (c) => repeat(c, shouldRepeat);
};
export default Container_repeat;
