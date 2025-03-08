/// <reference types="./SingleUseObservable.d.ts" />

import { mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isSynchronous, ObservableLike_observe, } from "../../computations.js";
import { isSome, none, raiseIf } from "../../functions.js";
export const SingleUseObservableLike_observer = Symbol("SingleUseObservableLike_observer");
export const create = (() => {
    return mixInstanceFactory(function SingleUseObservable(instance) {
        return instance;
    }, props({
        [SingleUseObservableLike_observer]: none,
    }), {
        [ComputationLike_isDeferred]: true,
        [ComputationLike_isSynchronous]: false,
        [ObservableLike_observe](observer) {
            raiseIf(isSome(this[SingleUseObservableLike_observer]), "SingleUseObservable already subscribed to.");
            this[SingleUseObservableLike_observer] = observer;
        },
    });
})();
