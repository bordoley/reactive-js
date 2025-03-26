/// <reference types="./LiftedSinkToConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { FlowControllerLike_addOnReadyListener, FlowControllerLike_backpressureStrategy, FlowControllerLike_capacity, FlowControllerLike_isReady, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import { LiftedSinkToEventListenerLike_operator } from "./LiftedSinkToEventListenerMixin.js";
import LiftedSinkToSinkMixin from "./LiftedSinkToSinkMixin.js";
const LiftedSinkToConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(LiftedSinkToSinkMixin()), function LiftedSinkToConsumerMixin(operator) {
        init(LiftedSinkToSinkMixin(), this, operator);
        return this;
    }, props(), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][FlowControllerLike_isReady];
        },
        get [FlowControllerLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][FlowControllerLike_backpressureStrategy];
        },
        get [FlowControllerLike_capacity]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][FlowControllerLike_capacity];
        },
        [FlowControllerLike_addOnReadyListener](callback) {
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][FlowControllerLike_addOnReadyListener](callback);
        },
    })));
})();
export default LiftedSinkToConsumerMixin;
