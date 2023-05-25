/// <reference types="./Observable.liftMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { mix, props } from "../../__internal__/mixins.js";
import { LiftedLike_operators, LiftedLike_source, } from "../../__internal__/types.js";
import { bindMethod, none, pipeUnsafe, raiseWithDebugMessage, returns, } from "../../functions.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../types.js";
const Observable_liftMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LiftedObservable(instance, source, ops, config) {
        instance[LiftedLike_source] = source;
        instance[LiftedLike_operators] = ops;
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
        [LiftedLike_source]: none,
        [LiftedLike_operators]: none,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
    }), {
        [ObservableLike_isPure]: false,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_observe](observer) {
            pipeUnsafe(observer, ...this[LiftedLike_operators], bindMethod(this[LiftedLike_source], ObservableLike_observe));
        },
    }));
})();
export default Observable_liftMixin;
