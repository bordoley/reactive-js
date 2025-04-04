/// <reference types="./Observable.lift.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";
import LiftedSinkToObserverMixin from "../../__mixins__/LiftedSinkToObserverMixin.js";
export const liftedSinkToObserver = /*@__PURE__*/ (() => createInstanceFactory(LiftedSinkToObserverMixin()))();
const Observable_lift = (config) => (operator) => (source) => DeferredEventSource.createLifted(source, operator, liftedSinkToObserver, config);
export default Observable_lift;
