/// <reference types="./observable.d.ts" />
import { createFromArray, empty, fromValue, throws, concatMap } from './container.mjs';
import { dispatch, dispatchTo } from './dispatcher.mjs';
import { dispose, addTo, isDisposed, onDisposed, add, disposed, onComplete, SerialDisposable, bindTo, toErrorHandler } from './disposable.mjs';
import { move, current, AbstractEnumerator, reset, hasCurrent, zip as zip$1, forEach } from './enumerator.mjs';
import { pipe, newInstance, length, newInstanceWith, isEmpty, arrayEquality, ignore, raise, pipeLazy, compose, max, returns, instanceFactory, identity } from './functions.mjs';
import { AbstractSource, DisposableSource, sourceFrom, createMapOperator, createOnNotifyOperator, assertState, notifySink, createUsing, notify, createNever, sinkInto, createCatchErrorOperator, createFromDisposable, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createKeepOperator, createOnSink, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from './source.mjs';
import { scheduler, AbstractDelegatingObserver, Observer, createDelegatingObserver } from './observer.mjs';
import { schedule, hasDelay, __yield, inContinuation, runContinuation, getDelay, createVirtualTimeScheduler } from './scheduler.mjs';
import { contraVariant, delegate } from './liftable.mjs';
import { none, isNone, isSome } from './option.mjs';
import { createRunnable } from './runnable.mjs';
import { map as map$1, everySatisfy as everySatisfy$1 } from './readonlyArray.mjs';
import { enumerate, fromIterator as fromIterator$1, fromIterable as fromIterable$1, createEnumerable } from './enumerable.mjs';
import { MAX_SAFE_INTEGER } from './env.mjs';

class AbstractObservable extends AbstractSource {
}
class DisposableObservable extends DisposableSource {
}
const isEnumerable = (obs) => { var _a; return (_a = obs.isEnumerable) !== null && _a !== void 0 ? _a : false; };
const tagEnumerable = (isEnumerable) => (obs) => {
    obs.isEnumerable = isEnumerable;
    return obs;
};

class CreateObservable extends AbstractObservable {
    constructor(f) {
        super();
        this.f = f;
    }
    sink(observer) {
        try {
            this.f(observer);
        }
        catch (cause) {
            pipe(observer, dispose({ cause }));
        }
    }
}
const createObservable = (f) => newInstance(CreateObservable, f);
const createT = {
    create: createObservable,
};

const defer = (factory, options) => createObservable(observer => {
    const sideEffect = factory();
    const callback = () => sideEffect(observer);
    pipe(scheduler(observer), schedule(callback, options), addTo(observer));
});

const deferEmpty = /*@__PURE__*/ pipe(createObservable(dispose()), tagEnumerable(true));
/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param options Config object that specifies an optional `delay` between emitted items and
 * an optional `startIndex` into the array.
 */
const fromArray = /*@__PURE__*/ createFromArray((values, startIndex, endIndex, options) => {
    const count = endIndex - startIndex;
    const isEnumerableTag = !hasDelay(options);
    return count === 0 && isEnumerableTag
        ? deferEmpty
        : pipe(defer(() => {
            let index = startIndex;
            return (observer) => {
                while (index < endIndex) {
                    const value = values[index];
                    index++;
                    observer.notify(value);
                    if (index < endIndex) {
                        __yield(options);
                    }
                }
                pipe(observer, dispose());
            };
        }, options), tagEnumerable(isEnumerableTag));
});
const fromArrayT = {
    fromArray,
};

class LiftedObservable extends AbstractObservable {
    constructor(source, operators, isEnumerable) {
        super();
        this.source = source;
        this.operators = operators;
        this.isEnumerable = isEnumerable;
    }
    sink(observer) {
        pipe(observer, ...this.operators, sourceFrom(this.source));
    }
}
/**
 * Creates a new `ObservableLike` which applies the provided the operator function to
 * observer when the source is subscribed to.
 *
 * @param operator The operator function to apply.
 */
const lift = (operator, isEnumerableOperator = false) => source => {
    const sourceSource = source instanceof LiftedObservable ? source.source : source;
    const allFunctions = source instanceof LiftedObservable
        ? [operator, ...source.operators]
        : [operator];
    isEnumerableOperator = isEnumerable(source) && isEnumerableOperator;
    return newInstance(LiftedObservable, sourceSource, allFunctions, isEnumerableOperator);
};
const liftT = {
    variance: contraVariant,
    lift,
};
const liftSynchronousT = {
    variance: contraVariant,
    lift: op => lift(op, true),
};

const map = /*@__PURE__*/ createMapOperator(liftSynchronousT, class MapObserver extends AbstractDelegatingObserver {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
});
const mapT = {
    map,
};

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
const onNotify = /*@__PURE__*/ createOnNotifyOperator(liftSynchronousT, class OnNotifyObserver extends AbstractDelegatingObserver {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
    }
});

