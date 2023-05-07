/// <reference types="./Observable.liftMixin.d.ts" />

import { LiftedLike_operators, LiftedLike_source, } from "../../../__internal__/containers.js";
import { mix, props } from "../../../__internal__/mixins.js";
import { bindMethod, none, pipeUnsafe, returns, } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
const Observable_liftMixin = /*@__PURE__*/ (() => {
    return returns(mix(function LiftedObservable(instance, source, ops, isEnumerable, isRunnable) {
        instance[LiftedLike_source] = source;
        instance[LiftedLike_operators] = ops;
        instance[ObservableLike_isEnumerable] = isEnumerable;
        instance[ObservableLike_isRunnable] = isRunnable;
        return instance;
    }, props({
        [LiftedLike_source]: none,
        [LiftedLike_operators]: none,
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
    }), {
        [ObservableLike_observe](observer) {
            pipeUnsafe(observer, ...this[LiftedLike_operators], bindMethod(this[LiftedLike_source], ObservableLike_observe));
        },
    }));
})();
export default Observable_liftMixin;
