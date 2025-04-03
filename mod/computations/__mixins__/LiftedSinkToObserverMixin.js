/// <reference types="./LiftedSinkToObserverMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import ObserverMixin from "../../utils/__mixins__/ObserverMixin.js";
import { SinkMixinLike_doComplete, SinkMixinLike_doNotify, } from "../../utils/__mixins__/SinkMixin.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin, { LiftedSinkToEventListenerLike_liftedSink, } from "./LiftedSinkToEventListenerMixin.js";
const LiftedSinkToObserverMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableMixin, DelegatingSchedulerMixin, LiftedSinkToEventListenerMixin(), ObserverMixin()), function LiftedSinkToObserverMixin(delegate, backPressure) {
        const subscription = delegate[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, subscription);
        init(DelegatingSchedulerMixin, this, subscription);
        init(LiftedSinkToEventListenerMixin(), this, delegate);
        init(ObserverMixin(), this, subscription, subscription, backPressure);
        return this;
    }, props(), proto({
        [SinkMixinLike_doNotify](next) {
            this[LiftedSinkToEventListenerLike_liftedSink][EventListenerLike_notify](next);
        },
        [SinkMixinLike_doComplete]() {
            this[LiftedSinkToEventListenerLike_liftedSink][SinkLike_complete]();
        },
    })));
})();
export default LiftedSinkToObserverMixin;
