/// <reference types="./PauseableObservable.lift.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../../rx.js";
import LiftedObservableMixin, { LiftedObservableLike_operators, LiftedObservableLike_source, } from "../../__mixins__/LiftedObservableMixin.js";
const createLiftedPauseableObservable = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(LiftedObservableMixin()), function LiftedPauseableObservable(instance, source, ops) {
        init(LiftedObservableMixin(), instance, source, ops, {
            [ObservableLike_isDeferred]: false,
            [ObservableLike_isPure]: true,
            [ObservableLike_isRunnable]: false,
        });
        return instance;
    }, props({}), {
        [ObservableLike_isPure]: true,
        get [PauseableLike_isPaused]() {
            unsafeCast(this);
            return this[LiftedObservableLike_source][PauseableLike_isPaused];
        },
        [PauseableLike_pause]() {
            this[LiftedObservableLike_source][PauseableLike_pause]();
        },
        [PauseableLike_resume]() {
            this[LiftedObservableLike_source][PauseableLike_resume]();
        },
    }));
})();
const PauseableObservable_lift = (operator) => source => {
    const sourceSource = source[LiftedObservableLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedObservableLike_operators] ?? []),
    ];
    return createLiftedPauseableObservable(sourceSource, allFunctions);
};
export default PauseableObservable_lift;
