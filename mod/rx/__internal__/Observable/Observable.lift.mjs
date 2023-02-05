/// <reference types="./Observable.lift.d.ts" />
import { pipeUnsafe, newInstance } from '../../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';

const LiftedObservable_source = Symbol("LiftedObservable_source");
const LiftedObservable_operators = Symbol("LiftedObservable_operators");
class LiftedObservable {
    constructor(source, operators, isEnumerable, isRunnable) {
        this[LiftedObservable_source] = source;
        this[LiftedObservable_operators] = operators;
        this[ObservableLike_isEnumerable] = isEnumerable;
        this[ObservableLike_isRunnable] = isRunnable;
    }
    [ReactiveContainerLike_sinkInto](observer) {
        pipeUnsafe(observer, ...this[LiftedObservable_operators], Sink_sourceFrom(this[LiftedObservable_source]));
    }
}
const Observable_lift = (isEnumerable = false, isRunnable = false) => (operator) => source => {
    const sourceSource = source instanceof LiftedObservable
        ? source[LiftedObservable_source]
        : source;
    const allFunctions = source instanceof LiftedObservable
        ? [operator, ...source[LiftedObservable_operators]]
        : [operator];
    const isLiftedEnumerable = isEnumerable && sourceSource[ObservableLike_isEnumerable];
    const isLiftedRunnable = (isEnumerable || isRunnable) && sourceSource[ObservableLike_isRunnable];
    return newInstance(LiftedObservable, sourceSource, allFunctions, isLiftedEnumerable, isLiftedRunnable);
};

export { Observable_lift as default };
