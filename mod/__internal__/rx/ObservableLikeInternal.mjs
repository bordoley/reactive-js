/// <reference types="./ObservableLikeInternal.d.ts" />
import { map } from '../../containers/ReadonlyArrayLike.mjs';
import { pipe, min, pipeUnsafe, newInstance, getLength } from '../../functions.mjs';
import { ObservableLike_observableType, ReactiveContainerLike_sinkInto, createObservable, createSubject } from '../../rx.mjs';
import { publishTo } from '../../rx/SubjectLike.mjs';
import { sourceFrom } from '../../util/SinkLike.mjs';
import { reactive, createDistinctUntilChangedOperator, createForEachOperator, createScanOperator } from '../containers/StatefulContainerLikeInternal.mjs';
import { createDistinctUntilChangedObserver, createForEachObserver, createDelegatingObserver, createScanObserver, createObserver } from '../scheduling/ObserverLikeMixin.mjs';
import { addTo, onComplete, dispose, bindTo, addToIgnoringChildErrors } from '../util/DisposableLikeInternal.mjs';

const getObservableType = (obs) => obs[ObservableLike_observableType];
const getMinObservableType = (observables) => pipe(observables, map(getObservableType), x => min(...x));
const createLift = /*@__PURE__*/ (() => {
    class LiftedObservable {
        constructor(source, operators, observableType) {
            this.source = source;
            this.operators = operators;
            this[ObservableLike_observableType] = observableType;
        }
        [ReactiveContainerLike_sinkInto](observer) {
            pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
        }
    }
    return (observableType) => (operator) => source => {
        const sourceSource = source instanceof LiftedObservable ? source.source : source;
        const allFunctions = source instanceof LiftedObservable
            ? [operator, ...source.operators]
            : [operator];
        const type = min(observableType, getObservableType(source), getObservableType(sourceSource));
        return newInstance(LiftedObservable, sourceSource, allFunctions, type);
    };
})();
const liftObservable = createLift(0);
const liftRunnableObservable = createLift(1);
const liftEnumerableObservable = createLift(2);
const liftEnumerableObservableT = {
    lift: liftEnumerableObservable,
    variance: reactive,
};
const distinctUntilChanged = 
/*@__PURE__*/ (() => pipe(createDistinctUntilChangedObserver, createDistinctUntilChangedOperator(liftEnumerableObservableT)))();
const forEach = /*@__PURE__*/ (() => pipe(createForEachObserver, createForEachOperator(liftEnumerableObservableT)))();
const mergeImpl = /*@__PURE__*/ (() => {
    const createMergeObserver = (delegate, count, ctx) => pipe(createDelegatingObserver(delegate), addTo(delegate), onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
            pipe(delegate, dispose());
        }
    }));
    return (observables) => {
        const onSink = (observer) => {
            const count = getLength(observables);
            const ctx = { completedCount: 0 };
            for (const observable of observables) {
                pipe(createMergeObserver(observer, count, ctx), sourceFrom(observable));
            }
        };
        const type = getMinObservableType(observables);
        return createObservable(onSink, { type });
    };
})();
const merge = (...observables) => mergeImpl(observables);
const mergeT = {
    concat: merge,
};
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
const multicast = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = createSubject({ replay });
    pipe(observable, forEach(publishTo(subject)), subscribe(scheduler), bindTo(subject));
    return subject;
};
const scan = /*@__PURE__*/ pipe(createScanObserver, createScanOperator(liftEnumerableObservableT));
const subscribe = /*@__PURE__*/ (() => scheduler => observable => pipe(scheduler, createObserver, addToIgnoringChildErrors(scheduler), sourceFrom(observable)))();

export { distinctUntilChanged, forEach, getMinObservableType, getObservableType, liftEnumerableObservable, liftEnumerableObservableT, liftObservable, liftRunnableObservable, merge, mergeImpl, mergeT, multicast, scan, subscribe };
