/// <reference types="./Observable.createWithConfig.d.ts" />

import { createInstanceFactory, mix, props, } from "../../__internal__/mixins.js";
import { __CreateObservable_effect } from "../../__internal__/symbols.js";
import { error, none } from "../../functions.js";
import { DisposableLike_dispose, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../types.js";
const Observable_createWithConfig = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function CreateObservable(instance, effect, config) {
        instance[__CreateObservable_effect] = effect;
        const configRunnable = config[ObservableLike_isRunnable] ?? false;
        const configDeferred = config[ObservableLike_isDeferred] ?? false;
        const configPure = config[ObservableLike_isPure] ?? false;
        instance[ObservableLike_isDeferred] =
            !configPure && (configRunnable || configDeferred);
        instance[ObservableLike_isRunnable] = configRunnable && !configPure;
        instance[ObservableLike_isPure] =
            configPure && !configRunnable && !configDeferred;
        return instance;
    }, props({
        [__CreateObservable_effect]: none,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isPure]: false,
        [ObservableLike_isRunnable]: false,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_observe](observer) {
            try {
                this[__CreateObservable_effect](observer);
            }
            catch (e) {
                observer[DisposableLike_dispose](error(e));
            }
        },
    }));
})();
export default Observable_createWithConfig;
