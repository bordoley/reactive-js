/// <reference types="./ObservableLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/__internal__env.mjs';
import { isInContinuation } from '../__internal__/__internal__scheduling.mjs';
import { createDecodeWithCharsetOperator, createKeepOperator, createMapOperator, createReduceOperator, createSkipFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/__internal__StatefulContainerLike.mjs';
import { liftEnumerableObservable, liftObservable, createCatchError, allAreEnumerable, allAreRunnable, liftEnumerableObservableT, distinctUntilChanged as distinctUntilChanged$1, forEach as forEach$1, mergeImpl, isEnumerable as isEnumerable$1, isRunnable as isRunnable$1, merge as merge$1, mergeT as mergeT$1, createMergeAll, multicast as multicast$1, onSubscribe as onSubscribe$1, scan as scan$1, createScanAsync, switchAll as switchAll$1, subscribe as subscribe$1, takeFirst as takeFirst$1, liftRunnableObservable, zipWithLatestFrom as zipWithLatestFrom$1 } from '../__internal__/rx/__internal__ObservableLike.mjs';
import { observerMixin, createDelegatingObserver, createKeepObserver, createMapObserver, createPairwiseObserver, createSkipFirstObserver, createTakeWhileObserver, createThrowIfEmptyObserver } from '../__internal__/scheduling/__internal__Observers.mjs';
import { disposableMixin, createDisposableRef, disposableRefMixin, delegatingDisposableMixin } from '../__internal__/util/__internal__Disposables.mjs';
import { enumeratorMixin } from '../__internal__/util/__internal__Enumerators.mjs';
import { MutableRefLike_current, setCurrentRef, getCurrentRef } from '../__internal__/util/__internal__MutableRefLike.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../__internal__/util/__internal__Objects.mjs';
import { decodeWithCharsetSinkMixin, everySatisfySinkMixin, reduceSinkMixin, someSatisfySinkMixin, takeLastSinkMixin, createEnumeratorSink } from '../__internal__/util/__internal__Sinks.mjs';
import { concatMap, throws, keepType } from '../containers/ContainerLike.mjs';
import { toObservable as toObservable$1 } from '../containers/PromiseableLike.mjs';
import { toObservable, map as map$1, every, forEach as forEach$2, some, keepT as keepT$1 } from '../containers/ReadonlyArrayLike.mjs';
import { pipe, isEmpty, none, getLength, max, partial, returns, isNone, isSome, unsafeCast, newInstance, compose, isTrue, getOrRaise } from '../functions.mjs';
import { createEnumerable, emptyEnumerable } from '../ix.mjs';
import { enumerate, zip as zip$1, toObservable as toObservable$3 } from '../ix/EnumerableLike.mjs';
import { g as getScheduler, J as disposed, o as onComplete, f as dispose, i as isDisposed, L as neverObservable, h as addTo, b as createEnumerableObservable, d as createRunnableObservable, e as createObservable, m as ObserverLike_scheduler, p as addToIgnoringChildErrors, k as onDisposed, C as dispatchTo, K as bindTo, n as ObserverLike_dispatcher, N as SchedulerLike_inContinuation, P as SchedulerLike_now, Q as SchedulerLike_shouldYield, T as SchedulerLike_requestYield, U as SchedulerLike_schedule, v as add, V as toPausableScheduler, x as toObservable$2, A as emptyObservable, w as createVirtualTimeScheduler, u as getException } from '../DisposableLike-f9476215.mjs';
import { createLiftedFlowable } from '../streaming.mjs';
import { SinkLike_notify, SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import { run } from '../util/ContinuationLike.mjs';
import { hasCurrent, move, getCurrent } from '../util/EnumeratorLike.mjs';
import { resume, pause } from '../util/PauseableLike.mjs';
import { notify, sourceFrom, notifySink } from '../util/SinkLike.mjs';
import { getObserverCount } from './MulticastObservableLike.mjs';
import { sinkInto } from './ReactiveContainerLike.mjs';

const buffer = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const createBufferObserver = createInstanceFactory(mixin(include(typedObserverMixin, disposableMixin), function BufferObserver(instance, delegate, durationFunction, maxBufferSize) {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, getScheduler(delegate));
        instance.buffer = [];
        instance.delegate = delegate;
        instance.durationFunction = durationFunction;
        instance.durationSubscription = createDisposableRef(disposed);
        instance.maxBufferSize = maxBufferSize;
        pipe(instance, onComplete(() => {
            const { buffer } = instance;
            instance.buffer = [];
            if (isEmpty(buffer)) {
                pipe(delegate, dispose());
            }
            else {
                pipe([buffer], toObservable(), sinkInto(delegate));
            }
        }));
        return instance;
    }, props({
        buffer: none,
        delegate: none,
        durationFunction: none,
        durationSubscription: none,
        maxBufferSize: 0,
    }), {
        [SinkLike_notify](next) {
            const { buffer, maxBufferSize } = this;
            buffer.push(next);
            const doOnNotify = () => {
                this.durationSubscription[MutableRefLike_current] = disposed;
                const buffer = this.buffer;
                this.buffer = [];
                pipe(this.delegate, notify(buffer));
            };
            if (getLength(buffer) === maxBufferSize) {
                doOnNotify();
            }
            else if (isDisposed(this.durationSubscription[MutableRefLike_current])) {
                this.durationSubscription[MutableRefLike_current] = pipe(next, this.durationFunction, forEach(doOnNotify), subscribe(getScheduler(this)));
            }
        },
    }));
    return (options = {}) => {
        var _a, _b;
        const durationOption = (_a = options.duration) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER;
        const durationFunction = durationOption === MAX_SAFE_INTEGER
            ? neverObservable
            : typeof durationOption === "number"
                ? (_) => pipe([none], toObservable())
                : durationOption;
        const maxBufferSize = max((_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : MAX_SAFE_INTEGER, 1);
        const operator = (delegate) => {
            return pipe(createBufferObserver(delegate, durationFunction, maxBufferSize), addTo(delegate));
        };
        return durationOption === MAX_SAFE_INTEGER
            ? liftEnumerableObservable(operator)
            : liftObservable(operator);
    };
})();
const bufferT = {
    buffer,
};
const catchError = 
/*@__PURE__*/ createCatchError(liftObservable);
/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
const combineLatest = (...observables) => latest(observables, 1 /* LatestMode.Combine */);
const combineLatestT = {
    zip: combineLatest,
};
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
const concat = /*@__PURE__*/ (() => {
    const createConcatObserver = (delegate, observables, next) => pipe(createDelegatingObserver(delegate), addTo(delegate), onComplete(() => {
        if (next < getLength(observables)) {
            pipe(createConcatObserver(delegate, observables, next + 1), sourceFrom(observables[next]));
        }
        else {
            pipe(delegate, dispose());
        }
    }));
    return (...observables) => {
        const onSink = (observer) => {
            if (!isEmpty(observables)) {
                pipe(createConcatObserver(observer, observables, 1), sourceFrom(observables[0]));
            }
            else {
                pipe(observer, dispose());
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
const concatT = {
    concat,
};
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
const concatAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER } = options;
    return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
const concatAllT = {
    concatAll,
};
const decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = decodeWithCharsetSinkMixin(toObservable());
    const typedObserverMixin = observerMixin();
    const createDecodeWithCharsetObserver = createInstanceFactory(mixin(include(typedObserverMixin, typedDecodeWithCharsetMixin), function DecodeWithCharsetObserver(instance, delegate, charset) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedDecodeWithCharsetMixin, instance, delegate, charset);
        return instance;
    }));
    return pipe(createDecodeWithCharsetObserver, createDecodeWithCharsetOperator(liftEnumerableObservableT));
})();
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = distinctUntilChanged$1;
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const everySatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const typedEverySatisfySinkMixin = everySatisfySinkMixin(toObservable());
    const everySatisfyObserverMixin = mixin(include(typedEverySatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(typedEverySatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(everySatisfyObserverMixin), partial(predicate), liftEnumerableObservable);
})();
const everySatisfyT = { everySatisfy };
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
const exhaust = () => mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
});
const exhaustT = { concatAll: exhaust };
const forEach = forEach$1;
const forEachT = { forEach };
const forkCombineLatest = ((...ops) => (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 1 /* LatestMode.Combine */));
const forkMerge = (...ops) => (obs) => pipe(ops, map$1(op => op(obs)), mergeImpl);
const forkZipLatest = ((...ops) => (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 2 /* LatestMode.Zip */));
const isEnumerable = isEnumerable$1;
const isRunnable = isRunnable$1;
const keep = /*@__PURE__*/ (() => pipe(createKeepObserver, createKeepOperator(liftEnumerableObservableT)))();
const keepT = { keep };
const latest = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const add = (instance, observer) => {
        instance.observers.push(observer);
    };
    const onNotify = (instance) => {
        const { mode, observers } = instance;
        const isReady = observers.every(x => x.ready);
        if (isReady) {
            const result = pipe(observers, map$1(observer => observer.latest));
            pipe(instance.delegate, notify(result));
            if (mode === 2 /* LatestMode.Zip */) {
                for (const sub of observers) {
                    sub.ready = false;
                    sub.latest = none;
                }
            }
        }
    };
    const onCompleted = (instance) => {
        instance.completedCount++;
        if (instance.completedCount === getLength(instance.observers)) {
            pipe(instance.delegate, dispose());
        }
    };
    const createLatestObserver = createInstanceFactory(mixin(include(typedObserverMixin, disposableMixin), function LatestObserver(instance, scheduler, ctx) {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, scheduler);
        instance.ctx = ctx;
        return instance;
    }, props({
        ready: false,
        latest: none,
        ctx: none,
    }), {
        [SinkLike_notify](next) {
            const { ctx } = this;
            this.latest = next;
            this.ready = true;
            onNotify(ctx);
        },
    }));
    return (observables, mode) => {
        const onSink = (delegate) => {
            const ctx = {
                completedCount: 0,
                observers: [],
                delegate,
                mode,
            };
            const onCompleteCb = () => {
                onCompleted(ctx);
            };
            const scheduler = getScheduler(delegate);
            for (const observable of observables) {
                const innerObserver = pipe(createLatestObserver(scheduler, ctx), addTo(delegate), onComplete(onCompleteCb), sourceFrom(observable));
                add(ctx, innerObserver);
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
const map = /*@__PURE__*/ (() => pipe(createMapObserver, createMapOperator(liftEnumerableObservableT)))();
const mapT = { map };
const mapAsync = (f) => concatMap({ ...switchAllT, ...mapT }, (a) => pipe(a, f, toObservable$1()));
const merge = merge$1;
const mergeT = mergeT$1;
const mergeAll = /*@__PURE__*/ createMergeAll(liftObservable);
const mergeAllT = { concatAll: mergeAll };
const multicast = multicast$1;
const onSubscribe = onSubscribe$1;
const pairwise = 
/*@__PURE__*/ (() => pipe(liftEnumerableObservable(createPairwiseObserver), returns))();
const pairwiseT = { pairwise };
const reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = reduceSinkMixin(toObservable());
    const typedObserverMixin = observerMixin();
    const createReduceObserver = createInstanceFactory(mixin(include(typedObserverMixin, typedReduceSinkMixin), function ReduceObserver(instance, delegate, reducer, initialValue) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedReduceSinkMixin, instance, delegate, reducer, initialValue);
        return instance;
    }));
    return pipe(createReduceObserver, createReduceOperator(liftEnumerableObservableT));
})();
const reduceT = { reduce };
const repeatImpl = /*@__PURE__*/ (() => {
    const createRepeatObserver = (delegate, observable, shouldRepeat) => {
        let count = 1;
        const doOnDispose = (e) => {
            let shouldComplete = false;
            try {
                shouldComplete = !shouldRepeat(count, e);
            }
            catch (cause) {
                shouldComplete = true;
                e = { cause, parent: e };
            }
            if (shouldComplete) {
                pipe(delegate, dispose(e));
            }
            else {
                count++;
                pipe(observable, forEach(notifySink(delegate)), subscribe(getScheduler(delegate)), addToIgnoringChildErrors(delegate), onDisposed(doOnDispose));
            }
        };
        return pipe(createDelegatingObserver(delegate), addToIgnoringChildErrors(delegate), onDisposed(doOnDispose));
    };
    return (shouldRepeat) => (observable) => {
        const operator = pipe(createRepeatObserver, partial(observable, shouldRepeat));
        return pipe(observable, liftEnumerableObservable(operator));
    };
})();
const repeat = /*@__PURE__*/ (() => {
    const defaultRepeatPredicate = (_, e) => isNone(e);
    return (predicate) => {
        const repeatPredicate = isNone(predicate)
            ? defaultRepeatPredicate
            : typeof predicate === "number"
                ? (count, e) => isNone(e) && count < predicate
                : (count, e) => isNone(e) && predicate(count);
        return repeatImpl(repeatPredicate);
    };
})();
const repeatT = {
    repeat,
};
const retry = /*@__PURE__*/ (() => {
    const defaultRetryPredicate = (_, error) => isSome(error);
    return (predicate) => {
        const retryPredicate = isNone(predicate)
            ? defaultRetryPredicate
            : (count, error) => isSome(error) && predicate(count, error.cause);
        return repeatImpl(retryPredicate);
    };
})();
const scan = scan$1;
const scanT = { scan };
/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
const scanAsync = createScanAsync(createObservable);
const scanAsyncT = {
    scanAsync,
};
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
const share = (scheduler, options) => (source) => {
    let multicasted = none;
    // FIXME: Type test scheduler for VTS
    return createObservable(observer => {
        if (isNone(multicasted)) {
            multicasted = pipe(source, multicast(scheduler, options));
        }
        pipe(observer, sourceFrom(multicasted), onDisposed(() => {
            if (isSome(multicasted) && getObserverCount(multicasted) === 0) {
                pipe(multicasted, dispose());
                multicasted = none;
            }
        }));
    });
};
const skipFirst = 
/*@__PURE__*/
pipe(createSkipFirstObserver, createSkipFirstOperator(liftEnumerableObservableT));
const skipFirstT = { skipFirst };
const someSatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const typedSomeSatisfySinkMixin = someSatisfySinkMixin(toObservable());
    const someSatisfyObserverMixin = mixin(include(typedSomeSatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(typedSomeSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(someSatisfyObserverMixin), partial(predicate), liftEnumerableObservable);
})();
const someSatisfyT = { someSatisfy };
const switchAll = switchAll$1;
const switchAllT = {
    concatAll: switchAll,
};
const subscribe = subscribe$1;
const subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
createObservable(({ [ObserverLike_dispatcher]: dispatcher }) => pipe(observable, forEach(dispatchTo(dispatcher)), subscribe(scheduler), bindTo(dispatcher)));
const takeFirst = takeFirst$1;
const takeFirstT = { takeFirst };
const takeLast = 
/*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = takeLastSinkMixin(toObservable());
    const typedObserverMixin = observerMixin();
    const createTakeLastObserver = createInstanceFactory(mixin(include(typedObserverMixin, typedTakeLastSinkMixin), function TakeLastObserver(instance, delegate, takeCount) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedTakeLastSinkMixin, instance, delegate, takeCount);
        return instance;
    }));
    return pipe(createTakeLastObserver, createTakeLastOperator(liftEnumerableObservableT));
})();
const takeLastT = { takeLast };
const takeUntil = (notifier) => {
    const lift = isEnumerable(notifier)
        ? liftEnumerableObservable
        : isRunnable(notifier)
            ? liftRunnableObservable
            : liftObservable;
    const operator = (delegate) => pipe(createDelegatingObserver(delegate), bindTo(delegate), bindTo(pipe(notifier, takeFirst(), subscribe(getScheduler(delegate)))));
    return lift(operator);
};
const takeWhile = 
/*@__PURE__*/
pipe(createTakeWhileObserver, createTakeWhileOperator(liftEnumerableObservableT));
const takeWhileT = { takeWhile };
const throttle = /*@__PURE__*/ (() => {
    const createThrottleObserver = (() => {
        const typedObserverMixin = observerMixin();
        const setupDurationSubscription = (observer, next) => {
            pipe(observer.durationSubscription, setCurrentRef(pipe(observer.durationFunction(next), forEach(observer.onNotify), subscribe(getScheduler(observer)))));
        };
        return createInstanceFactory(mixin(include(disposableMixin, typedObserverMixin), function ThrottleObserver(instance, delegate, durationFunction, mode) {
            init(disposableMixin, instance);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.durationFunction = durationFunction;
            instance.mode = mode;
            instance.durationSubscription = pipe(createDisposableRef(disposed), addTo(delegate));
            instance.onNotify = (_) => {
                if (instance.hasValue) {
                    const value = instance.value;
                    instance.value = none;
                    instance.hasValue = false;
                    pipe(instance.delegate, notify(value));
                    setupDurationSubscription(instance, value);
                }
            };
            pipe(instance, addTo(delegate), onComplete(() => {
                if (instance.mode !== "first" &&
                    instance.hasValue &&
                    !isDisposed(delegate)) {
                    pipe([instance.value], toObservable(), sinkInto(delegate));
                }
            }));
            return instance;
        }, props({
            delegate: none,
            value: none,
            hasValue: false,
            durationSubscription: none,
            durationFunction: none,
            mode: "interval",
            onNotify: none,
        }), {
            [SinkLike_notify](next) {
                this.value = next;
                this.hasValue = true;
                const durationSubscriptionDisposableIsDisposed = pipe(this.durationSubscription, getCurrentRef, isDisposed);
                if (durationSubscriptionDisposableIsDisposed &&
                    this.mode !== "last") {
                    this.onNotify();
                }
                else if (durationSubscriptionDisposableIsDisposed) {
                    setupDurationSubscription(this, next);
                }
            },
        }));
    })();
    return (duration, options = {}) => {
        const { mode = "interval" } = options;
        const durationFunction = typeof duration === "number"
            ? (_) => pipe([none], toObservable({ delay: duration, delayStart: true }))
            : duration;
        return pipe(createThrottleObserver, partial(durationFunction, mode), typeof duration === "number" ? liftRunnableObservable : liftObservable);
    };
})();
const throwIfEmpty = 
/*@__PURE__*/ pipe(createThrowIfEmptyObserver, createThrowIfEmptyOperator(liftEnumerableObservableT));
const throwIfEmptyT = {
    throwIfEmpty,
};
const timeout = /*@__PURE__*/ (() => {
    const timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");
    const typedDisposableRefMixin = disposableRefMixin();
    const typedObserverMixin = observerMixin();
    const setupDurationSubscription = (observer) => {
        observer[MutableRefLike_current] = pipe(observer.duration, subscribe(getScheduler(observer.delegate)));
    };
    const createTimeoutObserver = createInstanceFactory(mixin(include(typedObserverMixin, delegatingDisposableMixin, typedDisposableRefMixin), function TimeoutObserver(instance, delegate, duration) {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(delegatingDisposableMixin, instance, delegate);
        init(typedDisposableRefMixin, instance, disposed);
        instance.delegate = delegate;
        instance.duration = duration;
        setupDurationSubscription(instance);
        return instance;
    }, props({
        delegate: none,
        duration: none,
    }), {
        [SinkLike_notify](next) {
            pipe(this, getCurrentRef, dispose());
            pipe(this.delegate, notify(next));
        },
    }));
    const returnTimeoutError = returns(timeoutError);
    return (duration) => {
        const durationObs = typeof duration === "number"
            ? throws({ fromArray: toObservable, ...mapT }, { delay: duration, delayStart: true })(returnTimeoutError)
            : concat(duration, throws({ fromArray: toObservable, ...mapT })(returnTimeoutError));
        const lift = typeof duration === "number" || isRunnable(duration)
            ? liftRunnableObservable
            : liftObservable;
        return pipe(createTimeoutObserver, partial(durationObs), lift);
    };
})();
const toEnumerable = 
/*@__PURE__*/ (() => {
    const typedEnumeratorMixin = enumeratorMixin();
    const typedObserverMixin = observerMixin();
    const createEnumeratorScheduler = createInstanceFactory(mixin(include(disposableMixin, typedEnumeratorMixin), function EnumeratorScheduler(instance) {
        init(disposableMixin, instance);
        init(typedEnumeratorMixin, instance);
        instance.continuations = [];
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
        continuations: none,
    }), {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return isInContinuation(this);
        },
        [SchedulerLike_requestYield]() {
            // No-Op: We yield whenever the continuation is running.
        },
        [SourceLike_move]() {
            if (!isDisposed(this)) {
                const { continuations } = this;
                const continuation = continuations.shift();
                if (isSome(continuation)) {
                    this[SchedulerLike_inContinuation] = true;
                    run(continuation);
                    this[SchedulerLike_inContinuation] = false;
                }
                else {
                    pipe(this, dispose());
                }
            }
        },
        [SchedulerLike_schedule](continuation, _) {
            pipe(this, add(continuation));
            if (!isDisposed(continuation)) {
                this.continuations.push(continuation);
            }
        },
    }));
    const createEnumeratorObserver = createInstanceFactory(mixin(include(disposableMixin, typedObserverMixin), function EnumeratorObserver(instance, enumerator) {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, enumerator);
        instance.enumerator = enumerator;
        return instance;
    }, props({
        enumerator: none,
    }), {
        [SinkLike_notify](next) {
            this.enumerator[EnumeratorLike_current] = next;
        },
    }));
    return () => (obs) => isEnumerable(obs)
        ? createEnumerable(() => {
            const scheduler = createEnumeratorScheduler();
            pipe(createEnumeratorObserver(scheduler), addTo(scheduler), sourceFrom(obs));
            return scheduler;
        })
        : emptyEnumerable();
})();
const toEnumerableT = { toEnumerable };
const toFlowable = () => observable => isRunnable(observable)
    ? createLiftedFlowable((modeObs) => createObservable(observer => {
        const pausableScheduler = pipe(observer, getScheduler, toPausableScheduler);
        pipe(observer, sourceFrom(pipe(observable, subscribeOn(pausableScheduler), takeUntil(pipe(pausableScheduler, toObservable$2())))), add(pipe(modeObs, forEach(mode => {
            switch (mode) {
                case "pause":
                    pause(pausableScheduler);
                    break;
                case "resume":
                    resume(pausableScheduler);
                    break;
            }
        }), subscribe(getScheduler(observer)), bindTo(pausableScheduler))), add(pausableScheduler));
    }))
    : createLiftedFlowable(_ => emptyObservable());
