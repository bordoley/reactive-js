/// <reference types="./Observable.lift.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import LiftedSinkToObserverMixin from "../../__mixins__/LiftedSinkToObserverMixin.js";
export const liftedSinkToObserver = /*@__PURE__*/ (() => mixInstanceFactory(include(LiftedSinkToObserverMixin()), function OperatorToObserver(operator) {
    init(LiftedSinkToObserverMixin(), this, operator);
    return this;
}))();
const Observable_lift = (config) => (operator) => (source) => DeferredSource.createLifted(source, operator, liftedSinkToObserver, config);
export default Observable_lift;