class Subject extends DisposableObservable {
    constructor(replay = 1) {
        super();
        this.replay = replay;
        this.dispatchers = newInstance(Set);
        this.replayed = [];
    }
    get observerCount() {
        return this.dispatchers.size;
    }
    publish(next) {
        if (!isDisposed(this)) {
            const { replay, replayed } = this;
            if (replay > 0) {
                replayed.push(next);
                if (length(replayed) > replay) {
                    replayed.shift();
                }
            }
            for (const observer of this.dispatchers) {
                pipe(observer, dispatch(next));
            }
        }
    }
    sink(observer) {
        // The idea here is that an onSubscribe function may
        // call next from unscheduled sources such as event handlers.
        // So we marshall those events back to the scheduler.
        const { dispatcher } = observer;
        if (!isDisposed(this)) {
            const { dispatchers } = this;
            dispatchers.add(dispatcher);
            pipe(observer, onDisposed(_ => {
                dispatchers.delete(dispatcher);
            }));
        }
        for (const next of this.replayed) {
            pipe(dispatcher, dispatch(next));
        }
        pipe(this, add(dispatcher, true));
    }
}

/**
 * Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
 * using the provided scheduler. The returned `Disposable`
 * may used to cancel the subscription.
 *
 * @param scheduler The SchedulerLike instance that should be used by the source to notify it's observer.
 */
const subscribe = (scheduler) => observable => pipe(Observer, newInstanceWith(scheduler), addTo(scheduler, true), sourceFrom(observable));

function onDispose$1() {
    if (isDisposed(this.inner)) {
        pipe(this, delegate, dispose());
    }
}
class SwitchObserver extends AbstractDelegatingObserver {
    constructor() {
        super(...arguments);
        this.inner = disposed;
    }
    notify(next) {
        assertState(this);
        pipe(this.inner, dispose());
        const inner = pipe(next, onNotify(pipe(this, delegate, notifySink)), subscribe(scheduler(this)), addTo(delegate(this)), onComplete(() => {
            if (isDisposed(this)) {
                pipe(this, delegate, dispose());
            }
        }));
        this.inner = inner;
    }
}
const operator = (delegate) => pipe(SwitchObserver, newInstanceWith(delegate), addTo(delegate), onComplete(onDispose$1));
const switchAllInstance = /*@__PURE__*/ lift(operator);
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
const switchAll = () => switchAllInstance;
const switchAllT = {
    concatAll: switchAll,
};

const using = 
/*@__PURE__*/ createUsing(createT);
const usingT = {
    using,
};

const notifyDelegate = (observer) => {
    if (length(observer.queue) > 0 && observer.hasLatest) {
        observer.hasLatest = false;
        const next = observer.queue.shift();
        const result = observer.selector(next, observer.otherLatest);
        pipe(observer, delegate, notify(result));
    }
};
class ZipWithLatestFromObserver extends AbstractDelegatingObserver {
    constructor(delegate, selector) {
        super(delegate);
        this.selector = selector;
        this.hasLatest = false;
        this.queue = [];
        this.selector = selector;
    }
    notify(next) {
        assertState(this);
        this.queue.push(next);
        notifyDelegate(this);
    }
}
/**
 * Returns an `ObservableLike` which combines the source with
 * the latest value from another `ObservableLike`.
 *
 * @param other
 * @param selector
 */
const zipWithLatestFrom = (other, selector) => {
    const operator = (delegate$1) => {
        const disposeDelegate = () => {
            if (isDisposed(observer) && isDisposed(otherSubscription)) {
                pipe(delegate$1, dispose());
            }
        };
        const observer = pipe(ZipWithLatestFromObserver, newInstanceWith(delegate$1, selector), onComplete(disposeDelegate));
        const otherSubscription = pipe(other, onNotify(otherLatest => {
            observer.hasLatest = true;
            observer.otherLatest = otherLatest;
            notifyDelegate(observer);
            if (isDisposed(observer) && isEmpty(observer.queue)) {
                pipe(observer, delegate, dispose());
            }
        }), subscribe(scheduler(delegate$1)), onComplete(disposeDelegate));
        pipe(delegate$1, add(observer), add(otherSubscription));
        return observer;
    };
    return lift(operator);
};

