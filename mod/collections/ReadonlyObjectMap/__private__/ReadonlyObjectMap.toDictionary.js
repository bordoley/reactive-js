/// <reference types="./ReadonlyObjectMap.toDictionary.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { DictionaryLike_count, DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { newInstance, pipe } from "../../../functions.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
class ReadonlyObjectMapDictionary extends EnumerableIterable {
    [DictionaryLike_keys];
    d;
    constructor(delegate) {
        super();
        this.d = delegate;
        this[DictionaryLike_keys] = pipe(delegate, ReadonlyObjectMap_keys());
    }
    get [DictionaryLike_count]() {
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
    [DictionaryLike_get](index) {
        return this.d[index];
    }
}
const ReadonlyObjectMap_toDictionary = () => (map) => newInstance(ReadonlyObjectMapDictionary, map);
export default ReadonlyObjectMap_toDictionary;
