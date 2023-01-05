/// <reference types="./EnumerableObservableLike.lift.d.ts" />
import { pipeUnsafe, newInstance } from '../../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import SinkLike__sourceFrom from '../SinkLike/SinkLike.sourceFrom.mjs';

const EnumerableObservableLike__lift = /*@__PURE__*/ (() => {
    var _a, _b;
    class LiftedEnumerableObservable {
        constructor(source, operators) {
            this.source = source;
            this.operators = operators;
            this[_a] = true;
            this[_b] = true;
        }
        [(_a = ObservableLike_isEnumerable, _b = ObservableLike_isRunnable, ReactiveContainerLike_sinkInto)](observer) {
            pipeUnsafe(observer, ...this.operators, SinkLike__sourceFrom(this.source));
        }
    }
    return (operator) => source => {
        const sourceSource = source instanceof LiftedEnumerableObservable ? source.source : source;
        const allFunctions = source instanceof LiftedEnumerableObservable
            ? [operator, ...source.operators]
            : [operator];
        return newInstance(LiftedEnumerableObservable, sourceSource, allFunctions);
    };
})();

export { EnumerableObservableLike__lift as default };
