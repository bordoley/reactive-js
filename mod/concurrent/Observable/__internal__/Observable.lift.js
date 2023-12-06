/// <reference types="./Observable.lift.d.ts" />

import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, ObservableLike_observe, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../../concurrent.js";
import { bindMethod, isSome, pipeUnsafe, } from "../../../functions.js";
import LiftedObservableMixin, { LiftedObservableLike_operators, LiftedObservableLike_source, } from "../../__mixins__/LiftedObservableMixin.js";
import Observable_create from "./Observable.create.js";
const createLiftedObservable = /*@__PURE__*/ (() => createInstanceFactory(LiftedObservableMixin()))();
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
const Observable_lift = ((config) => (operator) => (source) => {
    const sourceSource = source[LiftedObservableLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedObservableLike_operators] ?? []),
    ];
    const isDeferred = config[ObservableLike_isDeferred] && source[ObservableLike_isDeferred];
    const isPure = config[ObservableLike_isPure] && source[ObservableLike_isPure];
    const isRunnable = config[ObservableLike_isRunnable] && source[ObservableLike_isRunnable];
    const isPauseable = isSome(source[PauseableLike_pause]) && isPure;
    const liftedConfig = {
        [ObservableLike_isDeferred]: isDeferred,
        [ObservableLike_isPure]: isPure,
        [ObservableLike_isRunnable]: isRunnable,
    };
    return !isDeferred && !isPure && !isRunnable
        ? Observable_create(observer => {
            pipeUnsafe(observer, ...allFunctions, bindMethod(sourceSource, ObservableLike_observe));
        })
        : isPauseable
            ? createLiftedPauseableObservable(sourceSource, allFunctions)
            : createLiftedObservable(sourceSource, allFunctions, liftedConfig);
});
export default Observable_lift;
