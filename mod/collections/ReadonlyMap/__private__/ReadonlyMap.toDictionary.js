/// <reference types="./ReadonlyMap.toDictionary.d.ts" />

import { AssociativeLike_keys, CollectionLike_count, KeyedLike_get, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";
class ReadonlyMapDictionary extends EnumerableIterable {
    d;
    [AssociativeLike_keys];
    constructor(d) {
        super();
        this.d = d;
        this[AssociativeLike_keys] = pipe(this.d, ReadonlyMap_keys());
    }
    get [CollectionLike_count]() {
        return this.d.size;
    }
    [Symbol.iterator]() {
        return this.d.values();
    }
    [KeyedLike_get](index) {
        return this.d.get(index);
    }
}
const ReadonlyMap_toDictionary = () => (map) => newInstance(ReadonlyMapDictionary, map);
export default ReadonlyMap_toDictionary;
