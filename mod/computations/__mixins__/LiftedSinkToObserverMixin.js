/// <reference types="./LiftedSinkToObserverMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import { ConsumerMixinLike_complete, ConsumerMixinLike_notify, } from "../../utils/__mixins__/ConsumerMixin.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import ObserverMixin from "../../utils/__mixins__/ObserverMixin.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin, { LiftedSinkToEventListenerLike_liftedSink, } from "./LiftedSinkToEventListenerMixin.js";
const LiftedSinkToObserverMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableMixin, DelegatingSchedulerMixin, LiftedSinkToEventListenerMixin(), ObserverMixin()), function LiftedSinkToObserverMixin(operator, backPressure) {
        const delegate = operator[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingSchedulerMixin, this, delegate);
        init(LiftedSinkToEventListenerMixin(), this, operator);
        init(ObserverMixin(), this, delegate, delegate, backPressure);
        return this;
    }, props(), proto({
        [ConsumerMixinLike_notify](next) {
            this[LiftedSinkToEventListenerLike_liftedSink][EventListenerLike_notify](next);
        },
        [ConsumerMixinLike_complete]() {
            this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_complete]();
        },
    })));
})();
export default LiftedSinkToObserverMixin;
