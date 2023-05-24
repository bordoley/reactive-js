/// <reference types="./EnumerableBase.create.d.ts" />

import Enumerable_observeWith from "../../Enumerable/__internal__/Enumerable.observeWith.js";
import { createInstanceFactory, mix, props, } from "../../__internal__/mixins.js";
import { none, pipe } from "../../functions.js";
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
            pipe(this, Enumerable_observeWith(observer));
        },
    }));
})();
export default EnumerableBase_create;
