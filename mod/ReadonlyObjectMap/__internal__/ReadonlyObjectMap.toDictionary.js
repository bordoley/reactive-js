/// <reference types="./ReadonlyObjectMap.toDictionary.d.ts" />

import * as Obj from "../../__internal__/Object.js";
import { DelegatingLike_delegate, } from "../../__internal__/types.js";
import { newInstance, pipe } from "../../functions.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap.keys.js";
class ReadonlyObjectMapDictionary {
    [AssociativeCollectionLike_keys];
    [DelegatingLike_delegate];
    constructor(delegate) {
        this[DelegatingLike_delegate] = delegate;
        this[AssociativeCollectionLike_keys] = pipe(delegate, ReadonlyObjectMap_keys());
    }
    get [CollectionLike_count]() {
        let cnt = 0;
        const delegate = this[DelegatingLike_delegate];
        for (const key in delegate) {
            if (Obj.hasOwn(delegate, key)) {
                cnt++;
            }
        }
        return cnt;
    }
    [KeyedCollectionLike_get](index) {
        return this[DelegatingLike_delegate][index];
    }
}
const ReadonlyObjectMap_toDictionary = () => (map) => newInstance(ReadonlyObjectMapDictionary, map);
export default ReadonlyObjectMap_toDictionary;