const arrayStrictEquality = arrayEquality();
let currentCtx = none;
function validateObservableEffect(ctx, type) {
    const { effects, index } = ctx;
    ctx.index++;
    const effect = effects[index];
    if (isNone(effect)) {
        const newEffect = type === 1 /* EffectType.Memo */
            ? {
                type,
                f: ignore,
                args: [],
                value: none,
            }
            : type === 2 /* EffectType.Observe */
                ? {
                    type,
                    observable: empty(fromArrayT),
                    subscription: disposed,
                    value: none,
                    hasValue: false,
                }
                : type === 3 /* EffectType.Using */
                    ? {
                        type,
                        f: ignore,
                        args: [],
                        value: disposed,
                    }
                    : raise("invalid effect type");
        effects.push(newEffect);
        return newEffect;
    }
    else {
        return effect.type === type
            ? effect
            : raise("observable effect called out of order");
    }
}
class ObservableContext {
    constructor(observer, runComputation, mode) {
        this.observer = observer;
        this.runComputation = runComputation;
        this.mode = mode;
        this.index = 0;
        this.effects = [];
        this.scheduledComputationSubscription = disposed;
        this.cleanup = () => {
            const { effects } = this;
            const hasOutstandingEffects = effects.findIndex(effect => effect.type === 2 /* EffectType.Observe */ &&
                !isDisposed(effect.subscription)) >= 0;
            if (!hasOutstandingEffects &&
                isDisposed(this.scheduledComputationSubscription)) {
                pipe(this.observer, dispose());
            }
        };
    }
    memo(f, ...args) {
        const effect = validateObservableEffect(this, 1 /* EffectType.Memo */);
        if (f === effect.f && arrayStrictEquality(args, effect.args)) {
            return effect.value;
        }
        else {
            const value = f(...args);
            effect.f = f;
            effect.args = args;
            effect.value = value;
            return value;
        }
    }
    observe(observable) {
        const effect = validateObservableEffect(this, 2 /* EffectType.Observe */);
        if (effect.observable === observable) {
            return effect.value;
        }
        else {
            pipe(effect.subscription, dispose());
            const { observer, runComputation } = this;
            const scheduler$1 = scheduler(observer);
            const subscription = pipe(observable, onNotify(next => {
                effect.value = next;
                effect.hasValue = true;
                if (this.mode === "combine-latest") {
                    runComputation();
                }
                else {
                    let { scheduledComputationSubscription } = this;
                    this.scheduledComputationSubscription = isDisposed(scheduledComputationSubscription)
                        ? pipe(scheduler$1, schedule(runComputation), addTo(observer))
                        : scheduledComputationSubscription;
                }
            }), subscribe(scheduler$1), addTo(observer), onComplete(this.cleanup));
            effect.observable = observable;
            effect.subscription = subscription;
            effect.value = none;
            effect.hasValue = false;
            return none;
        }
    }
    using(f, ...args) {
        const effect = validateObservableEffect(this, 3 /* EffectType.Using */);
        if (f === effect.f && arrayStrictEquality(args, effect.args)) {
            return effect.value;
        }
        else {
            pipe(effect.value, dispose());
            const value = pipe(f(...args), addTo(this.observer));
            effect.f = f;
            effect.args = args;
            effect.value = value;
            return value;
        }
    }
}
const observable = (computation, { mode = "batched" } = {}) => defer(() => (observer) => {
    const runComputation = () => {
        let result = none;
        let error = none;
        currentCtx = ctx;
        try {
            result = computation();
        }
        catch (cause) {
            error = { cause };
        }
        currentCtx = none;
        ctx.index = 0;
        const { effects } = ctx;
        const effectsLength = length(effects);
        // Inline this for perf
        let allObserveEffectsHaveValues = true;
        let hasOutstandingEffects = false;
        for (let i = 0; i < effectsLength; i++) {
            const effect = effects[i];
            const { type } = effect;
            if (type === 2 /* EffectType.Observe */ &&
                !effect.hasValue) {
                allObserveEffectsHaveValues = false;
            }
            if (type === 2 /* EffectType.Observe */ &&
                !isDisposed(effect.subscription)) {
                hasOutstandingEffects = true;
            }
            if (!allObserveEffectsHaveValues && hasOutstandingEffects) {
                break;
            }
        }
        const combineLatestModeShouldNotify = mode === "combine-latest" &&
            allObserveEffectsHaveValues &&
            hasOutstandingEffects;
        const hasError = isSome(error);
        const shouldNotify = !hasError && (combineLatestModeShouldNotify || mode === "batched");
        const shouldDispose = !hasOutstandingEffects || hasError;
        if (shouldNotify) {
            observer.notify(result);
        }
        if (shouldDispose) {
            pipe(observer, dispose(error));
        }
    };
    const ctx = newInstance(ObservableContext, observer, runComputation, mode);
    return runComputation();
});
const assertCurrentContext = () => isNone(currentCtx)
    ? raise("effect must be called within a computational expression")
    : currentCtx;
function __memo(f, ...args) {
    const ctx = assertCurrentContext();
    return ctx.memo(f, ...args);
}
const __observe = (observable) => {
    const ctx = assertCurrentContext();
    return ctx.observe(observable);
};
const deferSideEffect = (f, ...args) => defer(() => observer => {
    f(...args);
    pipe(observer, notify(none), dispose());
});
function __do(f, ...args) {
    const ctx = assertCurrentContext();
    const scheduler$1 = scheduler(ctx.observer);
    const observable = ctx.memo(deferSideEffect, f, ...args);
    const subscribeOnScheduler = ctx.memo(subscribe, scheduler$1);
    ctx.using(subscribeOnScheduler, observable);
}
function __using(f, ...args) {
    const ctx = assertCurrentContext();
    return ctx.using(f, ...args);
}
function __currentScheduler() {
    const ctx = assertCurrentContext();
    return scheduler(ctx.observer);
}

function onDispose() {
    const { ctx } = this;
    ctx.completedCount++;
    if (ctx.completedCount === length(ctx.observers)) {
        pipe(this, delegate, dispose());
    }
}
class LatestObserver extends AbstractDelegatingObserver {
    constructor(delegate, ctx, mode) {
        super(delegate);
        this.ctx = ctx;
        this.mode = mode;
        this.ready = false;
        this.latest = none;
    }
    notify(next) {
        assertState(this);
        const { ctx } = this;
        this.latest = next;
        if (!this.ready) {
            ctx.readyCount++;
            this.ready = true;
        }
        const observers = ctx.observers;
        if (ctx.readyCount === length(observers)) {
            const result = pipe(observers, map$1(observer => observer.latest));
            pipe(this, delegate, notify(result));
            if (this.mode === 2 /* LatestMode.Zip */) {
                for (const sub of observers) {
                    sub.ready = false;
                    sub.latest = none;
                }
                ctx.readyCount = 0;
            }
        }
    }
}
const latest = (observables, mode) => {
    const isEnumerableTag = pipe(observables, everySatisfy$1(isEnumerable));
    const factory = () => (delegate) => {
        const observers = [];
        const ctx = {
            completedCount: 0,
            observers,
            readyCount: 0,
        };
        for (const observable of observables) {
            const innerObserver = pipe(LatestObserver, newInstanceWith(delegate, ctx, mode), addTo(delegate), onComplete(onDispose), sourceFrom(observable));
            observers.push(innerObserver);
        }
    };
    return pipe(defer(factory), tagEnumerable(isEnumerableTag));
};
/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
function combineLatest(...observables) {
    return latest(observables, 1 /* LatestMode.Combine */);
}
const combineLatestWith = (snd) => fst => combineLatest(fst, snd);
/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
function zipLatest(...observables) {
    return latest(observables, 2 /* LatestMode.Zip */);
}
const zipLatestWith = (snd) => fst => zipLatest(fst, snd);
function forkCombineLatest(...ops) {
    return (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 1 /* LatestMode.Combine */);
}
function forkZipLatest(...ops) {
    return (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 2 /* LatestMode.Zip */);
}

