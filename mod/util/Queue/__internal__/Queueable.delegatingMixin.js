/// <reference types="./Queueable.delegatingMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { __DelegatingQueueableMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, QueueableLike_enqueue, } from "../../../util.js";
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
        get [BufferLike_capacity]() {
            unsafeCast(this);
            return this[__DelegatingQueueableMixin_delegate][BufferLike_capacity];
        },
        [QueueableLike_enqueue](v) {
            return this[__DelegatingQueueableMixin_delegate][QueueableLike_enqueue](v);
        },
    }));
})();
export default Queueable_delegatingMixin;
