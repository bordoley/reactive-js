/// <reference types="./Observable.lift.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, none, pipeUnsafe } from "../../../functions.js";
import ObservableMixin from "../../__mixins__/ObservableMixin.js";
import Observable_isMulticasted from "./Observable.isMulticasted.js";
const LiftedObservableLike_source = Symbol("LiftedObservableMixin_source");
const LiftedObservableLike_operators = Symbol("LiftedObservableMixin_operators");
const createLiftedObservable = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(ObservableMixin), function LiftedObservable(instance, source, ops, config) {
        init(ObservableMixin, instance, config);
        instance[LiftedObservableLike_source] = source;
        instance[LiftedObservableLike_operators] = ops;
        return instance;
    }, props({
        [LiftedObservableLike_source]: none,
        [LiftedObservableLike_operators]: none,
    }), {
        [ObservableLike_observe](observer) {
            pipeUnsafe(observer, ...this[LiftedObservableLike_operators], bindMethod(this[LiftedObservableLike_source], ObservableLike_observe));
        },
    });
})();
export const ObservableLift_isStateless = Symbol("ObservableLift_isStateless");
const Observable_lift = ((config) => (operator) => (source) => {
    const sourceSource = source[LiftedObservableLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedObservableLike_operators] ?? []),
    ];
    const isStateless = config[ObservableLift_isStateless] ?? false;
    const sourceIsMulticasted = Observable_isMulticasted(source);
    const isDeferred = (sourceIsMulticasted && !isStateless) ||
        (config[ComputationLike_isDeferred] &&
            source[ComputationLike_isDeferred]);
    const isRunnable = config[ComputationLike_isSynchronous] &&
        source[ComputationLike_isSynchronous];
    const isPure = !isDeferred ||
        (config[ComputationLike_isPure] && source[ComputationLike_isPure]);
    const liftedConfig = {
        [ComputationLike_isDeferred]: isDeferred,
        [ComputationLike_isPure]: isPure,
        [ComputationLike_isSynchronous]: isRunnable,
    };
    return createLiftedObservable(sourceSource, allFunctions, liftedConfig);
});
export default Observable_lift;
