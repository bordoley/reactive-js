/// <reference types="./Observable.lift.d.ts" />

import { LiftedObservable_operators, LiftedObservable_source, } from "../../../__internal__/symbols.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
class LiftedObservable {
    [LiftedObservable_source];
    [LiftedObservable_operators];
    [ObservableLike_isEnumerable];
    [ObservableLike_isRunnable];
    constructor(source, operators, isEnumerable, isRunnable) {
        this[LiftedObservable_source] = source;
        this[LiftedObservable_operators] = operators;
        this[ObservableLike_isEnumerable] = isEnumerable;
        this[ObservableLike_isRunnable] = isRunnable;
    }
    [ObservableLike_observe](observer) {
        pipeUnsafe(observer, ...this[LiftedObservable_operators], Observer_sourceFrom(this[LiftedObservable_source]));
    }
}
const Observable_lift = ((config) => (operator) => source => {
    const sourceSource = source instanceof LiftedObservable
        ? source[LiftedObservable_source]
        : source;
    const allFunctions = source instanceof LiftedObservable
        ? [operator, ...source[LiftedObservable_operators]]
        : [operator];
    const isLiftedEnumerable = config[ObservableLike_isEnumerable] &&
        sourceSource[ObservableLike_isEnumerable];
    const isLiftedRunnable = (config[ObservableLike_isEnumerable] ||
        config[ObservableLike_isRunnable]) &&
        sourceSource[ObservableLike_isRunnable];
    return newInstance(LiftedObservable, sourceSource, allFunctions, isLiftedEnumerable, isLiftedRunnable);
});
export default Observable_lift;
