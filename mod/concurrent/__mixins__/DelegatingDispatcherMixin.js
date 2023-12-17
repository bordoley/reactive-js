/// <reference types="./DelegatingDispatcherMixin.d.ts" />

import { include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { DispatcherLike_complete, } from "../../concurrent.js";
import { EventSourceLike_addEventListener, } from "../../events.js";
import { none, returns } from "../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../utils.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
const DelegatingDispatcherMixin = /*@__PURE__*/ (() => {
    const DelegatingDispatcherMixin_delegate = Symbol("DelegatingDispatcherMixin_delegate");
    return returns(mix(include(DelegatingDisposableMixin()), function DelegatingDispatcherMixin(instance, delegate) {
        init(DelegatingDisposableMixin(), instance, delegate);
        instance[DelegatingDispatcherMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingDispatcherMixin_delegate]: none,
    }), {
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
