/// <reference types="./Stream.delegatingMixin.d.ts" />

import { DelegatingLike_delegate, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { returns, unsafeCast } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import MulticastObservable_delegatingMixin from "../../../rx/MulticastObservable/__internal__/MulticastObservable.delegatingMixin.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
const Stream_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(MulticastObservable_delegatingMixin()), function DelegatingStreamMixin(instance, delegate) {
        init(MulticastObservable_delegatingMixin(), instance, delegate);
        return instance;
    }, props({}), {
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][DispatcherLike_scheduler];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][QueueableLike_capacity];
        },
        [QueueableLike_enqueue](req) {
            return this[DelegatingLike_delegate][QueueableLike_enqueue](req);
        },
        [DispatcherLike_complete]() {
            this[DelegatingLike_delegate][DispatcherLike_complete]();
        },
    }));
})();
export default Stream_delegatingMixin;
