/// <reference types="./Dictionary.keep.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
const Dictionary_keep = (predicate) => (dict) => {
    const resultMap = newInstance(Map);
    const keys = dict[DictionaryLike_keys][EnumerableLike_enumerate]();
    while (keys[EnumeratorLike_move]()) {
        const key = keys[EnumeratorLike_current];
        const value = dict[DictionaryLike_get](key);
        if (predicate(value, key)) {
            resultMap.set(key, value);
        }
    }
    return pipe(resultMap, ReadonlyMap.toDictionary());
};
export default Dictionary_keep;
