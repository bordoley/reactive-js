/// <reference types="./LiftedOperatorToConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, } from "../../utils.js";
import { LiftedOperatorToEventListenerLike_delegate } from "./LiftedOperatorToEventListenerMixin.js";
import LiftedOperatorToSinkMixin from "./LiftedOperatorToSinkMixin.js";
const LiftedOperatorToConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(LiftedOperatorToSinkMixin()), function LiftedOperatorToConsumerMixin(operator, delegate) {
        init(LiftedOperatorToSinkMixin(), this, operator, delegate);
        return this;
    }, props(), proto({
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            return this[LiftedOperatorToEventListenerLike_delegate][QueueableLike_isReady];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[LiftedOperatorToEventListenerLike_delegate][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[LiftedOperatorToEventListenerLike_delegate][QueueableLike_capacity];
        },
        [QueueableLike_addOnReadyListener](callback) {
            return this[LiftedOperatorToEventListenerLike_delegate][QueueableLike_addOnReadyListener](callback);
        },
    })));
})();
export default LiftedOperatorToConsumerMixin;