const toFlowableT = { toFlowable };
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
const toPromise = (scheduler) => (observable) => newInstance(Promise, (resolve, reject) => {
    let result = none;
    let hasResult = false;
    pipe(observable, forEach(next => {
        hasResult = true;
        result = next;
    }), subscribe(scheduler), onDisposed(err => {
        if (isSome(err)) {
            const { cause } = err;
            reject(cause);
        }
        else if (!hasResult) {
            reject(newInstance(Error, "Observable completed without producing a value"));
        }
        else {
            resolve(result);
        }
    }));
});
const toPromiseT = {
    toPromise,
};
const toReadonlyArray = (options = {}) => observable => {
    if (isRunnable(observable)) {
        const { schedulerFactory = createVirtualTimeScheduler } = options;
        const scheduler = schedulerFactory();
        const result = [];
        const subscription = pipe(observable, forEach(next => {
            result.push(next);
        }), subscribe(scheduler));
        run(scheduler);
        const exception = getException(subscription);
        if (isSome(exception)) {
            throw exception.cause;
        }
        return result;
    }
    else {
        return [];
    }
};
const toReadonlyArrayT = {
    toReadonlyArray,
};
const withLatestFrom = /*@__PURE__*/ (() => {
    const createWithLatestObserver = (() => {
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin(include(delegatingDisposableMixin, typedObserverMixin), function WithLatestFromObserver(instance, delegate, other, selector) {
            init(delegatingDisposableMixin, instance, delegate);
            init(typedObserverMixin, instance, getScheduler(delegate));
            instance.delegate = delegate;
            instance.selector = selector;
            pipe(other, forEach(next => {
                instance.hasLatest = true;
                instance.otherLatest = next;
            }), subscribe(getScheduler(delegate)), addTo(instance), onComplete(() => {
                if (!instance.hasLatest) {
                    pipe(instance, dispose());
                }
            }));
            return instance;
        }, props({
            delegate: none,
            hasLatest: false,
            otherLatest: none,
            selector: none,
        }), {
            [SinkLike_notify](next) {
                if (!isDisposed(this) && this.hasLatest) {
                    const result = this.selector(next, this.otherLatest);
                    pipe(this.delegate, notify(result));
                }
            },
        }));
    })();
    return (other, selector) => {
        const lift = isEnumerable(other)
            ? liftEnumerableObservable
            : isRunnable(other)
                ? liftRunnableObservable
                : liftObservable;
        return pipe(createWithLatestObserver, partial(other, selector), lift);
    };
})();
const zip = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const shouldEmit = compose(map$1((x) => hasCurrent(x) || move(x)), every(isTrue));
    const shouldComplete = compose(forEach$2(move), some(isDisposed));
    const createZipObserver = createInstanceFactory(mixin(include(disposableMixin, typedObserverMixin), function ZipObserver(instance, delegate, enumerators, sinkEnumerator) {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, getScheduler(delegate));
        instance.delegate = delegate;
        instance.sinkEnumerator = sinkEnumerator;
        instance.enumerators = enumerators;
        pipe(instance, onComplete(() => {
            if (isDisposed(sinkEnumerator) ||
                (!hasCurrent(sinkEnumerator) && !move(sinkEnumerator))) {
                pipe(delegate, dispose());
            }
        }));
        return instance;
    }, props({
        delegate: none,
        enumerators: none,
        sinkEnumerator: none,
    }), {
        [SinkLike_notify](next) {
            const { sinkEnumerator, enumerators } = this;
            if (isDisposed(this)) {
                return;
            }
            pipe(sinkEnumerator, notify(next));
            if (!shouldEmit(enumerators)) {
                return;
            }
            const zippedNext = pipe(enumerators, map$1(getCurrent));
            pipe(this.delegate, notify(zippedNext));
            if (shouldComplete(enumerators)) {
                pipe(this, dispose());
            }
        },
    }));
    const onSink = (observables) => (observer) => {
        const enumerators = [];
        for (const next of observables) {
            if (isEnumerable(next)) {
                const enumerator = pipe(next, toEnumerable(), getOrRaise(), enumerate(), addTo(observer));
                move(enumerator);
                enumerators.push(enumerator);
            }
            else {
                const enumerator = pipe(createEnumeratorSink(), addTo(observer));
                enumerators.push(enumerator);
                pipe(createZipObserver(observer, enumerators, enumerator), addTo(observer), sourceFrom(next));
            }
        }
    };
    return (...observables) => {
        const isEnumerable = allAreEnumerable(observables);
        const isRunnable = allAreRunnable(observables);
        return isEnumerable
            ? pipe(observables, map$1(toEnumerable()), keepType(keepT$1, isSome), enumerables => zip$1(...enumerables), toObservable$3())
            : isRunnable
                ? createRunnableObservable(onSink(observables))
                : createObservable(onSink(observables));
    };
})();
const zipT = {
    zip: zip,
};
/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
const zipLatest = (...observables) => latest(observables, 2 /* LatestMode.Zip */);
const zipLatestT = {
    zip: zipLatest,
};
const zipWithLatestFrom = zipWithLatestFrom$1;

export { buffer, bufferT, catchError, combineLatest, combineLatestT, concat, concatAll, concatAllT, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, exhaust, exhaustT, forEach, forEachT, forkCombineLatest, forkMerge, forkZipLatest, isEnumerable, isRunnable, keep, keepT, map, mapAsync, mapT, merge, mergeAll, mergeAllT, mergeT, multicast, onSubscribe, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, retry, scan, scanAsync, scanAsyncT, scanT, share, skipFirst, skipFirstT, someSatisfy, someSatisfyT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throttle, throwIfEmpty, throwIfEmptyT, timeout, toEnumerable, toEnumerableT, toFlowable, toFlowableT, toPromise, toPromiseT, toReadonlyArray, toReadonlyArrayT, withLatestFrom, zip, zipLatest, zipLatestT, zipT, zipWithLatestFrom };
