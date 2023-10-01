/// <reference types="./Observable.createWithConfig.d.ts" />

import { __DEV__ } from "../../../__internal__/constants.js";
import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../concurrent.js";
import { error, none, raiseWithDebugMessage, } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
const Observable_createWithConfig = 
/*@__PURE__*/ (() => {
    const CreateObservable_effect = Symbol("CreateObservable_effect");
    return createInstanceFactory(mix(function CreateObservable(instance, effect, config) {
        instance[CreateObservable_effect] = effect;
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
        [CreateObservable_effect]: none,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
    }), {
        [ObservableLike_observe](observer) {
            try {
                this[CreateObservable_effect](observer);
            }
            catch (e) {
                observer[DisposableLike_dispose](error(e));
            }
        },
    }));
})();
export default Observable_createWithConfig;
