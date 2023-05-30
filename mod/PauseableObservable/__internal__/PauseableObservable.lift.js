/// <reference types="./PauseableObservable.lift.d.ts" />

import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Observable_liftMixin from "../../Observable/__internal__/Observable.liftMixin.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { DelegatingLike_delegate, LiftedLike_operators, LiftedLike_source, } from "../../__internal__/types.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../types.js";
const createLiftedPauseableObservable = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Observable_liftMixin(), Delegating_mixin()), function LiftedPauseableObservable(instance, source, ops) {
        init(Observable_liftMixin(), instance, source, ops, {
            [ObservableLike_isDeferred]: false,
            [ObservableLike_isPure]: true,
            [ObservableLike_isRunnable]: false,
        });
        init(Delegating_mixin(), instance, source);
        return instance;
    }, props({}), {
        [ObservableLike_isPure]: true,
        get [PauseableLike_isPaused]() {
            unsafeCast(this);
            return this[DelegatingLike_delegate][PauseableLike_isPaused];
        },
        [PauseableLike_pause]() {
            this[DelegatingLike_delegate][PauseableLike_pause]();
        },
        [PauseableLike_resume]() {
            this[DelegatingLike_delegate][PauseableLike_resume]();
        },
    }));
})();
const PauseableObservable_lift = (operator) => source => {
    const sourceSource = source[LiftedLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedLike_operators] ?? []),
    ];
    return createLiftedPauseableObservable(sourceSource, allFunctions);
};
export default PauseableObservable_lift;
