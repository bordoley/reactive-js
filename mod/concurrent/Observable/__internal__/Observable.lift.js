/// <reference types="./Observable.lift.d.ts" />

import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, pipeUnsafe } from "../../../functions.js";
import LiftedObservableMixin, { LiftedObservableLike_operators, LiftedObservableLike_source, } from "../../__mixins__/LiftedObservableMixin.js";
import Observable_create from "./Observable.create.js";
const Observable_createLifted = /*@__PURE__*/ (() => createInstanceFactory(LiftedObservableMixin()))();
const Observable_lift = ((config) => (operator) => (source) => {
    const sourceSource = source[LiftedObservableLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedObservableLike_operators] ?? []),
    ];
    const isDeferred = config[ObservableLike_isDeferred] &&
        sourceSource[ObservableLike_isDeferred];
    const isPure = config[ObservableLike_isPure] && sourceSource[ObservableLike_isPure];
    const isRunnable = config[ObservableLike_isRunnable] &&
        sourceSource[ObservableLike_isRunnable];
    const liftedConfig = {
        [ObservableLike_isDeferred]: isDeferred,
        [ObservableLike_isPure]: isPure,
        [ObservableLike_isRunnable]: isRunnable,
    };
    return !isDeferred && !isPure && !isRunnable
        ? Observable_create(observer => {
            pipeUnsafe(observer, ...allFunctions, bindMethod(sourceSource, ObservableLike_observe));
        })
        : Observable_createLifted(sourceSource, allFunctions, liftedConfig);
});
export default Observable_lift;
