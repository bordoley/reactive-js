/// <reference types="./observable.d.ts" />
import { AbstractDisposableContainer, empty, fromValue, throws, concatMap } from './container.mjs';
import { dispose, isDisposed, onDisposed, add, addTo, onComplete, AbstractDisposable, disposed, createSerialDisposable, bindTo, toErrorHandler } from './disposable.mjs';
import { pipe, raise, arrayEquality, ignore, defer as defer$1, compose, returns } from './functions.mjs';
import { AbstractSource, AbstractDisposableSource, sourceFrom, createMapOperator, createOnNotifyOperator, notifySink, createUsing, notify, createNever, sinkInto, createCatchErrorOperator, createFromDisposable, createDecodeWithCharsetOperator, createDistinctUntilChangedOperator, createEverySatisfyOperator, createKeepOperator, createOnSink, createPairwiseOperator, createReduceOperator, createScanOperator, createSkipFirstOperator, createSomeSatisfyOperator, createTakeFirstOperator, createTakeLastOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from './source.mjs';
import { schedule, __yield, run, createVirtualTimeScheduler } from './scheduler.mjs';
import { __DEV__ } from './env.mjs';
import { none, isNone, isSome } from './option.mjs';
import { createRunnable } from './runnable.mjs';
import { map as map$1, everySatisfy as everySatisfy$1 } from './readonlyArray.mjs';
import { enumerate as enumerate$1, fromIterator as fromIterator$1, fromIterable as fromIterable$1, AbstractEnumerator, createEnumerable, current, zipEnumerators } from './enumerable.mjs';

class AbstractObservable extends AbstractSource {
}
class AbstractDisposableObservable extends AbstractDisposableSource {
}

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
const createObservable = (f) => new CreateObservable(f);
const createT = {
    create: createObservable,
};

class SubjectImpl extends AbstractDisposableObservable {
    constructor(replay) {
        super();
        this.replay = replay;
        this.dispatchers = new Set();
        this.replayed = [];
    }
    get observerCount() {
        return this.dispatchers.size;
    }
    dispatch(next) {
        if (!isDisposed(this)) {
            const { replay, replayed } = this;
            if (replay > 0) {
                replayed.push(next);
                if (replayed.length > replay) {
                    replayed.shift();
                }
            }
            for (const observer of this.dispatchers) {
                observer.dispatch(next);
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
            dispatcher.dispatch(next);
        }
        pipe(this, add(dispatcher, true));
    }
}
const createSubject = (options = {}) => {
    const { replay = 0 } = options;
    return new SubjectImpl(replay);
};

const defer = (factory, options) => createObservable(observer => {
    const sideEffect = factory();
    const callback = () => sideEffect(observer);
    pipe(observer.scheduler, schedule(callback, options), addTo(observer));
});

const deferEmpty = createObservable(dispose());
deferEmpty.isEnumerable = true;
/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param options Config object that specifies an optional `delay` between emitted items and
 * an optional `startIndex` into the array.
 */
const fromArray = (options = {}) => values => {
    var _a, _b, _c;
    const delay = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0);
    const valuesLength = values.length;
    const startIndex = Math.min((_b = options.startIndex) !== null && _b !== void 0 ? _b : 0, valuesLength);
    const endIndex = Math.max(Math.min((_c = options.endIndex) !== null && _c !== void 0 ? _c : values.length, valuesLength), 0);
    const count = endIndex - startIndex;
    if (count === 0 && delay === 0) {
        return deferEmpty;
    }
    else {
        const observable = defer(() => {
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
        }, options);
        observable.isEnumerable = delay === 0;
        return observable;
    }
};
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
const lift = (operator, isEnumerable = false) => source => {
    var _a;
    const sourceSource = source instanceof LiftedObservable ? source.source : source;
    const allFunctions = source instanceof LiftedObservable
        ? [operator, ...source.operators]
        : [operator];
    isEnumerable = ((_a = source.isEnumerable) !== null && _a !== void 0 ? _a : false) && isEnumerable;
    return new LiftedObservable(sourceSource, allFunctions, isEnumerable);
};
const liftT = {
    variance: "contravariant",
    lift,
};
const liftSynchronousT = {
    variance: "contravariant",
    lift: op => lift(op, true),
};

const scheduleDrainQueue = (dispatcher) => {
    if (dispatcher.nextQueue.length === 1) {
        const { observer } = dispatcher;
        pipe(observer.scheduler, schedule(dispatcher.continuation), addTo(observer), onComplete(dispatcher.onContinuationDispose));
    }
};
class ObserverDelegatingDispatcher extends AbstractDisposable {
    constructor(observer) {
        super();
        this.observer = observer;
        this.continuation = () => {
            const { nextQueue } = this;
            const { observer } = this;
            while (nextQueue.length > 0) {
                const next = nextQueue.shift();
                observer.notify(next);
                __yield();
            }
        };
        this.onContinuationDispose = () => {
            if (isDisposed(this)) {
                pipe(this.observer, dispose(this.error));
            }
        };
        this.nextQueue = [];
    }
    dispatch(next) {
        if (!isDisposed(this)) {
            this.nextQueue.push(next);
            scheduleDrainQueue(this);
        }
    }
}
/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
class Observer extends AbstractDisposableContainer {
    constructor(scheduler) {
        super();
        this.scheduler = scheduler;
        this._dispatcher = none;
    }
    get dispatcher() {
        if (isNone(this._dispatcher)) {
            const dispatcher = pipe(new ObserverDelegatingDispatcher(this), addTo(this, true), onDisposed(e => {
                if (dispatcher.nextQueue.length === 0) {
                    pipe(this, dispose(e));
                }
            }));
            this._dispatcher = dispatcher;
        }
        return this._dispatcher;
    }
    assertState() { }
    notify(_) {
        this.assertState();
    }
}
if (__DEV__) {
    Observer.prototype.assertState = function assertStateDev() {
        if (!this.scheduler.inContinuation) {
            raise("Observer.notify() may only be invoked within a scheduled SchedulerContinuation");
        }
        else if (isDisposed(this)) {
            raise("Observer is disposed");
        }
    };
}
class DelegatingObserver extends Observer {
    constructor(delegate) {
        super(delegate.scheduler);
        this.delegate = delegate;
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
const createDelegatingObserver = (delegate) => new DelegatingObserver(delegate);

const map = createMapOperator(liftSynchronousT, class MapObserver extends Observer {
    constructor(delegate, mapper) {
        super(delegate.scheduler);
        this.delegate = delegate;
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
const onNotify = createOnNotifyOperator(liftSynchronousT, class OnNotifyObserver extends Observer {
    constructor(delegate, onNotify) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.onNotify = onNotify;
    }
});

/**
 * Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
 * using the provided scheduler. The returned `DisposableLike`
 * may used to cancel the subscription.
 *
 * @param scheduler The SchedulerLike instance that should be used by the source to notify it's observer.
 */
const subscribe = (scheduler) => observable => pipe(new Observer(scheduler), addTo(scheduler, true), sourceFrom(observable));

function onDispose$2() {
    if (isDisposed(this.inner)) {
        pipe(this.delegate, dispose());
    }
}
class SwitchObserver extends Observer {
    constructor(delegate) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.inner = disposed;
    }
    notify(next) {
        this.assertState();
        pipe(this.inner, dispose());
        const inner = pipe(next, onNotify(notifySink(this.delegate)), subscribe(this.scheduler), addTo(this.delegate), onComplete(() => {
            if (isDisposed(this)) {
                pipe(this.delegate, dispose());
            }
        }));
        this.inner = inner;
    }
}
const operator = (delegate) => pipe(new SwitchObserver(delegate), addTo(delegate), onComplete(onDispose$2));
const switchAllInstance = lift(operator);
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
const switchAll = () => switchAllInstance;
const switchAllT = {
    concatAll: switchAll,
};

const using = createUsing(createT);
const usingT = {
    using,
};

const notifyDelegate = (observer) => {
    if (observer.queue.length > 0 && observer.hasLatest) {
        observer.hasLatest = false;
        const next = observer.queue.shift();
        const result = observer.selector(next, observer.otherLatest);
        observer.delegate.notify(result);
    }
};
class ZipWithLatestFromObserver extends Observer {
    constructor(delegate, selector) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.selector = selector;
        this.hasLatest = false;
        this.queue = [];
        this.selector = selector;
    }
    notify(next) {
        this.assertState();
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
    const operator = (delegate) => {
        const disposeDelegate = () => {
            if (observer.isDisposed && otherSubscription.isDisposed) {
                pipe(delegate, dispose());
            }
        };
        const observer = pipe(new ZipWithLatestFromObserver(delegate, selector), onComplete(disposeDelegate));
        const otherSubscription = pipe(other, onNotify(otherLatest => {
            observer.hasLatest = true;
            observer.otherLatest = otherLatest;
            notifyDelegate(observer);
            if (observer.isDisposed && observer.queue.length === 0) {
                pipe(observer.delegate, dispose());
            }
        }), subscribe(delegate.scheduler), onComplete(disposeDelegate));
        pipe(delegate, add(observer), add(otherSubscription));
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
            const { scheduler } = observer;
            const subscription = pipe(observable, onNotify(next => {
                effect.value = next;
                effect.hasValue = true;
                if (this.mode === "combine-latest") {
                    runComputation();
                }
                else {
                    let { scheduledComputationSubscription } = this;
                    this.scheduledComputationSubscription = isDisposed(scheduledComputationSubscription)
                        ? pipe(scheduler, schedule(runComputation), addTo(observer))
                        : scheduledComputationSubscription;
                }
            }), subscribe(observer.scheduler), addTo(observer), onComplete(this.cleanup));
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
        const effectsLength = effects.length;
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
    const ctx = new ObservableContext(observer, runComputation, mode);
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
    return ctx instanceof ObservableContext
        ? ctx.observe(observable)
        : raise("__observe may only be called within an observable or concurrent computation");
};
const deferSideEffect = (f, ...args) => defer(() => observer => {
    f(...args);
    pipe(observer, notify(none), dispose());
});
function __do(f, ...args) {
    const ctx = assertCurrentContext();
    const scheduler = __currentScheduler();
    const observable = ctx.memo(deferSideEffect, f, ...args);
    const subscribeOnScheduler = ctx.memo(subscribe, scheduler);
    ctx.using(subscribeOnScheduler, observable);
}
function __using(f, ...args) {
    const ctx = assertCurrentContext();
    return ctx.using(f, ...args);
}
function __currentScheduler() {
    const ctx = assertCurrentContext();
    return ctx instanceof ObservableContext
        ? ctx.observer.scheduler
        : raise("__currentScheduler may only be called within an observable computation");
}

function onDispose$1() {
    const { ctx } = this;
    ctx.completedCount++;
    if (ctx.completedCount === ctx.observers.length) {
        pipe(this.delegate, dispose());
    }
}
class LatestObserver extends Observer {
    constructor(delegate, ctx, mode) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.ctx = ctx;
        this.mode = mode;
        this.ready = false;
        this.latest = none;
    }
    notify(next) {
        this.assertState();
        const { ctx } = this;
        this.latest = next;
        if (!this.ready) {
            ctx.readyCount++;
            this.ready = true;
        }
        const observers = ctx.observers;
        if (ctx.readyCount === observers.length) {
            const result = pipe(observers, map$1(observer => observer.latest));
            this.delegate.notify(result);
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
    const factory = () => (delegate) => {
        const observers = [];
        const ctx = {
            completedCount: 0,
            observers,
            readyCount: 0,
        };
        for (const observable of observables) {
            const innerObserver = pipe(new LatestObserver(delegate, ctx, mode), addTo(delegate), onComplete(onDispose$1), sourceFrom(observable));
            observers.push(innerObserver);
        }
    };
    const observable = defer(factory);
    observable.isEnumerable = pipe(observables, everySatisfy$1(obs => { var _a; return (_a = obs.isEnumerable) !== null && _a !== void 0 ? _a : false; }));
    return observable;
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
    if (next < observables.length) {
        pipe(createConcatObserver(delegate, observables, next + 1), sourceFrom(observables[next]));
    }
    else {
        pipe(delegate, dispose());
    }
}));
function concat(...observables) {
    const observable = createObservable(observer => {
        if (observables.length > 0) {
            pipe(createConcatObserver(observer, observables, 1), sourceFrom(observables[0]));
        }
        else {
            pipe(observer, dispose());
        }
    });
    observable.isEnumerable = pipe(observables, everySatisfy$1(obs => { var _a; return (_a = obs.isEnumerable) !== null && _a !== void 0 ? _a : false; }));
    return observable;
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
const fromEnumerator = (options = {}) => f => {
    var _a;
    const result = using(f, enumerator => defer(() => (observer) => {
        while (enumerator.move()) {
            observer.notify(enumerator.current);
            __yield(options);
        }
        pipe(observer, dispose());
    }, options));
    result.isEnumerable = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0) === 0;
    return result;
};
/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `Enumerable` with a specified `delay` between emitted items.
 *
 * @param values The `Enumerable`.
 * @param delay The requested delay between emitted items by the observable.
 */
const fromEnumerable = (options) => enumerable => pipe(defer$1(enumerable, enumerate$1), fromEnumerator(options));

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
        const count = observables.length;
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

const never = createNever(createT);

function onDispose() {
    const { buffer } = this;
    this.buffer = [];
    if (buffer.length === 0) {
        pipe(this.delegate, dispose());
    }
    else {
        pipe(buffer, fromValue(fromArrayT), sinkInto(this.delegate));
    }
}
class BufferObserver extends Observer {
    constructor(delegate, durationFunction, maxBufferSize, durationSubscription) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.durationFunction = durationFunction;
        this.maxBufferSize = maxBufferSize;
        this.durationSubscription = durationSubscription;
        this.buffer = [];
    }
    notify(next) {
        this.assertState();
        const { buffer, maxBufferSize } = this;
        buffer.push(next);
        const doOnNotify = () => {
            this.durationSubscription.inner = disposed;
            const buffer = this.buffer;
            this.buffer = [];
            this.delegate.notify(buffer);
        };
        if (buffer.length === maxBufferSize) {
            doOnNotify();
        }
        else if (isDisposed(this.durationSubscription.inner)) {
            this.durationSubscription.inner = pipe(next, this.durationFunction, onNotify(doOnNotify), subscribe(this.scheduler));
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
    const delay = (_a = options.duration) !== null && _a !== void 0 ? _a : Number.MAX_SAFE_INTEGER;
    const durationFunction = delay === Number.MAX_SAFE_INTEGER
        ? never
        : typeof delay === "number"
            ? (_) => fromValue(fromArrayT, { delay })(none)
            : delay;
    const maxBufferSize = (_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
    const operator = (delegate) => {
        const durationSubscription = createSerialDisposable();
        return pipe(new BufferObserver(delegate, durationFunction, maxBufferSize, durationSubscription), add(durationSubscription), addTo(delegate), onComplete(onDispose));
    };
    return lift(operator, delay === Number.MAX_SAFE_INTEGER);
}

const subscribeNext = (observer) => {
    if (observer.activeCount < observer.maxConcurrency) {
        const nextObs = observer.queue.shift();
        if (isSome(nextObs)) {
            observer.activeCount++;
            pipe(nextObs, onNotify(notifySink(observer.delegate)), subscribe(observer.scheduler), addTo(observer.delegate), onComplete(observer.onDispose));
        }
        else if (isDisposed(observer)) {
            pipe(observer.delegate, dispose());
        }
    }
};
class MergeObserver extends Observer {
    constructor(delegate, maxBufferSize, maxConcurrency) {
        super(delegate.scheduler);
        this.delegate = delegate;
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
        this.assertState();
        const { queue } = this;
        queue.push(next);
        // Drop old events if the maxBufferSize has been exceeded
        if (queue.length + this.activeCount > this.maxBufferSize) {
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
    const { maxBufferSize = Number.MAX_SAFE_INTEGER, maxConcurrency = Number.MAX_SAFE_INTEGER, } = options;
    const operator = (delegate) => {
        const observer = pipe(delegate, onDisposed(_ => {
            observer.queue.length = 0;
        }), delegate => new MergeObserver(delegate, maxBufferSize, maxConcurrency), addTo(delegate), onComplete(() => {
            if (observer.queue.length + observer.activeCount === 0) {
                pipe(observer.delegate, dispose());
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
    const { maxBufferSize = Number.MAX_SAFE_INTEGER } = options;
    return mergeAll({ maxBufferSize, maxConcurrency: 1 });
};
const concatAllT = {
    concatAll,
};
const _exhaust = mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });
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
            pipe(observable, onNotify(notifySink(delegate)), subscribe(delegate.scheduler), addTo(delegate, true), onDisposed(doOnDispose));
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
    observer.durationSubscription.inner = pipe(observer.durationFunction(next), onNotify(observer.onNotify), subscribe(observer.scheduler));
};
class ThrottleObserver extends Observer {
    constructor(delegate, durationFunction, mode, durationSubscription) {
        super(delegate.scheduler);
        this.delegate = delegate;
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
                this.delegate.notify(value);
            }
        };
    }
    notify(next) {
        this.assertState();
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
        const durationSubscription = createSerialDisposable();
        const observer = pipe(new ThrottleObserver(delegate, durationFunction, mode, durationSubscription), addTo(delegate), onComplete(() => {
            if (observer.mode !== "first" && observer.hasValue) {
                pipe(observer.value, fromValue(fromArrayT), sinkInto(delegate));
            }
        }));
        return pipe(observer, add(durationSubscription));
    };
    return lift(operator);
}

const _timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");
/** Symbol thrown when the timeout operator times out */
const timeoutError = _timeoutError;
const setupDurationSubscription = (observer) => {
    observer.durationSubscription.inner = pipe(observer.duration, subscribe(observer.scheduler));
};
class TimeoutObserver extends Observer {
    constructor(delegate, duration, durationSubscription) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.duration = duration;
        this.durationSubscription = durationSubscription;
    }
    notify(next) {
        this.assertState();
        pipe(this.durationSubscription, dispose());
        this.delegate.notify(next);
    }
}
const returnTimeoutError = returns(timeoutError);
function timeout(duration) {
    const durationObs = typeof duration === "number"
        ? throws({ ...fromArrayT, ...mapT }, { delay: duration })(returnTimeoutError)
        : concat(duration, throws({ ...fromArrayT, ...mapT })(returnTimeoutError));
    const operator = (delegate) => {
        const durationSubscription = createSerialDisposable();
        const observer = pipe(new TimeoutObserver(delegate, durationObs, durationSubscription), bindTo(delegate), add(durationSubscription));
        setupDurationSubscription(observer);
        return observer;
    };
    return lift(operator);
}

class WithLatestFromObserver extends Observer {
    constructor(delegate, selector) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.selector = selector;
        this.hasLatest = false;
        this.selector = selector;
    }
    notify(next) {
        this.assertState();
        if (!isDisposed(this) && this.hasLatest) {
            const result = this.selector(next, this.otherLatest);
            this.delegate.notify(result);
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
        const observer = pipe(new WithLatestFromObserver(delegate, selector), bindTo(delegate));
        pipe(other, onNotify(next => {
            observer.hasLatest = true;
            observer.otherLatest = next;
        }), subscribe(observer.scheduler), addTo(observer), onComplete(() => {
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
        return this.inContinuation;
    }
    step() {
        const { continuations } = this;
        const continuation = continuations.shift();
        if (isNone(continuation) || continuation.isDisposed) {
            return false;
        }
        this.inContinuation = true;
        run(continuation);
        this.inContinuation = false;
        return true;
    }
    requestYield() {
        // No-Op: We yield whenever the continuation is running.
    }
    schedule(continuation, options = {}) {
        var _a;
        const { delay = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0) } = options;
        pipe(this, add(continuation, true));
        if (!continuation.isDisposed && delay === 0) {
            this.continuations.push(continuation);
        }
        else {
            pipe(continuation, dispose());
        }
    }
    move() {
        this.reset();
        while (!isDisposed(this) && !this.hasCurrent && this.step()) { }
        return this.hasCurrent;
    }
}
class EnumeratorObserver extends Observer {
    constructor(enumerator) {
        super(enumerator);
        this.enumerator = enumerator;
    }
    notify(next) {
        this.assertState();
        this.enumerator.current = next;
    }
}
const enumerate = (obs) => {
    const scheduler = new EnumeratorScheduler();
    pipe(new EnumeratorObserver(scheduler), addTo(scheduler), sourceFrom(obs));
    return scheduler;
};
const toEnumerable = () => obs => createEnumerable(() => enumerate(obs));
const toEnumerableT = {
    toEnumerable,
};

const shouldEmit = (enumerators) => {
    for (const enumerator of enumerators) {
        if (!enumerator.hasCurrent) {
            return false;
        }
    }
    return true;
};
const shouldComplete = (enumerators) => {
    for (const enumerator of enumerators) {
        enumerator.move();
        if (enumerator.isDisposed && !enumerator.hasCurrent) {
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
        if (!isDisposed(this) && buffer.length > 0) {
            const next = buffer.shift();
            this.current = next;
        }
        else {
            this.reset();
        }
        return this.hasCurrent;
    }
}
class ZipObserver extends Observer {
    constructor(delegate, enumerators, enumerator) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.enumerators = enumerators;
        this.enumerator = enumerator;
    }
    notify(next) {
        this.assertState();
        const { enumerator, enumerators } = this;
        if (!isDisposed(this)) {
            if (enumerator.hasCurrent) {
                enumerator.buffer.push(next);
            }
            else {
                enumerator.current = next;
            }
            if (shouldEmit(enumerators)) {
                const next = pipe(enumerators, map$1(current));
                const shouldCompleteResult = shouldComplete(enumerators);
                this.delegate.notify(next);
                if (shouldCompleteResult) {
                    pipe(this, dispose());
                }
            }
        }
    }
}
const _zip = (...observables) => {
    const isEnumerable = pipe(observables, everySatisfy$1(obs => { var _a; return (_a = obs.isEnumerable) !== null && _a !== void 0 ? _a : false; }));
    const zipObservable = createObservable(observer => {
        var _a;
        const count = observables.length;
        if (isEnumerable) {
            const zipped = using(defer$1(observables, map$1(enumerate)), (...enumerators) => pipe(enumerators, zipEnumerators, returns, fromEnumerator()));
            zipped.isEnumerable = true;
            pipe(zipped, sinkInto(observer));
        }
        else {
            const enumerators = [];
            for (let index = 0; index < count; index++) {
                const next = observables[index];
                if ((_a = next.isEnumerable) !== null && _a !== void 0 ? _a : false) {
                    const enumerator = enumerate(next);
                    enumerator.move();
                    enumerators.push(enumerator);
                }
                else {
                    const enumerator = pipe(new ZipObserverEnumerator(), onDisposed(() => {
                        enumerator.buffer.length = 0;
                    }), addTo(observer));
                    const innerObserver = pipe(new ZipObserver(observer, enumerators, enumerator), onComplete(() => {
                        if (enumerator.isDisposed ||
                            (enumerator.buffer.length === 0 && !enumerator.hasCurrent)) {
                            pipe(observer, dispose());
                        }
                    }), addTo(observer), sourceFrom(next));
                    enumerators.push(innerObserver.enumerator);
                }
            }
        }
    });
    zipObservable.isEnumerable = isEnumerable;
    return zipObservable;
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
const toPromise = (scheduler) => observable => new Promise((resolve, reject) => {
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
            reject(new Error("Observable completed without producing a value"));
        }
        else {
            resolve(result);
        }
    }));
});

const type = undefined;
const catchError = createCatchErrorOperator(liftSynchronousT, class CatchErrorObserver extends Observer {
    constructor(delegate) {
        super(delegate.scheduler);
        this.delegate = delegate;
    }
});
const fromDisposable = createFromDisposable(createT);
const decodeWithCharset = createDecodeWithCharsetOperator({ ...liftSynchronousT, ...fromArrayT }, class DecodeWithCharsetObserver extends Observer {
    constructor(delegate, textDecoder) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.textDecoder = textDecoder;
    }
});
const decodeWithCharsetT = {
    decodeWithCharset,
};
const dispatchTo = (dispatcher) => v => dispatcher.dispatch(v);
/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
const distinctUntilChanged = createDistinctUntilChangedOperator(liftSynchronousT, class DistinctUntilChangedObserver extends Observer {
    constructor(delegate, equality) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.equality = equality;
        this.prev = none;
        this.hasValue = false;
    }
});
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const everySatisfy = createEverySatisfyOperator({ ...fromArrayT, ...liftSynchronousT }, class EverySatisfyObserver extends Observer {
    constructor(delegate, predicate) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.predicate = predicate;
    }
});
const everySatisfyT = {
    everySatisfy,
};
const fromPromise = (factory) => createObservable(({ dispatcher }) => {
    factory().then(next => {
        if (!isDisposed(dispatcher)) {
            dispatcher.dispatch(next);
            pipe(dispatcher, dispose());
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
const generate = (generator, initialValue, options = {}) => {
    var _a;
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
    const observable = defer(factory, options);
    observable.isEnumerable = Math.max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0) === 0;
    return observable;
};
const generateT = {
    generate,
};
const keep = createKeepOperator(liftSynchronousT, class KeepObserver extends Observer {
    constructor(delegate, predicate) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.predicate = predicate;
    }
});
const keepT = {
    keep,
};
const mapAsync = (f) => concatMap({ ...switchAllT, ...mapT }, (a) => fromPromise(() => f(a)));
const onSubscribe = createOnSink(createT);
const pairwise = createPairwiseOperator(liftSynchronousT, class PairwiseObserver extends Observer {
    constructor(delegate) {
        super(delegate.scheduler);
        this.delegate = delegate;
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
const publish = (scheduler, options) => observable => {
    const subject = createSubject(options);
    pipe(observable, onNotify(dispatchTo(subject)), subscribe(scheduler), bindTo(subject));
    return subject;
};
const reduce = createReduceOperator({ ...fromArrayT, ...liftSynchronousT }, class ReducerObserver extends Observer {
    constructor(delegate, reducer, acc) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.reducer = reducer;
        this.acc = acc;
    }
});
const reduceT = {
    reduce,
};
const scan = createScanOperator(liftSynchronousT, class ScanObserver extends Observer {
    constructor(delegate, reducer, acc) {
        super(delegate.scheduler);
        this.delegate = delegate;
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
const scanAsync = (scanner, initialValue) => observable => using(() => createSubject(), accFeedbackStream => pipe(observable, zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), takeFirst())), switchAll(), onNotify(dispatchTo(accFeedbackStream)), onSubscribe(() => {
    accFeedbackStream.dispatch(initialValue());
})));
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
            if (isSome(multicast) && multicast.observerCount === 0) {
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
const skipFirst = createSkipFirstOperator(liftSynchronousT, class SkipFirstObserver extends Observer {
    constructor(delegate, skipCount) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.skipCount = skipCount;
        this.count = 0;
    }
});
const skipFirstT = {
    skipFirst,
};
const someSatisfy = createSomeSatisfyOperator({ ...fromArrayT, ...liftSynchronousT }, class SomeSatisfyObserver extends Observer {
    constructor(delegate, predicate) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.predicate = predicate;
    }
});
const someSatisfyT = {
    someSatisfy,
};
const subscribeOn = (scheduler) => observable => createObservable(({ dispatcher }) => pipe(observable, onNotify(dispatchTo(dispatcher)), subscribe(scheduler), bindTo(dispatcher)));
const takeFirst = createTakeFirstOperator({ ...fromArrayT, ...liftSynchronousT }, class TakeFirstObserver extends Observer {
    constructor(delegate, maxCount) {
        super(delegate.scheduler);
        this.delegate = delegate;
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
const takeLast = createTakeLastOperator({ ...fromArrayT, ...liftSynchronousT }, class TakeLastObserver extends Observer {
    constructor(delegate, maxCount) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.last = [];
    }
});
const takeLastT = {
    takeLast,
};
const takeUntil = (notifier) => {
    const operator = (delegate) => {
        const takeUntilObserver = pipe(createDelegatingObserver(delegate), bindTo(delegate), bindTo(pipe(notifier, takeFirst(), subscribe(delegate.scheduler))));
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
const takeWhile = createTakeWhileOperator(liftSynchronousT, class TakeWhileObserver extends Observer {
    constructor(delegate, predicate, inclusive) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
});
const takeWhileT = {
    takeWhile,
};
const throwIfEmpty = createThrowIfEmptyOperator(liftSynchronousT, class ThrowIfEmptyObserver extends Observer {
    constructor(delegate) {
        super(delegate.scheduler);
        this.delegate = delegate;
        this.isEmpty = true;
    }
});
const throwIfEmptyT = {
    throwIfEmpty,
};
const toRunnable = (options = {}) => source => createRunnable(sink => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    const subscription = pipe(source, onNotify(notifySink(sink)), subscribe(scheduler));
    pipe(sink, add(scheduler), add(subscription));
    scheduler.run();
    pipe(scheduler, dispose());
});
const toRunnableT = {
    toRunnable,
};

export { AbstractDisposableObservable, AbstractObservable, Observer, __currentScheduler, __do, __memo, __observe, __using, buffer, catchError, combineLatest, combineLatestWith, concat, concatAll, concatAllT, concatT, createObservable, createSubject, createT, decodeWithCharset, decodeWithCharsetT, defer, dispatchTo, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, exhaust, exhaustT, forkCombineLatest, forkMerge, forkZipLatest, fromArray, fromArrayT, fromDisposable, fromEnumerable, fromIterable, fromIterableT, fromIterator, fromIteratorT, fromPromise, generate, generateT, keep, keepT, map, mapAsync, mapT, merge, mergeAll, mergeAllT, mergeT, never, observable, onNotify, onSubscribe, pairwise, pairwiseT, publish, reduce, reduceT, repeat, repeatT, retry, scan, scanAsync, scanT, share, skipFirst, skipFirstT, someSatisfy, someSatisfyT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throttle, throwIfEmpty, throwIfEmptyT, timeout, timeoutError, toEnumerable, toEnumerableT, toPromise, toRunnable, toRunnableT, type, using, usingT, withLatestFrom, zip, zipLatest, zipLatestWith, zipT, zipWithLatestFrom };
