/// <reference types="./Dictionary.reduce.d.ts" />

import { AssociativeLike_keys, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, KeyedLike_get, } from "../../../collections.js";
const Dictionary_reduce = (reducer, initialValue) => (dict) => {
    const keys = dict[AssociativeLike_keys][EnumerableLike_enumerate]();
    let acc = initialValue();
    while (keys[EnumeratorLike_move]()) {
        const key = keys[EnumeratorLike_current];
        const value = dict[KeyedLike_get](key);
        acc = reducer(acc, value, key);
    }
    return acc;
};
export default Dictionary_reduce;
