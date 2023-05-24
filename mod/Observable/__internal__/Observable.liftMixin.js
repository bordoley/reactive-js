/// <reference types="./Observable.liftMixin.d.ts" />

import { mix, props } from "../../__internal__/mixins.js";
import { LiftedLike_operators, LiftedLike_source, } from "../../__internal__/types.js";
import { bindMethod, none, pipeUnsafe, returns, } from "../../functions.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, } from "../../types.js";
const Observable_liftMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LiftedObservable(instance, source, ops, config) {
        instance[LiftedLike_source] = source;
        instance[LiftedLike_operators] = ops;
        instance[ObservableLike_isDeferred] = config[ObservableLike_isDeferred];
        instance[ObservableLike_isRunnable] = config[ObservableLike_isRunnable];
        return instance;
    }, props({
        [LiftedLike_source]: none,
        [LiftedLike_operators]: none,
        [ObservableLike_isDeferred]: false,
        [ObservableLike_isRunnable]: false,
    }), {
        [ObservableLike_isPure]: false,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_observe](observer) {
            pipeUnsafe(observer, ...this[LiftedLike_operators], bindMethod(this[LiftedLike_source], ObservableLike_observe));
        },
    }));
})();
export default Observable_liftMixin;
