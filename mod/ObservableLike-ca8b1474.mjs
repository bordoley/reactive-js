import { MAX_SAFE_INTEGER } from './__internal__/constants.mjs';
import { mixin as mixin$1, include, init, props, createInstanceFactory } from './__internal__/mixins.mjs';
import { createEnumerableObservable, createRunnableObservable, createObservable, deferObservable } from './__internal__/rx/ObservableLike.create.mjs';
import { catchErrorObservable, mergeAllObservable, scanAsyncObservable, switchAllObservable } from './__internal__/rx/ObservableLike.higher-order.mjs';
import { liftEnumerableObservable, liftObservable, liftEnumerableObservableT, liftRunnableObservable } from './__internal__/rx/ObservableLike.lift.mjs';
import { hasDelay } from './__internal__/scheduling/SchedulerLike.options.mjs';
import { createDisposableRef, disposableRefMixin } from './__internal__/util/DisposableRefLike.mjs';
import { MutableRefLike_current, setCurrentRef, getCurrentRef } from './__internal__/util/MutableRefLike.mjs';
import { concatMap, throws, keepType } from './containers/ContainerLike.mjs';
import { toObservable as toObservable$1 } from './containers/PromiseableLike.mjs';
import { toObservable, map as map$1, every, forEach as forEach$2, some, keepT as keepT$1 } from './containers/ReadonlyArrayLike.mjs';
import decodeWithCharset$1 from './containers/__internal__/StatefulContainerLike/StatefulContainerLike.decodeWithCharset.mjs';
import keep$1 from './containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep.mjs';
import map$2 from './containers/__internal__/StatefulContainerLike/StatefulContainerLike.map.mjs';
import reduce$1 from './containers/__internal__/StatefulContainerLike/StatefulContainerLike.reduce.mjs';
import skipFirst$1 from './containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst.mjs';
import takeLast$1 from './containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeLast.mjs';
import takeWhile$1 from './containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeWhile.mjs';
import throwIfEmpty$1 from './containers/__internal__/StatefulContainerLike/StatefulContainerLike.throwIfEmpty.mjs';
import { pipe, returns, none, unsafeCast, getLength, composeUnsafe, isEmpty, isNumber, max, pipeLazy, partial, ignore, isNone, isSome, newInstance, compose, isTrue, getOrRaise } from './functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from './ix.mjs';
import { enumerate, zip as zip$1, toObservable as toObservable$3 } from './ix/EnumerableLike.mjs';
import { hasCurrent, move, getCurrent } from './ix/EnumeratorLike.mjs';
import create$5 from './ix/__internal__/EnumerableLike/EnumerableLike.create.mjs';
import empty$1 from './ix/__internal__/EnumerableLike/EnumerableLike.empty.mjs';
import mutableMixin from './ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import { MulticastObservableLike_observerCount, MulticastObservableLike_replay, ObservableLike_isEnumerable, ObservableLike_isRunnable, ReactiveContainerLike_sinkInto, SinkLike_notify, ObserverLike_scheduler, ObserverLike_dispatcher } from './rx.mjs';
import { getScheduler, schedule } from './rx/ObserverLike.mjs';
import { notify, sourceFrom, notifySink } from './rx/SinkLike.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from './scheduling.mjs';
import { yield_, run } from './scheduling/ContinuationLike.mjs';
import { dispatch, dispatchTo } from './scheduling/DispatcherLike.mjs';
import { isInContinuation, toPausableScheduler } from './scheduling/SchedulerLike.mjs';
import { create as create$6 } from './scheduling/VirtualTimeSchedulerLike.mjs';
import { getObserverCount, getReplay } from './rx/MulticastObservableLike.mjs';
import { sinkInto } from './rx/ReactiveContainerLike.mjs';
import { create as create$3, publish } from './rx/SubjectLike.mjs';
import bindTo from './util/__internal__/DisposableLike/DisposableLike.bindTo.mjs';
import { disposed, onComplete, dispose, isDisposed, addTo, addToIgnoringChildErrors, onDisposed, bindTo as bindTo$1, add as add$1, toObservable as toObservable$2, getException } from './util/DisposableLike.mjs';
import { resume, pause } from './util/PauseableLike.mjs';
import delegatingMixin from './util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import disposableMixin from './util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import create$7 from './rx/__internal__/EnumeratorSinkLike/EnumeratorSinkLike.create.mjs';
import allAreEnumerable from './rx/__internal__/ObservableLike/ObservableLike.allAreEnumerable.mjs';
import allAreRunnable from './rx/__internal__/ObservableLike/ObservableLike.allAreRunnable.mjs';
import distinctUntilChanged$1 from './rx/__internal__/ObservableLike/ObservableLike.distinctUntilChanged.mjs';
import forEach$1 from './rx/__internal__/ObservableLike/ObservableLike.forEach.mjs';
import isEnumerable$1 from './rx/__internal__/ObservableLike/ObservableLike.isEnumerable.mjs';
import isRunnable$1 from './rx/__internal__/ObservableLike/ObservableLike.isRunnable.mjs';
import merge$1 from './rx/__internal__/ObservableLike/ObservableLike.merge.mjs';
import mergeAll$1 from './rx/__internal__/ObservableLike/ObservableLike.mergeObservables.mjs';
import onSubscribe$1 from './rx/__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import scan$1 from './rx/__internal__/ObservableLike/ObservableLike.scan.mjs';
import subscribe$1 from './rx/__internal__/ObservableLike/ObservableLike.subscribe.mjs';
import takeFirst$1 from './rx/__internal__/ObservableLike/ObservableLike.takeFirst.mjs';
import zipWithLatestFrom$1 from './rx/__internal__/ObservableLike/ObservableLike.zipWithLatestFrom.mjs';
import createWithDelegate from './rx/__internal__/ObserverLike/ObserverLike.createWithDelegate.mjs';
import observerMixin from './rx/__internal__/ObserverLike/ObserverLike.mixin.mjs';
import decodeWithCharsetMixin from './rx/__internal__/SinkLike/SinkLike.decodeWithCharsetMixin.mjs';
import everySatisfyMixin from './rx/__internal__/SinkLike/SinkLike.everySatisfyMixin.mjs';
import keepMixin from './rx/__internal__/SinkLike/SinkLike.keepMixin.mjs';
import { mapMixin } from './rx/__internal__/SinkLike/SinkLike.mapMixin.mjs';
import pairwiseMixin from './rx/__internal__/SinkLike/SinkLike.pairwiseMixin.mjs';
import reduceMixin from './rx/__internal__/SinkLike/SinkLike.reduceMixin.mjs';
import skipFirstMixin from './rx/__internal__/SinkLike/SinkLike.skipFirstMixin.mjs';
import someSatisfyMixin from './rx/__internal__/SinkLike/SinkLike.someSatisfyMixin.mjs';
import takeLastMixin from './rx/__internal__/SinkLike/SinkLike.takeLastMixin.mjs';
import takeWhileMixin from './rx/__internal__/SinkLike/SinkLike.takeWhileMixin.mjs';
import throwIfEmptyMixin from './rx/__internal__/SinkLike/SinkLike.throwIfEmptyMixin.mjs';
import create$2 from './rx/__internal__/SubjectLike/SubjectLike.create.mjs';
import publishTo from './rx/__internal__/SubjectLike/SubjectLike.publishTo.mjs';
import add from './util/__internal__/DisposableLike/DisposableLike.add.mjs';
import create$4 from './streaming/__internal__/StreamableLike/StreamableLike.create.mjs';

