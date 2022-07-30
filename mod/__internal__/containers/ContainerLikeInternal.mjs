/// <reference types="./ContainerLikeInternal.d.ts" />
import { isNone, alwaysTrue } from '../../functions.mjs';

const createRepeatOperator = (f) => (predicate) => {
    const repeatPredicate = isNone(predicate)
        ? alwaysTrue
        : typeof predicate === "number"
            ? (count) => count < predicate
            : (count) => predicate(count);
    return (c) => f(c, repeatPredicate);
};

export { createRepeatOperator };
