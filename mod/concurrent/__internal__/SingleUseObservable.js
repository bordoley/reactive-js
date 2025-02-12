/// <reference types="./SingleUseObservable.d.ts" />

import { mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../concurrent.js";
import { isSome, none, raiseIf } from "../../functions.js";
export const SingleUseObservableLike_observer = Symbol("SingleUseObservableLike_observer");
export const create = (() => {
    return mixInstanceFactory(function SingleUseObservable(instance) {
        return instance;
    }, props({
        [SingleUseObservableLike_observer]: none,
    }), {
        [ObservableLike_isDeferred]: true,
        [ObservableLike_isPure]: true,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_observe](observer) {
            raiseIf(isSome(this[SingleUseObservableLike_observer]), "SingleUseObservable already subscribed to.");
            this[SingleUseObservableLike_observer] = observer;
        },
    });
})();
