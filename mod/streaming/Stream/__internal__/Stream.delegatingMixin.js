/// <reference types="./Stream.delegatingMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns, unsafeCast } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import { CollectionLike_count, IndexedLike_get, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const Stream_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Disposable_delegatingMixin()), function DelegatingStreamMixin(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [CollectionLike_count]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][CollectionLike_count];
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_replay];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueableLike_capacity];
        },
        get [ObservableLike_isEnumerable]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][ObservableLike_isEnumerable];
        },
        get [ObservableLike_isRunnable]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][ObservableLike_isRunnable];
        },
        [IndexedLike_get](index) {
            return this[DelegatingLike_delegate][IndexedLike_get](index);
        },
        [QueueableLike_enqueue](req) {
            return this[DelegatingLike_delegate][QueueableLike_enqueue](req);
        },
        [DispatcherLike_complete]() {
            this[DelegatingLike_delegate][DispatcherLike_complete]();
        },
        [ObservableLike_observe](observer) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
    }));
})();
export default Stream_delegatingMixin;
