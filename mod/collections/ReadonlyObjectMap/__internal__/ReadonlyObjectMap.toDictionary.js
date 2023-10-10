/// <reference types="./ReadonlyObjectMap.toDictionary.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, EnumerableLike_enumerate, KeyedCollectionLike_get, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
class ReadonlyObjectMapDictionary {
    [AssociativeCollectionLike_keys];
    d;
    constructor(delegate) {
        this.d = delegate;
        this[AssociativeCollectionLike_keys] = pipe(delegate, ReadonlyObjectMap_keys());
    }
    get [CollectionLike_count]() {
        let cnt = 0;
        const delegate = this.d;
        for (const key in delegate) {
            if (Obj.hasOwn(delegate, key)) {
                cnt++;
            }
        }
        return cnt;
    }
    *[Symbol.iterator]() {
        const delegate = this.d;
        for (const key in delegate) {
            if (Obj.hasOwn(delegate, key)) {
                yield delegate[key];
            }
        }
    }
    [EnumerableLike_enumerate]() {
        return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
    }
    [KeyedCollectionLike_get](index) {
        return this.d[index];
    }
}
const ReadonlyObjectMap_toDictionary = () => (map) => newInstance(ReadonlyObjectMapDictionary, map);
export default ReadonlyObjectMap_toDictionary;
