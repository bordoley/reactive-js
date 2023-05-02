/// <reference types="./PauseableObservable.lift.d.ts" />

import { LiftedLike_operators, LiftedLike_source, } from "../../../__internal__/containers.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import { EventSourceLike_addEventListener, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, } from "../../../util.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
class LiftedPauseableObservable {
    [LiftedLike_source];
    [LiftedLike_operators];
    [ObservableLike_isEnumerable] = false;
    [ObservableLike_isRunnable] = false;
    constructor(source, operators) {
        this[LiftedLike_source] = source;
        this[LiftedLike_operators] = operators;
    }
    get [PauseableLike_isPaused]() {
        return this[LiftedLike_source][PauseableLike_isPaused];
    }
    [EventSourceLike_addEventListener](listener) {
        this[LiftedLike_source][EventSourceLike_addEventListener](listener);
    }
    [PauseableLike_pause]() {
        this[LiftedLike_source][PauseableLike_pause]();
    }
    [PauseableLike_resume]() {
        this[LiftedLike_source][PauseableLike_resume]();
    }
    [ObservableLike_observe](observer) {
        pipeUnsafe(observer, ...this[LiftedLike_operators], Observer_sourceFrom(this[LiftedLike_source]));
    }
}
const PauseableObservable_lift = (operator) => source => {
    const sourceSource = source[LiftedLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[LiftedLike_operators] ?? []),
    ];
    return newInstance(LiftedPauseableObservable, sourceSource, allFunctions);
};
export default PauseableObservable_lift;
