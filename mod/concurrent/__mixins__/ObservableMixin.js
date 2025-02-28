/// <reference types="./ObservableMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { mix, props } from "../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../computations.js";
import { ObservableLike_isDeferred } from "../../concurrent.js";
import { raiseIf } from "../../functions.js";
const ObservableMixin = /*@__PURE__*/ (() => {
    return mix(function ObservableMixin(instance, config) {
        const configRunnable = config[ComputationLike_isSynchronous];
        const configDeferred = config[ObservableLike_isDeferred];
        const configPure = config[ComputationLike_isPure];
        if (__DEV__) {
            const isValidRunnable = (configRunnable ?? true) && configDeferred;
            const isValidDeferred = configDeferred;
            const isValidMulticasted = configPure && !configDeferred && !configRunnable;
            raiseIf(!(isValidRunnable || isValidDeferred || isValidMulticasted), `Attempting to create an observable in an illegal state: ${JSON.stringify({
                isDeferred: configDeferred,
                isPure: configPure,
                isRunnable: configRunnable,
            })}`);
        }
        instance[ComputationLike_isSynchronous] = configRunnable ?? true;
        instance[ObservableLike_isDeferred] = configDeferred;
        instance[ComputationLike_isPure] = configPure ?? true;
        return instance;
    }, props({
        [ObservableLike_isDeferred]: false,
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
    }), {});
})();
export default ObservableMixin;
