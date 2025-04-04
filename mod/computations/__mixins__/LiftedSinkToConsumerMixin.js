/// <reference types="./LiftedSinkToConsumerMixin.d.ts" />

import { include, init, mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { FlowControllerLike_addOnReadyListener, FlowControllerLike_isReady, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import { LiftedSinkToEventListenerLike_liftedSink } from "./LiftedSinkToEventListenerMixin.js";
import LiftedSinkToSinkMixin from "./LiftedSinkToSinkMixin.js";
const LiftedSinkToConsumerMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(LiftedSinkToSinkMixin()), function LiftedSinkToConsumerMixin(delegate) {
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
