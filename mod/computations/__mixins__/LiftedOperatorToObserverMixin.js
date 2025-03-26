/// <reference types="./LiftedOperatorToObserverMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import ObserverMixin, { ObserverMixinLike_complete, ObserverMixinLike_notify, } from "../../utils/__mixins__/ObserverMixin.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import LiftedOperatorToEventListenerMixin, { LiftedOperatorToEventListenerLike_operator, } from "./LiftedOperatorToEventListenerMixin.js";
const LiftedOperatorToObserverMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingSchedulerMixin, LiftedOperatorToEventListenerMixin(), ObserverMixin()), function LiftedOperatorToObserverMixin(operator) {
        const delegate = operator[LiftedSinkLike_subscription];
        init(DelegatingSchedulerMixin, this, delegate);
        init(LiftedOperatorToEventListenerMixin(), this, operator);
        init(ObserverMixin(), this, delegate, delegate, none);
        return this;
    }, props(), proto({
        [ObserverMixinLike_notify](next) {
            this[LiftedOperatorToEventListenerLike_operator][EventListenerLike_notify](next);
        },
        [ObserverMixinLike_complete]() {
            this[LiftedOperatorToEventListenerLike_operator][SinkLike_complete]();
        },
    })));
})();
export default LiftedOperatorToObserverMixin;
