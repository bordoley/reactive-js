/// <reference types="./ReadonlyObjectMap.toDictionary.d.ts" />

import * as Obj from "../../__internal__/Object.js";
import { newInstance, pipe } from "../../functions.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
class ReadonlyObjectMapDictionary {
    obj;
    constructor(obj) {
        this.obj = obj;
    }
    get [CollectionLike_count]() {
        let cnt = 0;
        for (const key in this.obj) {
            if (Obj.hasOwn(this.obj, key)) {
                cnt++;
            }
        }
        return cnt;
    }
    [AssociativeCollectionLike_keys]() {
        return pipe(this.obj, ReadonlyObjectMap_keys());
    }
    [KeyedCollectionLike_get](index) {
        return this.obj[index];
    }
}
const ReadonlyObjectMap_toDictionary = () => (map) => newInstance(ReadonlyObjectMapDictionary, map);
export default ReadonlyObjectMap_toDictionary;
