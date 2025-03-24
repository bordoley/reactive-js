/// <reference types="./ReadonlyObjectMap.toDictionary.d.ts" />

import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { newInstance, pipe, returns } from "../../../functions.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
class ReadonlyObjectMapDictionary {
    [DictionaryLike_keys];
    d;
    constructor(delegate) {
        this.d = delegate;
        this[DictionaryLike_keys] = pipe(delegate, ReadonlyObjectMap_keys());
    }
    [DictionaryLike_get](index) {
        return this.d[index];
    }
}
const ReadonlyObjectMap_toDictionary = 
/*@__PURE__*/ returns((map) => newInstance(ReadonlyObjectMapDictionary, map));
export default ReadonlyObjectMap_toDictionary;
