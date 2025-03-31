/// <reference types="./LiftedSinkToConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import ConsumerMixin, { ConsumerMixinLike_complete, ConsumerMixinLike_notify, } from "../../utils/__mixins__/ConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { BackPressureConfig_capacity, BackPressureConfig_strategy, EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, SinkLike_complete, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import { LiftedSinkToEventListenerLike_operator, } from "./LiftedSinkToEventListenerMixin.js";
import LiftedSinkToSinkMixin from "./LiftedSinkToSinkMixin.js";
const LiftedSinkToConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableMixin, LiftedSinkToSinkMixin(), ConsumerMixin()), function LiftedSinkToConsumerMixin(operator, backPressure) {
        const delegate = operator[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedSinkToSinkMixin(), this, operator);
        init(ConsumerMixin(), this, delegate, backPressure);
        return this;
    }, props(), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][FlowControllerLike_isReady];
        },
        get [BackPressureConfig_strategy]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][BackPressureConfig_strategy];
        },
        get [BackPressureConfig_capacity]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][BackPressureConfig_capacity];
        },
        [FlowControllerLike_addOnReadyListener](callback) {
            return this[LiftedSinkToEventListenerLike_operator][LiftedSinkLike_subscription][FlowControllerLike_addOnReadyListener](callback);
        },
        [ConsumerMixinLike_notify](next) {
            this[LiftedSinkToEventListenerLike_operator][EventListenerLike_notify](next);
        },
        [ConsumerMixinLike_complete]() {
            this[LiftedSinkToEventListenerLike_operator][SinkLike_complete]();
        },
    })));
})();
export default LiftedSinkToConsumerMixin;
