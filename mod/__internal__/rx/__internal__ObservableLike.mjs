/// <reference types="./__internal__ObservableLike.d.ts" />
import { map, every } from '../../containers/ReadonlyArrayLike.mjs';
import { compose, isTrue, pipeUnsafe, newInstance, pipe, partial, isSome, getLength, none, isEmpty } from '../../functions.mjs';
import { O as ObservableLike_isEnumerable, a as ObservableLike_isRunnable, R as ReactiveContainerLike_sinkInto, g as getScheduler, c as createSubject, b as createEnumerableObservable, d as createRunnableObservable, e as createObservable } from '../../DisposableLike-82e2991c.mjs';
import { sinkInto } from '../../rx/ReactiveContainerLike.mjs';
import { publishTo, publish } from '../../rx/SubjectLike.mjs';
import { SinkLike_notify } from '../../util.mjs';
import { sourceFrom, notifySink, notify } from '../../util/SinkLike.mjs';
import { MAX_SAFE_INTEGER } from '../__internal__env.mjs';
import { reactive, createDistinctUntilChangedOperator, createForEachOperator, createScanOperator, createTakeFirstOperator } from '../containers/__internal__StatefulContainerLike.mjs';
import { observerMixin, createDistinctUntilChangedObserver, createForEachObserver, createDelegatingObserver, createScanObserver, createObserver, createTakeFirstObserver } from '../scheduling/__internal__Observers.mjs';
import { addTo, onComplete, isDisposed, dispose, bindTo, addToIgnoringChildErrors } from '../util/__internal__DisposableLike.mjs';
import { disposableMixin, createDisposableRef, disposed } from '../util/__internal__Disposables.mjs';
import { MutableRefLike_current } from '../util/__internal__MutableRefLike.mjs';
import { createInstanceFactory, clazz, __extends, init, props } from '../util/__internal__Objects.mjs';
import { catchErrorSinkMixin } from '../util/__internal__Sinks.mjs';
import { createOnSink } from './__internal__ReactiveContainerLike.mjs';

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
const createCatchError = (lift) => {
    const createCatchErrorObserver = (() => {
        const typedCatchErrorSink = catchErrorSinkMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(clazz(__extends(typedCatchErrorSink, typedObserverMixin), function CatchErrorObserver(instance, delegate, errorHandler) {
            init(typedCatchErrorSink, instance, delegate, errorHandler);
            init(typedObserverMixin, instance, getScheduler(delegate));
            return instance;
        }));
    })();
    return ((errorHandler) => pipe(createCatchErrorObserver, partial(errorHandler), lift));
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
        return createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function Observer(instance, delegate, maxBufferSize, maxConcurrency) {
            init(disposableMixin, instance);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.maxBufferSize = maxBufferSize;
            instance.maxConcurrency = maxConcurrency;
            instance.activeCount = 0;
            instance.onDispose = () => {
                instance.activeCount--;
                subscribeNext(instance);
            };
            instance.queue = [];
            pipe(instance, addTo(delegate), onComplete(() => {
                if (isDisposed(delegate)) {
                    instance.queue.length = 0;
                }
                else if (getLength(instance.queue) + instance.activeCount ===
                    0) {
                    pipe(instance.delegate, dispose());
                }
            }));
            return instance;
        }, props({
            activeCount: 0,
            delegate: none,
            maxBufferSize: 0,
            maxConcurrency: 0,
            onDispose: none,
            queue: none,
        }), {
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
const createScanAsync = (createObservable) => {
    return (scanner, initialValue) => observable => {
        const onSink = (observer) => {
            const accFeedbackStream = pipe(createSubject(), addTo(observer));
            pipe(observable, zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), takeFirst())), 
            // switchAll
            switchAll(), forEach(publishTo(accFeedbackStream)), onSubscribe(() => pipe(accFeedbackStream, publish(initialValue()))), sinkInto(observer));
        };
        return createObservable(onSink);
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
        return createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function SwitchAllObserver(instance, delegate) {
            init(disposableMixin, instance);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.currentRef = pipe(createDisposableRef(disposed), addTo(delegate));
            pipe(instance, addTo(delegate), onComplete(onDispose));
            return instance;
        }, props({
            currentRef: none,
            delegate: none,
        }), {
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
const isEnumerable = (obs) => obs[ObservableLike_isEnumerable];
const isRunnable = (obs) => obs[ObservableLike_isRunnable];
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
const onSubscribe = (f) => (obs) => {
    return createOnSink(onSink => isEnumerable(obs)
        ? createEnumerableObservable(onSink)
        : isRunnable(obs)
            ? createRunnableObservable(onSink)
            : createObservable(onSink), obs, f);
};
const scan = /*@__PURE__*/ pipe(createScanObserver, createScanOperator(liftEnumerableObservableT));
const switchAll = 
/*@__PURE__*/ createSwitchAll(liftObservable);
const subscribe = scheduler => observable => pipe(scheduler, createObserver, addToIgnoringChildErrors(scheduler), sourceFrom(observable));
const takeFirst = 
/*@__PURE__*/ pipe(createTakeFirstObserver, createTakeFirstOperator(liftEnumerableObservableT));
const zipWithLatestFrom = /*@__PURE__*/ (() => {
    const createZipWithLatestFromObserver = (() => {
        const typedObserverMixin = observerMixin();
        const notifyDelegate = (observer) => {
            if (getLength(observer.queue) > 0 && observer.hasLatest) {
                observer.hasLatest = false;
                const next = observer.queue.shift();
                const result = observer.selector(next, observer.otherLatest);
                pipe(observer.delegate, notify(result));
            }
        };
        return createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function ZipWithLatestFromObserer(instance, delegate, other, selector) {
            init(disposableMixin, instance);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.queue = [];
            instance.selector = selector;
            const disposeDelegate = () => {
                if (isDisposed(instance) && isDisposed(otherSubscription)) {
                    pipe(delegate, dispose());
                }
            };
            const otherSubscription = pipe(other, forEach(otherLatest => {
                instance.hasLatest = true;
                instance.otherLatest = otherLatest;
                notifyDelegate(instance);
                if (isDisposed(instance) && isEmpty(instance.queue)) {
                    pipe(instance.delegate, dispose());
                }
            }), subscribe(getScheduler(delegate)), onComplete(disposeDelegate), addTo(delegate));
            pipe(instance, addTo(delegate), onComplete(disposeDelegate));
            return instance;
        }, props({
            delegate: none,
            hasLatest: false,
            otherLatest: none,
            queue: none,
            selector: none,
        }), {
            [SinkLike_notify](next) {
                this.queue.push(next);
                notifyDelegate(this);
            },
        }));
    })();
    return (other, selector) => {
        const lift = isEnumerable(other)
            ? liftEnumerableObservable
            : isRunnable(other)
                ? liftRunnableObservable
                : liftObservable;
        return pipe(createZipWithLatestFromObserver, partial(other, selector), lift);
    };
})();

export { allAreEnumerable, allAreRunnable, createCatchError, createMergeAll, createScanAsync, createSwitchAll, distinctUntilChanged, forEach, isEnumerable, isRunnable, liftEnumerableObservable, liftEnumerableObservableT, liftObservable, liftObservableT, liftRunnableObservable, merge, mergeImpl, mergeT, multicast, onSubscribe, scan, subscribe, switchAll, takeFirst, zipWithLatestFrom };