const multicast$1 = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = create$2({ replay });
    pipe(observable, forEach(publishTo(subject)), subscribe$1(scheduler), bindTo(subject));
    return subject;
};

const mixin = /*@__PURE__*/ (() => {
    return returns(mixin$1(include(delegatingMixin), function Stream(instance, op, scheduler, replay) {
        const subject = create$3({ replay });
        init(delegatingMixin, instance, subject);
        instance[DispatcherLike_scheduler] = scheduler;
        instance.subject = subject;
        instance.observable = pipe(subject, op, multicast$1(scheduler, { replay }), add(instance));
        return instance;
    }, props({
        subject: none,
        observable: none,
        [DispatcherLike_scheduler]: none,
    }), {
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return getObserverCount(this.observable);
        },
        get [MulticastObservableLike_replay]() {
            unsafeCast(this);
            return getReplay(this.observable);
        },
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        [DispatcherLike_dispatch](req) {
            pipe(this.subject, publish(req));
        },
        [ReactiveContainerLike_sinkInto](observer) {
            pipe(this.observable, sinkInto(observer));
        },
    }));
})();

const create$1 = /*@__PURE__*/ (() => {
    const createStreamInternal = createInstanceFactory(mixin());
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay);
    };
})();

const createLifted = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return create$4((scheduler, options) => {
        const stream = create$1(op, scheduler, options);
        return pipe(stream, dispatch("pause"));
    });
};

