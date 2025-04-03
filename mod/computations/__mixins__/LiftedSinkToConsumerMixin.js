/// <reference types="./LiftedSinkToConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import ConsumerMixin from "../../utils/__mixins__/ConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { SinkMixinLike_doComplete, SinkMixinLike_doNotify, } from "../../utils/__mixins__/SinkMixin.js";
import { EventListenerLike_notify, FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, SinkLike_complete, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import { LiftedSinkToEventListenerLike_liftedSink, } from "./LiftedSinkToEventListenerMixin.js";
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
            return this[LiftedSinkToEventListenerLike_liftedSink][LiftedSinkLike_subscription][FlowControllerLike_isReady];
        },
        [FlowControllerLike_addOnReadyListener](callback) {
            return this[LiftedSinkToEventListenerLike_liftedSink][LiftedSinkLike_subscription][FlowControllerLike_addOnReadyListener](callback);
        },
        [SinkMixinLike_doNotify](next) {
            this[LiftedSinkToEventListenerLike_liftedSink][EventListenerLike_notify](next);
        },
        [SinkMixinLike_doComplete]() {
            this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_complete]();
        },
    })));
})();
export default LiftedSinkToConsumerMixin;
