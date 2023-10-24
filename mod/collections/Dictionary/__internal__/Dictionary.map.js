/// <reference types="./Dictionary.map.d.ts" />

import { AssociativeLike_keys, CollectionLike_count, EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, KeyedLike_get, } from "../../../collections.js";
import { isSome, newInstance, none, pipe, } from "../../../functions.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
const MappingDictionary_delegate = Symbol("MappingDictionary_delegate");
const MappingDictionary_selector = Symbol("MappingDictionary_selector");
class MappingDictionary {
    [MappingDictionary_delegate];
    [MappingDictionary_selector];
    constructor(delegate, mapper) {
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
    [EnumerableLike_enumerate]() {
        return pipe(this[Symbol.iterator](), Enumerator_fromIterator());
    }
}
const Dictionary_map = (selector) => (dict) => newInstance((MappingDictionary), dict, selector);
export default Dictionary_map;
