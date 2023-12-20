/// <reference types="./ReadonlyObjectMap.toDictionary.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { AssociativeLike_keys, CollectionLike_count, KeyedLike_get, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
class ReadonlyObjectMapDictionary extends EnumerableIterable {
    [AssociativeLike_keys];
    d;
    constructor(delegate) {
        super();
        this.d = delegate;
        this[AssociativeLike_keys] = pipe(delegate, ReadonlyObjectMap_keys());
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
    [KeyedLike_get](index) {
        return this.d[index];
    }
}
const ReadonlyObjectMap_toDictionary = () => (map) => newInstance(ReadonlyObjectMapDictionary, map);
export default ReadonlyObjectMap_toDictionary;
