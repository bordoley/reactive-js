/// <reference types="./IndexedBufferCollection.map.d.ts" />

import { DelegatingLike_delegate, MappingLike_selector, } from "../../../__internal__/core.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { BufferLike_capacity, CollectionLike_count, KeyedCollectionLike_get, } from "../../../core.js";
import { none, unsafeCast } from "../../../functions.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
const IndexedBufferCollection_map = /*@__PURE__*/ (() => {
    const createMappingIndexedBufferCollection = createInstanceFactory(mix(include(Delegating_mixin()), function MappingIndexedBufferCollection(instance, delegate, selector) {
        init(Delegating_mixin(), instance, delegate);
        instance[MappingLike_selector] = selector;
        return instance;
    }, props({
        [MappingLike_selector]: none,
    }), {
        get [BufferLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][BufferLike_capacity];
        },
        get [CollectionLike_count]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][CollectionLike_count];
        },
        [KeyedCollectionLike_get](index) {
            return this[MappingLike_selector](this[DelegatingLike_delegate][KeyedCollectionLike_get](index));
        },
    }));
    return (selector) => (delegate) => createMappingIndexedBufferCollection(delegate, selector);
})();
export default IndexedBufferCollection_map;
