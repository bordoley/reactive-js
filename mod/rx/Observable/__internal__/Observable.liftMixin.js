/// <reference types="./Observable.liftMixin.d.ts" />

import { LiftedLike_operators, LiftedLike_source, } from "../../../__internal__/containers.js";
import { mix, props } from "../../../__internal__/mixins.js";
import { none, pipeUnsafe, returns } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
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
            pipeUnsafe(observer, ...this[LiftedLike_operators], Observer_sourceFrom(this[LiftedLike_source]));
        },
    }));
})();
export default Observable_liftMixin;
