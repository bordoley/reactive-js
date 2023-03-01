/// <reference types="./Enumerable.lift.d.ts" />

var _a, _b;
import { newInstance, pipeUnsafe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observer_sourceFrom from "../../../rx/Observer/__internal__/Observer.sourceFrom.js";
const LiftedEnumerable_source = Symbol("LiftedEnumerable_source");
const LiftedEnumerable_operators = Symbol("LiftedEnumerable_operators");
class LiftedEnumerable {
    constructor(source, operators) {
        this[_a] = true;
        this[_b] = true;
        this[LiftedEnumerable_source] = source;
        this[LiftedEnumerable_operators] = operators;
    }
    [(_a = ObservableLike_isEnumerable, _b = ObservableLike_isRunnable, ObservableLike_observe)](observer) {
        pipeUnsafe(observer, ...this[LiftedEnumerable_operators], Observer_sourceFrom(this[LiftedEnumerable_source]));
    }
}
const Enumerable_lift = (operator) => source => {
    const sourceSource = source instanceof LiftedEnumerable
        ? source[LiftedEnumerable_source]
        : source;
    const allFunctions = source instanceof LiftedEnumerable
        ? [operator, ...source[LiftedEnumerable_operators]]
        : [operator];
    return newInstance(LiftedEnumerable, sourceSource, allFunctions);
};
export default Enumerable_lift;
