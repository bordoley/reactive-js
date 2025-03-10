/// <reference types="./ObservableMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { mix, props } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../computations.js";
import { raiseIf } from "../../functions.js";
const ObservableMixin = /*@__PURE__*/ (() => {
    return mix(function ObservableMixin(config) {
        const configSynchronousObservable = config[ComputationLike_isSynchronous] ?? true;
        const configDeferred = config[ComputationLike_isDeferred] ?? true;
        const configPure = config[ComputationLike_isPure] ?? true;
        if (__DEV__) {
            const isValidSynchronousObservable = configSynchronousObservable && configDeferred;
            const isValidDeferred = configDeferred;
            const isValidMulticasted = configPure && !configDeferred && !configSynchronousObservable;
            raiseIf(!(isValidSynchronousObservable ||
                isValidDeferred ||
                isValidMulticasted), `Attempting to create an observable in an illegal state: ${JSON.stringify({
                isDeferred: configDeferred,
                isPure: configPure,
                isSynchronousObservable: configSynchronousObservable,
            })}`);
        }
        this[ComputationLike_isSynchronous] = configSynchronousObservable ?? true;
        this[ComputationLike_isDeferred] = configDeferred ?? true;
        this[ComputationLike_isPure] = configPure ?? true;
        return this;
    }, props({
        [ComputationLike_isDeferred]: false,
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
    }), {});
})();
export default ObservableMixin;
