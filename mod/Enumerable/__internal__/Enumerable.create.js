/// <reference types="./Enumerable.create.d.ts" />

import { createInstanceFactory, mix, props, } from "../../__internal__/mixins.js";
import { none, pipe } from "../../functions.js";
import { EnumerableLike_enumerate, ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../types.js";
import Enumerable_observeWith from "./Enumerable.observeWith.js";
const Enumerable_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(function CreateObservable(instance, enumerate) {
        instance[EnumerableLike_enumerate] = enumerate;
        return instance;
    }, props({
        [EnumerableLike_enumerate]: none,
    }), {
        [ObservableLike_isEnumerable]: true,
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isRunnable]: true,
        [ObservableLike_observe](observer) {
            pipe(this, Enumerable_observeWith(observer));
        },
    }));
})();
export default Enumerable_create;
