/// <reference types="./SingleUseObservable.d.ts" />

import { mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../computations.js";
import { ObservableLike_isDeferred, ObservableLike_observe, } from "../../concurrent.js";
import { isSome, none, raiseIf } from "../../functions.js";
export const SingleUseObservableLike_observer = Symbol("SingleUseObservableLike_observer");
export const create = (() => {
    return mixInstanceFactory(function SingleUseObservable(instance) {
        return instance;
    }, props({
        [SingleUseObservableLike_observer]: none,
    }), {
        [ObservableLike_isDeferred]: true,
        [ComputationLike_isPure]: true,
        [ComputationLike_isSynchronous]: false,
        [ObservableLike_observe](observer) {
            raiseIf(isSome(this[SingleUseObservableLike_observer]), "SingleUseObservable already subscribed to.");
            this[SingleUseObservableLike_observer] = observer;
        },
    });
})();
