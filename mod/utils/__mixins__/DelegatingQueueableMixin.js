/// <reference types="./DelegatingQueueableMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { EventListenerLike_notify, QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
const DelegatingQueueableMixin = /*@__PURE__*/ (() => {
    const DelegatingQueueableMixin_delegate = Symbol("DelegatingQueueableMixin_delegate");
    return returns(mix(function DelegatingQueueableMixin(delegate) {
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
        [QueueableLike_addOnReadyListener](callback) {
            return this[DelegatingQueueableMixin_delegate][QueueableLike_addOnReadyListener](callback);
        },
    }));
})();
export default DelegatingQueueableMixin;
