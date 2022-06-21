/// <reference types="./observable.d.ts" />
import { empty, fromValue, concatMap, throws } from './container.mjs';
import { addOnDisposedWithError, dispose, AbstractDisposable, addDisposable, disposed, addOnDisposedWithoutErrorTeardown, addDisposableDisposeParentOnChildError, addTeardown, toErrorHandler, createSerialDisposable, addOnDisposedWithoutError, addOnDisposedWithErrorTeardown, bindDisposables } from './disposable.mjs';
import { pipe, raise, ignore, arrayEquality, defer as defer$1, compose, returns } from './functions.mjs';
import { none, isNone, isSome } from './option.mjs';
import { schedule, YieldError, __yield, run, createVirtualTimeScheduler } from './scheduler.mjs';
import { AbstractSource, createDecodeWithCharset, createDistinctUntilChanged, createKeepOperator, createMapOperator, createOnNotifyOperator, createPairwiseOperator, createReduceOperator, createScanOperator, createTakeFirstOperator, createSkipFirstOperator, createTakeLastOperator, createTakeWhileOperator } from './source.mjs';
import { __DEV__ } from './env.mjs';
import { map as map$1, everySatisfy } from './readonlyArray.mjs';
import { enumerate as enumerate$1, fromIterator as fromIterator$1, fromIterable as fromIterable$1, current, zipEnumerators } from './enumerable.mjs';
import { createRunnable } from './runnable.mjs';

const dispatchTo = (dispatcher) => v => dispatcher.dispatch(v);

class ScheduledObservable extends AbstractSource {
    constructor(f, isSynchronous, delay) {
        super();
        this.f = f;
        this.isSynchronous = isSynchronous;
        this.delay = delay;
    }
    observe(observer) {
        const callback = this.f(observer);
        const schedulerSubscription = pipe(observer, schedule(callback, this));
        addOnDisposedWithError(schedulerSubscription, observer);
    }
}
const deferSynchronous = (factory) => new ScheduledObservable(factory, true, 0);
const defer = (factory, options = {}) => {
    const { delay = 0 } = options;
    return new ScheduledObservable(factory, false, delay);
};

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
    const factory = (observer) => {
        let index = startIndex;
        return () => {
            while (index < endIndex) {
                const value = values[index];
                index++;
                // Inline yielding logic for performance reasons
                observer.notify(value);
                if (index < endIndex && (delay > 0 || observer.shouldYield)) {
                    throw new YieldError(delay);
                }
            }
            pipe(observer, dispose());
        };
    };
    return delay > 0 ? defer(factory, { delay }) : deferSynchronous(factory);
};
const fromArrayT = {
    fromArray,
};

/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
class Observer extends AbstractDisposable {
    constructor(scheduler) {
        super();
        this.scheduler = scheduler;
        this.inContinuation = false;
        this._scheduler =
            scheduler instanceof Observer ? scheduler._scheduler : scheduler;
    }
    get type() {
        return this;
    }
    get T() {
        return undefined;
    }
    /** @ignore */
    get now() {
        return this._scheduler.now;
    }
    /** @ignore */
    get shouldYield() {
        return (this.inContinuation && (this.isDisposed || this._scheduler.shouldYield));
    }
    assertState() { }
    notify(_) { }
    /** @ignore */
    onRunStatusChanged(status) {
        this.inContinuation = status;
    }
    /** @ignore */
    requestYield() {
        this._scheduler.requestYield();
    }
    /** @ignore */
    schedule(continuation, options) {
        continuation.addListener("onRunStatusChanged", this);
        addDisposable(this, continuation);
        // Note that we schedule on the delegate so that it too may listen to
        // the onRunStatusChanged event.
        this.scheduler.schedule(continuation, options);
    }
}
if (__DEV__) {
    Observer.prototype.assertState = function assertStateDev() {
        if (!this.inContinuation) {
            raise("Observer.notify() may only be invoked within a scheduled SchedulerContinuation");
        }
        else if (this.isDisposed) {
            raise("Observer is disposed");
        }
    };
}
class DelegatingObserver extends Observer {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
    }
    notify(next) {
        this.delegate.notify(next);
    }
}
// FIXME: Need to bind the disposables.
const createDelegatingObserver = (delegate) => new DelegatingObserver(delegate);
const sink = (observer) => observable => observable.observe(observer);
const sinkT = {
    sink,
};