const createConcatObserver = (delegate, observables, next) => pipe(createDelegatingObserver(delegate), addTo(delegate), onComplete(() => {
    if (next < length(observables)) {
        pipe(createConcatObserver(delegate, observables, next + 1), sourceFrom(observables[next]));
    }
    else {
        pipe(delegate, dispose());
    }
}));
function concat(...observables) {
    const isEnumerableTag = pipe(observables, everySatisfy$1(isEnumerable));
    return pipe(createObservable(observer => {
        if (!isEmpty(observables)) {
            pipe(createConcatObserver(observer, observables, 1), sourceFrom(observables[0]));
        }
        else {
            pipe(observer, dispose());
        }
    }), tagEnumerable(isEnumerableTag));
}
const concatT = {
    concat,
};

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `EnumeratorLike` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
const fromEnumerator = (options) => f => pipe(using(f, enumerator => defer(() => (observer) => {
    while (move(enumerator)) {
        observer.notify(current(enumerator));
        __yield(options);
    }
    pipe(observer, dispose());
}, options)), tagEnumerable(!hasDelay(options)));
/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `Enumerable` with a specified `delay` between emitted items.
 *
 * @param values The `Enumerable`.
 * @param delay The requested delay between emitted items by the observable.
 */
const fromEnumerable = (options) => enumerable => pipe(pipeLazy(enumerable, enumerate), fromEnumerator(options));

/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterator` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
const fromIterator = (options) => {
    const call = fromEnumerable(options);
    return compose(fromIterator$1(), call);
};
const fromIteratorT = {
    fromIterator,
};
/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterable` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
const fromIterable = (options) => {
    const call = fromEnumerable(options);
    return compose(fromIterable$1(), call);
};
const fromIterableT = {
    fromIterable,
};

const createMergeObserver = (delegate, count, ctx) => pipe(createDelegatingObserver(delegate), addTo(delegate), onComplete(() => {
    ctx.completedCount++;
    if (ctx.completedCount >= count) {
        pipe(delegate, dispose());
    }
}));
function _merge(observables) {
    return createObservable(observer => {
        const count = length(observables);
        const ctx = { completedCount: 0 };
        for (const observable of observables) {
            pipe(createMergeObserver(observer, count, ctx), sourceFrom(observable));
        }
    });
}
function merge(...observables) {
    return _merge(observables);
}
const mergeT = {
    concat: merge,
};
function forkMerge(...ops) {
    return (obs) => _merge(pipe(ops, map$1(op => pipe(obs, op))));
}

const never = /*@__PURE__*/ createNever(createT);

class BufferObserver extends AbstractDelegatingObserver {
    constructor(delegate, durationFunction, maxBufferSize, durationSubscription) {
        super(delegate);
        this.durationFunction = durationFunction;
        this.maxBufferSize = maxBufferSize;
        this.durationSubscription = durationSubscription;
        this.buffer = [];
    }
    notify(next) {
        assertState(this);
        const { buffer, maxBufferSize } = this;
        buffer.push(next);
        const doOnNotify = () => {
            this.durationSubscription.inner = disposed;
            const buffer = this.buffer;
            this.buffer = [];
            pipe(this, delegate, notify(buffer));
        };
        if (length(buffer) === maxBufferSize) {
            doOnNotify();
        }
        else if (isDisposed(this.durationSubscription.inner)) {
            this.durationSubscription.inner = pipe(next, this.durationFunction, onNotify(doOnNotify), subscribe(scheduler(this)));
        }
    }
}
/**
 * Returns an `ObservableLike` which buffers items produced by the source until either the
 * number of items reaches the specified maximum buffer size or the duration time expires.
 *
 * @param options A configuration object that specifies an optional `duration` function or time in ms,
 * and an optional `maxBufferSize`.
 */
