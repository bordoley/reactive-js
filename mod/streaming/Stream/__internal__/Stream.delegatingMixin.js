/// <reference types="./Stream.delegatingMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe, returns, unsafeCast } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, MulticastObservableLike_observerCount, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../../rx.js";
import { QueueableLike_maxBufferSize, QueueableLike_push, } from "../../../util.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
const Stream_delegatingMixin = /*@__PURE__*/ (() => {
    return pipe(mix(include(Disposable_delegatingMixin()), function DelegatingStreamMixin(instance, delegate) {
        init(Disposable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },
        get [QueueableLike_maxBufferSize]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueableLike_maxBufferSize];
        },
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][MulticastObservableLike_observerCount];
        },
        [DispatcherLike_complete]() {
            this[DelegatingLike_delegate][DispatcherLike_complete]();
        },
        [QueueableLike_push](next) {
            return this[DelegatingLike_delegate][QueueableLike_push](next);
        },
    }), returns);
})();
export default Stream_delegatingMixin;
