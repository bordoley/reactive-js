/// <reference types="./ObservableLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/constants.mjs';
import { createInstanceFactory, mix, include, init, props } from '../__internal__/mixins.mjs';
import { catchErrorObservable, mergeAllObservable, scanAsyncObservable, switchAllObservable } from '../__internal__/rx/ObservableLike.higher-order.mjs';
import { hasDelay } from '../__internal__/scheduling/SchedulerLike.options.mjs';
import { createDisposableRef, disposableRefMixin } from '../__internal__/util/DisposableRefLike.mjs';
import { setCurrentRef, getCurrentRef, MutableRefLike_current } from '../__internal__/util/MutableRefLike.mjs';
import { concatMap, throws, keepType } from '../containers/ContainerLike.mjs';
import { map as map$1, toObservable, every, forEach as forEach$1, some, keepT as keepT$1 } from '../containers/ReadonlyArrayLike.mjs';
import IterableLike__toObservable from '../containers/__internal__/PromiseableLike/PromiseableLike.toObservable.mjs';
import { pipe, none, getLength, isNone, isSome, isNumber, partial, returns, compose, isTrue, getOrRaise } from '../functions.mjs';
import { enumerate, zip as zip$1, toObservable as toObservable$1 } from '../ix/EnumerableLike.mjs';
import { hasCurrent, move, getCurrent } from '../ix/EnumeratorLike.mjs';
import { SinkLike_notify } from '../rx.mjs';
import { schedule, getScheduler } from './ObserverLike.mjs';
import { notify, sourceFrom } from './SinkLike.mjs';
import { yield_ } from '../scheduling/ContinuationLike.mjs';
import { isDisposed, dispose, addTo, onComplete, onDisposed, disposed } from '../util/DisposableLike.mjs';
import DisposableLike__delegatingMixin from '../util/__internal__/DisposableLike/DisposableLike.delegatingMixin.mjs';
import DisposableLike__mixin from '../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { getObserverCount } from './MulticastObservableLike.mjs';
import { sinkInto } from './ReactiveContainerLike.mjs';
import EnumerableObservableLike__create from './__internal__/EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import EnumerableObservableLike__never from './__internal__/EnumerableObservableLike/EnumerableObservableLike.never.mjs';
import EnumeratorSinkLike__create from './__internal__/EnumeratorSinkLike/EnumeratorSinkLike.create.mjs';
import ObservableLike__allAreEnumerable from './__internal__/ObservableLike/ObservableLike.allAreEnumerable.mjs';
import ObservableLike__allAreRunnable from './__internal__/ObservableLike/ObservableLike.allAreRunnable.mjs';
import ObservableLike__buffer from './__internal__/ObservableLike/ObservableLike.buffer.mjs';
import ObservableLike__concat from './__internal__/ObservableLike/ObservableLike.concat.mjs';
import ObservableLike__create from './__internal__/ObservableLike/ObservableLike.create.mjs';
import ObservableLike__decodeWithCharset from './__internal__/ObservableLike/ObservableLike.decodeWithCharset.mjs';
import ObservableLike__defer from './__internal__/ObservableLike/ObservableLike.defer.mjs';
import ObservableLike__distinctUntilChanged from './__internal__/ObservableLike/ObservableLike.distinctUntilChanged.mjs';
import ObservableLike__empty from './__internal__/ObservableLike/ObservableLike.empty.mjs';
import ObservableLike__everySatisfy from './__internal__/ObservableLike/ObservableLike.everySatisfy.mjs';
import ObservableLike__forEach from './__internal__/ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__isEnumerable from './__internal__/ObservableLike/ObservableLike.isEnumerable.mjs';
import ObservableLike__isRunnable from './__internal__/ObservableLike/ObservableLike.isRunnable.mjs';
import ObservableLike__keep from './__internal__/ObservableLike/ObservableLike.keep.mjs';
import ObservableLike__lift from './__internal__/ObservableLike/ObservableLike.lift.mjs';
import ObservableLike__map from './__internal__/ObservableLike/ObservableLike.map.mjs';
import ObservableLike__merge from './__internal__/ObservableLike/ObservableLike.merge.mjs';
import ObservableLike__mergeObservables from './__internal__/ObservableLike/ObservableLike.mergeObservables.mjs';
import ObservableLike__multicast from './__internal__/ObservableLike/ObservableLike.multicast.mjs';
import ObservableLike__onSubscribe from './__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import ObservableLike__pairwise from './__internal__/ObservableLike/ObservableLike.pairwise.mjs';
import ObservableLike__reduce from './__internal__/ObservableLike/ObservableLike.reduce.mjs';
import ObservableLike__repeat from './__internal__/ObservableLike/ObservableLike.repeat.mjs';
import ObservableLike__retry from './__internal__/ObservableLike/ObservableLike.retry.mjs';
import ObservableLike__scan from './__internal__/ObservableLike/ObservableLike.scan.mjs';
import ObservableLike__skipFirst from './__internal__/ObservableLike/ObservableLike.skipFirst.mjs';
import ObservableLike__someSatisfy from './__internal__/ObservableLike/ObservableLike.someSatisfy.mjs';
import ObservableLike__subscribe from './__internal__/ObservableLike/ObservableLike.subscribe.mjs';
import ObservableLike__subscribeOn from './__internal__/ObservableLike/ObservableLike.subscribeOn.mjs';
import ObservableLike__takeFirst from './__internal__/ObservableLike/ObservableLike.takeFirst.mjs';
import ObservableLike__takeLast from './__internal__/ObservableLike/ObservableLike.takeLast.mjs';
import ObservableLike__takeUntil from './__internal__/ObservableLike/ObservableLike.takeUntil.mjs';
import ObservableLike__takeWhile from './__internal__/ObservableLike/ObservableLike.takeWhile.mjs';
import ObservableLike__throwIfEmpty from './__internal__/ObservableLike/ObservableLike.throwIfEmpty.mjs';
import ObservableLike__toEnumerable from './__internal__/ObservableLike/ObservableLike.toEnumerable.mjs';
import ObservableLike__toFlowable from './__internal__/ObservableLike/ObservableLike.toFlowable.mjs';
import ObservableLike__toPromise from './__internal__/ObservableLike/ObservableLike.toPromise.mjs';
import ObservableLike__toReadonlyArray from './__internal__/ObservableLike/ObservableLike.toReadonlyArray.mjs';
import ObservableLike__withLatestFrom from './__internal__/ObservableLike/ObservableLike.withLatestFrom.mjs';
import ObservableLike__zipWithLatestFrom from './__internal__/ObservableLike/ObservableLike.zipWithLatestFrom.mjs';
import ObserverLike__mixin from './__internal__/ObserverLike/ObserverLike.mixin.mjs';
import RunnableObservableLike__create from './__internal__/RunnableObservableLike/RunnableObservableLike.create.mjs';

