/// <reference types="./Dictionary.mapWithKey.d.ts" />

import { DelegatingLike_delegate, MappingLike_selector, } from "../../__internal__/types.js";
import { isSome, newInstance, none, } from "../../functions.js";
import { AssociativeCollectionLike_keys, CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
class MappingDictionary {
    [DelegatingLike_delegate];
    [MappingLike_selector];
    constructor(delegate, mapper) {
        this[DelegatingLike_delegate] = delegate;
        this[MappingLike_selector] = mapper;
    }
    get [AssociativeCollectionLike_keys]() {
        return this[DelegatingLike_delegate][AssociativeCollectionLike_keys];
    }
    get [CollectionLike_count]() {
        return this[DelegatingLike_delegate][CollectionLike_count];
    }
    [KeyedCollectionLike_get](index) {
        const v = this[DelegatingLike_delegate][KeyedCollectionLike_get](index);
        return isSome(v) ? this[MappingLike_selector](v, index) : none;
    }
}
const Dictionary_mapWithKey = (selector) => (dict) => newInstance((MappingDictionary), dict, selector);
export default Dictionary_mapWithKey;