class DefaultObserver extends Observer {
    constructor(scheduler, onNotify, onNotifyThis) {
        super(scheduler);
        this.onNotify = onNotify;
        this.onNotifyThis = onNotifyThis;
    }
    notify(next) {
        this.assertState();
        this.onNotify.call(this.onNotifyThis, next);
    }
}
function subscribe(scheduler, onNotify = ignore, onNotifyThis = none) {
    return (observable) => {
        const observer = new DefaultObserver(scheduler, onNotify, onNotifyThis);
        addDisposable(scheduler, observer);
        pipe(observable, sink(observer));
        return observer;
    };
}

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
    constructor(scheduler, runComputation, mode) {
        this.scheduler = scheduler;
        this.runComputation = runComputation;
        this.mode = mode;
        this.index = 0;
        this.effects = [];
        this.scheduledComputationSubscription = disposed;
        this.cleanup = () => {
            const { effects } = this;
            const hasOutstandingEffects = effects.findIndex(effect => effect.type === 2 /* EffectType.Observe */ && !effect.subscription.isDisposed) >= 0;
            if (!hasOutstandingEffects &&
                this.scheduledComputationSubscription.isDisposed) {
                this.scheduler.dispose();
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
            const subscription = pipe(observable, subscribe(this.scheduler, next => {
                effect.value = next;
                effect.hasValue = true;
                if (this.mode === "combine-latest") {
                    this.runComputation();
                }
                else {
                    const { scheduledComputationSubscription } = this;
                    this.scheduledComputationSubscription =
                        scheduledComputationSubscription.isDisposed
                            ? pipe(this.scheduler, schedule(this.runComputation))
                            : scheduledComputationSubscription;
                }
            }));
            addOnDisposedWithoutErrorTeardown(subscription, this.cleanup);
            addDisposableDisposeParentOnChildError(this.scheduler, subscription);
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
            const value = f(...args);
            addDisposableDisposeParentOnChildError(this.scheduler, value);
            effect.f = f;
            effect.args = args;
            effect.value = value;
            return value;
        }
    }
}
const observable = (computation, { mode = "batched" } = {}) => defer((observer) => {
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
                !effect.subscription.isDisposed) {
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
            observer.dispose(error);
        }
    };
    const ctx = new ObservableContext(observer, runComputation, mode);
    return runComputation;
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
const deferSideEffect = (f, ...args) => defer(observer => () => {
    f(...args);
    observer.notify(none);
    observer.dispose();
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
        ? ctx.scheduler
        : raise("__currentScheduler may only be called within an observable computation");
}

function onDispose$6(error) {
    const { ctx } = this;
    ctx.completedCount++;
    if (isSome(error) || ctx.completedCount === ctx.observers.length) {
        pipe(this.delegate, dispose(error));
    }
}
class LatestObserver extends Observer {
    constructor(delegate, ctx, mode) {
        super(delegate);
        this.delegate = delegate;
        this.ctx = ctx;
        this.mode = mode;
        this.ready = false;
        this.latest = none;
    }
    notify(next) {
        this.assertState();
        const ctx = this.ctx;
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
    const factory = (delegate) => () => {
        const observers = [];
        const ctx = {
            completedCount: 0,
            observers,
            readyCount: 0,
        };
        for (const observable of observables) {
            const innerObserver = new LatestObserver(delegate, ctx, mode);
            addTeardown(innerObserver, onDispose$6);
            addDisposable(delegate, innerObserver);
            observers.push(innerObserver);
            pipe(observable, sink(innerObserver));
        }
    };
    const isSynchronous = pipe(observables, everySatisfy(obs => obs.isSynchronous));
    return isSynchronous ? deferSynchronous(factory) : defer(factory);
};

/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
function combineLatest(...observables) {
    return latest(observables, 1 /* LatestMode.Combine */);
}
const combineLatestWith = (snd) => fst => combineLatest(fst, snd);

const createConcatObserver = (delegate, observables, next) => {
    const observer = createDelegatingObserver(delegate);
    addDisposable(delegate, observer);
    addOnDisposedWithError(observer, delegate);
    addOnDisposedWithoutErrorTeardown(observer, () => {
        if (next < observables.length) {
            const concatObserver = createConcatObserver(delegate, observables, next + 1);
            pipe(observables[next], sink(concatObserver));
        }
        else {
            pipe(delegate, dispose());
        }
    });
    return observer;
};
class ConcatObservable extends AbstractSource {
    constructor(observables) {
        super();
        this.observables = observables;
        this.isSynchronous = pipe(observables, everySatisfy(obs => obs.isSynchronous));
    }
    observe(observer) {
        const observables = this.observables;
        if (observables.length > 0) {
            const concatObserver = createConcatObserver(observer, observables, 1);
            pipe(observables[0], sink(concatObserver));
        }
        else {
            pipe(observer, dispose());
        }
    }
}
function concat(...observables) {
    return new ConcatObservable(observables);
}
const concatT = {
    concat,
};

const scheduleDrainQueue = (dispatcher) => {
    if (dispatcher.nextQueue.length === 1) {
        const { observer } = dispatcher;
        const continuationSubcription = pipe(observer, schedule(dispatcher.continuation));
        addOnDisposedWithError(continuationSubcription, observer);
        addOnDisposedWithoutErrorTeardown(continuationSubcription, dispatcher.onContinuationDispose);
    }
};
function onDispose$5(e) {
    if (this.nextQueue.length === 0) {
        pipe(this.observer, dispose(e));
    }
}
class ObserverDelegatingDispatcher extends AbstractDisposable {
    constructor(observer) {
        super();
        this.observer = observer;
        this.continuation = () => {
            const nextQueue = this.nextQueue;
            while (nextQueue.length > 0) {
                const next = nextQueue.shift();
                this.observer.notify(next);
                __yield();
            }
        };
        this.onContinuationDispose = () => {
            if (this.isDisposed) {
                pipe(this.observer, dispose(this.error));
            }
        };
        this.nextQueue = [];
    }
    dispatch(next) {
        if (!this.isDisposed) {
            this.nextQueue.push(next);
            scheduleDrainQueue(this);
        }
    }
}
/**
 * Returns a `SafeObserverLike` that delegates to the provided observer.
 *
 * @param observer The `ObserverLike` instance to wrap in a `SafeObserverLike`.
 */
const toDispatcher = (delegate) => {
    const observer = new ObserverDelegatingDispatcher(delegate);
    addTeardown(observer, onDispose$5);
    addDisposable(delegate, observer);
    return observer;
};

/**
 * Factory for safely creating new `ObservableLike` instances. The onSubscribe function
 * is called with a `SafeObserverLike` that may be notified from any context.
 *
 * Note, implementations should not do significant blocking work in
 * the onSubscribe function.
 *
 * @param onSubscribe
 */
const createObservable = (onSubscribe) => defer(observer => () => {
    const dispatcher = toDispatcher(observer);
    onSubscribe(dispatcher);
});

class SubjectImpl extends AbstractDisposable {
    constructor(replay) {
        super();
        this.replay = replay;
        this.observers = new Set();
        this.replayed = [];
        this.isSynchronous = false;
    }
    get type() {
        return this;
    }
    get T() {
        return undefined;
    }
    get sinkType() {
        return undefined;
    }
    get observerCount() {
        return this.observers.size;
    }
    dispatch(next) {
        if (!this.isDisposed) {
            const replayed = this.replayed;
            const replay = this.replay;
            if (replay > 0) {
                replayed.push(next);
                if (replayed.length > replay) {
                    replayed.shift();
                }
            }
            for (const observer of this.observers) {
                observer.dispatch(next);
            }
        }
    }
    observe(observer) {
        // The idea here is that an onSubscribe function may
        // call next from unscheduled sources such as event handlers.
        // So we marshall those events back to the scheduler.
        const dispatcher = toDispatcher(observer);
        if (!this.isDisposed) {
            const observers = this.observers;
            observers.add(dispatcher);
            addTeardown(observer, _e => {
                observers.delete(dispatcher);
            });
        }
        for (const next of this.replayed) {
            dispatcher.dispatch(next);
        }
        addDisposable(this, dispatcher);
    }
}
const createSubject = (options = {}) => {
    const { replay = 0 } = options;
    return new SubjectImpl(replay);
};

class LiftedObservable extends AbstractSource {
    constructor(source, operators, isSynchronous) {
        super();
        this.source = source;
        this.operators = operators;
        this.isSynchronous = isSynchronous;
    }
    observe(observer) {
        const liftedSubscrber = pipe(observer, ...this.operators);
        pipe(this.source, sink(liftedSubscrber));
    }
}
/**
 * Creates a new `ObservableLike` which applies the provided the operator function to
 * observer when the source is subscribed to.
 *
 * @param operator The operator function to apply.
 */
const lift = (operator) => source => {
    const sourceSource = source instanceof LiftedObservable ? source.source : source;
    const allFunctions = source instanceof LiftedObservable
        ? [operator, ...source.operators]
        : [operator];
    const isSynchronous = source.isSynchronous && operator.isSynchronous;
    return new LiftedObservable(sourceSource, allFunctions, isSynchronous);
};
const liftT = {
    lift,
};

const decodeWithCharset = createDecodeWithCharset({ ...liftT, ...fromArrayT, ...sinkT }, class DecodeWithCharsetObserver extends Observer {
    constructor(delegate, textDecoder) {
        super(delegate);
        this.delegate = delegate;
        this.textDecoder = textDecoder;
    }
});

const fromDisposable = (disposable) => createObservable(dispatcher => {
    addDisposable(disposable, dispatcher);
});

/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `EnumeratorLike` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
const fromEnumerator = (options = {}) => f => {
    const factory = (observer) => {
        const enumerator = f();
        addDisposableDisposeParentOnChildError(observer, enumerator);
        return () => {
            while (enumerator.move()) {
                observer.notify(enumerator.current);
                __yield(delay);
            }
            pipe(observer, dispose());
        };
    };
    const { delay = 0 } = options;
    return delay > 0 ? defer(factory, { delay }) : deferSynchronous(factory);
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

/**
 * Converts a `Promise` to an `ObservableLike`. The provided promise factory
 * is invoked for each observer to the observable.
 *
 * @param factory Factory function to create a new `Promise` instance.
 */
const fromPromise = (factory) => createObservable(dispatcher => {
    factory().then(next => {
        if (!dispatcher.isDisposed) {
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
    const { delay = 0 } = options;
    const factory = (observer) => {
        let acc = initialValue();
        return () => {
            while (true) {
                acc = generator(acc);
                observer.notify(acc);
                __yield(delay);
            }
        };
    };
    return delay > 0 ? defer(factory, options) : deferSynchronous(factory);
};

const createMergeObserver = (delegate, count, ctx) => {
    const observer = createDelegatingObserver(delegate);
    addDisposable(delegate, observer);
    addOnDisposedWithError(observer, delegate);
    addOnDisposedWithoutErrorTeardown(observer, () => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
            pipe(delegate, dispose());
        }
    });
    return observer;
};
class MergeObservable extends AbstractSource {
    constructor(observables) {
        super();
        this.observables = observables;
        this.isSynchronous = false;
    }
    observe(observer) {
        const observables = this.observables;
        const count = observables.length;
        const ctx = { completedCount: 0 };
        for (const observable of observables) {
            const mergeObserver = createMergeObserver(observer, count, ctx);
            pipe(observable, sink(mergeObserver));
        }
    }
}
function merge(...observables) {
    return new MergeObservable(observables);
}
const mergeWith = (snd) => fst => merge(fst, snd);

class NeverObservable extends AbstractSource {
    constructor() {
        super(...arguments);
        this.isSynchronous = false;
    }
    observe(_) { }
}
const neverInstance = new NeverObservable();
/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its observer.
 */
const never = () => neverInstance;

class UsingObservable extends AbstractSource {
    constructor(resourceFactory, observableFactory) {
        super();
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
        this.isSynchronous = false;
    }
    observe(observer) {
        const resources = this.resourceFactory(observer);
        const observableFactory = this.observableFactory;
        const resourcesArray = Array.isArray(resources) ? resources : [resources];
        for (const r of resourcesArray) {
            addDisposableDisposeParentOnChildError(observer, r);
        }
        pipe(observableFactory(...resourcesArray), sink(observer));
    }
}
/**
 * Creates an `ObservableLike` that uses one or more resources which
 * will be disposed when the ObservableLike disposes it's only subscription.
 */
function using(resourceFactory, observableFactory) {
    return new UsingObservable(resourceFactory, observableFactory);
}

function onDispose$4(error) {
    const buffer = this.buffer;
    this.buffer = [];
    if (isSome(error) || buffer.length === 0) {
        pipe(this.delegate, dispose(error));
    }
    else {
        pipe(buffer, fromValue(fromArrayT), sink(this.delegate));
    }
}
function onNotify$4() {
    this.durationSubscription.inner = disposed;
    const buffer = this.buffer;
    this.buffer = [];
    this.delegate.notify(buffer);
}
class BufferObserver extends Observer {
    constructor(delegate, durationFunction, maxBufferSize, durationSubscription) {
        super(delegate);
        this.delegate = delegate;
        this.durationFunction = durationFunction;
        this.maxBufferSize = maxBufferSize;
        this.durationSubscription = durationSubscription;
        this.buffer = [];
    }
    notify(next) {
        this.assertState();
        const buffer = this.buffer;
        buffer.push(next);
        if (buffer.length === this.maxBufferSize) {
            onNotify$4.call(this);
        }
        else if (this.durationSubscription.inner.isDisposed) {
            this.durationSubscription.inner = pipe(next, this.durationFunction, subscribe(this.delegate, onNotify$4, this));
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
        const observer = new BufferObserver(delegate, durationFunction, maxBufferSize, durationSubscription);
        addDisposable(delegate, observer);
        addDisposableDisposeParentOnChildError(observer, durationSubscription);
        addTeardown(observer, onDispose$4);
        return observer;
    };
    operator.isSynchronous = delay === Number.MAX_SAFE_INTEGER;
    return lift(operator);
}

/**
 * Returns an `ObservableLike` which catches errors produced by the source and either continues with
 * the `ObservableLike` returned from the `onError` callback or swallows the error if
 * void is returned.
 *
 * @param onError a function that takes source error and either returns an `ObservableLike`
 * to continue with or void if the error should be propagated.
 */
const catchError = (onError) => {
    const operator = (delegate) => {
        const observer = createDelegatingObserver(delegate);
        addDisposable(delegate, observer);
        addOnDisposedWithoutError(observer, delegate);
        addOnDisposedWithErrorTeardown(observer, cause => {
            try {
                const result = onError(cause) || none;
                if (isSome(result)) {
                    pipe(result, sink(delegate));
                }
                else {
                    pipe(delegate, dispose());
                }
            }
            catch (cause) {
                pipe(delegate, dispose({ cause: { parent: cause, cause } }));
            }
        });
        return observer;
    };
    operator.isSynchronous = false;
    return lift(operator);
};

/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
const distinctUntilChanged = createDistinctUntilChanged(liftT, class DistinctUntilChangedObserver extends Observer {
    constructor(delegate, equality) {
        super(delegate);
        this.delegate = delegate;
        this.equality = equality;
        this.prev = none;
        this.hasValue = false;
    }
});

const keep = createKeepOperator(liftT, class KeepObserver extends Observer {
    constructor(delegate, predicate) {
        super(delegate);
        this.delegate = delegate;
        this.predicate = predicate;
    }
});
const keepT = {
    keep,
};

const map = createMapOperator(liftT, class MapObserver extends Observer {
    constructor(delegate, mapper) {
        super(delegate);
        this.delegate = delegate;
        this.mapper = mapper;
    }
});
const mapT = {
    map,
};

function onDispose$3(error) {
    if (isSome(error) || this.inner.isDisposed) {
        pipe(this.delegate, dispose(error));
    }
}
function onNotify$3(next) {
    this.delegate.notify(next);
}
class SwitchObserver extends Observer {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
        this.inner = disposed;
    }
    notify(next) {
        this.assertState();
        pipe(this.inner, dispose());
        const inner = pipe(next, subscribe(this.delegate, onNotify$3, this));
        addDisposableDisposeParentOnChildError(this.delegate, inner);
        addOnDisposedWithoutErrorTeardown(inner, () => {
            if (this.isDisposed) {
                pipe(this.delegate, dispose());
            }
        });
        this.inner = inner;
    }
}
const operator = (delegate) => {
    const observer = new SwitchObserver(delegate);
    addDisposable(delegate, observer);
    addTeardown(observer, onDispose$3);
    return observer;
};
operator.isSynchronous = false;
const switchAllInstance = lift(operator);
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
const switchAll = () => switchAllInstance;
const switchAllT = {
    concatAll: switchAll,
};

const mapAsync = (f) => concatMap({ ...switchAllT, ...mapT }, (a) => fromPromise(() => f(a)));

const subscribeNext = (observer) => {
    if (observer.activeCount < observer.maxConcurrency) {
        const nextObs = observer.queue.shift();
        if (isSome(nextObs)) {
            observer.activeCount++;
            const nextObsSubscription = pipe(nextObs, subscribe(observer.delegate, observer.onNotify));
            addOnDisposedWithoutErrorTeardown(nextObsSubscription, observer.onDispose);
            addDisposableDisposeParentOnChildError(observer.delegate, nextObsSubscription);
        }
        else if (observer.isDisposed) {
            pipe(observer.delegate, dispose());
        }
    }
};
function onDispose$2(error) {
    if (isSome(error) || this.queue.length + this.activeCount === 0) {
        pipe(this.delegate, dispose(error));
    }
}
class MergeObserver extends Observer {
    constructor(delegate, maxBufferSize, maxConcurrency) {
        super(delegate);
        this.delegate = delegate;
        this.maxBufferSize = maxBufferSize;
        this.maxConcurrency = maxConcurrency;
        this.activeCount = 0;
        this.onDispose = () => {
            this.activeCount--;
            subscribeNext(this);
        };
        this.onNotify = (next) => {
            this.delegate.notify(next);
        };
        this.queue = [];
    }
    notify(next) {
        this.assertState();
        const queue = this.queue;
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
        const observer = new MergeObserver(delegate, maxBufferSize, maxConcurrency);
        addDisposable(delegate, observer);
        addTeardown(observer, onDispose$2);
        addTeardown(delegate, () => {
            observer.queue.length = 0;
        });
        return observer;
    };
    operator.isSynchronous = false;
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

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
const onNotify$2 = createOnNotifyOperator(liftT, class OnNotifyObserver extends Observer {
    constructor(delegate, onNotify) {
        super(delegate);
        this.delegate = delegate;
        this.onNotify = onNotify;
    }
});

class OnSubscribeObservable extends AbstractSource {
    constructor(src, f) {
        super();
        this.src = src;
        this.f = f;
        this.isSynchronous = src.isSynchronous;
    }
    observe(observer) {
        try {
            pipe(this.src, sink(observer));
            const disposable = this.f() || none;
            if (disposable instanceof Function) {
                addTeardown(observer, disposable);
            }
            else if (isSome(disposable)) {
                addDisposableDisposeParentOnChildError(observer, disposable);
            }
        }
        catch (cause) {
            pipe(observer, dispose({ cause }));
        }
    }
}
/**
 * Executes a side-effect when the observable is subscribed.
 * @param f
 */
const onSubscribe = (f) => observable => new OnSubscribeObservable(observable, f);

const pairwise = createPairwiseOperator(liftT, class PairwiseObserver extends Observer {
    constructor(delegate) {
        super(delegate);
        this.delegate = delegate;
        this.hasPrev = false;
    }
});

/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
const publish = (scheduler, options) => observable => {
    const subject = createSubject(options);
    const srcSubscription = pipe(observable, subscribe(scheduler, subject.dispatch, subject));
    bindDisposables(srcSubscription, subject);
    return subject;
};

const reduce = createReduceOperator({ ...fromArrayT, ...liftT, ...sinkT }, class ReducerObserver extends Observer {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.delegate = delegate;
        this.reducer = reducer;
        this.acc = acc;
    }
});

const createRepeatObserver = (delegate, observable, shouldRepeat) => {
    const observer = createDelegatingObserver(delegate);
    addDisposable(delegate, observer);
    let count = 1;
    const onDispose = (error) => {
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
            const subscription = pipe(observable, subscribe(delegate, delegate.notify, delegate));
            addTeardown(subscription, onDispose);
            addDisposable(delegate, subscription);
        }
    };
    addTeardown(observer, onDispose);
    return observer;
};
const repeatObs = (shouldRepeat) => observable => {
    const operator = (observer) => createRepeatObserver(observer, observable, shouldRepeat);
    operator.isSynchronous = true;
    return lift(operator)(observable);
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
const defaultRetryPredicate = (_, error) => isSome(error);
function retry(predicate) {
    const retryPredicate = isNone(predicate)
        ? defaultRetryPredicate
        : (count, error) => isSome(error) && predicate(count, error.cause);
    return repeatObs(retryPredicate);
}

const scan = createScanOperator(liftT, class ScanObserver extends Observer {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.delegate = delegate;
        this.reducer = reducer;
        this.acc = acc;
    }
});

const takeFirst = createTakeFirstOperator({ ...fromArrayT, ...liftT }, class TakeFirstObserver extends Observer {
    constructor(delegate, maxCount) {
        super(delegate);
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.count = 0;
    }
});

const notifyDelegate = (observer) => {
    if (observer.queue.length > 0 && observer.hasLatest) {
        observer.hasLatest = false;
        const next = observer.queue.shift();
        const result = observer.selector(next, observer.otherLatest);
        observer.delegate.notify(result);
    }
};
function onNotify$1(otherLatest) {
    this.hasLatest = true;
    this.otherLatest = otherLatest;
    notifyDelegate(this);
    if (this.isDisposed && this.queue.length === 0) {
        pipe(this.delegate, dispose());
    }
}
class ZipWithLatestFromObserver extends Observer {
    constructor(delegate, selector) {
        super(delegate);
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
        const observer = new ZipWithLatestFromObserver(delegate, selector);
        const otherSubscription = pipe(other, subscribe(delegate, onNotify$1, observer));
        const disposeDelegate = () => {
            if (observer.isDisposed && otherSubscription.isDisposed) {
                pipe(delegate, dispose());
            }
        };
        addDisposableDisposeParentOnChildError(delegate, observer);
        addDisposableDisposeParentOnChildError(delegate, otherSubscription);
        addOnDisposedWithoutErrorTeardown(observer, disposeDelegate);
        addOnDisposedWithoutErrorTeardown(otherSubscription, disposeDelegate);
        return observer;
    };
    operator.isSynchronous = false;
    return lift(operator);
};

/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
const scanAsync = (scanner, initialValue) => observable => using(_ => createSubject(), accFeedbackStream => pipe(observable, zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), takeFirst())), switchAll(), onNotify$2(dispatchTo(accFeedbackStream)), onSubscribe(() => {
    accFeedbackStream.dispatch(initialValue());
})));

class SharedObservable extends AbstractSource {
    constructor(source, publish) {
        super();
        this.source = source;
        this.publish = publish;
        this.observerCount = 0;
        this.teardown = () => {
            this.observerCount--;
            if (this.observerCount === 0) {
                pipe(this.multicast, dispose());
                this.multicast = none;
            }
        };
        this.isSynchronous = false;
    }
    observe(observer) {
        if (this.observerCount === 0) {
            this.multicast = pipe(this.source, this.publish);
        }
        this.observerCount++;
        const multicast = this.multicast;
        pipe(multicast, sink(observer));
        addTeardown(observer, this.teardown);
    }
}
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
const share = (scheduler, options) => observable => new SharedObservable(observable, publish(scheduler, options));

/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
const skipFirst = createSkipFirstOperator(liftT, class SkipFirstObserver extends Observer {
    constructor(delegate, skipCount) {
        super(delegate);
        this.delegate = delegate;
        this.skipCount = skipCount;
        this.count = 0;
    }
});

/**
 * Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.
 *
 * @param scheduler `SchedulerLike` instance to use when subscribing to the source.
 */
const subscribeOn = (scheduler) => observable => createObservable(dispatcher => {
    const subscription = pipe(observable, subscribe(scheduler, dispatcher.dispatch, dispatcher));
    bindDisposables(subscription, dispatcher);
});

/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
const takeLast = createTakeLastOperator({ ...fromArrayT, ...liftT, ...sinkT }, class TakeLastObserver extends Observer {
    constructor(delegate, maxCount) {
        super(delegate);
        this.delegate = delegate;
        this.maxCount = maxCount;
        this.last = [];
    }
});

const takeUntil = (notifier) => {
    const operator = (delegate) => {
        const takeUntilObserver = createDelegatingObserver(delegate);
        bindDisposables(takeUntilObserver, delegate);
        const otherSubscription = pipe(notifier, subscribe(takeUntilObserver, defer$1(takeUntilObserver, dispose)));
        bindDisposables(takeUntilObserver, otherSubscription);
        return takeUntilObserver;
    };
    operator.isSynchronous = false;
    return lift(operator);
};

/**
 * Returns an `ObservableLike` which emits values emitted by the source as long
 * as each value satisfies the given predicate, and then completes as soon as
 * this predicate is not satisfied.
 *
 * @param predicate The predicate function.
 */
const takeWhile = createTakeWhileOperator(liftT, class TakeWhileObserver extends Observer {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.delegate = delegate;
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
});

const setupDurationSubscription$1 = (observer, next) => {
    observer.durationSubscription.inner = pipe(observer.durationFunction(next), subscribe(observer, observer.onNotify));
};
function onDispose$1(e) {
    if (isNone(e) && this.mode !== "first" && this.hasValue) {
        pipe(this.value, fromValue(fromArrayT), sink(this.delegate));
    }
    else {
        pipe(this.delegate, dispose(e));
    }
}
class ThrottleObserver extends Observer {
    constructor(delegate, durationFunction, mode, durationSubscription) {
        super(delegate);
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
        const durationSubscriptionDisposableIsDisposed = this.durationSubscription.inner.isDisposed;
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
        const observer = new ThrottleObserver(delegate, durationFunction, mode, durationSubscription);
        addDisposable(delegate, observer);
        addDisposableDisposeParentOnChildError(observer, durationSubscription);
        addTeardown(observer, onDispose$1);
        return observer;
    };
    operator.isSynchronous = false;
    return lift(operator);
}

function onDispose(error) {
    if (isNone(error) && this.isEmpty) {
        let cause = none;
        try {
            cause = this.factory();
        }
        catch (e) {
            cause = e;
        }
        error = { cause };
    }
    this.delegate.dispose(error);
}
class ThrowIfEmptyObserver extends Observer {
    constructor(delegate, factory) {
        super(delegate);
        this.delegate = delegate;
        this.factory = factory;
        this.isEmpty = true;
    }
    notify(next) {
        this.assertState();
        this.isEmpty = false;
        this.delegate.notify(next);
    }
}
/**
 * Returns an `ObservableLike` that emits an error if the source completes without emitting a value.
 *
 * @param factory A factory function invoked to produce the error to be thrown.
 */
const throwIfEmpty = (factory) => {
    const operator = (delegate) => {
        const observer = new ThrowIfEmptyObserver(delegate, factory);
        addDisposable(delegate, observer);
        addTeardown(observer, onDispose);
        return observer;
    };
    operator.isSynchronous = true;
    return lift(operator);
};

const _timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");
/** Symbol thrown when the timeout operator times out */
const timeoutError = _timeoutError;
const setupDurationSubscription = (observer) => {
    observer.durationSubscription.inner = pipe(observer.duration, subscribe(observer));
};
class TimeoutObserver extends Observer {
    constructor(delegate, duration, durationSubscription) {
        super(delegate);
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
        const observer = new TimeoutObserver(delegate, durationObs, durationSubscription);
        bindDisposables(observer, delegate);
        addDisposableDisposeParentOnChildError(observer, durationSubscription);
        setupDurationSubscription(observer);
        return observer;
    };
    operator.isSynchronous = false;
    return lift(operator);
}

function onNotify(next) {
    this.hasLatest = true;
    this.otherLatest = next;
}
class WithLatestFromObserver extends Observer {
    constructor(delegate, selector) {
        super(delegate);
        this.delegate = delegate;
        this.selector = selector;
        this.hasLatest = false;
        this.selector = selector;
    }
    notify(next) {
        this.assertState();
        if (!this.isDisposed && this.hasLatest) {
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
        const observer = new WithLatestFromObserver(delegate, selector);
        bindDisposables(observer, delegate);
        const otherSubscription = pipe(other, subscribe(observer, onNotify, observer));
        addOnDisposedWithoutErrorTeardown(otherSubscription, () => {
            if (!observer.hasLatest) {
                pipe(observer, dispose());
            }
        });
        addDisposableDisposeParentOnChildError(observer, otherSubscription);
        return observer;
    };
    operator.isSynchronous = false;
    return lift(operator);
};

class EnumeratorScheduler extends AbstractDisposable {
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
    move() {
        const { continuations } = this;
        const continuation = continuations.shift();
        if (isNone(continuation) || continuation.isDisposed) {
            return false;
        }
        this.inContinuation = true;
        run(continuation);
        this.inContinuation = false;
        // FIXME: Shouldn't this just dispose
        const error = this.error;
        if (isSome(error)) {
            const { cause } = error;
            throw cause;
        }
        return true;
    }
    requestYield() {
        // No-Op: We yield whenever the continuation is running.
    }
    schedule(continuation, { delay } = { delay: 0 }) {
        addDisposable(this, continuation);
        if (!continuation.isDisposed && delay === 0) {
            this.continuations.push(continuation);
        }
        else {
            pipe(continuation, dispose());
        }
    }
}
class EnumeratorObserver extends Observer {
    constructor(scheduler = new EnumeratorScheduler()) {
        super(scheduler);
        this.scheduler = scheduler;
        this.hasCurrent = false;
        // FIXME: probably need to bind the scheduler and the enumerator
    }
    move() {
        this.hasCurrent = false;
        this.current = none;
        while (!this.hasCurrent && this.scheduler.move()) { }
        return this.hasCurrent;
    }
    notify(next) {
        this.assertState();
        this.current = next;
        this.hasCurrent = true;
    }
}
const enumerate = (obs) => {
    const observer = new EnumeratorObserver();
    pipe(obs, sink(observer));
    return observer;
};
class ObservableEnumerable extends AbstractSource {
    constructor(obs) {
        super();
        this.obs = obs;
    }
    enumerate() {
        return enumerate(this.obs);
    }
}
const toEnumerable = () => obs => new ObservableEnumerable(obs);

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
function onDisposed(error) {
    if (isSome(error) || (this.buffer.length === 0 && !this.hasCurrent)) {
        pipe(this.delegate, dispose(error));
    }
}
class ZipObserver extends Observer {
    constructor(delegate, enumerators) {
        super(delegate);
        this.delegate = delegate;
        this.enumerators = enumerators;
        this.buffer = [];
        this.hasCurrent = false;
    }
    move() {
        const buffer = this.buffer;
        if (buffer.length > 0) {
            const next = buffer.shift();
            this.hasCurrent = true;
            this.current = next;
            return true;
        }
        else {
            this.hasCurrent = false;
            this.current = none;
            return false;
        }
    }
    notify(next) {
        this.assertState();
        const enumerators = this.enumerators;
        if (!this.isDisposed) {
            if (this.hasCurrent) {
                this.buffer.push(next);
            }
            else {
                this.hasCurrent = true;
                this.current = next;
            }
            if (shouldEmit(enumerators)) {
                const next = pipe(enumerators, map$1(current));
                const shouldCompleteResult = shouldComplete(enumerators);
                this.delegate.notify(next);
                if (shouldCompleteResult) {
                    this.hasCurrent = false;
                    this.current = none;
                    this.buffer.length = 0;
                    pipe(this, dispose());
                }
            }
        }
    }
}
class ZipObservable extends AbstractSource {
    constructor(observables) {
        super();
        this.observables = observables;
        this.isSynchronous = pipe(observables, everySatisfy(obs => obs.isSynchronous));
    }
    observe(observer) {
        const observables = this.observables;
        const count = observables.length;
        if (this.isSynchronous) {
            const observable = using(defer$1(this.observables, map$1(enumerate)), (...enumerators) => pipe(enumerators, zipEnumerators, returns, fromEnumerator()));
            pipe(observable, sink(observer));
        }
        else {
            const enumerators = [];
            for (let index = 0; index < count; index++) {
                const observable = observables[index];
                if (observable.isSynchronous) {
                    const enumerator = enumerate(observable);
                    enumerator.move();
                    enumerators.push(enumerator);
                }
                else {
                    const innerObserver = new ZipObserver(observer, enumerators);
                    addDisposable(observer, innerObserver);
                    addTeardown(observer, () => {
                        innerObserver.hasCurrent = false;
                        innerObserver.current = none;
                        innerObserver.buffer.length = 0;
                    });
                    addTeardown(innerObserver, onDisposed);
                    pipe(observable, sink(innerObserver));
                    enumerators.push(innerObserver);
                }
            }
        }
    }
}
/**
 * Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
 * in order, of each of its input sources.
 */
function zip(...observables) {
    return new ZipObservable(observables);
}
const zipT = {
    zip,
};

/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
function zipLatest(...observables) {
    return latest(observables, 2 /* LatestMode.Zip */);
}
const zipLatestWith = (snd) => fst => zipLatest(fst, snd);

const toRunnable = (options = {}) => source => createRunnable(sink => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    addDisposableDisposeParentOnChildError(sink, scheduler);
    const subscription = pipe(source, subscribe(scheduler, sink.notify, sink));
    addDisposableDisposeParentOnChildError(sink, subscription);
    scheduler.run();
    scheduler.dispose();
});

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
const toPromise = (scheduler) => observable => new Promise((resolve, reject) => {
    let result = none;
    let hasResult = false;
    const subscription = pipe(observable, subscribe(scheduler, next => {
        hasResult = true;
        result = next;
    }));
    addTeardown(subscription, err => {
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
    });
});

const type = undefined;

export { Observer, __currentScheduler, __do, __memo, __observe, __using, buffer, catchError, combineLatest, combineLatestWith, concat, concatAll, concatAllT, concatT, createObservable, createSubject, decodeWithCharset, defer, dispatchTo, distinctUntilChanged, exhaust, exhaustT, fromArray, fromArrayT, fromDisposable, fromEnumerable, fromIterable, fromIterator, fromIteratorT, fromPromise, generate, keep, keepT, map, mapAsync, mapT, merge, mergeAll, mergeAllT, mergeWith, never, observable, onNotify$2 as onNotify, onSubscribe, pairwise, publish, reduce, repeat, retry, scan, scanAsync, share, sink, skipFirst, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, timeout, timeoutError, toEnumerable, toPromise, toRunnable, type, using, withLatestFrom, zip, zipLatest, zipLatestWith, zipT, zipWithLatestFrom };
