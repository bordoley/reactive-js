/// <reference types="./Dictionary.forEachWithKey.d.ts" />

import { AssociativeCollectionLike_keys, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, KeyedCollectionLike_get, } from "../../types.js";
const Dictionary_forEachWithKey = (effect) => dict => {
    const keys = dict[AssociativeCollectionLike_keys][EnumerableLike_enumerate]();
    while (keys[EnumeratorLike_move]()) {
        const key = keys[EnumeratorLike_current];
        const value = dict[KeyedCollectionLike_get](key);
        effect(value, key);
    }
    return dict;
};
export default Dictionary_forEachWithKey;
