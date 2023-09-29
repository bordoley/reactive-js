/// <reference types="./DelegatingQueueableMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../utils.js";
const DelegatingQueueableMixin = /*@__PURE__*/ (() => {
    const DelegatingQueueableMixin_delegate = Symbol("DelegatingQueueableMixin_delegate");
    return returns(mix(function DelegatingQueueableMixin(instance, delegate) {
        instance[DelegatingQueueableMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingQueueableMixin_delegate]: none,
    }), {
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[DelegatingQueueableMixin_delegate][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingQueueableMixin_delegate][QueueableLike_capacity];
        },
        [QueueableLike_enqueue](v) {
            return this[DelegatingQueueableMixin_delegate][QueueableLike_enqueue](v);
        },
    }));
})();
export default DelegatingQueueableMixin;
