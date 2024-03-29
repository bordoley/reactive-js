/// <reference types="./ReadonlyMap.toDictionary.d.ts" />

import { Map_get } from "../../../__internal__/constants.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";
class ReadonlyMapDictionary {
    d;
    [DictionaryLike_keys];
    constructor(d) {
        this.d = d;
        this[DictionaryLike_keys] = pipe(this.d, ReadonlyMap_keys());
    }
    [DictionaryLike_get](index) {
        return this.d[Map_get](index);
    }
}
const ReadonlyMap_toDictionary = () => (map) => newInstance(ReadonlyMapDictionary, map);
export default ReadonlyMap_toDictionary;
