/// <reference types="./Producer.lift.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import DelegatingDisposableMixin from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import LiftedSinkToConsumerMixin from "../../__mixins__/LiftedSinkToConsumerMixin.js";
const liftedSinkToConsumer = /*@__PURE__*/ (() => mixInstanceFactory(include(LiftedSinkToConsumerMixin(), DelegatingDisposableMixin), function OperatorToConsumer(delegate) {
    init(LiftedSinkToConsumerMixin(), this, delegate);
    init(DelegatingDisposableMixin, this, delegate);
    return this;
}))();
const Producer_lift = (config) => (operator) => (source) => DeferredSource.createLifted(source, operator, liftedSinkToConsumer, {
    [ComputationLike_isSynchronous]: false,
    [ComputationLike_isPure]: config?.[ComputationLike_isPure],
});
export default Producer_lift;
