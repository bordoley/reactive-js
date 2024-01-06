/// <reference types="./ObservableMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { mix, props } from "../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isMulticasted, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../concurrent.js";
import { raiseIf } from "../../functions.js";
const ObservableMixin = /*@__PURE__*/ (() => {
    return mix(function ObservableMixin(instance, config) {
        const configRunnable = config[ObservableLike_isRunnable];
        const configDeferred = config[ObservableLike_isDeferred];
        const configMulticasted = config[ObservableLike_isMulticasted];
        const configPure = config[ObservableLike_isPure];
        if (__DEV__) {
            const isValidRunnable = configRunnable && configDeferred && !configMulticasted;
            const isValidDeferred = configDeferred && !configMulticasted;
            const isValidMulticasted = configMulticasted && configPure && !configDeferred && !configRunnable;
            raiseIf(!(isValidRunnable || isValidDeferred || isValidMulticasted), `Attempting to create an observable in an illegal state: ${JSON.stringify({
                isDeferred: configDeferred,
                isMulticasted: configMulticasted,
                isPure: configPure,
                isRunnable: configRunnable,
            })}`);
        }
        instance[ObservableLike_isRunnable] = configRunnable;
        instance[ObservableLike_isDeferred] = configDeferred;
        instance[ObservableLike_isMulticasted] = configMulticasted;
        instance[ObservableLike_isPure] = configPure;
        return instance;
    }, props({
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isMulticasted]: false,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
    }), {});
})();
export default ObservableMixin;
