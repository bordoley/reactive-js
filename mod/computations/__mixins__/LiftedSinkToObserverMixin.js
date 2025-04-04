/// <reference types="./LiftedSinkToObserverMixin.d.ts" />

import { include, init, mix } from "../../__internal__/mixins.js";
import { returns } from "../../functions.js";
import DelegatingSchedulerMixin from "../../utils/__mixins__/DelegatingSchedulerMixin.js";
import { LiftedSinkLike_subscription, } from "../__internal__/LiftedSource.js";
import LiftedSinkToConsumerMixin from "./LiftedSinkToConsumerMixin.js";
const LiftedSinkToObserverMixin = 
/*@__PURE__*/ (() => {
    return returns(mix(include(DelegatingSchedulerMixin, LiftedSinkToConsumerMixin()), function LiftedSinkToObserverMixin(delegate) {
        const subscription = delegate[LiftedSinkLike_subscription];
        init(LiftedSinkToConsumerMixin(), this, delegate);
        init(DelegatingSchedulerMixin, this, subscription);
        return this;
    }));
})();
export default LiftedSinkToObserverMixin;
