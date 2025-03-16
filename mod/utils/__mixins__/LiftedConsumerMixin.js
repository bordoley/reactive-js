/// <reference types="./LiftedConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import { ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, } from "../../utils.js";
import LiftedSinkMixin from "./LiftedSinkMixin.js";
export const LiftedConsumerLike_isReady = Symbol("LiftedConsumerLike_isReady");
export const LiftedConsumerLike_consumer = Symbol("LiftedConsumerLike_consumer");
const LiftedConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(LiftedSinkMixin()), function LiftedConsumerMixin(delegate) {
        init(LiftedSinkMixin(), this, delegate);
        this[LiftedConsumerLike_consumer] =
            delegate[LiftedConsumerLike_consumer] ??
                delegate;
        return this;
    }, props({
        [LiftedConsumerLike_consumer]: none,
    }), proto({
        get [LiftedConsumerLike_isReady]() {
            unsafeCast(this);
            return this[LiftedConsumerLike_consumer][ConsumerLike_isReady];
        },
        get [ConsumerLike_isReady]() {
            unsafeCast(this);
            return this[LiftedConsumerLike_consumer][ConsumerLike_isReady];
        },
        get [ConsumerLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[LiftedConsumerLike_consumer][ConsumerLike_backpressureStrategy];
        },
        get [ConsumerLike_capacity]() {
            unsafeCast(this);
            return this[LiftedConsumerLike_consumer][ConsumerLike_capacity];
        },
        [ConsumerLike_addOnReadyListener](callback) {
            return this[LiftedConsumerLike_consumer][ConsumerLike_addOnReadyListener](callback);
        },
    })));
})();
export default LiftedConsumerMixin;
