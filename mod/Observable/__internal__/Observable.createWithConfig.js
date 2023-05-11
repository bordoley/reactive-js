/// <reference types="./Observable.createWithConfig.d.ts" />

import { createInstanceFactory, mix, props, } from "../../__internal__/mixins.js";
import { __CreateObservable_effect } from "../../__internal__/symbols.js";
import { error, none } from "../../functions.js";
import { DisposableLike_dispose, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../types.js";
const Observable_createWithConfig = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function CreateObservable(instance, effect, config) {
        instance[__CreateObservable_effect] = effect;
        instance[ObservableLike_isDeferred] =
            config[ObservableLike_isDeferred] ||
                config[ObservableLike_isEnumerable] ||
                config[ObservableLike_isRunnable];
        instance[ObservableLike_isRunnable] =
            config[ObservableLike_isEnumerable] ||
                config[ObservableLike_isRunnable];
        instance[ObservableLike_isEnumerable] =
            config[ObservableLike_isEnumerable];
        return instance;
    }, props({
        [__CreateObservable_effect]: none,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_isEnumerable]: false,
    }), {
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
