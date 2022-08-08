/// <reference types="./ObservableLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/__internal__env.mjs';
import { isInContinuation } from '../__internal__/__internal__scheduling.mjs';
import { createDecodeWithCharsetOperator, createKeepOperator, createMapOperator, createReduceOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from '../__internal__/containers/__internal__StatefulContainerLike.mjs';
import { liftEnumerableObservable, liftObservable, allAreEnumerable, allAreRunnable, liftEnumerableObservableT, distinctUntilChanged as distinctUntilChanged$1, forEach as forEach$1, mergeImpl, merge as merge$1, mergeT as mergeT$1, createMergeAll, multicast as multicast$1, scan as scan$1, createSwitchAll, subscribe as subscribe$1, liftRunnableObservable } from '../__internal__/rx/__internal__ObservableLike.mjs';
import { createOnSink } from '../__internal__/rx/__internal__ReactiveContainerLike.mjs';
import { observerMixin, createDelegatingObserver, createDecodeWithCharsetObserver, createKeepObserver, createMapObserver, createPairwiseObserver, createReduceObserver, createSkipFirstObserver, createTakeFirstObserver, createTakeLastObserver, createTakeWhileObserver, createThrowIfEmptyObserver } from '../__internal__/scheduling/__internal__Observers.mjs';
import { disposableMixin, createDisposableRef, delegatingDisposableMixin } from '../__internal__/util/__internal__Disposables.mjs';
import { enumeratorMixin } from '../__internal__/util/__internal__Enumerators.mjs';
import { MutableRefLike_current } from '../__internal__/util/__internal__MutableRefLike.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/__internal__Objects.mjs';
import { createEnumeratorSink } from '../__internal__/util/__internal__Sinks.mjs';
import { keepType } from '../containers/ContainerLike.mjs';
import { toObservable, map as map$1, every, forEach as forEach$2, some, keepT as keepT$1 } from '../containers/ReadonlyArrayLike.mjs';
import { pipe, isEmpty, none, getLength, max, returns, partial, isNone, isSome, newInstance, compose, isTrue, getOrRaise } from '../functions.mjs';
import { createEnumerable, emptyEnumerable } from '../ix.mjs';
import { enumerate, zip as zip$1, toObservable as toObservable$2 } from '../ix/EnumerableLike.mjs';
import { neverObservable, createEnumerableObservable, createRunnableObservable, createObservable, ObservableLike_isEnumerable, ObservableLike_isRunnable, emptyObservable } from '../rx.mjs';
import { ObserverLike_dispatcher, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule, createVirtualTimeScheduler } from '../scheduling.mjs';
import { dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { getScheduler } from '../scheduling/ObserverLike.mjs';
import { toPausableScheduler } from '../scheduling/SchedulerLike.mjs';
import { createLiftedFlowable } from '../streaming.mjs';
import { disposed, SinkLike_notify, SourceLike_move, EnumeratorLike_current } from '../util.mjs';
import { run } from '../util/ContinuationLike.mjs';
import { onComplete, dispose, isDisposed, addTo, addToIgnoringChildErrors, onDisposed, bindTo, add, toObservable as toObservable$1, getException } from '../util/DisposableLike.mjs';
import { hasCurrent, move, getCurrent } from '../util/EnumeratorLike.mjs';
import { resume, pause } from '../util/PauseableLike.mjs';
import { notify, sourceFrom, notifySink } from '../util/SinkLike.mjs';
import { getObserverCount } from './MulticastObservableLike.mjs';
import { sinkInto } from './ReactiveContainerLike.mjs';

const buffer = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const createBufferObserver = createInstanceFactory(clazz(__extends(typedObserverMixin, disposableMixin), function BufferObserver(delegate, durationFunction, maxBufferSize) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));
        this.buffer = [];
        this.delegate = delegate;
        this.durationFunction = durationFunction;
        this.durationSubscription = createDisposableRef(disposed);
        this.maxBufferSize = maxBufferSize;
        return pipe(this, onComplete(() => {
            const { buffer } = this;
            this.buffer = [];
            if (isEmpty(buffer)) {
                pipe(delegate, dispose());
            }
            else {
                pipe([buffer], toObservable(), sinkInto(delegate));
            }
        }));
    }, {
        buffer: none,
        delegate: none,
        durationFunction: none,
        durationSubscription: none,
        maxBufferSize: 0,
    }, {
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
/*@__PURE__*/ (() => pipe(createDecodeWithCharsetObserver(toObservable()), createDecodeWithCharsetOperator(liftEnumerableObservableT)))();
const decodeWithCharsetT = {
    decodeWithCharset,
};
const distinctUntilChanged = distinctUntilChanged$1;
const distinctUntilChangedT = {
    distinctUntilChanged,
};
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
const isEnumerable = (obs) => obs[ObservableLike_isEnumerable];
const isRunnable = (obs) => obs[ObservableLike_isRunnable];
const keep = /*@__PURE__*/ (() => pipe(createKeepObserver, createKeepOperator(liftEnumerableObservableT)))();
const keepT = { keep };
const latest = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const add = (self, observer) => {
        self.observers.push(observer);
    };
    const onNotify = (self) => {
        const { mode, observers } = self;
        const isReady = observers.every(x => x.ready);
        if (isReady) {
            const result = pipe(observers, map$1(observer => observer.latest));
            pipe(self.delegate, notify(result));
            if (mode === 2 /* LatestMode.Zip */) {
                for (const sub of observers) {
                    sub.ready = false;
                    sub.latest = none;
                }
            }
        }
    };
    const onCompleted = (self) => {
        self.completedCount++;
        if (self.completedCount === getLength(self.observers)) {
            pipe(self.delegate, dispose());
        }
    };
    const createLatestObserver = createInstanceFactory(clazz(__extends(typedObserverMixin, disposableMixin), function LatestObserver(scheduler, ctx) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);
        this.ctx = ctx;
        return this;
    }, {
        ready: false,
        latest: none,
        ctx: none,
    }, {
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
const merge = merge$1;
const mergeT = mergeT$1;
const mergeAll = createMergeAll(liftObservable);
const mergeAllT = { concatAll: mergeAll };
const multicast = multicast$1;
const onSubscribe = (f) => (obs) => {
    return createOnSink(onSink => isEnumerable(obs)
        ? createEnumerableObservable(onSink)
        : isRunnable(obs)
            ? createRunnableObservable(onSink)
            : createObservable(onSink), obs, f);
};
const pairwise = 
/*@__PURE__*/ (() => pipe(liftEnumerableObservable(createPairwiseObserver), returns))();
const pairwiseT = { pairwise };
const reduce = /*@__PURE__*/ (() => pipe(createReduceObserver(toObservable()), createReduceOperator(liftEnumerableObservableT)))();
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
const switchAll = createSwitchAll(liftObservable);
const switchAllT = {
    concatAll: switchAll,
};
const subscribe = subscribe$1;
const subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
createObservable(({ [ObserverLike_dispatcher]: dispatcher }) => pipe(observable, forEach(dispatchTo(dispatcher)), subscribe(scheduler), bindTo(dispatcher)));
const takeFirst = 
/*@__PURE__*/ pipe(createTakeFirstObserver, createTakeFirstOperator(liftEnumerableObservableT));
const takeFirstT = { takeFirst };
const takeLast = 
/*@__PURE__*/ pipe(createTakeLastObserver(toObservable()), createTakeLastOperator(liftEnumerableObservableT));
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
const throwIfEmpty = 
/*@__PURE__*/ pipe(createThrowIfEmptyObserver, createThrowIfEmptyOperator(liftEnumerableObservableT));
const throwIfEmptyT = {
    throwIfEmpty,
};
const toEnumerable = 
/*@__PURE__*/ (() => {
    const typedEnumeratorMixin = enumeratorMixin();
    const typedObserverMixin = observerMixin();
    const createEnumeratorScheduler = createInstanceFactory(clazz(__extends(disposableMixin, typedEnumeratorMixin), function EnumeratorScheduler() {
        init(disposableMixin, this);
        init(typedEnumeratorMixin, this);
        this.continuations = [];
        return this;
    }, {
        [SchedulerLike_inContinuation]: false,
        continuations: none,
    }, {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield]() {
            const self = this;
            return isInContinuation(self);
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
    const createEnumeratorObserver = createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function EnumeratorObserver(enumerator) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, enumerator);
        this.enumerator = enumerator;
        return this;
    }, {
        enumerator: none,
    }, {
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
        pipe(observer, sourceFrom(pipe(observable, subscribeOn(pausableScheduler), takeUntil(pipe(pausableScheduler, toObservable$1())))), add(pipe(modeObs, forEach(mode => {
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
        return createInstanceFactory(clazz(__extends(delegatingDisposableMixin, typedObserverMixin), function WithLatestFromObserver(delegate, other, selector) {
            init(delegatingDisposableMixin, this, delegate);
            init(typedObserverMixin, this, getScheduler(delegate));
            this.delegate = delegate;
            this.selector = selector;
            pipe(other, forEach(next => {
                this.hasLatest = true;
                this.otherLatest = next;
            }), subscribe(getScheduler(delegate)), addTo(this), onComplete(() => {
                if (!this.hasLatest) {
                    pipe(this, dispose());
                }
            }));
            return this;
        }, {
            delegate: none,
            hasLatest: false,
            otherLatest: none,
            selector: none,
        }, {
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
    const createZipObserver = createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function ZipObserver(delegate, enumerators, sinkEnumerator) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));
        this.delegate = delegate;
        this.sinkEnumerator = sinkEnumerator;
        this.enumerators = enumerators;
        return pipe(this, onComplete(() => {
            if (isDisposed(sinkEnumerator) ||
                (!hasCurrent(sinkEnumerator) && !move(sinkEnumerator))) {
                pipe(delegate, dispose());
            }
        }));
    }, {
        delegate: none,
        enumerators: none,
        sinkEnumerator: none,
    }, {
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
            ? pipe(observables, map$1(toEnumerable()), keepType(keepT$1, isSome), enumerables => zip$1(...enumerables), toObservable$2())
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
        return createInstanceFactory(clazz(__extends(disposableMixin, typedObserverMixin), function ZipWithLatestFromObserer(delegate, other, selector) {
            init(disposableMixin, this);
            init(typedObserverMixin, this, getScheduler(delegate));
            this.delegate = delegate;
            this.queue = [];
            this.selector = selector;
            const disposeDelegate = () => {
                if (isDisposed(this) && isDisposed(otherSubscription)) {
                    pipe(delegate, dispose());
                }
            };
            const otherSubscription = pipe(other, forEach(otherLatest => {
                this.hasLatest = true;
                this.otherLatest = otherLatest;
                notifyDelegate(this);
                if (isDisposed(this) && isEmpty(this.queue)) {
                    pipe(this.delegate, dispose());
                }
            }), subscribe(getScheduler(delegate)), onComplete(disposeDelegate), addTo(delegate));
            return pipe(this, addTo(delegate), onComplete(disposeDelegate));
        }, {
            delegate: none,
            hasLatest: false,
            otherLatest: none,
            queue: none,
            selector: none,
        }, {
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

export { buffer, bufferT, combineLatest, combineLatestT, concat, concatAll, concatAllT, concatT, decodeWithCharset, decodeWithCharsetT, distinctUntilChanged, distinctUntilChangedT, exhaust, exhaustT, forEach, forEachT, forkCombineLatest, forkMerge, forkZipLatest, isEnumerable, isRunnable, keep, keepT, map, mapT, merge, mergeAll, mergeAllT, mergeT, multicast, onSubscribe, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, retry, scan, scanT, share, skipFirst, skipFirstT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toFlowable, toFlowableT, toPromise, toPromiseT, toReadonlyArray, toReadonlyArrayT, withLatestFrom, zip, zipLatest, zipLatestT, zipT, zipWithLatestFrom };
