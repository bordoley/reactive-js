/// <reference types="./Observable.liftUpperBoundedBy.d.ts" />

import { createInstanceFactory } from "../../__internal__/mixins.js";
import { LiftedLike_operators, LiftedLike_source, } from "../../__internal__/types.js";
import { bindMethod, pipeUnsafe } from "../../functions.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../types.js";
import Observable_create from "./Observable.create.js";
import Observable_liftMixin from "./Observable.liftMixin.js";
const Observable_createLifted = /*@__PURE__*/ (() => createInstanceFactory(Observable_liftMixin()))();
const Observable_liftUpperBoundedBy = ((config) => (operator) => (source) => {
    const sourceSource = source[LiftedLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedLike_operators] ?? []),
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
export default Observable_liftUpperBoundedBy;
