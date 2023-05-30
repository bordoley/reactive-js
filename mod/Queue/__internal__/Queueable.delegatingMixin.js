/// <reference types="./Queueable.delegatingMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { __DelegatingQueueableMixin_delegate } from "../../__internal__/symbols.js";
import { none, returns } from "../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../types.js";
const Queueable_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DelegatingQueueableMixin(instance, delegate) {
        instance[__DelegatingQueueableMixin_delegate] = delegate;
        return instance;
    }, props({
        [__DelegatingQueueableMixin_delegate]: none,
    }), {
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[__DelegatingQueueableMixin_delegate][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[__DelegatingQueueableMixin_delegate][QueueableLike_capacity];
        },
        [QueueableLike_enqueue](v) {
            return this[__DelegatingQueueableMixin_delegate][QueueableLike_enqueue](v);
        },
    }));
})();
export default Queueable_delegatingMixin;
