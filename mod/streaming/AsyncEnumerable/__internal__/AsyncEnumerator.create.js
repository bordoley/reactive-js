/// <reference types="./AsyncEnumerator.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { AsyncEnumeratorDelegatingMixin_src } from "../../../__internal__/symbols.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
const AsyncEnumerator_create = /*@__PURE__*/ (() => {
    return pipe(mix(include(MulticastObservable_delegatingMixin()), function AsyncEnumeratorDelegatingMixin(instance, delegate, operator) {
        const observable = pipe(delegate, operator, Observable_multicast(delegate[DispatcherLike_scheduler], {
            capacity: delegate[QueueableLike_capacity],
        }), Disposable_add(delegate));
        init(MulticastObservable_delegatingMixin(), instance, observable);
        instance[AsyncEnumeratorDelegatingMixin_src] = delegate;
        return instance;
    }, props({
        [AsyncEnumeratorDelegatingMixin_src]: none,
    }), {
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
        [DispatcherLike_complete]() {
            this[AsyncEnumeratorDelegatingMixin_src][DispatcherLike_complete]();
        },
        [QueueableLike_enqueue](next) {
            return this[AsyncEnumeratorDelegatingMixin_src][QueueableLike_enqueue](next);
        },
    }), createInstanceFactory, returns);
})();
export default AsyncEnumerator_create;
