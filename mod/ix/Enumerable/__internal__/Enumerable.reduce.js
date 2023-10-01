/// <reference types="./Enumerable.reduce.d.ts" />

import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../ix.js";
const Enumerable_reduce = (reducer, initialValue) => (enumerable) => {
    const enumerator = enumerable[EnumerableLike_enumerate]();
    let acc = initialValue();
    while (enumerator[EnumeratorLike_move]()) {
        const next = enumerator[EnumeratorLike_current];
        acc = reducer(acc, next);
    }
    return acc;
};
export default Enumerable_reduce;
