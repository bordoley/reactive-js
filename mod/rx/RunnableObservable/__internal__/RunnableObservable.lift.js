/// <reference types="./RunnableObservable.lift.d.ts" />

var _a, _b;
import { newInstance, pipeUnsafe } from "../../../functions.js";
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, } from "../../../rx.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";
const LiftedRunnableObservable_source = Symbol("LiftedRunnableObservable_source");
const LiftedRunnableObservable_operators = Symbol("LiftedRunnableObservable_operators");
class LiftedRunnableObservable {
    constructor(source, operators) {
        this[_a] = false;
        this[_b] = true;
        this[LiftedRunnableObservable_source] = source;
        this[LiftedRunnableObservable_operators] = operators;
    }
    [(_a = ObservableLike_isEnumerable, _b = ObservableLike_isRunnable, ReactiveContainerLike_sinkInto)](observer) {
        pipeUnsafe(observer, ...this[LiftedRunnableObservable_operators], Sink_sourceFrom(this[LiftedRunnableObservable_source]));
    }
}
const RunnableObservable_lift = (operator) => source => {
    const sourceSource = source instanceof LiftedRunnableObservable
        ? source[LiftedRunnableObservable_source]
        : source;
    const allFunctions = source instanceof LiftedRunnableObservable
        ? [operator, ...source[LiftedRunnableObservable_operators]]
        : [operator];
    return newInstance(LiftedRunnableObservable, sourceSource, allFunctions);
};
export default RunnableObservable_lift;
