/// <reference types="./Observable.lift.d.ts" />

import { __DEV__ } from "../../../__internal__/constants.js";
import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { bindMethod, none, pipeUnsafe, raiseIf, } from "../../../functions.js";
import Observable_create from "./Observable.create.js";
const LiftedObservableLike_source = Symbol("LiftedObservableMixin_source");
const LiftedObservableLike_operators = Symbol("LiftedObservableMixin_operators");
const createLiftedObservable = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function LiftedObservable(instance, source, ops, config) {
        instance[LiftedObservableLike_source] = source;
        instance[LiftedObservableLike_operators] = ops;
        const configRunnable = config[ObservableLike_isRunnable];
        const configDeferred = config[ObservableLike_isDeferred];
        const configPure = config[ObservableLike_isPure];
        if (__DEV__) {
            raiseIf(configRunnable && !configDeferred, "Attempting to create a non-deferred, runnable observable, which is an illegal state");
            raiseIf(!configDeferred && !configPure, "Attempting to create a non-deferred, not-pure observable which is an illegal state");
        }
        instance[ObservableLike_isRunnable] = configRunnable;
        instance[ObservableLike_isDeferred] = configDeferred;
        instance[ObservableLike_isPure] = configPure;
        return instance;
    }, props({
        [LiftedObservableLike_source]: none,
        [LiftedObservableLike_operators]: none,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
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
    const isPure = config[ObservableLike_isPure] && source[ObservableLike_isPure];
    const isRunnable = config[ObservableLike_isRunnable] && source[ObservableLike_isRunnable];
    const liftedConfig = {
        [ObservableLike_isDeferred]: isDeferred,
        [ObservableLike_isPure]: isPure,
        [ObservableLike_isRunnable]: isRunnable,
    };
    return !isDeferred && !isPure
        ? Observable_create(observer => {
            pipeUnsafe(observer, ...allFunctions, bindMethod(sourceSource, ObservableLike_observe));
        })
        : createLiftedObservable(sourceSource, allFunctions, liftedConfig);
});
export default Observable_lift;
