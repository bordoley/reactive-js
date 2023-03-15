/// <reference types="./AsyncEnumerator.create.d.ts" />

import { createInstanceFactory, include, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe, unsafeCast } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observable_multicast from "../../../rx/Observable/__internal__/Observable.multicast.js";
import { DisposableLike_add, DisposableLike_dispose, DisposableLike_error, DisposableLike_isDisposed, QueueableLike_maxBufferSize, QueueableLike_push, } from "../../../util.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
const AsyncEnumerator_create = /*@__PURE__*/ (() => {
    const AsyncEnumeratorDelegatingMixin_src = Symbol("AsyncEnumeratorDelegatingMixin_src");
    const AsyncEnumeratorDelegatingMixin_observable = Symbol("AsyncEnumeratorDelegatingMixin_observable");
    return createInstanceFactory(mix(include(Disposable_delegatingMixin()), function AsyncEnumeratorDelegatingMixin(instance, delegate, operator) {
        instance[AsyncEnumeratorDelegatingMixin_src] = delegate;
        instance[AsyncEnumeratorDelegatingMixin_observable] = pipe(delegate, operator, Observable_multicast(delegate[DispatcherLike_scheduler], {
            maxBufferSize: delegate[QueueableLike_maxBufferSize],
        }), Disposable_add(delegate), Disposable_onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
        }));
        return instance;
    }, props({
        [AsyncEnumeratorDelegatingMixin_src]: none,
        [AsyncEnumeratorDelegatingMixin_observable]: none,
        [DisposableLike_isDisposed]: false,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[AsyncEnumeratorDelegatingMixin_src][DispatcherLike_scheduler];
        },
        get [DisposableLike_error]() {
            unsafeCast(this);
            return this[AsyncEnumeratorDelegatingMixin_observable][DisposableLike_error];
        },
        get [QueueableLike_maxBufferSize]() {
            unsafeCast(this);
            return this[AsyncEnumeratorDelegatingMixin_src][QueueableLike_maxBufferSize];
        },
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[AsyncEnumeratorDelegatingMixin_observable][MulticastObservableLike_observerCount];
        },
        [DisposableLike_add](disposable, ignoreChildErrors) {
            this[AsyncEnumeratorDelegatingMixin_observable][DisposableLike_add](disposable, ignoreChildErrors);
        },
        [DisposableLike_dispose](error) {
            this[AsyncEnumeratorDelegatingMixin_observable][DisposableLike_dispose](error);
        },
        [DispatcherLike_complete]() {
            this[AsyncEnumeratorDelegatingMixin_src][DispatcherLike_complete]();
        },
        [QueueableLike_push](next) {
            return this[AsyncEnumeratorDelegatingMixin_src][QueueableLike_push](next);
        },
        [ObservableLike_observe](observer) {
            this[AsyncEnumeratorDelegatingMixin_observable][ObservableLike_observe](observer);
        },
    }));
})();
export default AsyncEnumerator_create;
