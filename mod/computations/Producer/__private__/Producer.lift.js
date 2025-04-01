/// <reference types="./Producer.lift.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import LiftedSinkToConsumerMixin from "../../__mixins__/LiftedSinkToConsumerMixin.js";
export const liftedSinkToConsumer = /*@__PURE__*/ (() => mixInstanceFactory(include(LiftedSinkToConsumerMixin()), function LiftedSinkToConsumer(operator, backPressure) {
    init(LiftedSinkToConsumerMixin(), this, operator, backPressure);
    return this;
}))();
export const liftedSinkToConsumerWithBackPressure = (config) => (sink) => liftedSinkToConsumer(sink, config);
const Producer_lift = (config) => (operator) => (source) => DeferredReactiveSource.createLifted(source, operator, liftedSinkToConsumer, {
    [ComputationLike_isSynchronous]: false,
    [ComputationLike_isPure]: config?.[ComputationLike_isPure],
});
export default Producer_lift;
