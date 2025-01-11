/// <reference types="./Dictionary.reduce.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
const Dictionary_reduce = (reducer, initialValue) => (dict) => {
    let acc = initialValue();
    for (const key of dict[DictionaryLike_keys]) {
        const value = dict[DictionaryLike_get](key);
        acc = reducer(acc, value, key);
    }
    return acc;
};
export default Dictionary_reduce;
