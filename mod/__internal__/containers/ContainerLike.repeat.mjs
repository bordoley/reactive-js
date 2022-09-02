/// <reference types="./ContainerLike.repeat.d.ts" />
import { isNone, alwaysTrue, isNumber } from '../../functions.mjs';

const createRepeatOperator = (f) => (predicate) => {
    const repeatPredicate = isNone(predicate)
        ? alwaysTrue
        : isNumber(predicate)
            ? (count) => count < predicate
            : (count) => predicate(count);
    return (c) => f(c, repeatPredicate);
};

export { createRepeatOperator };
