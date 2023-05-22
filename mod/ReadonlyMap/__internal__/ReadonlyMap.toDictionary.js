/// <reference types="./ReadonlyMap.toDictionary.d.ts" />

import { newInstance, pipe } from "../../functions.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";
class ReadonlyMapDictionary {
    map;
    [AssociativeCollectionLike_keys];
    constructor(map) {
        this.map = map;
        this[AssociativeCollectionLike_keys] = pipe(this.map, ReadonlyMap_keys());
    }
    get [CollectionLike_count]() {
        return this.map.size;
    }
    [KeyedCollectionLike_get](index) {
        return this.map.get(index);
    }
}
const ReadonlyMap_toDictionary = () => (map) => newInstance(ReadonlyMapDictionary, map);
export default ReadonlyMap_toDictionary;
