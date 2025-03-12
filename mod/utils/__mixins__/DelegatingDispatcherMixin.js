/// <reference types="./DelegatingDispatcherMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_complete, QueueableLike_enqueue, QueueableLike_isCompleted, QueueableLike_onReady, } from "../../utils.js";
const DelegatingDispatcherMixin = /*@__PURE__*/ (() => {
    const DelegatingDispatcherMixin_delegate = Symbol("DelegatingDispatcherMixin_delegate");
    return returns(mix(function DelegatingDispatcherMixin(delegate) {
        this[DelegatingDispatcherMixin_delegate] = delegate;
        return this;
    }, props({
        [DelegatingDispatcherMixin_delegate]: none,
    }), {
        get [QueueableLike_isCompleted]() {
            unsafeCast(this);
            return this[DelegatingDispatcherMixin_delegate][QueueableLike_isCompleted];
        },
        get [QueueableLike_onReady]() {
            unsafeCast(this);
            return this[DelegatingDispatcherMixin_delegate][QueueableLike_onReady];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[DelegatingDispatcherMixin_delegate][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingDispatcherMixin_delegate][QueueableLike_capacity];
        },
        [QueueableLike_enqueue](v) {
            return this[DelegatingDispatcherMixin_delegate][QueueableLike_enqueue](v);
        },
        [QueueableLike_complete]() {
            this[DelegatingDispatcherMixin_delegate][QueueableLike_complete]();
        },
    }));
})();
export default DelegatingDispatcherMixin;
