/// <reference types="./LiftedOperatorToObserverMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import ObserverMixin, { ObserverMixinLike_complete, ObserverMixinLike_notify, } from "../../utils/__mixins__/ObserverMixin.js";
import { LiftedOperatorLike_complete, LiftedOperatorLike_notify, } from "../__internal__/LiftedSource.js";
import LiftedOperatorToEventListenerMixin, { LiftedOperatorToEventListenerLike_operator, } from "./LiftedOperatorToEventListenerMixin.js";
const LiftedOperatorToObserverMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingSchedulerMixin, LiftedOperatorToEventListenerMixin(), ObserverMixin()), function LiftedOperatorToObserverMixin(operator, delegate) {
        init(DelegatingSchedulerMixin, this, delegate);
        init(LiftedOperatorToEventListenerMixin(), this, operator, delegate);
        init(ObserverMixin(), this, delegate, delegate, none);
        return this;
    }, props(), proto({
        [ObserverMixinLike_notify](next) {
            this[LiftedOperatorToEventListenerLike_operator][LiftedOperatorLike_notify](next);
        },
        [ObserverMixinLike_complete]() {
            this[LiftedOperatorToEventListenerLike_operator][LiftedOperatorLike_complete]();
        },
    })));
})();
export default LiftedOperatorToObserverMixin;
