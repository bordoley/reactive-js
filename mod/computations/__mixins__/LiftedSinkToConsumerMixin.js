/// <reference types="./LiftedSinkToConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import ConsumerMixin from "../../utils/__mixins__/ConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import { FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin, { LiftedSinkToEventListenerLike_liftedSink, } from "./LiftedSinkToEventListenerMixin.js";
import LiftedSinkToSinkMixin from "./LiftedSinkToSinkMixin.js";
const LiftedSinkToConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableMixin, LiftedSinkToEventListenerMixin(), ConsumerMixin(), LiftedSinkToSinkMixin()), function LiftedSinkToConsumerMixin(delegate, backPressure) {
        const subscription = delegate[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, delegate);
        init(LiftedSinkToEventListenerMixin(), this, delegate);
        init(ConsumerMixin(), this, subscription, backPressure);
        init(LiftedSinkToSinkMixin(), this, delegate);
        return this;
    }, props(), proto({
        get [FlowControllerLike_isReady]() {
            unsafeCast(this);
            return this[LiftedSinkToEventListenerLike_liftedSink][LiftedSinkLike_subscription][FlowControllerLike_isReady];
        },
        [FlowControllerLike_addOnReadyListener](callback) {
            return this[LiftedSinkToEventListenerLike_liftedSink][LiftedSinkLike_subscription][FlowControllerLike_addOnReadyListener](callback);
        },
    })));
})();
export default LiftedSinkToConsumerMixin;
