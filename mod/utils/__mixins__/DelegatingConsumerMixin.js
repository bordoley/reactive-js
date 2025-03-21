/// <reference types="./DelegatingConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, } from "../../utils.js";
import { DelegatingEventListenerLike_delegate } from "./DelegatingEventListenerMixin.js";
import DelegatingSinkMixin from "./DelegatingSinkMixin.js";
const DelegatingConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingSinkMixin()), function DelegatingConsumerMixin(delegate) {
        init(DelegatingSinkMixin(), this, delegate);
        return this;
    }, props(), proto({
        get [ConsumerLike_isReady]() {
            unsafeCast(this);
            return this[DelegatingEventListenerLike_delegate][ConsumerLike_isReady];
        },
        get [ConsumerLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[DelegatingEventListenerLike_delegate][ConsumerLike_backpressureStrategy];
        },
        get [ConsumerLike_capacity]() {
            unsafeCast(this);
            return this[DelegatingEventListenerLike_delegate][ConsumerLike_capacity];
        },
        [ConsumerLike_addOnReadyListener](callback) {
            return this[DelegatingEventListenerLike_delegate][ConsumerLike_addOnReadyListener](callback);
        },
    })));
})();
export default DelegatingConsumerMixin;
