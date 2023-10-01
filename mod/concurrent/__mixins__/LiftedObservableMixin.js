/// <reference types="./LiftedObservableMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { mix, props } from "../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../concurrent.js";
import { bindMethod, none, pipeUnsafe, raiseWithDebugMessage, returns, } from "../../functions.js";
export const LiftedObservableLike_source = Symbol("LiftedObservableMixin_source");
export const LiftedObservableLike_operators = Symbol("LiftedObservableMixin_operators");
const LiftedObservableMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LiftedObservable(instance, source, ops, config) {
        instance[LiftedObservableLike_source] = source;
        instance[LiftedObservableLike_operators] = ops;
        const configRunnable = config[ObservableLike_isRunnable] ?? false;
        const configDeferred = config[ObservableLike_isDeferred] ?? false;
        const configPure = config[ObservableLike_isPure] ?? false;
        if (__DEV__) {
            if (configRunnable && !configDeferred) {
                raiseWithDebugMessage("Attempting to create a non-deferred, runnable observable, which is an illegal state");
            }
            else if (!configDeferred && !configPure) {
                raiseWithDebugMessage("Attempting to create a non-deferred, not-pure observable which is an illegal state");
            }
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
export default LiftedObservableMixin;
