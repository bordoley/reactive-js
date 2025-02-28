/// <reference types="./DelegatingDispatcherMixin.d.ts" />

import { include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isInteractive, ComputationLike_isSynchronous, } from "../../computations.js";
import { DispatcherLike_complete, DispatcherLike_isCompleted, } from "../../concurrent.js";
import { EventSourceLike_addEventListener, } from "../../events.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../utils.js";
const DelegatingDispatcherMixin = /*@__PURE__*/ (() => {
    const DelegatingDispatcherMixin_delegate = Symbol("DelegatingDispatcherMixin_delegate");
    return returns(mix(include(DelegatingDisposableMixin()), function DelegatingDispatcherMixin(instance, delegate) {
        init(DelegatingDisposableMixin(), instance, delegate);
        instance[DelegatingDispatcherMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingDispatcherMixin_delegate]: none,
    }), {
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isInteractive]: false,
        get [DispatcherLike_isCompleted]() {
            unsafeCast(this);
            return this[DelegatingDispatcherMixin_delegate][DispatcherLike_isCompleted];
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
        [DispatcherLike_complete]() {
            this[DelegatingDispatcherMixin_delegate][DispatcherLike_complete]();
        },
        [EventSourceLike_addEventListener](listener) {
            this[DelegatingDispatcherMixin_delegate][EventSourceLike_addEventListener](listener);
        },
    }));
})();
export default DelegatingDispatcherMixin;
