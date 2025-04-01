/// <reference types="./Observable.lift.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import LiftedSinkToObserverMixin from "../../__mixins__/LiftedSinkToObserverMixin.js";
export const liftedSinkToObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(LiftedSinkToObserverMixin()), function LiftedSinkToObserver(operator, backPressure) {
    init(LiftedSinkToObserverMixin(), this, operator, backPressure);
    return this;
}))();
export const liftedSinkToObserverWithBackPressure = (config) => (sink) => liftedSinkToObserver(sink, config);
const Observable_lift = (config) => (operator) => (source) => DeferredReactiveSource.createLifted(source, operator, liftedSinkToObserver, config);
export default Observable_lift;
