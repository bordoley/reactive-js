/// <reference types="./Dictionary.reduceWithKey.d.ts" />

import { AssociativeCollectionLike_keys, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, KeyedCollectionLike_get, } from "../../types.js";
const Dictionary_reduceWithKey = (reducer, initialValue) => (dict) => {
    const keys = dict[AssociativeCollectionLike_keys][EnumerableLike_enumerate]();
    let acc = initialValue();
    while (keys[EnumeratorLike_move]()) {
        const key = keys[EnumeratorLike_current];
        const value = dict[KeyedCollectionLike_get](key);
        acc = reducer(acc, value, key);
    }
    return acc;
};
export default Dictionary_reduceWithKey;
