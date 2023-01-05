/// <reference types="./RunnableObservableLike.lift.d.ts" />
import { pipeUnsafe, newInstance } from '../../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';

const RunnableObservableLike__lift = /*@__PURE__*/ (() => {
    var _a, _b;
    class LiftedRunnableObservable {
        constructor(source, operators) {
            this.source = source;
            this.operators = operators;
            this[_a] = false;
            this[_b] = true;
        }
        [(_a = ObservableLike_isEnumerable, _b = ObservableLike_isRunnable, ReactiveContainerLike_sinkInto)](observer) {
            pipeUnsafe(observer, ...this.operators, SinkLike__sourceFrom(this.source));
        }
    }
    return (operator) => source => {
        const sourceSource = source instanceof LiftedRunnableObservable ? source.source : source;
        const allFunctions = source instanceof LiftedRunnableObservable
            ? [operator, ...source.operators]
            : [operator];
        return newInstance(LiftedRunnableObservable, sourceSource, allFunctions);
    };
})();

export { RunnableObservableLike__lift as default };
