/// <reference types="./Enumerator.reduce.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
const Enumerator_reduce = (reducer, initialValue) => (enumerator) => {
    let acc = initialValue();
    while (enumerator[EnumeratorLike_move]()) {
        const next = enumerator[EnumeratorLike_current];
        acc = reducer(acc, next);
    }
    return acc;
};
export default Enumerator_reduce;
