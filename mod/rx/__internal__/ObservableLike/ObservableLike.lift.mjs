/// <reference types="./ObservableLike.lift.d.ts" />
import { pipeUnsafe, newInstance } from '../../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';

class LiftedObservable {
    constructor(source, operators, isEnumerable, isRunnable) {
        this.source = source;
        this.operators = operators;
        this[ObservableLike_isEnumerable] = isEnumerable;
        this[ObservableLike_isRunnable] = isRunnable;
    }
    [ReactiveContainerLike_sinkInto](observer) {
        pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
    }
}
const lift = (isEnumerable = false, isRunnable = false) => (operator) => source => {
    const sourceSource = source instanceof LiftedObservable ? source.source : source;
    const allFunctions = source instanceof LiftedObservable
        ? [operator, ...source.operators]
        : [operator];
    const isLiftedEnumerable = isEnumerable && sourceSource[ObservableLike_isEnumerable];
    const isLiftedRunnable = (isEnumerable || isRunnable) && sourceSource[ObservableLike_isRunnable];
    return newInstance(LiftedObservable, sourceSource, allFunctions, isLiftedEnumerable, isLiftedRunnable);
};

export { lift as default };
