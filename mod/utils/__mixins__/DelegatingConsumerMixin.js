/// <reference types="./DelegatingConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, } from "../../utils.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import DelegatingSinkMixin from "./DelegatingSinkMixin.js";
const DelegatingConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingSinkMixin()), function DelegatingConsumerMixin(delegate) {
        init(DelegatingSinkMixin(), this, delegate);
        return this;
    }, props(), proto({
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            return this[DelegatingEventListenerLike_delegate][QueueableLike_isReady];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[DelegatingEventListenerLike_delegate][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingEventListenerLike_delegate][QueueableLike_capacity];
        },
        [QueueableLike_addOnReadyListener](callback) {
            return this[DelegatingEventListenerLike_delegate][QueueableLike_addOnReadyListener](callback);
        },
    })));
})();
export default DelegatingConsumerMixin;
