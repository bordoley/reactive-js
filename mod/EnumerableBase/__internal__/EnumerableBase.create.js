/// <reference types="./EnumerableBase.create.d.ts" />

import Observable_delay from "../../Observable/__internal__/Observable.delay.js";
import { createInstanceFactory, mix, props, } from "../../__internal__/mixins.js";
import { invoke, none, pipe } from "../../functions.js";
import { EnumerableLike_enumerate, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../types.js";
const EnumerableBase_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function CreateObservable(instance, enumerate, isPure) {
        instance[EnumerableLike_enumerate] = enumerate;
        instance[ObservableLike_isPure] = isPure;
        return instance;
    }, props({
        [EnumerableLike_enumerate]: none,
        [ObservableLike_isPure]: false,
    }), {
        [ObservableLike_isEnumerable]: true,
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isRunnable]: true,
        [ObservableLike_observe](observer) {
            pipe(this, Observable_delay(0), invoke(ObservableLike_observe, observer));
        },
    }));
})();
export default EnumerableBase_create;