const buffer = /*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const createBufferObserver = createInstanceFactory(mixin$1(include(typedObserverMixin, disposableMixin), function BufferObserver(instance, delegate, durationFunction, maxBufferSize) {
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
            ? never
            : isNumber(durationOption)
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
const catchError = catchErrorObservable;
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
    const createConcatObserver = (delegate, observables, next) => pipe(createWithDelegate(delegate), addTo(delegate), onComplete(() => {
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
const create = createObservable;
const decodeWithCharset = 
/*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = decodeWithCharsetMixin(toObservable());
    const typedObserverMixin = observerMixin();
    const createDecodeWithCharsetObserver = createInstanceFactory(mixin$1(include(typedObserverMixin, typedDecodeWithCharsetMixin), function DecodeWithCharsetObserver(instance, delegate, charset) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedDecodeWithCharsetMixin, instance, delegate, charset);
        return instance;
    }));
    return pipe(createDecodeWithCharsetObserver, decodeWithCharset$1(liftEnumerableObservableT));
})();
const decodeWithCharsetT = {
    decodeWithCharset,
};
const defer = deferObservable;
const deferT = {
    defer,
};
const distinctUntilChanged = distinctUntilChanged$1;
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const empty = ((options) => hasDelay(options)
    ? createRunnableObservable(observer => {
        pipe(observer, schedule(pipeLazy(observer, dispose()), options));
    })
    : createEnumerableObservable(sink => {
        pipe(sink, dispose());
    }));
const emptyT = {
    empty,
};
const everySatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const typedEverySatisfySinkMixin = everySatisfyMixin(toObservable());
    const everySatisfyObserverMixin = mixin$1(include(typedEverySatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
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
const forkMerge = (...ops) => (obs) => pipe(ops, map$1(op => op(obs)), mergeAll$1);
const forkZipLatest = ((...ops) => (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 2 /* LatestMode.Zip */));
const fromPromise = toObservable$1;
const fromPromiseT = { fromPromise };
/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
const generate = ((generator, initialValue, options) => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let acc = initialValue();
        const continuation = () => {
            while (!isDisposed(observer)) {
                acc = generator(acc);
                observer[SinkLike_notify](acc);
                yield_(options);
            }
        };
        pipe(observer, schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? createRunnableObservable(onSink)
        : createEnumerableObservable(onSink);
});
const generateT = { generate };
const isEnumerable = isEnumerable$1;
const isRunnable = isRunnable$1;
const keep = /*@__PURE__*/ (() => {
    const createKeepObserver = (() => {
        const typedKeepSinkMixin = keepMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin$1(include(typedObserverMixin, typedKeepSinkMixin), function KeepObserver(instance, delegate, predicate) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedKeepSinkMixin, instance, delegate, predicate);
            return instance;
        }));
    })();
    return pipe(createKeepObserver, keep$1(liftEnumerableObservableT));
})();
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
    const createLatestObserver = createInstanceFactory(mixin$1(include(typedObserverMixin, disposableMixin), function LatestObserver(instance, scheduler, ctx) {
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
const map = /*@__PURE__*/ (() => {
    const createMapObserver = (() => {
        const typedMapSinkMixin = mapMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin$1(include(typedObserverMixin, typedMapSinkMixin), function MapObserver(instance, delegate, mapper) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedMapSinkMixin, instance, delegate, mapper);
            return instance;
        }));
    })();
    return pipe(createMapObserver, map$2(liftEnumerableObservableT));
})();
const mapT = { map };
const mapAsync = (f) => concatMap({ ...switchAllT, ...mapT }, (a) => pipe(a, f, fromPromise()));
const merge = merge$1;
const mergeT = { concat: merge };
const mergeAll = mergeAllObservable;
const mergeAllT = { concatAll: mergeAll };
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
const multicast = multicast$1;
const never = () => createEnumerableObservable(ignore);
const neverT = { never };
const onSubscribe = onSubscribe$1;
const pairwise = 
/*@__PURE__*/ (() => {
    const createPairwiseObserver = (() => {
        const typedPairwiseSinkMixin = pairwiseMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin$1(include(typedObserverMixin, typedPairwiseSinkMixin), function PairwiseObserver(instance, delegate) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedPairwiseSinkMixin, instance, delegate);
            return instance;
        }));
    })();
    return pipe(liftEnumerableObservable(createPairwiseObserver), returns);
})();
const pairwiseT = { pairwise };
const reduce = /*@__PURE__*/ (() => {
    const typedReduceSinkMixin = reduceMixin(toObservable());
    const typedObserverMixin = observerMixin();
    const createReduceObserver = createInstanceFactory(mixin$1(include(typedObserverMixin, typedReduceSinkMixin), function ReduceObserver(instance, delegate, reducer, initialValue) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedReduceSinkMixin, instance, delegate, reducer, initialValue);
        return instance;
    }));
    return pipe(createReduceObserver, reduce$1(liftEnumerableObservableT));
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
        return pipe(createWithDelegate(delegate), addToIgnoringChildErrors(delegate), onDisposed(doOnDispose));
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
            : isNumber(predicate)
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
const scanAsync = scanAsyncObservable;
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
/*@__PURE__*/ (() => {
    const createSkipFirstObserver = (() => {
        const typedSkipFirstSinkMixin = skipFirstMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin$1(include(typedObserverMixin, typedSkipFirstSinkMixin), function SkipFirstObserver(instance, delegate, skipCount) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedSkipFirstSinkMixin, instance, delegate, skipCount);
            return instance;
        }));
    })();
    return pipe(createSkipFirstObserver, skipFirst$1(liftEnumerableObservableT));
})();
const skipFirstT = { skipFirst };
const someSatisfy = 
/*@__PURE__*/ (() => {
    const typedObserverMixin = observerMixin();
    const typedSomeSatisfySinkMixin = someSatisfyMixin(toObservable());
    const someSatisfyObserverMixin = mixin$1(include(typedSomeSatisfySinkMixin, typedObserverMixin), function EverySatisfyObserver(instance, delegate, predicate) {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(typedSomeSatisfySinkMixin, instance, delegate, predicate);
        return instance;
    });
    return (predicate) => pipe(createInstanceFactory(someSatisfyObserverMixin), partial(predicate), liftEnumerableObservable);
})();
const someSatisfyT = { someSatisfy };
const switchAll = switchAllObservable;
const switchAllT = {
    concatAll: switchAll,
};
const subscribe = subscribe$1;
const subscribeOn = (scheduler) => (observable) => 
// FIXME: type test for VTS
createObservable(({ [ObserverLike_dispatcher]: dispatcher }) => pipe(observable, forEach(dispatchTo(dispatcher)), subscribe(scheduler), bindTo$1(dispatcher)));
const takeFirst = takeFirst$1;
const takeFirstT = { takeFirst };
const takeLast = 
/*@__PURE__*/ (() => {
    const typedTakeLastSinkMixin = takeLastMixin(toObservable());
    const typedObserverMixin = observerMixin();
    const createTakeLastObserver = createInstanceFactory(mixin$1(include(typedObserverMixin, typedTakeLastSinkMixin), function TakeLastObserver(instance, delegate, takeCount) {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedTakeLastSinkMixin, instance, delegate, takeCount);
        return instance;
    }));
    return pipe(createTakeLastObserver, takeLast$1(liftEnumerableObservableT));
})();
const takeLastT = { takeLast };
const takeUntil = (notifier) => {
    const lift = isEnumerable(notifier)
        ? liftEnumerableObservable
        : isRunnable(notifier)
            ? liftRunnableObservable
            : liftObservable;
    const operator = (delegate) => pipe(createWithDelegate(delegate), bindTo$1(delegate), bindTo$1(pipe(notifier, takeFirst(), subscribe(getScheduler(delegate)))));
    return lift(operator);
};
const takeWhile = 
/*@__PURE__*/ (() => {
    const createTakeWhileObserver = (() => {
        const typedTakeWhileSinkMixin = takeWhileMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin$1(include(typedObserverMixin, typedTakeWhileSinkMixin), function TakeWhileObserver(instance, delegate, predicate, inclusive) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedTakeWhileSinkMixin, instance, delegate, predicate, inclusive);
            return instance;
        }));
    })();
    return pipe(createTakeWhileObserver, takeWhile$1(liftEnumerableObservableT));
})();
const takeWhileT = { takeWhile };
const throttle = /*@__PURE__*/ (() => {
    const createThrottleObserver = (() => {
        const typedObserverMixin = observerMixin();
        const setupDurationSubscription = (observer, next) => {
            pipe(observer.durationSubscription, setCurrentRef(pipe(observer.durationFunction(next), forEach(observer.onNotify), subscribe(getScheduler(observer)))));
        };
        return createInstanceFactory(mixin$1(include(disposableMixin, typedObserverMixin), function ThrottleObserver(instance, delegate, durationFunction, mode) {
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
        const durationFunction = isNumber(duration)
            ? (_) => pipe([none], toObservable({ delay: duration, delayStart: true }))
            : duration;
        return pipe(createThrottleObserver, partial(durationFunction, mode), isNumber(duration) ? liftRunnableObservable : liftObservable);
    };
})();
const throwIfEmpty = 
/*@__PURE__*/ (() => {
    const createThrowIfEmptyObserver = (() => {
        const typedThrowIfEmptySinkMixin = throwIfEmptyMixin();
        const typedObserverMixin = observerMixin();
        return createInstanceFactory(mixin$1(include(typedObserverMixin, typedThrowIfEmptySinkMixin), function ThrowIfEmptyObserver(instance, delegate, factory) {
            init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
            init(typedThrowIfEmptySinkMixin, instance, delegate, factory);
            return instance;
        }));
    })();
    return pipe(createThrowIfEmptyObserver, throwIfEmpty$1(liftEnumerableObservableT));
})();
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
    const createTimeoutObserver = createInstanceFactory(mixin$1(include(typedObserverMixin, delegatingMixin, typedDisposableRefMixin), function TimeoutObserver(instance, delegate, duration) {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(delegatingMixin, instance, delegate);
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
        const durationObs = isNumber(duration)
            ? throws({ fromArray: toObservable, ...mapT }, { delay: duration, delayStart: true })(returnTimeoutError)
            : concat(duration, throws({ fromArray: toObservable, ...mapT })(returnTimeoutError));
        const lift = isNumber(duration) || isRunnable(duration)
            ? liftRunnableObservable
            : liftObservable;
        return pipe(createTimeoutObserver, partial(durationObs), lift);
    };
})();
const toEnumerable = 
/*@__PURE__*/ (() => {
    const typedMutableEnumeratorMixin = mutableMixin();
    const typedObserverMixin = observerMixin();
    const createEnumeratorScheduler = createInstanceFactory(mixin$1(include(disposableMixin, typedMutableEnumeratorMixin), function EnumeratorScheduler(instance) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
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
            pipe(this, add$1(continuation));
            if (!isDisposed(continuation)) {
                this.continuations.push(continuation);
            }
        },
    }));
    const createEnumeratorObserver = createInstanceFactory(mixin$1(include(disposableMixin, typedObserverMixin), function EnumeratorObserver(instance, enumerator) {
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
        ? create$5(() => {
            const scheduler = createEnumeratorScheduler();
            pipe(createEnumeratorObserver(scheduler), addTo(scheduler), sourceFrom(obs));
            return scheduler;
        })
        : empty$1();
})();
const toEnumerableT = { toEnumerable };
const toFlowable = () => observable => isRunnable(observable)
    ? createLifted((modeObs) => createObservable(observer => {
        const pausableScheduler = pipe(observer, getScheduler, toPausableScheduler);
        pipe(observer, sourceFrom(pipe(observable, subscribeOn(pausableScheduler), takeUntil(pipe(pausableScheduler, toObservable$2())))), add$1(pipe(modeObs, forEach(mode => {
            switch (mode) {
                case "pause":
                    pause(pausableScheduler);
                    break;
                case "resume":
                    resume(pausableScheduler);
                    break;
            }
        }), subscribe(getScheduler(observer)), bindTo$1(pausableScheduler))), add$1(pausableScheduler));
    }))
    : createLifted(_ => empty());
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
        const { schedulerFactory = create$6 } = options;
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
        return createInstanceFactory(mixin$1(include(delegatingMixin, typedObserverMixin), function WithLatestFromObserver(instance, delegate, other, selector) {
            init(delegatingMixin, instance, delegate);
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
    const createZipObserver = createInstanceFactory(mixin$1(include(disposableMixin, typedObserverMixin), function ZipObserver(instance, delegate, enumerators, sinkEnumerator) {
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
                const enumerator = pipe(create$7(), addTo(observer));
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

export { concatAll as $, multicast as A, scan as B, mapT as C, concatAllT as D, create as E, takeWhile as F, scanAsync as G, keep as H, buffer as I, decodeWithCharset as J, distinctUntilChanged as K, everySatisfy as L, never as M, pairwise as N, reduce as O, skipFirst as P, someSatisfy as Q, throwIfEmpty as R, concatT as S, create$1 as T, mergeT as U, createLifted as V, forkCombineLatest as W, multicast$1 as X, bufferT as Y, catchError as Z, combineLatestT as _, toReadonlyArray as a, decodeWithCharsetT as a0, defer as a1, deferT as a2, distinctUntilChangedT as a3, emptyT as a4, everySatisfyT as a5, exhaust as a6, exhaustT as a7, forEachT as a8, forkMerge as a9, toFlowableT as aA, toPromiseT as aB, toReadonlyArrayT as aC, zipT as aD, zipLatestT as aE, forkZipLatest as aa, fromPromise as ab, fromPromiseT as ac, generateT as ad, isEnumerable as ae, isRunnable as af, mapAsync as ag, mergeAll as ah, mergeAllT as ai, neverT as aj, pairwiseT as ak, reduceT as al, repeat as am, repeatT as an, scanT as ao, scanAsyncT as ap, skipFirstT as aq, someSatisfyT as ar, switchAll as as, switchAllT as at, subscribeOn as au, takeFirstT as av, takeLastT as aw, takeWhileT as ax, throwIfEmptyT as ay, toEnumerableT as az, takeFirst as b, combineLatest as c, concat as d, share as e, forEach as f, generate as g, map as h, empty as i, takeUntil as j, timeout as k, throttle as l, merge as m, toEnumerable as n, onSubscribe as o, toPromise as p, zipLatest as q, retry as r, subscribe as s, toFlowable as t, zipWithLatestFrom as u, takeLast as v, withLatestFrom as w, keepT as x, mixin as y, zip as z };
