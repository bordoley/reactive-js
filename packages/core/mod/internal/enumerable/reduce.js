import { enumerate } from "./enumerate.js";
export const reduce = (reducer, initialValue) => enumerable => {
    const enumerator = enumerate(enumerable);
    let acc = initialValue();
    while (enumerator.move()) {
        acc = reducer(acc, enumerator.current);
    }
    return acc;
};