function buffer(options = {}) {
    var _a, _b;
    const delay = (_a = options.duration) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER;
    const durationFunction = delay === MAX_SAFE_INTEGER
        ? never
        : typeof delay === "number"
            ? (_) => fromValue(fromArrayT, { delay })(none)
            : delay;
    const maxBufferSize = max((_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : MAX_SAFE_INTEGER, 1);
    const operator = (delegate$1) => {
        const durationSubscription = newInstance(SerialDisposable);
        return pipe(BufferObserver, newInstanceWith(delegate$1, durationFunction, maxBufferSize, durationSubscription), add(durationSubscription), addTo(delegate$1), onComplete(function onDispose() {
            const { buffer } = this;
            this.buffer = [];
            if (isEmpty(buffer)) {
                pipe(this, delegate, dispose());
            }
            else {
                pipe(buffer, fromValue(fromArrayT), sinkInto(delegate(this)));
            }
        }));
    };
    return lift(operator, delay === MAX_SAFE_INTEGER);
}
const bufferT = {
    buffer,
};

const subscribeNext = (observer) => {
    if (observer.activeCount < observer.maxConcurrency) {
        const nextObs = observer.queue.shift();
        if (isSome(nextObs)) {
            observer.activeCount++;
            pipe(nextObs, onNotify(notifySink(delegate(observer))), subscribe(scheduler(observer)), addTo(delegate(observer)), onComplete(observer.onDispose));
        }
        else if (isDisposed(observer)) {
            pipe(observer, delegate, dispose());
        }
    }
};
class MergeObserver extends AbstractDelegatingObserver {
    constructor(delegate, maxBufferSize, maxConcurrency) {
        super(delegate);
        this.maxBufferSize = maxBufferSize;
        this.maxConcurrency = maxConcurrency;
        this.activeCount = 0;
        this.onDispose = () => {
            this.activeCount--;
            subscribeNext(this);
        };
        this.queue = [];
    }
    notify(next) {
        assertState(this);
        const { queue } = this;
        queue.push(next);
        // Drop old events if the maxBufferSize has been exceeded
        if (length(queue) + this.activeCount > this.maxBufferSize) {
            queue.shift();
        }
        subscribeNext(this);
    }
}
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * which concurrently delivers values emitted by the inner sources.
 *
 * @param options Optional configuration object. The `maxBufferSize` property specifies
 * how many source observables may be queued before dropping previous observables. The `maxConcurrency`
 * property specifies the maximum number of inner observables that may be subscribed to concurrently.
 */
const mergeAll = (options = {}) => {
    const { maxBufferSize = MAX_SAFE_INTEGER, maxConcurrency = MAX_SAFE_INTEGER, } = options;
    const operator = (delegate$1) => {
        const observer = pipe(delegate$1, onDisposed(_ => {
            observer.queue.length = 0;
        }), delegate => newInstance(MergeObserver, delegate, maxBufferSize, maxConcurrency), addTo(delegate$1), onComplete(() => {
            if (length(observer.queue) + observer.activeCount === 0) {
                pipe(observer, delegate, dispose());
            }
        }));
        return observer;
    };
    return lift(operator);
};
const mergeAllT = {
    concatAll: mergeAll,
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
const _exhaust = /*@__PURE__*/ mergeAll({
    maxBufferSize: 1,
    maxConcurrency: 1,
});
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
const exhaust = () => _exhaust;
const exhaustT = {
    concatAll: exhaust,
};

const createRepeatObserver = (delegate, observable, shouldRepeat) => {
    let count = 1;
    const doOnDispose = (error) => {
        let shouldComplete = false;
        try {
            shouldComplete = !shouldRepeat(count, error);
        }
        catch (cause) {
            shouldComplete = true;
            error = { cause, parent: error };
        }
        if (shouldComplete) {
            pipe(delegate, dispose(error));
        }
        else {
            count++;
            pipe(observable, onNotify(notifySink(delegate)), subscribe(scheduler(delegate)), addTo(delegate, true), onDisposed(doOnDispose));
        }
    };
    return pipe(createDelegatingObserver(delegate), addTo(delegate, true), onDisposed(doOnDispose));
};
const repeatObs = (shouldRepeat) => observable => {
    const operator = (observer) => createRepeatObserver(observer, observable, shouldRepeat);
    return lift(operator, true)(observable);
};
const defaultRepeatPredicate = (_, error) => isNone(error);
function repeat(predicate) {
    const repeatPredicate = isNone(predicate)
        ? defaultRepeatPredicate
        : typeof predicate === "number"
            ? (count, error) => isNone(error) && count < predicate
            : (count, error) => isNone(error) && predicate(count);
    return repeatObs(repeatPredicate);
}
const repeatT = {
    repeat,
};
const defaultRetryPredicate = (_, error) => isSome(error);
function retry(predicate) {
    const retryPredicate = isNone(predicate)
        ? defaultRetryPredicate
        : (count, error) => isSome(error) && predicate(count, error.cause);
    return repeatObs(retryPredicate);
}

const setupDurationSubscription$1 = (observer, next) => {
    observer.durationSubscription.inner = pipe(observer.durationFunction(next), onNotify(observer.onNotify), subscribe(scheduler(observer)));
};
class ThrottleObserver extends AbstractDelegatingObserver {
    constructor(delegate$1, durationFunction, mode, durationSubscription) {
        super(delegate$1);
        this.durationFunction = durationFunction;
        this.mode = mode;
        this.durationSubscription = durationSubscription;
        this.value = none;
        this.hasValue = false;
        this.onNotify = (_) => {
            if (this.hasValue) {
                const value = this.value;
                this.value = none;
                this.hasValue = false;
                setupDurationSubscription$1(this, value);
                delegate(this).notify(value);
            }
        };
    }
    notify(next) {
        assertState(this);
        this.value = next;
        this.hasValue = true;
        const durationSubscriptionDisposableIsDisposed = isDisposed(this.durationSubscription.inner);
        if (durationSubscriptionDisposableIsDisposed && this.mode !== "last") {
            this.onNotify();
        }
        else if (durationSubscriptionDisposableIsDisposed) {
            setupDurationSubscription$1(this, next);
        }
    }
}
function throttle(duration, options = {}) {
    const { mode = "interval" } = options;
    const durationFunction = typeof duration === "number"
        ? (_) => fromValue(fromArrayT, { delay: duration })(none)
        : duration;
    const operator = (delegate) => {
        const durationSubscription = newInstance(SerialDisposable);
        const observer = pipe(ThrottleObserver, newInstanceWith(delegate, durationFunction, mode, durationSubscription), addTo(delegate), onComplete(() => {
            if (observer.mode !== "first" && observer.hasValue) {
                pipe(observer.value, fromValue(fromArrayT), sinkInto(delegate));
            }
        }));
        return pipe(observer, add(durationSubscription));
    };
    return lift(operator);
}

const _timeoutError = /*@__PURE__*/ Symbol("@reactive-js/core/lib/observable/timeoutError");
/** Symbol thrown when the timeout operator times out */
const timeoutError = _timeoutError;
const setupDurationSubscription = (observer) => {
    observer.durationSubscription.inner = pipe(observer.duration, subscribe(scheduler(observer)));
};
class TimeoutObserver extends AbstractDelegatingObserver {
    constructor(delegate, duration, durationSubscription) {
        super(delegate);
        this.duration = duration;
        this.durationSubscription = durationSubscription;
    }
    notify(next) {
        assertState(this);
        pipe(this.durationSubscription, dispose());
        pipe(this, delegate, notify(next));
    }
}
const returnTimeoutError = returns(timeoutError);
function timeout(duration) {
    const durationObs = typeof duration === "number"
        ? throws({ ...fromArrayT, ...mapT }, { delay: duration })(returnTimeoutError)
        : concat(duration, throws({ ...fromArrayT, ...mapT })(returnTimeoutError));
    const operator = (delegate) => {
        const durationSubscription = newInstance(SerialDisposable);
        const observer = pipe(TimeoutObserver, newInstanceWith(delegate, durationObs, durationSubscription), bindTo(delegate), add(durationSubscription));
        setupDurationSubscription(observer);
        return observer;
    };
    return lift(operator);
}

class WithLatestFromObserver extends AbstractDelegatingObserver {
    constructor(delegate, selector) {
        super(delegate);
        this.selector = selector;
        this.hasLatest = false;
        this.selector = selector;
    }
    notify(next) {
        assertState(this);
        if (!isDisposed(this) && this.hasLatest) {
            const result = this.selector(next, this.otherLatest);
            pipe(this, delegate, notify(result));
        }
    }
}
/**
 * Returns an `ObservableLike` which combines the source with
 * the latest value from another `ObservableLike`.
 *
 * @param other
 * @param selector
 */
const withLatestFrom = (other, selector) => {
    const operator = (delegate) => {
        const observer = pipe(WithLatestFromObserver, newInstanceWith(delegate, selector), bindTo(delegate));
        pipe(other, onNotify(next => {
            observer.hasLatest = true;
            observer.otherLatest = next;
        }), subscribe(scheduler(observer)), addTo(observer), onComplete(() => {
            if (!observer.hasLatest) {
                pipe(observer, dispose());
            }
        }));
        return observer;
    };
    return lift(operator);
};

class EnumeratorScheduler extends AbstractEnumerator {
    constructor() {
        super(...arguments);
        this.inContinuation = false;
        this.continuations = [];
    }
    get now() {
        return 0;
    }
    get shouldYield() {
        return inContinuation(this);
    }
    step() {
        const { continuations } = this;
        const continuation = continuations.shift();
        if (isNone(continuation) || isDisposed(continuation)) {
            return false;
        }
        pipe(this, runContinuation(continuation));
        return true;
    }
    requestYield() {
        // No-Op: We yield whenever the continuation is running.
    }
    schedule(continuation, options) {
        const delay = getDelay(options);
        pipe(this, add(continuation, true));
        if (!isDisposed(continuation) && delay === 0) {
            this.continuations.push(continuation);
        }
        else {
            pipe(continuation, dispose());
        }
    }
    move() {
        reset(this);
        while (!isDisposed(this) && !hasCurrent(this) && this.step()) { }
        return hasCurrent(this);
    }
}
class EnumeratorObserver extends Observer {
    constructor(enumerator) {
        super(enumerator);
        this.enumerator = enumerator;
    }
    notify(next) {
        assertState(this);
        this.enumerator.current = next;
    }
}
const enumerateObs = (obs) => {
    const scheduler = newInstance(EnumeratorScheduler);
    pipe(EnumeratorObserver, newInstanceWith(scheduler), addTo(scheduler), sourceFrom(obs));
    return scheduler;
};
const toEnumerable = () => obs => createEnumerable(() => enumerateObs(obs));
const toEnumerableT = {
    toEnumerable,
};

const shouldEmit = (enumerators) => {
    for (const enumerator of enumerators) {
        if (!hasCurrent(enumerator)) {
            return false;
        }
    }
    return true;
};
const shouldComplete = (enumerators) => {
    for (const enumerator of enumerators) {
        move(enumerator);
        if (isDisposed(enumerator) && !hasCurrent(enumerator)) {
            return true;
        }
    }
    return false;
};
class ZipObserverEnumerator extends AbstractEnumerator {
    constructor() {
        super(...arguments);
        this.buffer = [];
    }
    move() {
        const { buffer } = this;
        if (!isDisposed(this) && length(buffer) > 0) {
            const next = buffer.shift();
            this.current = next;
        }
        else {
            reset(this);
        }
        return hasCurrent(this);
    }
}
class ZipObserver extends AbstractDelegatingObserver {
    constructor(delegate, enumerators, enumerator) {
        super(delegate);
        this.enumerators = enumerators;
        this.enumerator = enumerator;
    }
    notify(next) {
        assertState(this);
        const { enumerator, enumerators } = this;
        if (!isDisposed(this)) {
            if (hasCurrent(enumerator)) {
                enumerator.buffer.push(next);
            }
            else {
                enumerator.current = next;
            }
            if (shouldEmit(enumerators)) {
                const next = pipe(enumerators, map$1(current));
                const shouldCompleteResult = shouldComplete(enumerators);
                pipe(this, delegate, notify(next));
                if (shouldCompleteResult) {
                    pipe(this, dispose());
                }
            }
        }
    }
}
const _zip = (...observables) => {
    const isEnumerableTag = pipe(observables, everySatisfy$1(isEnumerable));
    return isEnumerableTag
        ? pipe(using(pipeLazy(observables, map$1(enumerateObs)), (...enumerators) => pipe(zip$1(...enumerators), returns, fromEnumerator())), tagEnumerable(true))
        : createObservable(observer => {
            const count = length(observables);
            const enumerators = [];
            for (let index = 0; index < count; index++) {
                const next = observables[index];
                if (isEnumerable(next)) {
                    const enumerator = enumerateObs(next);
                    move(enumerator);
                    enumerators.push(enumerator);
                }
                else {
                    const enumerator = pipe(ZipObserverEnumerator, newInstanceWith(), onDisposed(() => {
                        enumerator.buffer.length = 0;
                    }), addTo(observer));
                    const innerObserver = pipe(ZipObserver, newInstanceWith(observer, enumerators, enumerator), onComplete(() => {
                        if (isDisposed(enumerator) ||
                            (isEmpty(enumerator.buffer) && !hasCurrent(enumerator))) {
                            pipe(observer, dispose());
                        }
                    }), addTo(observer), sourceFrom(next));
                    enumerators.push(innerObserver.enumerator);
                }
            }
        });
};
/**
 * Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
 * in order, of each of its input sources.
 */
const zip = _zip;
const zipT = {
    zip,
};

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
const toPromise = (scheduler) => observable => newInstance(Promise, (resolve, reject) => {
    let result = none;
    let hasResult = false;
    pipe(observable, onNotify(next => {
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

const type = undefined;
const catchError = /*@__PURE__*/ createCatchErrorOperator(liftSynchronousT, class CatchErrorObserver extends AbstractDelegatingObserver {
});
const fromDisposable = /*@__PURE__*/ createFromDisposable(createT);
const decodeWithCharset = 
/*@__PURE__*/ createDecodeWithCharsetOperator({ ...liftSynchronousT, ...fromArrayT }, class DecodeWithCharsetObserver extends AbstractDelegatingObserver {
    constructor(delegate, textDecoder) {
        super(delegate);
        this.textDecoder = textDecoder;
    }
});
const decodeWithCharsetT = {
    decodeWithCharset,
};
/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
const distinctUntilChanged = 
/*@__PURE__*/ createDistinctUntilChangedOperator(liftSynchronousT, class DistinctUntilChangedObserver extends AbstractDelegatingObserver {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
        this.prev = none;
        this.hasValue = false;
    }
});
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const everySatisfy = /*@__PURE__*/ createEverySatisfyOperator({ ...fromArrayT, ...liftSynchronousT }, class EverySatisfyObserver extends AbstractDelegatingObserver {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
});
const everySatisfyT = {
    everySatisfy,
};
const fromPromise = (factory) => 
/*@__PURE__*/ createObservable(({ dispatcher }) => {
    factory().then(next => {
        if (!isDisposed(dispatcher)) {
            pipe(dispatcher, dispatch(next), dispose());
        }
    }, toErrorHandler(dispatcher));
});
/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
const generate = (generator, initialValue, options) => {
    const factory = () => {
        let acc = initialValue();
        return (observer) => {
            while (true) {
                acc = generator(acc);
                observer.notify(acc);
                __yield(options);
            }
        };
    };
    return pipe(defer(factory, options), tagEnumerable(!hasDelay(options)));
};
const generateT = {
    generate,
};
const keep = 
/*@__PURE__*/ createKeepOperator(liftSynchronousT, class KeepObserver extends AbstractDelegatingObserver {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
});
const keepT = {
    keep,
};
const mapAsync = (f) => concatMap({ ...switchAllT, ...mapT }, (a) => fromPromise(() => f(a)));
const onSubscribe = /*@__PURE__*/ createOnSink(createT);
const observerCount = (observable) => observable.observerCount;
const pairwise = 
/*@__PURE__*/ createPairwiseOperator(liftSynchronousT, class PairwiseObserver extends AbstractDelegatingObserver {
    constructor() {
        super(...arguments);
        this.hasPrev = false;
    }
});
const pairwiseT = {
    pairwise,
};
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
const publish = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = newInstance(Subject, replay);
    pipe(observable, onNotify(x => subject.publish(x)), subscribe(scheduler), bindTo(subject));
    return subject;
};
const reduce = /*@__PURE__*/ createReduceOperator({ ...fromArrayT, ...liftSynchronousT }, class ReducerObserver extends AbstractDelegatingObserver {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.reducer = reducer;
        this.acc = acc;
    }
});
const reduceT = {
    reduce,
};
const replay = (observable) => observable.replay;
const scan = /*@__PURE__*/ createScanOperator(liftSynchronousT, class ScanObserver extends AbstractDelegatingObserver {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.reducer = reducer;
        this.acc = acc;
    }
});
const scanT = {
    scan,
};
/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
const scanAsync = (scanner, initialValue) => observable => using(instanceFactory(Subject), accFeedbackStream => pipe(observable, zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), takeFirst())), switchAll(), onNotify(x => accFeedbackStream.publish(x)), onSubscribe(() => accFeedbackStream.publish(initialValue()))));
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
const share = (scheduler, options) => source => {
    let multicast = none;
    return createObservable(observer => {
        if (isNone(multicast)) {
            multicast = pipe(source, publish(scheduler, options));
        }
        pipe(observer, sourceFrom(multicast), onDisposed(() => {
            if (isSome(multicast) && observerCount(multicast) === 0) {
                pipe(multicast, dispose());
                multicast = none;
            }
        }));
    });
};
/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
const skipFirst = /*@__PURE__*/ createSkipFirstOperator(liftSynchronousT, class SkipFirstObserver extends AbstractDelegatingObserver {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }
});
const skipFirstT = {
    skipFirst,
};
const someSatisfy = /*@__PURE__*/ createSomeSatisfyOperator({ ...fromArrayT, ...liftSynchronousT }, class SomeSatisfyObserver extends AbstractDelegatingObserver {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
});
const someSatisfyT = {
    someSatisfy,
};
const subscribeOn = (scheduler) => observable => createObservable(({ dispatcher }) => pipe(observable, onNotify(dispatchTo(dispatcher)), subscribe(scheduler), bindTo(dispatcher)));
const takeFirst = /*@__PURE__*/ createTakeFirstOperator({ ...fromArrayT, ...liftSynchronousT }, class TakeFirstObserver extends AbstractDelegatingObserver {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
    }
});
const takeFirstT = {
    takeFirst,
};
/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
const takeLast = /*@__PURE__*/ createTakeLastOperator({ ...fromArrayT, ...liftSynchronousT }, class TakeLastObserver extends AbstractDelegatingObserver {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.last = [];
    }
});
const takeLastT = {
    takeLast,
};
const takeUntil = (notifier) => {
    const operator = (delegate) => {
        const takeUntilObserver = pipe(createDelegatingObserver(delegate), bindTo(delegate), bindTo(pipe(notifier, takeFirst(), subscribe(scheduler(delegate)))));
        return takeUntilObserver;
    };
    return lift(operator);
};
/**
 * Returns an `ObservableLike` which emits values emitted by the source as long
 * as each value satisfies the given predicate, and then completes as soon as
 * this predicate is not satisfied.
 *
 * @param predicate The predicate function.
 */
