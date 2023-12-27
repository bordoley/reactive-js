/// <reference types="./ReadonlyMap.toDictionary.d.ts" />

import { DictionaryLike_count, DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";
class ReadonlyMapDictionary extends EnumerableIterable {
    d;
    [DictionaryLike_keys];
    constructor(d) {
        super();
        this.d = d;
        this[DictionaryLike_keys] = pipe(this.d, ReadonlyMap_keys());
    }
    get [DictionaryLike_count]() {
        return this.d.size;
    }
    [Symbol.iterator]() {
        return this.d.values();
    }
    [DictionaryLike_get](index) {
        return this.d.get(index);
    }
}
const ReadonlyMap_toDictionary = () => (map) => newInstance(ReadonlyMapDictionary, map);
export default ReadonlyMap_toDictionary;
