/// <reference types="./ObservableLike.lift.d.ts" />
import { pipeUnsafe, newInstance } from '../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto } from '../../rx.mjs';
import { sourceFrom } from '../../rx/SinkLike.mjs';
import { reactive } from '../containers/StatefulContainerLike.internal.mjs';

const createLift = /*@__PURE__*/ (() => {
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
    return (isEnumerable, isRunnable) => (operator) => source => {
        const sourceSource = source instanceof LiftedObservable ? source.source : source;
        const allFunctions = source instanceof LiftedObservable
            ? [operator, ...source.operators]
            : [operator];
        const isLiftedEnumerable = isEnumerable && sourceSource[ObservableLike_isEnumerable];
        const isLiftedRunnable = isLiftedEnumerable ||
            (isRunnable && sourceSource[ObservableLike_isRunnable]);
        return newInstance(LiftedObservable, sourceSource, allFunctions, isLiftedEnumerable, isLiftedRunnable);
    };
})();
const liftObservable = createLift(false, false);
const liftObservableT = {
    lift: liftObservable,
    variance: reactive,
};
const liftRunnableObservable = createLift(false, true);
const liftEnumerableObservable = createLift(true, true);
const liftEnumerableObservableT = {
    lift: liftEnumerableObservable,
    variance: reactive,
};

export { liftEnumerableObservable, liftEnumerableObservableT, liftObservable, liftObservableT, liftRunnableObservable };