const takeWhile = /*@__PURE__*/ createTakeWhileOperator(liftSynchronousT, class TakeWhileObserver extends AbstractDelegatingObserver {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
});
const takeWhileT = {
    takeWhile,
};
const throwIfEmpty = /*@__PURE__*/ createThrowIfEmptyOperator(liftSynchronousT, class ThrowIfEmptyObserver extends AbstractDelegatingObserver {
    constructor() {
        super(...arguments);
        this.isEmpty = true;
    }
});
const throwIfEmptyT = {
    throwIfEmpty,
};
const toObservable = () => identity;
const toObservableT = {
    toObservable,
};
const toRunnable = (options = {}) => source => createRunnable(sink => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    pipe(source, onNotify(notifySink(sink)), subscribe(scheduler), addTo(sink));
    pipe(scheduler, addTo(sink), forEach(ignore), dispose());
});
const toRunnableT = {
    toRunnable,
};

export { AbstractObservable, DisposableObservable, Subject, __currentScheduler, __do, __memo, __observe, __using, buffer, bufferT, catchError, combineLatest, combineLatestWith, concat, concatAll, concatAllT, concatT, createObservable, createT, decodeWithCharset, decodeWithCharsetT, defer, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, exhaust, exhaustT, forkCombineLatest, forkMerge, forkZipLatest, fromArray, fromArrayT, fromDisposable, fromEnumerable, fromIterable, fromIterableT, fromIterator, fromIteratorT, fromPromise, generate, generateT, keep, keepT, map, mapAsync, mapT, merge, mergeAll, mergeAllT, mergeT, never, observable, observerCount, onNotify, onSubscribe, pairwise, pairwiseT, publish, reduce, reduceT, repeat, repeatT, replay, retry, scan, scanAsync, scanAsyncT, scanT, share, skipFirst, skipFirstT, someSatisfy, someSatisfyT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throttle, throwIfEmpty, throwIfEmptyT, timeout, timeoutError, toEnumerable, toEnumerableT, toObservable, toObservableT, toPromise, toRunnable, toRunnableT, type, using, usingT, withLatestFrom, zip, zipLatest, zipLatestWith, zipT, zipWithLatestFrom };
