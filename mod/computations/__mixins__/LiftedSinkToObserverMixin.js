/// <reference types="./LiftedSinkToObserverMixin.d.ts" />

import { include, init, mix, props, proto, } from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import ObserverMixin, { ObserverMixinLike_complete, ObserverMixinLike_notify, } from "../../utils/__mixins__/ObserverMixin.js";
import { EventListenerLike_notify, SinkLike_complete, } from "../../utils.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import LiftedSinkToEventListenerMixin, { LiftedSinkToEventListenerLike_operator, } from "./LiftedSinkToEventListenerMixin.js";
const LiftedSinkToObserverMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingDisposableMixin, DelegatingSchedulerMixin, LiftedSinkToEventListenerMixin(), ObserverMixin()), function LiftedSinkToObserverMixin(operator) {
        const delegate = operator[LiftedSinkLike_subscription];
        init(DelegatingDisposableMixin, this, delegate);
        init(DelegatingSchedulerMixin, this, delegate);
        init(LiftedSinkToEventListenerMixin(), this, operator);
        init(ObserverMixin(), this, delegate, delegate, none);
        return this;
    }, props(), proto({
        [ObserverMixinLike_notify](next) {
            this[LiftedSinkToEventListenerLike_operator][EventListenerLike_notify](next);
        },
        [ObserverMixinLike_complete]() {
            this[LiftedSinkToEventListenerLike_operator][SinkLike_complete]();
        },
    })));
})();
export default LiftedSinkToObserverMixin;
