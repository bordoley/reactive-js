/// <reference types="./Dictionary.keep.d.ts" />

import { Map, Map_set } from "../../../__internal__/constants.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import * as ReadonlyMap from "../../ReadonlyMap.js";
const Dictionary_keep = (predicate) => (dict) => {
    const resultMap = newInstance(Map);
    for (const key of dict[DictionaryLike_keys]) {
        const value = dict[DictionaryLike_get](key);
        if (predicate(value, key)) {
            resultMap[Map_set](key, value);
        }
    }
    return pipe(resultMap, ReadonlyMap.toDictionary());
};
export default Dictionary_keep;
