/// <reference types="./LiftedSinkToConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { QueueableLike_addOnReadyListener, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_isReady, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import { LiftedSinkToEventListenerLike_operator } from "./LiftedSinkToEventListenerMixin.js";
import LiftedSinkToSinkMixin from "./LiftedSinkToSinkMixin.js";
const LiftedSinkToConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(LiftedSinkToSinkMixin()), function LiftedSinkToConsumerMixin(operator) {
        init(LiftedSinkToSinkMixin(), this, operator);
        return this;
    }, props(), proto({
        get [QueueableLike_isReady]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][QueueableLike_isReady];
        },
        get [QueueableLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][QueueableLike_backpressureStrategy];
        },
        get [QueueableLike_capacity]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][QueueableLike_capacity];
        },
        [QueueableLike_addOnReadyListener](callback) {
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][QueueableLike_addOnReadyListener](callback);
        },
    })));
})();
export default LiftedSinkToConsumerMixin;
