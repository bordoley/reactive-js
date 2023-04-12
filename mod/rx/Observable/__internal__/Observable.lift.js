/// <reference types="./Observable.lift.d.ts" />

import { __LiftedLike_operators, __LiftedLike_source, } from "../../../__internal__/symbols.js";
import { newInstance, pipeUnsafe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
class LiftedObservable {
    [__LiftedLike_source];
    [__LiftedLike_operators];
    [ObservableLike_isEnumerable];
    [ObservableLike_isRunnable];
    constructor(source, operators, isEnumerable, isRunnable) {
        this[__LiftedLike_source] = source;
        this[__LiftedLike_operators] = operators;
        this[ObservableLike_isEnumerable] = isEnumerable;
        this[ObservableLike_isRunnable] = isRunnable;
    }
    [ObservableLike_observe](observer) {
        pipeUnsafe(observer, ...this[__LiftedLike_operators], Observer_sourceFrom(this[__LiftedLike_source]));
    }
}
const Observable_lift = ((config) => (operator) => source => {
    const sourceSource = source[__LiftedLike_source] ?? source;
    const allFunctions = [
        operator,
        ...(source[__LiftedLike_operators] ?? []),
    ];
    const isLiftedEnumerable = config[ObservableLike_isEnumerable] &&
        sourceSource[ObservableLike_isEnumerable];
    const isLiftedRunnable = (config[ObservableLike_isEnumerable] ||
        config[ObservableLike_isRunnable]) &&
        sourceSource[ObservableLike_isRunnable];
    return newInstance(LiftedObservable, sourceSource, allFunctions, isLiftedEnumerable, isLiftedRunnable);
});
export default Observable_lift;
