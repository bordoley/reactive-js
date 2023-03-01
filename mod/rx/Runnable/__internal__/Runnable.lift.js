/// <reference types="./Runnable.lift.d.ts" />

var _a, _b;
import { newInstance, pipeUnsafe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Observer_sourceFrom from "../../Observer/__internal__/Observer.sourceFrom.js";
const LiftedRunnable_source = Symbol("LiftedRunnable_source");
const LiftedRunnable_operators = Symbol("LiftedRunnable_operators");
class LiftedRunnable {
    constructor(source, operators) {
        this[_a] = false;
        this[_b] = true;
        this[LiftedRunnable_source] = source;
        this[LiftedRunnable_operators] = operators;
    }
    [(_a = ObservableLike_isEnumerable, _b = ObservableLike_isRunnable, ObservableLike_observe)](observer) {
        pipeUnsafe(observer, ...this[LiftedRunnable_operators], Observer_sourceFrom(this[LiftedRunnable_source]));
    }
}
const Runnable_lift = (operator) => source => {
    const sourceSource = source instanceof LiftedRunnable ? source[LiftedRunnable_source] : source;
    const allFunctions = source instanceof LiftedRunnable
        ? [operator, ...source[LiftedRunnable_operators]]
        : [operator];
    return newInstance(LiftedRunnable, sourceSource, allFunctions);
};
export default Runnable_lift;
