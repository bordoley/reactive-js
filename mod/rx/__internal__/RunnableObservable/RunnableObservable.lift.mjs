/// <reference types="./RunnableObservable.lift.d.ts" />
import { pipeUnsafe, newInstance } from '../../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';

var _a, _b;
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

export { RunnableObservable_lift as default };
