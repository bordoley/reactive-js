/// <reference types="./ObservableLikeInternal.d.ts" />
import { map, every } from '../../containers/ReadonlyArrayLike.mjs';
import { compose, isTrue, pipeUnsafe, newInstance, isSome, pipe, getLength, none, partial } from '../../functions.mjs';
import { ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, createEnumerableObservable, createRunnableObservable, createObservable, createSubject } from '../../rx.mjs';
import { publishTo } from '../../rx/SubjectLike.mjs';
import { getScheduler } from '../../scheduling/ObserverLike.mjs';
import { SinkLike_notify } from '../../util.mjs';
import { sourceFrom, notifySink } from '../../util/SinkLike.mjs';
import { reactive, createDistinctUntilChangedOperator, createForEachOperator, createScanOperator } from '../containers/StatefulContainerLikeInternal.mjs';
import { MAX_SAFE_INTEGER } from '../env.mjs';
import { observerMixin, createDistinctUntilChangedObserver, createForEachObserver, createDelegatingObserver, createScanObserver, createObserver } from '../scheduling/ObserverLikeMixin.mjs';
import { addTo, onComplete, isDisposed, dispose, bindTo, addToIgnoringChildErrors } from '../util/DisposableLikeInternal.mjs';
import { disposableMixin, createDisposableRef, disposed } from '../util/DisposableLikeMixins.mjs';
import { MutableRefLike_current } from '../util/MutableRefLike.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../util/Object.mjs';

const allAreEnumerable = compose(map((obs) => obs[ObservableLike_isEnumerable]), every(isTrue));
const allAreRunnable = compose(map((obs) => obs[ObservableLike_isRunnable]), every(isTrue));
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
        return newInstance(LiftedObservable, sourceSource, allFunctions, isEnumerable, isEnumerable || isRunnable);
    };
})();
const liftObservable = createLift(false, false);
const liftRunnableObservable = createLift(false, true);
const liftEnumerableObservable = createLift(true, true);
const liftEnumerableObservableT = {
    lift: liftEnumerableObservable,
    variance: reactive,
};
const createMergeAll = (lift) => {
    const createMergeAllObserver = (() => {
        const typedObserverMixin = observerMixin();
        const subscribeNext = (observer) => {
            if (observer.activeCount < observer.maxConcurrency) {
                const nextObs = observer.queue.shift();
                if (isSome(nextObs)) {
                    observer.activeCount++;
                    pipe(nextObs, forEach(notifySink(observer.delegate)), subscribe(getScheduler(observer)), addTo(observer.delegate), onComplete(observer.onDispose));
                }
                else if (isDisposed(observer)) {
                    pipe(observer.delegate, dispose());
                }
            }
        };
        return createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function Observer(delegate, maxBufferSize, maxConcurrency) {
            init(disposableMixin, this);
            init(typedObserverMixin, this, getScheduler(delegate));
            this.delegate = delegate;
            this.maxBufferSize = maxBufferSize;
            this.maxConcurrency = maxConcurrency;
            this.activeCount = 0;
            this.onDispose = () => {
                this.activeCount--;
                subscribeNext(this);
            };
            this.queue = [];
            pipe(this, addTo(delegate), onComplete(() => {
                if (isDisposed(delegate)) {
                    this.queue.length = 0;
                }
                else if (getLength(this.queue) + this.activeCount === 0) {
                    pipe(this.delegate, dispose());
                }
            }));
            return this;
        }, {
            activeCount: 0,
            delegate: none,
            maxBufferSize: 0,
            maxConcurrency: 0,
            onDispose: none,
            queue: none,
        }, {
            [SinkLike_notify](next) {
                const { queue } = this;
                queue.push(next);
                // Drop old events if the maxBufferSize has been exceeded
                if (getLength(queue) + this.activeCount > this.maxBufferSize) {
                    queue.shift();
                }
                subscribeNext(this);
            },
        }));
    })();
    return (options = {}) => {
        const { maxBufferSize = MAX_SAFE_INTEGER, maxConcurrency = MAX_SAFE_INTEGER, } = options;
        return lift(pipe(createMergeAllObserver, partial(maxBufferSize, maxConcurrency)));
    };
};
const createSwitchAll = (lift) => {
    const createSwitchAllObserver = (() => {
        const typedObserverMixin = observerMixin();
        function onDispose() {
            if (isDisposed(this.currentRef[MutableRefLike_current])) {
                pipe(this.delegate, dispose());
            }
        }
        return createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function SwitchAllObserver(delegate) {
            init(disposableMixin, this);
            init(typedObserverMixin, this, getScheduler(delegate));
            this.delegate = delegate;
            this.currentRef = pipe(createDisposableRef(disposed), addTo(delegate));
            pipe(this, addTo(delegate), onComplete(onDispose));
            return this;
        }, {
            currentRef: none,
            delegate: none,
        }, {
            [SinkLike_notify](next) {
                this.currentRef[MutableRefLike_current] = pipe(next, forEach(notifySink(this.delegate)), subscribe(getScheduler(this)), onComplete(() => {
                    if (isDisposed(this)) {
                        pipe(this.delegate, dispose());
                    }
                }));
            },
        }));
    })();
    return () => lift(createSwitchAllObserver);
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
        const isEnumerable = allAreEnumerable(observables);
        const isRunnable = allAreRunnable(observables);
        return isEnumerable
            ? createEnumerableObservable(onSink)
            : isRunnable
                ? createRunnableObservable(onSink)
                : createObservable(onSink);
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

export { allAreEnumerable, allAreRunnable, createMergeAll, createSwitchAll, distinctUntilChanged, forEach, liftEnumerableObservable, liftEnumerableObservableT, liftObservable, liftRunnableObservable, merge, mergeImpl, mergeT, multicast, scan, subscribe };
