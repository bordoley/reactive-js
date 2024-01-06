/// <reference types="./Observable.lift.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, none, pipeUnsafe } from "../../../functions.js";
import ObservableMixin from "../../__mixins__/ObservableMixin.js";
const LiftedObservableLike_source = Symbol("LiftedObservableMixin_source");
const LiftedObservableLike_operators = Symbol("LiftedObservableMixin_operators");
const createLiftedObservable = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(ObservableMixin), function LiftedObservable(instance, source, ops, config) {
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
    }));
})();
const Observable_lift = ((config) => (operator) => (source) => {
    const sourceSource = source[LiftedObservableLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedObservableLike_operators] ?? []),
    ];
    const isDeferred = config[ObservableLike_isDeferred] && source[ObservableLike_isDeferred];
    const isMulticasted = config[ObservableLike_isMulticasted] &&
        source[ObservableLike_isMulticasted];
    const isPure = config[ObservableLike_isPure] && source[ObservableLike_isPure];
    const isRunnable = config[ObservableLike_isRunnable] && source[ObservableLike_isRunnable];
    const liftedConfig = {
        [ObservableLike_isDeferred]: isDeferred || !isMulticasted,
        [ObservableLike_isMulticasted]: isMulticasted,
        [ObservableLike_isPure]: isPure,
        [ObservableLike_isRunnable]: isRunnable,
    };
    return createLiftedObservable(sourceSource, allFunctions, liftedConfig);
});
export default Observable_lift;
