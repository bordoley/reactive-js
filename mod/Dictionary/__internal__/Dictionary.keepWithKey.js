/// <reference types="./Dictionary.keepWithKey.d.ts" />

import * as Containers from "../../Containers.js";
import Observable_count from "../../Observable/__internal__/Observable.count.js";
import Observable_keep from "../../Observable/__internal__/Observable.keep.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { DelegatingLike_delegate, PredicatedLike_predicate, } from "../../__internal__/types.js";
import { isSome, newInstance, none, pipe, } from "../../functions.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
class KeepingDictionary {
    [DelegatingLike_delegate];
    [PredicatedLike_predicate];
    constructor(delegate, predicate) {
        this[DelegatingLike_delegate] = delegate;
        this[PredicatedLike_predicate] = predicate;
    }
    get [AssociativeCollectionLike_keys]() {
        return pipe(this[DelegatingLike_delegate][AssociativeCollectionLike_keys], Observable_map((k) => {
            const v = this[KeyedCollectionLike_get](k);
            return isSome(v) && this[PredicatedLike_predicate](v, k) ? k : none;
        }), Containers.keepType({
            keep: Observable_keep,
        }, isSome));
    }
    get [CollectionLike_count]() {
        return pipe(this[AssociativeCollectionLike_keys], Observable_count());
    }
    [KeyedCollectionLike_get](k) {
        const v = this[DelegatingLike_delegate][KeyedCollectionLike_get](k);
        return isSome(v) && this[PredicatedLike_predicate](v, k) ? v : none;
    }
}
const Dictionary_keepWithKey = (predicate) => (dict) => newInstance((KeepingDictionary), dict, predicate);
export default Dictionary_keepWithKey;
