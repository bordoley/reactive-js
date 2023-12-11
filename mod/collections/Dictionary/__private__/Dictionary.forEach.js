/// <reference types="./Dictionary.forEach.d.ts" />

import { AssociativeLike_keys, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, KeyedLike_get, } from "../../../collections.js";
const Dictionary_forEach = (effect) => dict => {
    const keys = dict[AssociativeLike_keys][EnumerableLike_enumerate]();
    while (keys[EnumeratorLike_move]()) {
        const key = keys[EnumeratorLike_current];
        const value = dict[KeyedLike_get](key);
        effect(value, key);
    }
};
export default Dictionary_forEach;
