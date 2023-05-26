/// <reference types="./IndexedCollection.map.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, MappingLike_selector, } from "../../__internal__/types.js";
import { none, unsafeCast } from "../../functions.js";
import { CollectionLike_count, KeyedCollectionLike_get, } from "../../types.js";
const IndexedCollection_map = 
/*@__PURE__*/ (() => {
    const createMappingIndexedCollection = createInstanceFactory(mix(include(Delegating_mixin()), function MappingIndexedCollection(instance, delegate, selector) {
        init(Delegating_mixin(), instance, delegate);
        instance[MappingLike_selector] = selector;
        return instance;
    }, props({
        [MappingLike_selector]: none,
    }), {
        get [CollectionLike_count]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][CollectionLike_count];
        },
        [KeyedCollectionLike_get](index) {
            return this[MappingLike_selector](this[DelegatingLike_delegate][KeyedCollectionLike_get](index));
        },
    }));
    return (selector) => (delegate) => createMappingIndexedCollection(delegate, selector);
})();
export default IndexedCollection_map;
