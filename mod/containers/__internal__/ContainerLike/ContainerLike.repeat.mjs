/// <reference types="./ContainerLike.repeat.d.ts" />
import { isNone, alwaysTrue, isNumber } from '../../../functions.mjs';

const ContainerLike__repeat = (repeat) => (predicate) => {
    const shouldRepeat = isNone(predicate)
        ? alwaysTrue
        : isNumber(predicate)
            ? (count) => count < predicate
            : (count) => predicate(count);
    return (c) => repeat(c, shouldRepeat);
};

export { ContainerLike__repeat as default };
