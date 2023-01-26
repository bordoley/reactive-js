/// <reference types="./Container.repeat.d.ts" />
import { isNone, alwaysTrue, isNumber } from '../../../functions.mjs';

const Container$repeat = (repeat) => (predicate) => {
    const shouldRepeat = isNone(predicate)
        ? alwaysTrue
        : isNumber(predicate)
            ? (count) => count < predicate
            : (count) => predicate(count);
    return (c) => repeat(c, shouldRepeat);
};

export { Container$repeat as default };
