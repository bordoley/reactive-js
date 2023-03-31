/// <reference types="./AsyncEnumerator.create.d.ts" />

import { DelegatingLike_delegate, createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { AsyncEnumeratorDelegatingMixin_src } from "../../../__internal__/symbols.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { CollectionLike_count, IndexedLike_get, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const AsyncEnumerator_create = /*@__PURE__*/ (() => {
    return pipe(mix(include(Disposable_delegatingMixin()), function AsyncEnumeratorDelegatingMixin(instance, delegate, operator) {
        const observable = pipe(delegate, operator, Observable_multicast(delegate[DispatcherLike_scheduler], {
            capacity: delegate[QueueableLike_capacity],
        }), Disposable_add(delegate));
        init(Disposable_delegatingMixin(), instance, observable);
        instance[AsyncEnumeratorDelegatingMixin_src] = delegate;
        return instance;
    }, props({
        [AsyncEnumeratorDelegatingMixin_src]: none,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [CollectionLike_count]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][CollectionLike_count];
        },
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[AsyncEnumeratorDelegatingMixin_src][DispatcherLike_scheduler];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[AsyncEnumeratorDelegatingMixin_src][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[AsyncEnumeratorDelegatingMixin_src][QueueableLike_capacity];
        },
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_replay];
        },
        [DispatcherLike_complete]() {
            this[AsyncEnumeratorDelegatingMixin_src][DispatcherLike_complete]();
        },
        [IndexedLike_get](index) {
            return this[DelegatingLike_delegate][IndexedLike_get](index);
        },
        [QueueableLike_enqueue](next) {
            return this[AsyncEnumeratorDelegatingMixin_src][QueueableLike_enqueue](next);
        },
        [ObservableLike_observe](observer) {
            this[DelegatingLike_delegate][ObservableLike_observe](observer);
        },
    }), createInstanceFactory, returns);
})();
export default AsyncEnumerator_create;
