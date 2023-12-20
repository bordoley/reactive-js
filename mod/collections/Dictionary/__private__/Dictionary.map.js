/// <reference types="./Dictionary.map.d.ts" />

import { AssociativeLike_keys, CollectionLike_count, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, KeyedLike_get, } from "../../../collections.js";
import { isSome, newInstance, none, } from "../../../functions.js";
import EnumerableIterable from "../../__classes__/EnumerableIterable.js";
const MappingDictionary_delegate = Symbol("MappingDictionary_delegate");
const MappingDictionary_selector = Symbol("MappingDictionary_selector");
class MappingDictionary extends EnumerableIterable {
    [MappingDictionary_delegate];
    [MappingDictionary_selector];
    constructor(delegate, mapper) {
        super();
        this[MappingDictionary_delegate] = delegate;
        this[MappingDictionary_selector] = mapper;
    }
    get [AssociativeLike_keys]() {
        return this[MappingDictionary_delegate][AssociativeLike_keys];
    }
    get [CollectionLike_count]() {
        return this[MappingDictionary_delegate][CollectionLike_count];
    }
    [KeyedLike_get](index) {
        const v = this[MappingDictionary_delegate][KeyedLike_get](index);
        return isSome(v) ? this[MappingDictionary_selector](v, index) : none;
    }
    *[Symbol.iterator]() {
        const enumerator = this[MappingDictionary_delegate][AssociativeLike_keys][EnumerableLike_enumerate]();
        while (enumerator[EnumeratorLike_move]()) {
            const key = enumerator[EnumeratorLike_current];
            yield this[KeyedLike_get](key);
        }
    }
}
const Dictionary_map = (selector) => (dict) => newInstance((MappingDictionary), dict, selector);
export default Dictionary_map;