const buffer = ObservableLike__buffer;
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
const concat = ObservableLike__concat;
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
const create = ObservableLike__create;
const decodeWithCharset = ObservableLike__decodeWithCharset;
const decodeWithCharsetT = {
    decodeWithCharset,
};
const defer = ObservableLike__defer;
const deferT = {
    defer,
};
const distinctUntilChanged = ObservableLike__distinctUntilChanged;
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const empty = ObservableLike__empty;
const emptyT = {
    empty,
};
const everySatisfy = ObservableLike__everySatisfy;
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
const forEach = ObservableLike__forEach;
const forEachT = { forEach };
const forkCombineLatest = ((...ops) => (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 1 /* LatestMode.Combine */));
const forkMerge = (...ops) => (obs) => pipe(ops, map$1(op => op(obs)), ObservableLike__mergeObservables);
const forkZipLatest = ((...ops) => (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 2 /* LatestMode.Zip */));
const fromPromise = IterableLike__toObservable;
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
        ? RunnableObservableLike__create(onSink)
        : EnumerableObservableLike__create(onSink);
});
const generateT = { generate };
const isEnumerable = ObservableLike__isEnumerable;
const isRunnable = ObservableLike__isRunnable;
const keep = ObservableLike__keep;
const keepT = { keep };
const latest = /*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__mixin();
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
    const createLatestObserver = createInstanceFactory(mix(include(typedObserverMixin, DisposableLike__mixin), function LatestObserver(instance, scheduler, ctx) {
        init(DisposableLike__mixin, instance);
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
        const isEnumerable = ObservableLike__allAreEnumerable(observables);
        const isRunnable = ObservableLike__allAreRunnable(observables);
        return isEnumerable
            ? EnumerableObservableLike__create(onSink)
            : isRunnable
                ? RunnableObservableLike__create(onSink)
                : ObservableLike__create(onSink);
    };
})();
const map = ObservableLike__map;
const mapT = { map };
const mapAsync = (f) => concatMap({ ...switchAllT, ...mapT }, (a) => pipe(a, f, fromPromise()));
const merge = ObservableLike__merge;
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
const multicast = ObservableLike__multicast;
const never = EnumerableObservableLike__never;
const neverT = { never };
const onSubscribe = ObservableLike__onSubscribe;
const pairwise = ObservableLike__pairwise;
const pairwiseT = { pairwise };
const reduce = ObservableLike__reduce;
const reduceT = { reduce };
const repeat = ObservableLike__repeat;
const repeatT = {
    repeat,
};
const retry = ObservableLike__retry;
const scan = ObservableLike__scan;
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
    return ObservableLike__create(observer => {
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
const skipFirst = ObservableLike__skipFirst;
const skipFirstT = { skipFirst };
const someSatisfy = ObservableLike__someSatisfy;
const someSatisfyT = { someSatisfy };
const switchAll = switchAllObservable;
const switchAllT = {
    concatAll: switchAll,
};
const subscribe = ObservableLike__subscribe;
const subscribeOn = ObservableLike__subscribeOn;
const takeFirst = ObservableLike__takeFirst;
const takeFirstT = { takeFirst };
const takeLast = ObservableLike__takeLast;
const takeLastT = { takeLast };
const takeUntil = ObservableLike__takeUntil;
const takeWhile = ObservableLike__takeWhile;
const takeWhileT = { takeWhile };
const throttle = /*@__PURE__*/ (() => {
    const createThrottleObserver = (() => {
        const typedObserverMixin = ObserverLike__mixin();
        const setupDurationSubscription = (observer, next) => {
            pipe(observer.durationSubscription, setCurrentRef(pipe(observer.durationFunction(next), forEach(observer.onNotify), subscribe(getScheduler(observer)))));
        };
        return createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function ThrottleObserver(instance, delegate, durationFunction, mode) {
            init(DisposableLike__mixin, instance);
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
        return pipe(createThrottleObserver, partial(durationFunction, mode), ObservableLike__lift(false, isNumber(duration)));
    };
})();
const throwIfEmpty = ObservableLike__throwIfEmpty;
const throwIfEmptyT = {
    throwIfEmpty,
};
const timeout = /*@__PURE__*/ (() => {
    const timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");
    const typedDisposableRefMixin = disposableRefMixin();
    const typedObserverMixin = ObserverLike__mixin();
    const setupDurationSubscription = (observer) => {
        observer[MutableRefLike_current] = pipe(observer.duration, subscribe(getScheduler(observer.delegate)));
    };
    const createTimeoutObserver = createInstanceFactory(mix(include(typedObserverMixin, DisposableLike__delegatingMixin, typedDisposableRefMixin), function TimeoutObserver(instance, delegate, duration) {
        init(typedObserverMixin, instance, getScheduler(delegate));
        init(DisposableLike__delegatingMixin, instance, delegate);
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
        return pipe(createTimeoutObserver, partial(durationObs), ObservableLike__lift(false, isNumber(duration) || isRunnable(duration)));
    };
})();
const toEnumerable = ObservableLike__toEnumerable;
const toEnumerableT = { toEnumerable };
const toFlowable = ObservableLike__toFlowable;
const toFlowableT = { toFlowable };
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
const toPromise = ObservableLike__toPromise;
const toPromiseT = {
    toPromise,
};
const toReadonlyArray = ObservableLike__toReadonlyArray;
const toReadonlyArrayT = {
    toReadonlyArray,
};
const withLatestFrom = ObservableLike__withLatestFrom;
const zip = /*@__PURE__*/ (() => {
    const typedObserverMixin = ObserverLike__mixin();
    const shouldEmit = compose(map$1((x) => hasCurrent(x) || move(x)), every(isTrue));
    const shouldComplete = compose(forEach$1(move), some(isDisposed));
    const createZipObserver = createInstanceFactory(mix(include(DisposableLike__mixin, typedObserverMixin), function ZipObserver(instance, delegate, enumerators, sinkEnumerator) {
        init(DisposableLike__mixin, instance);
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
                const enumerator = pipe(EnumeratorSinkLike__create(), addTo(observer));
                enumerators.push(enumerator);
                pipe(createZipObserver(observer, enumerators, enumerator), addTo(observer), sourceFrom(next));
            }
        }
    };
    return (...observables) => {
        const isEnumerable = ObservableLike__allAreEnumerable(observables);
        const isRunnable = ObservableLike__allAreRunnable(observables);
        return isEnumerable
            ? pipe(observables, map$1(toEnumerable()), keepType(keepT$1, isSome), enumerables => zip$1(...enumerables), toObservable$1())
            : isRunnable
                ? RunnableObservableLike__create(onSink(observables))
                : ObservableLike__create(onSink(observables));
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
const zipWithLatestFrom = ObservableLike__zipWithLatestFrom;

export { buffer, bufferT, catchError, combineLatest, combineLatestT, concat, concatAll, concatAllT, concatT, create, decodeWithCharset, decodeWithCharsetT, defer, deferT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, everySatisfy, everySatisfyT, exhaust, exhaustT, forEach, forEachT, forkCombineLatest, forkMerge, forkZipLatest, fromPromise, fromPromiseT, generate, generateT, isEnumerable, isRunnable, keep, keepT, map, mapAsync, mapT, merge, mergeAll, mergeAllT, mergeT, multicast, never, neverT, onSubscribe, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, retry, scan, scanAsync, scanAsyncT, scanT, share, skipFirst, skipFirstT, someSatisfy, someSatisfyT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throttle, throwIfEmpty, throwIfEmptyT, timeout, toEnumerable, toEnumerableT, toFlowable, toFlowableT, toPromise, toPromiseT, toReadonlyArray, toReadonlyArrayT, withLatestFrom, zip, zipLatest, zipLatestT, zipT, zipWithLatestFrom };
