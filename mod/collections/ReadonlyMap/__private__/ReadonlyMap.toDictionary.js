/// <reference types="./ReadonlyMap.toDictionary.d.ts" />

import { DictionaryLike_count, DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";
class ReadonlyMapDictionary {
    d;
    [DictionaryLike_keys];
    constructor(d) {
        this.d = d;
        this[DictionaryLike_keys] = pipe(this.d, ReadonlyMap_keys());
    }
    get [DictionaryLike_count]() {
        return this.d.size;
    }
    [DictionaryLike_get](index) {
        return this.d.get(index);
    }
}
const ReadonlyMap_toDictionary = () => (map) => newInstance(ReadonlyMapDictionary, map);
export default ReadonlyMap_toDictionary;
