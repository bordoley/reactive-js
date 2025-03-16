/// <reference types="./DelegatingConsumerMixin.d.ts" />

import { mix, props, unsafeCast } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, EventListenerLike_notify, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
const DelegatingConsumerMixin = /*@__PURE__*/ (() => {
    const DelegatingConsumerMixin_delegate = Symbol("DelegatingConsumerMixin_delegate");
    return returns(mix(function DelegatingConsumerMixin(delegate) {
        this[DelegatingConsumerMixin_delegate] = delegate;
        return this;
    }, props({
        [DelegatingConsumerMixin_delegate]: none,
    }), {
        get [SinkLike_isCompleted]() {
            unsafeCast(this);
            return this[DelegatingConsumerMixin_delegate][SinkLike_isCompleted];
        },
        get [ConsumerLike_isReady]() {
            unsafeCast(this);
            return this[DelegatingConsumerMixin_delegate][ConsumerLike_isReady];
        },
        get [ConsumerLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[DelegatingConsumerMixin_delegate][ConsumerLike_backpressureStrategy];
        },
        get [ConsumerLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingConsumerMixin_delegate][ConsumerLike_capacity];
        },
        [EventListenerLike_notify](v) {
            this[DelegatingConsumerMixin_delegate][EventListenerLike_notify](v);
        },
        [SinkLike_complete]() {
            this[DelegatingConsumerMixin_delegate][SinkLike_complete]();
        },
        [ConsumerLike_addOnReadyListener](callback) {
            return this[DelegatingConsumerMixin_delegate][ConsumerLike_addOnReadyListener](callback);
        },
    }));
})();
export default DelegatingConsumerMixin;
