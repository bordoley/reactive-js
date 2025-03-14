/// <reference types="./DelegatingQueueableMixin.d.ts" />

import { include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, QueueableLike_onReady, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import DelegatingDisposableMixin from "./DelegatingDisposableMixin.js";
const DelegatingQueueableMixin = /*@__PURE__*/ (() => {
    const DelegatingQueueableMixin_delegate = Symbol("DelegatingQueueableMixin_delegate");
    return returns(mix(include(DelegatingDisposableMixin), function DelegatingQueueableMixin(delegate) {
        init(DelegatingDisposableMixin, this, delegate);
        this[DelegatingQueueableMixin_delegate] = delegate;
        return this;
    }, props({
        [DelegatingQueueableMixin_delegate]: none,
    }), {
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DelegatingQueueableMixin_delegate][SinkLike_isCompleted];
        },
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            return this[DelegatingQueueableMixin_delegate][QueueableLike_isReady];
        },
        get [QueueableLike_onReady]() {
            unsafeCast(this);
            return this[DelegatingQueueableMixin_delegate][QueueableLike_onReady];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[DelegatingQueueableMixin_delegate][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingQueueableMixin_delegate][QueueableLike_capacity];
        },
        [EventListenerLike_notify](v) {
            this[DelegatingQueueableMixin_delegate][EventListenerLike_notify](v);
        },
        [SinkLike_complete]() {
            this[DelegatingQueueableMixin_delegate][SinkLike_complete]();
        },
    }));
})();
export default DelegatingQueueableMixin;
