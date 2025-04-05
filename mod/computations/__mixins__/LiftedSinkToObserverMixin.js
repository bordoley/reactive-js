/// <reference types="./LiftedSinkToObserverMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { raiseIf, returns } from "../../functions.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import { EventListenerLike_notify, ObserverLike_mustNotifyInSchedulerContinuation, SchedulerLike_inContinuation, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import LiftedSinkToConsumerMixin from "./LiftedSinkToConsumerMixin.js";
import { LiftedSinkToEventListenerLike_liftedSink } from "./LiftedSinkToEventListenerMixin.js";
const LiftedSinkToObserverMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingSchedulerMixin, LiftedSinkToConsumerMixin()), function LiftedSinkToObserverMixin(delegate) {
        const subscription = delegate[LiftedSinkLike_subscription];
        init(LiftedSinkToConsumerMixin(), this, delegate);
        init(DelegatingSchedulerMixin, this, subscription);
        return this;
    }, props(), proto({
        [ObserverLike_mustNotifyInSchedulerContinuation]: true,
        [EventListenerLike_notify](next) {
            if (__DEV__) {
                raiseIf(!this[SchedulerLike_inContinuation], "Can only notify a lifted observer from within a scheduler continuation");
            }
            this[LiftedSinkToEventListenerLike_liftedSink][EventListenerLike_notify](next);
        },
    })));
})();
export default LiftedSinkToObserverMixin;
