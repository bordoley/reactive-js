/// <reference types="./Dispatcher.delegatingMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { DelegatingDispatcherMixin_delegate } from "../../../__internal__/symbols.js";
import { none, returns, unsafeCast } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import { QueueableLike_backpressureStrategy, BufferLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
const Dispatcher_delegatingMixin = /*@__PURE__*/ (() => {
    return returns(mix(function DispatcherMixin(instance, delegate) {
        instance[DelegatingDispatcherMixin_delegate] = delegate;
        return instance;
    }, props({
        [DelegatingDispatcherMixin_delegate]: none,
    }), {
        get [DispatcherLike_scheduler]() {
            unsafeCast(this);
            return this[DelegatingDispatcherMixin_delegate][DispatcherLike_scheduler];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[DelegatingDispatcherMixin_delegate][QueueableLike_backpressureStrategy];
        },
        get [BufferLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingDispatcherMixin_delegate][BufferLike_capacity];
        },
        [QueueableLike_enqueue](req) {
            return this[DelegatingDispatcherMixin_delegate][QueueableLike_enqueue](req);
        },
        [DispatcherLike_complete]() {
            this[DelegatingDispatcherMixin_delegate][DispatcherLike_complete]();
        },
    }));
})();
export default Dispatcher_delegatingMixin;
