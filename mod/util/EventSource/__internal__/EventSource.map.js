/// <reference types="./EventSource.map.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __MappingLike_mapper } from "../../../__internal__/symbols.js";
import { DelegatingLike_delegate, } from "../../../__internal__/util.js";
import { newInstance, none } from "../../../functions.js";
import { BufferLike_capacity, CollectionLike_count, EventListenerLike_notify, EventSourceLike_addListener, EventSourceLike_listenerCount, KeyedCollectionLike_get, ReplayableLike_buffer, } from "../../../util.js";
import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
const createMappingEventListener = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_delegatingMixin, Delegating_mixin()), function MapListener(instance, delegate, mapper) {
    init(Disposable_delegatingMixin, instance, delegate);
    init(Delegating_mixin(), instance, delegate);
    instance[__MappingLike_mapper] = mapper;
    return instance;
}, props({
    [__MappingLike_mapper]: none,
}), {
    [EventListenerLike_notify](next) {
        const mapped = this[__MappingLike_mapper](next);
        this[DelegatingLike_delegate][EventListenerLike_notify](mapped);
    },
})))();
class MappingEventSource {
    d;
    m;
    constructor(d, m) {
        this.d = d;
        this.m = m;
    }
    get [EventSourceLike_listenerCount]() {
        return this.d[EventSourceLike_listenerCount];
    }
    [EventSourceLike_addListener](listener) {
        this.d[EventSourceLike_addListener](createMappingEventListener(listener, this.m));
    }
    get [ReplayableLike_buffer]() {
        return this;
    }
    get [BufferLike_capacity]() {
        return this.d[ReplayableLike_buffer][BufferLike_capacity];
    }
    get [CollectionLike_count]() {
        return this.d[ReplayableLike_buffer][CollectionLike_count];
    }
    [KeyedCollectionLike_get](index) {
        return this.m(this.d[ReplayableLike_buffer][KeyedCollectionLike_get](index));
    }
}
const EventSource_map = (f) => (eventSource) => newInstance(MappingEventSource, eventSource, f);
export default EventSource_map;
