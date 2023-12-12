/// <reference types="./Dictionary.keep.d.ts" />

import { AssociativeLike_keys, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, KeyedLike_get, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
const Dictionary_keep = (predicate) => (dict) => {
    const resultMap = newInstance(Map);
    const keys = dict[AssociativeLike_keys][EnumerableLike_enumerate]();
    while (keys[EnumeratorLike_move]()) {
        const key = keys[EnumeratorLike_current];
        const value = dict[KeyedLike_get](key);
        if (predicate(value, key)) {
            resultMap.set(key, value);
        }
    }
    return pipe(resultMap, ReadonlyMap.toDictionary());
};
export default Dictionary_keep;
