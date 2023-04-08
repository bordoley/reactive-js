/// <reference types="./Queueable.delegatingMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { QueueableDelegatingMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import { BufferLike_capacity, QueueableLike_backpressureStrategy, QueueableLike_enqueue, } from "../../../util.js";
export { QueueableDelegatingMixin_delegate };
const Queueable_delegatingMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(function DelegatingQueueableMixin(instance, delegate) {
        instance[QueueableDelegatingMixin_delegate] = delegate;
        return instance;
    }, props({
        [QueueableDelegatingMixin_delegate]: none,
    }), {
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[QueueableDelegatingMixin_delegate][QueueableLike_backpressureStrategy];
        },
        get [BufferLike_capacity]() {
            unsafeCast(this);
            return this[QueueableDelegatingMixin_delegate][BufferLike_capacity];
        },
        [QueueableLike_enqueue](v) {
            return this[QueueableDelegatingMixin_delegate][QueueableLike_enqueue](v);
        },
    }));
})();
export default Queueable_delegatingMixin;
