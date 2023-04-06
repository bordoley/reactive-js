/// <reference types="./Observable.createWithConfig.d.ts" />

import { createInstanceFactory, mix, props, } from "../../../__internal__/mixins.js";
import { CreateObservable_effect } from "../../../__internal__/symbols.js";
import { error, none } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../util.js";
const Observable_createWithConfig = 
/*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function CreateObservable(instance, effect, config) {
        instance[CreateObservable_effect] = effect;
        instance[ObservableLike_isEnumerable] =
            config[ObservableLike_isEnumerable];
        instance[ObservableLike_isRunnable] =
            config[ObservableLike_isEnumerable] ||
                config[ObservableLike_isRunnable];
        return instance;
    }, props({
        [CreateObservable_effect]: none,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_isEnumerable]: false,
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
