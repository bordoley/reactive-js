/// <reference types="./EnumerableObservableLike.lift.d.ts" />
import { pipeUnsafe, newInstance } from '../../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import { sourceFrom } from '../../SinkLike.mjs';

const lift = 
/*@__PURE__*/ (() => {
    var _a, _b;
    class LiftedRunnableObservable {
        constructor(source, operators) {
            this.source = source;
            this.operators = operators;
            this[_a] = true;
            this[_b] = true;
        }
        [(_a = ObservableLike_isEnumerable, _b = ObservableLike_isRunnable, ReactiveContainerLike_sinkInto)](observer) {
            pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
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

export { lift as default };
