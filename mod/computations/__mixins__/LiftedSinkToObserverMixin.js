/// <reference types="./LiftedSinkToObserverMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import ObserverMixin from "../../utils/__mixins__/ObserverMixin.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin from "./LiftedSinkToEventListenerMixin.js";
import LiftedSinkToSinkMixin from "./LiftedSinkToSinkMixin.js";
const LiftedSinkToObserverMixin = /*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableMixin, DelegatingSchedulerMixin, LiftedSinkToEventListenerMixin(), ObserverMixin(), LiftedSinkToSinkMixin()), function LiftedSinkToObserverMixin(delegate, backPressure) {
        const subscription = delegate[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, subscription);
        init(DelegatingSchedulerMixin, this, subscription);
        init(LiftedSinkToEventListenerMixin(), this, delegate);
        init(ObserverMixin(), this, subscription, subscription, backPressure);
        init(LiftedSinkToSinkMixin(), this, delegate);
        return this;
    }));
})();
export default LiftedSinkToObserverMixin;
