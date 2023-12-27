/// <reference types="./Dictionary.forEach.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../collections.js";
const Dictionary_forEach = (effect) => dict => {
    const keys = dict[DictionaryLike_keys][EnumerableLike_enumerate]();
    while (keys[EnumeratorLike_move]()) {
        const key = keys[EnumeratorLike_current];
        const value = dict[DictionaryLike_get](key);
        effect(value, key);
    }
};
export default Dictionary_forEach;
