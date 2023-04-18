/// <reference types="./IndexedBufferCollection.createWithMutableDelegate.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { unsafeCast } from "../../../functions.js";
import { BufferLike_capacity, CollectionLike_count, KeyedCollectionLike_get, } from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import IndexedBufferCollection_empty from "./IndexedBufferCollection.empty.js";
const IndexedBufferCollection_createWithMutableDelegate = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Delegating_mixin()), function MutableDelegatingIndexedBufferCollection(instance, options) {
    init(Delegating_mixin(), instance, IndexedBufferCollection_empty(options));
    return instance;
}, props({}), {
    get [BufferLike_capacity]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][BufferLike_capacity];
    },
    get [CollectionLike_count]() {
        unsafeCast(this);
        return this[DelegatingLike_delegate][CollectionLike_count];
    },
    [KeyedCollectionLike_get](index) {
        return this[DelegatingLike_delegate][KeyedCollectionLike_get](index);
    },
})))();
export default IndexedBufferCollection_createWithMutableDelegate;
