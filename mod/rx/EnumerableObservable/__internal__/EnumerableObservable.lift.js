/// <reference types="./EnumerableObservable.lift.d.ts" />

var _a, _b;
import { newInstance, pipeUnsafe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ObservableLike_observe, } from "../../../rx.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";
const LiftedEnumerableObservable_source = Symbol("LiftedEnumerableObservable_source");
const LiftedEnumerableObservable_operators = Symbol("LiftedEnumerableObservable_operators");
class LiftedEnumerableObservable {
    constructor(source, operators) {
        this[_a] = true;
        this[_b] = true;
        this[LiftedEnumerableObservable_source] = source;
        this[LiftedEnumerableObservable_operators] = operators;
    }
    [(_a = ObservableLike_isEnumerable, _b = ObservableLike_isRunnable, ObservableLike_observe)](observer) {
        pipeUnsafe(observer, ...this[LiftedEnumerableObservable_operators], Sink_sourceFrom(this[LiftedEnumerableObservable_source]));
    }
}
const EnumerableObservable_lift = (operator) => source => {
    const sourceSource = source instanceof LiftedEnumerableObservable
        ? source[LiftedEnumerableObservable_source]
        : source;
    const allFunctions = source instanceof LiftedEnumerableObservable
        ? [operator, ...source[LiftedEnumerableObservable_operators]]
        : [operator];
    return newInstance(LiftedEnumerableObservable, sourceSource, allFunctions);
};
export default EnumerableObservable_lift;
