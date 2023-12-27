/// <reference types="./Dictionary.reduce.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../collections.js";
const Dictionary_reduce = (reducer, initialValue) => (dict) => {
    const keys = dict[DictionaryLike_keys][EnumerableLike_enumerate]();
    let acc = initialValue();
    while (keys[EnumeratorLike_move]()) {
        const key = keys[EnumeratorLike_current];
        const value = dict[DictionaryLike_get](key);
        acc = reducer(acc, value, key);
    }
    return acc;
};
export default Dictionary_reduce;
