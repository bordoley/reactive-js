/// <reference types="./ReadonlyMap.toDictionary.d.ts" />

import { AssociativeLike_keys, CollectionLike_count, EnumerableLike_enumerate, KeyedLike_get, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__private__/Enumerator.fromIterator.js";
import ReadonlyMap_keys from "./ReadonlyMap.keys.js";
class ReadonlyMapDictionary {
    d;
    [AssociativeLike_keys];
    constructor(d) {
        this.d = d;
        this[AssociativeLike_keys] = pipe(this.d, ReadonlyMap_keys());
    }
    get [CollectionLike_count]() {
        return this.d.size;
    }
    [Symbol.iterator]() {
        return this.d.values();
    }
    [EnumerableLike_enumerate]() {
        return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
    }
    [KeyedLike_get](index) {
        return this.d.get(index);
    }
}
const ReadonlyMap_toDictionary = () => (map) => newInstance(ReadonlyMapDictionary, map);
export default ReadonlyMap_toDictionary;
