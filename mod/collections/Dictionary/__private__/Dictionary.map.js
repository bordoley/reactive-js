/// <reference types="./Dictionary.map.d.ts" />

import { DictionaryLike_count, DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import { isSome, newInstance, none, } from "../../../functions.js";
const MappingDictionary_delegate = Symbol("MappingDictionary_delegate");
const MappingDictionary_selector = Symbol("MappingDictionary_selector");
class MappingDictionary {
    [MappingDictionary_delegate];
    [MappingDictionary_selector];
    constructor(delegate, mapper) {
        this[MappingDictionary_delegate] = delegate;
        this[MappingDictionary_selector] = mapper;
    }
    get [DictionaryLike_keys]() {
        return this[MappingDictionary_delegate][DictionaryLike_keys];
    }
    get [DictionaryLike_count]() {
        return this[MappingDictionary_delegate][DictionaryLike_count];
    }
    [DictionaryLike_get](index) {
        const v = this[MappingDictionary_delegate][DictionaryLike_get](index);
        return isSome(v) ? this[MappingDictionary_selector](v, index) : none;
    }
}
const Dictionary_map = (selector) => (dict) => newInstance((MappingDictionary), dict, selector);
export default Dictionary_map;
