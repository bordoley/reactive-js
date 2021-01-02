/// <reference types="./observable.d.ts" />
import { none, isNone, isSome } from './option.mjs';
import { pipe, ignore, raise, arrayEquality, returns, compose, callWith, defer as defer$1, strictEquality } from './functions.mjs';
import { addOnDisposedWithError, dispose, AbstractDisposable, addDisposable, bindDisposables, disposed, addOnDisposedWithoutErrorTeardown, addDisposableDisposeParentOnChildError, addTeardown, toErrorHandler, createSerialDisposable, addOnDisposedWithoutError, addOnDisposedWithErrorTeardown } from './disposable.mjs';
import { schedule, YieldError, __yield, run, createVirtualTimeScheduler } from './scheduler.mjs';
import { __DEV__ } from './env.mjs';
import { map as map$1, everySatisfy } from './readonlyArray.mjs';
import { enumerate, fromIterator as fromIterator$1, fromIterable as fromIterable$1, current, zipEnumerators } from './enumerable.mjs';
import { createRunnable } from './runnable.mjs';

const dispatchTo = (dispatcher) => v => dispatcher.dispatch(v);

class ScheduledObservable {
    constructor(f, isSynchronous, delay) {
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

const defaultEmpty = fromArray()([]);
/**
 * Return an `ObservableLike` that emits no items and disposes the subscription after a specified delay.
 */
const empty = (options = {}) => {
    const { delay = 0 } = options;
    return delay > 0 ? fromArray({ delay })([]) : defaultEmpty;
};

const assertObserverStateProduction = ignore;
const assertObserverStateDev = (observer) => {
    if (!observer.inContinuation) {
        raise("Observer.notify() may only be invoked within a scheduled SchedulerContinuation");
    }
    else if (observer.isDisposed) {
        raise("Observer is disposed");
    }
};
const _assertObserverState = __DEV__
    ? assertObserverStateDev
    : assertObserverStateProduction;
const assertObserverState = _assertObserverState;
/**
 * Abstract base class for implementing the `ObserverLike` interface.
 */
class AbstractObserver extends AbstractDisposable {
    constructor(delegate) {
        super();
        this.delegate = delegate;
        this.inContinuation = false;
        this.scheduler =
            delegate instanceof AbstractObserver ? delegate.scheduler : delegate;
    }
    /** @ignore */
    get now() {
        return this.scheduler.now;
    }
    /** @ignore */
    get shouldYield() {
        return (this.inContinuation && (this.isDisposed || this.scheduler.shouldYield));
    }
    /** @ignore */
    onRunStatusChanged(status) {
        this.inContinuation = status;
    }
    /** @ignore */
    schedule(continuation, options) {
        continuation.addListener("onRunStatusChanged", this);
        addDisposable(this, continuation);
        // Note that we schedule on the delegate so that it too may listen to
        // the onRunStatusChanged event.
        this.delegate.schedule(continuation, options);
    }
}
/**
 * Abstract base class for implementing instances of the `ObserverLike` interface
 * which delegate notifications to a parent `ObserverLike` instance
 *
 * @noInheritDoc
 */
class AbstractDelegatingObserver extends AbstractObserver {
    constructor(delegate) {
        super(delegate);
        addDisposable(delegate, this);
    }
}
class AbstractAutoDisposingDelegatingObserver extends AbstractObserver {
    constructor(delegate) {
        super(delegate);
        bindDisposables(this, delegate);
    }
}
class DelegatingObserver extends AbstractObserver {
    notify(next) {
        this.delegate.notify(next);
    }
}
const createDelegatingObserver = (delegate) => {
    const observer = new DelegatingObserver(delegate);
    addDisposable(delegate, observer);
    return observer;
};
const createAutoDisposingDelegatingObserver = (delegate) => {
    const observer = new DelegatingObserver(delegate);
    bindDisposables(delegate, observer);
    return observer;
};
const observe = (observer) => observable => observable.observe(observer);

class DefaultObserver extends AbstractObserver {
    constructor(scheduler, onNotify) {
        super(scheduler);
        this.onNotify = onNotify;
    }
    notify(next) {
        assertObserverState(this);
        this.onNotify(next);
    }
}
/**
 * Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
 * using the provided scheduler. The returned `DisposableLike`
 * may used to cancel the subscription.
 *
 * @param scheduler The SchedulerLike instance that should be used by the source to notify it's observer.
 */
const subscribe = (scheduler, onNotify = ignore) => (observable) => {
    const observer = new DefaultObserver(scheduler, onNotify);
    pipe(observable, observe(observer));
    return observer;
};

const arrayStrictEquality = arrayEquality();
let currentCtx = none;
function validateObservableEffect(ctx, type) {
    const { effects, index } = ctx;
    ctx.index++;
    const effect = effects[index];
    if (isNone(effect)) {
        const newEffect = type === 1 /* Memo */
            ? {
                type,
                f: ignore,
                args: [],
                value: none,
            }
            : type === 2 /* Observe */
                ? {
                    type,
                    observable: empty(),
                    subscription: disposed,
                    value: none,
                    hasValue: false,
                }
                : type === 3 /* Using */
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
            const hasOutstandingEffects = effects.findIndex(effect => effect.type === 2 /* Observe */ && !effect.subscription.isDisposed) >= 0;
            if (!hasOutstandingEffects &&
                this.scheduledComputationSubscription.isDisposed) {
                this.scheduler.dispose();
            }
        };
    }
    memo(f, ...args) {
        const effect = validateObservableEffect(this, 1 /* Memo */);
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
        const effect = validateObservableEffect(this, 2 /* Observe */);
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
                    this.scheduledComputationSubscription = scheduledComputationSubscription.isDisposed
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
        const effect = validateObservableEffect(this, 3 /* Using */);
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
            if (type === 2 /* Observe */ &&
                !effect.hasValue) {
                allObserveEffectsHaveValues = false;
            }
            if (type === 2 /* Observe */ &&
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

function onDispose(error) {
    const { ctx } = this;
    ctx.completedCount++;
    if (isSome(error) || ctx.completedCount === ctx.observers.length) {
        pipe(this.delegate, dispose(error));
    }
}
class LatestObserver extends AbstractDelegatingObserver {
    constructor(delegate, ctx, mode) {
        super(delegate);
        this.ctx = ctx;
        this.mode = mode;
        this.ready = false;
        this.latest = none;
        addTeardown(this, onDispose);
    }
    notify(next) {
        assertObserverState(this);
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
            if (this.mode === 2 /* Zip */) {
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
    const factory = (observer) => () => {
        const observers = [];
        const ctx = {
            completedCount: 0,
            observers,
            readyCount: 0,
        };
        for (const observable of observables) {
            const innerObserver = new LatestObserver(observer, ctx, mode);
            observers.push(innerObserver);
            pipe(observable, observe(innerObserver));
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
    return latest(observables, 1 /* Combine */);
}
const combineLatestWith = (snd) => fst => combineLatest(fst, snd);

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
const fromValue = (options = {}) => {
    const call = fromArray(options);
    return v => call([v]);
};

class LiftedObservable {
    constructor(source, operators, isSynchronous) {
        this.source = source;
        this.operators = operators;
        this.isSynchronous = isSynchronous;
    }
    observe(observer) {
        const liftedSubscrber = pipe(observer, ...this.operators);
        pipe(this.source, observe(liftedSubscrber));
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

class MapObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, mapper) {
        super(delegate);
        this.mapper = mapper;
    }
    notify(next) {
        assertObserverState(this);
        const mapped = this.mapper(next);
        this.delegate.notify(mapped);
    }
}
/**
 * Returns an `ObservableLike` that applies the `mapper` function to each
 * value emitted by the source.
 *
 * @param mapper The map function to apply each value. Must be a pure function.
 */
const map = (mapper) => {
    const operator = (observer) => new MapObserver(observer, mapper);
    operator.isSynchronous = true;
    return lift(operator);
};
const mapTo = (value) => map(returns(value));

/**
 *  Creates an `ObservableLike` that emits `value` after the specified `delay` then disposes the observer.
 *
 * @param value The value to emit.
 * @param delay The delay before emitting the value.
 */
const compute = (options) => compose(fromValue(options), map(callWith()));

const createConcatObserver = (delegate, observables, next) => {
    const observer = createDelegatingObserver(delegate);
    addOnDisposedWithError(observer, delegate);
    addOnDisposedWithoutErrorTeardown(observer, () => {
        if (next < observables.length) {
            const concatObserver = createConcatObserver(delegate, observables, next + 1);
            pipe(observables[next], observe(concatObserver));
        }
        else {
            pipe(delegate, dispose());
        }
    });
    return observer;
};
class ConcatObservable {
    constructor(observables) {
        this.observables = observables;
        this.isSynchronous = pipe(observables, everySatisfy(obs => obs.isSynchronous));
    }
    observe(observer) {
        const observables = this.observables;
        if (observables.length > 0) {
            const concatObserver = createConcatObserver(observer, observables, 1);
            pipe(observables[0], observe(concatObserver));
        }
        else {
            pipe(observer, dispose());
        }
    }
}
function concat(...observables) {
    return new ConcatObservable(observables);
}
const concatWith = (snd) => first => concat(first, snd);

const scheduleDrainQueue = (dispatcher) => {
    if (dispatcher.nextQueue.length === 1) {
        const { observer } = dispatcher;
        const continuationSubcription = pipe(observer, schedule(dispatcher.continuation));
        addOnDisposedWithError(continuationSubcription, observer);
        addOnDisposedWithoutErrorTeardown(continuationSubcription, dispatcher.onContinuationDispose);
    }
};
function onDispose$1(e) {
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
        addTeardown(this, onDispose$1);
        addDisposable(observer, this);
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
const toDispatcher = (observer) => new ObserverDelegatingDispatcher(observer);

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
const fromEnumerable = (options) => enumerable => pipe(defer$1(enumerable, enumerate), fromEnumerator(options));

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
const fromPromise = (factory) => defer(observer => () => {
    const dispatcher = toDispatcher(observer);
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
    addOnDisposedWithError(observer, delegate);
    addOnDisposedWithoutErrorTeardown(observer, () => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
            pipe(delegate, dispose());
        }
    });
    return observer;
};
class MergeObservable {
    constructor(observables) {
        this.observables = observables;
        this.isSynchronous = false;
    }
    observe(observer) {
        const observables = this.observables;
        const count = observables.length;
        const ctx = { completedCount: 0 };
        for (const observable of observables) {
            const mergeObserver = createMergeObserver(observer, count, ctx);
            pipe(observable, observe(mergeObserver));
        }
    }
}
function merge(...observables) {
    return new MergeObservable(observables);
}
const mergeWith = (snd) => fst => merge(fst, snd);

class NeverObservable {
    constructor() {
        this.isSynchronous = false;
    }
    observe(_) { }
}
const neverInstance = new NeverObservable();
/**
 * Returna an `ObservableLike` instance that emits no items and never disposes its observer.
 */
const never = () => neverInstance;

/**
 * Creates an `ObservableLike` that emits no items and immediately disposes its subscription with an error.
 *
 * @param factory Factory function to generate the error to emit.
 * @param delay The delay before disposing the subscription.
 */
const throws = (options = {}) => errorFactory => {
    const { delay = 0 } = options;
    const factory = (observer) => () => {
        let cause = none;
        try {
            cause = errorFactory();
        }
        catch (e) {
            cause = e;
        }
        pipe(observer, dispose({ cause }));
    };
    return delay > 0 ? defer(factory, options) : deferSynchronous(factory);
};

class UsingObservable {
    constructor(resourceFactory, observableFactory) {
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
        pipe(observableFactory(...resourcesArray), observe(observer));
    }
}
/**
 * Creates an `ObservableLike` that uses one or more resources which
 * will be disposed when the ObservableLike disposes it's only subscription.
 */
function using(resourceFactory, observableFactory) {
    return new UsingObservable(resourceFactory, observableFactory);
}

function onDispose$2(error) {
    const buffer = this.buffer;
    this.buffer = [];
    if (isSome(error) || buffer.length === 0) {
        pipe(this.delegate, dispose(error));
    }
    else {
        pipe(buffer, fromValue(), observe(this.delegate));
    }
}
class BufferObserver extends AbstractDelegatingObserver {
    constructor(delegate, durationFunction, maxBufferSize) {
        super(delegate);
        this.durationFunction = durationFunction;
        this.maxBufferSize = maxBufferSize;
        this.durationSubscription = createSerialDisposable();
        this.buffer = [];
        this.onNotify = () => {
            this.durationSubscription.inner = disposed;
            const buffer = this.buffer;
            this.buffer = [];
            this.delegate.notify(buffer);
        };
        addDisposableDisposeParentOnChildError(this, this.durationSubscription);
        addTeardown(this, onDispose$2);
    }
    notify(next) {
        assertObserverState(this);
        const buffer = this.buffer;
        buffer.push(next);
        if (buffer.length === this.maxBufferSize) {
            this.onNotify();
        }
        else if (this.durationSubscription.inner.isDisposed) {
            this.durationSubscription.inner = pipe(this.durationFunction(next), subscribe(this.delegate, this.onNotify));
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
            ? (_) => fromValue({ delay })(none)
            : delay;
    const maxBufferSize = (_b = options.maxBufferSize) !== null && _b !== void 0 ? _b : Number.MAX_SAFE_INTEGER;
    const operator = (observer) => new BufferObserver(observer, durationFunction, maxBufferSize);
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
        addOnDisposedWithoutError(observer, delegate);
        addOnDisposedWithErrorTeardown(observer, cause => {
            try {
                const result = onError(cause) || none;
                if (isSome(result)) {
                    pipe(result, observe(delegate));
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

class DistinctUntilChangedObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, equality) {
        super(delegate);
        this.equality = equality;
        this.hasValue = false;
    }
    notify(next) {
        assertObserverState(this);
        const shouldEmit = !this.hasValue || !this.equality(this.prev, next);
        if (shouldEmit) {
            this.prev = next;
            this.hasValue = true;
            this.delegate.notify(next);
        }
    }
}
/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
const distinctUntilChanged = (options = {}) => {
    const { equality = strictEquality } = options;
    const operator = (observer) => new DistinctUntilChangedObserver(observer, equality);
    operator.isSynchronous = true;
    return lift(operator);
};

function endWith(...values) {
    return concatWith(fromArray()(values));
}

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
function onDispose$3(error) {
    if (isSome(error) || this.queue.length + this.activeCount === 0) {
        pipe(this.delegate, dispose(error));
    }
}
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
        this.onNotify = (next) => {
            this.delegate.notify(next);
        };
        this.queue = [];
        addTeardown(this, onDispose$3);
        addTeardown(delegate, () => {
            this.queue.length = 0;
        });
    }
    notify(next) {
        assertObserverState(this);
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
    const operator = (observer) => new MergeObserver(observer, maxBufferSize, maxConcurrency);
    operator.isSynchronous = false;
    return lift(operator);
};
const mergeMap = (mapper, options = {}) => compose(map(mapper), mergeAll(options));
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
const concatMap = (mapper, options) => compose(map(mapper), concatAll(options));
const _exhaust = mergeAll({ maxBufferSize: 1, maxConcurrency: 1 });
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
const exhaust = () => _exhaust;
const exhaustMap = (mapper) => compose(map(mapper), exhaust());

const genMap = (mapper) => compose(map(mapper), concatMap(compose(returns, fromIterator())));

class IgnoreObserver extends AbstractAutoDisposingDelegatingObserver {
    notify(_) {
        assertObserverState(this);
    }
}
const operator = (observer) => new IgnoreObserver(observer);
operator.isSynchronous = true;
/**
 * Returns an `ObservableLike` that ignores all items emitted by the source.
 */
const ignoreElements = () => lift(operator);

class KeepTypeObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, predicate) {
        super(delegate);
        this.predicate = predicate;
    }
    notify(next) {
        assertObserverState(this);
        if (this.predicate(next)) {
            this.delegate.notify(next);
        }
    }
}
/**
 * Returns an `ObservableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
const keepType = (predicate) => {
    const operator = (observer) => new KeepTypeObserver(observer, predicate);
    operator.isSynchronous = true;
    return lift(operator);
};
/**
 * Returns an `ObservableLike` that only emits items produced by the
 * source that satisfy the specified predicate.
 *
 * @param predicate The predicate function.
 */
const keep = (predicate) => keepType(predicate);

function onDispose$4(error) {
    if (isSome(error) || this.inner.isDisposed) {
        pipe(this.delegate, dispose(error));
    }
}
class SwitchObserver extends AbstractDelegatingObserver {
    constructor(delegate) {
        super(delegate);
        this.inner = disposed;
        this.onNotify = (next) => {
            this.delegate.notify(next);
        };
        addTeardown(this, onDispose$4);
    }
    notify(next) {
        assertObserverState(this);
        pipe(this.inner, dispose());
        const inner = pipe(next, subscribe(this.delegate, this.onNotify));
        addDisposableDisposeParentOnChildError(this.delegate, inner);
        addOnDisposedWithoutErrorTeardown(inner, () => {
            if (this.isDisposed) {
                pipe(this.delegate, dispose());
            }
        });
        this.inner = inner;
    }
}
const operator$1 = (observer) => new SwitchObserver(observer);
operator$1.isSynchronous = false;
const switchAllInstance = lift(operator$1);
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
const switchAll = () => switchAllInstance;
const switchMap = (mapper) => compose(map(mapper), switchAll());

const mapAsync = (f) => switchMap(a => fromPromise(() => f(a)));

class OnNotifyObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, onNotify) {
        super(delegate);
        this.onNotify = onNotify;
    }
    notify(next) {
        assertObserverState(this);
        this.onNotify(next);
        this.delegate.notify(next);
    }
}
/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
function onNotify(onNotify) {
    const operator = (observer) => new OnNotifyObserver(observer, onNotify);
    operator.isSynchronous = true;
    return lift(operator);
}

class OnSubscribeObservable {
    constructor(src, f) {
        this.src = src;
        this.f = f;
        this.isSynchronous = src.isSynchronous;
    }
    observe(observer) {
        try {
            pipe(this.src, observe(observer));
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

class PairwiseObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor() {
        super(...arguments);
        this.hasPrev = false;
    }
    notify(value) {
        const prev = this.hasPrev ? this.prev : none;
        this.hasPrev = true;
        this.prev = value;
        this.delegate.notify([prev, value]);
    }
}
const pairwise = () => {
    const operator = (observer) => new PairwiseObserver(observer);
    operator.isSynchronous = true;
    return lift(operator);
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
    const srcSubscription = pipe(observable, subscribe(scheduler, dispatchTo(subject)));
    bindDisposables(srcSubscription, subject);
    return subject;
};

function onDispose$5(error) {
    if (isSome(error)) {
        this.delegate.dispose();
    }
    else {
        pipe(this.acc, fromValue(), observe(this.delegate));
    }
}
class ReduceObserver extends AbstractDelegatingObserver {
    constructor(delegate, reducer, acc) {
        super(delegate);
        this.reducer = reducer;
        this.acc = acc;
        addTeardown(this, onDispose$5);
    }
    notify(next) {
        assertObserverState(this);
        this.acc = this.reducer(this.acc, next);
    }
}
const reduce = (reducer, initialValue) => {
    const operator = (observer) => new ReduceObserver(observer, reducer, initialValue());
    operator.isSynchronous = true;
    return lift(operator);
};

const createRepeatObserver = (delegate, observable, shouldRepeat) => {
    const observer = createDelegatingObserver(delegate);
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
            const subscription = pipe(observable, subscribe(delegate, (next) => delegate.notify(next)));
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

class ScanObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, scanner, acc) {
        super(delegate);
        this.scanner = scanner;
        this.acc = acc;
    }
    notify(next) {
        assertObserverState(this);
        const nextAcc = this.scanner(this.acc, next);
        this.acc = nextAcc;
        this.delegate.notify(nextAcc);
    }
}
/**
 * Returns an `ObservableLike` that applies an accumulator function over the source,
 * and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
const scan = (scanner, initialValue) => {
    const operator = (observer) => new ScanObserver(observer, scanner, initialValue());
    operator.isSynchronous = true;
    return lift(operator);
};

class TakeFirstObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.count = 0;
    }
    notify(next) {
        assertObserverState(this);
        this.count++;
        this.delegate.notify(next);
        if (this.count >= this.maxCount) {
            pipe(this, dispose());
        }
    }
}
/**
 * Returns an `ObservableLike` that only emits the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
const takeFirst = (options = {}) => {
    const { count = 1 } = options;
    const operator = (observer) => new TakeFirstObserver(observer, count);
    operator.isSynchronous = true;
    return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};

const notifyDelegate = (observer) => {
    if (observer.queue.length > 0 && observer.hasLatest) {
        observer.hasLatest = false;
        const next = observer.queue.shift();
        const result = observer.selector(next, observer.otherLatest);
        observer.delegate.notify(result);
    }
};
class ZipWithLatestFromObserver extends AbstractObserver {
    constructor(delegate, other, selector) {
        super(delegate);
        this.selector = selector;
        this.hasLatest = false;
        this.queue = [];
        this.selector = selector;
        const otherSubscription = pipe(other, subscribe(delegate, (otherLatest) => {
            this.hasLatest = true;
            this.otherLatest = otherLatest;
            notifyDelegate(this);
            if (this.isDisposed && this.queue.length === 0) {
                pipe(this.delegate, dispose());
            }
        }));
        const disposeDelegate = () => {
            if (this.isDisposed && otherSubscription.isDisposed) {
                pipe(delegate, dispose());
            }
        };
        addDisposableDisposeParentOnChildError(delegate, this);
        addDisposableDisposeParentOnChildError(delegate, otherSubscription);
        addOnDisposedWithoutErrorTeardown(this, disposeDelegate);
        addOnDisposedWithoutErrorTeardown(otherSubscription, disposeDelegate);
    }
    notify(next) {
        assertObserverState(this);
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
    const operator = (observer) => new ZipWithLatestFromObserver(observer, other, selector);
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
const scanAsync = (scanner, initialValue) => observable => using(_ => createSubject(), accFeedbackStream => pipe(observable, zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), takeFirst())), switchAll(), onNotify(dispatchTo(accFeedbackStream)), onSubscribe(() => {
    accFeedbackStream.dispatch(initialValue());
})));

class SharedObservable {
    constructor(source, publish) {
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
        pipe(multicast, observe(observer));
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

class SkipFirstObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, skipCount) {
        super(delegate);
        this.skipCount = skipCount;
        this.count = 0;
    }
    notify(next) {
        assertObserverState(this);
        this.count++;
        if (this.count > this.skipCount) {
            this.delegate.notify(next);
        }
    }
}
/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
const skipFirst = (options = {}) => {
    const { count = 1 } = options;
    const operator = (observer) => new SkipFirstObserver(observer, count);
    operator.isSynchronous = false;
    return observable => count > 0 ? pipe(observable, lift(operator)) : observable;
};

function startWith(...values) {
    return obs => concat(fromArray()(values), obs);
}

/**
 * Returns an `ObservableLike` instance that subscribes to the source on the specified `SchedulerLike`.
 *
 * @param scheduler `SchedulerLike` instance to use when subscribing to the source.
 */
const subscribeOn = (scheduler) => observable => createObservable(dispatcher => {
    const subscription = pipe(observable, subscribe(scheduler, dispatchTo(dispatcher)));
    bindDisposables(subscription, dispatcher);
});

function onDispose$6(error) {
    if (isSome(error)) {
        this.last.length = 0;
        pipe(this.delegate, dispose(error));
    }
    else {
        pipe(this.last, fromArray(), observe(this.delegate));
    }
}
class TakeLastObserver extends AbstractDelegatingObserver {
    constructor(delegate, maxCount) {
        super(delegate);
        this.maxCount = maxCount;
        this.last = [];
        addTeardown(this, onDispose$6);
    }
    notify(next) {
        assertObserverState(this);
        const last = this.last;
        last.push(next);
        if (last.length > this.maxCount) {
            last.shift();
        }
    }
}
/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
const takeLast = (options = {}) => {
    const { count = 1 } = options;
    const operator = (observer) => new TakeLastObserver(observer, count);
    operator.isSynchronous = false;
    return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};

const takeUntil = (notifier) => {
    const operator = (observer) => {
        const takeUntilObserver = createAutoDisposingDelegatingObserver(observer);
        const otherSubscription = pipe(notifier, subscribe(takeUntilObserver, defer$1(takeUntilObserver, dispose)));
        bindDisposables(takeUntilObserver, otherSubscription);
        return takeUntilObserver;
    };
    operator.isSynchronous = false;
    return lift(operator);
};

class TakeWhileObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, predicate, inclusive) {
        super(delegate);
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    notify(next) {
        assertObserverState(this);
        const satisfiesPredicate = this.predicate(next);
        if (satisfiesPredicate || this.inclusive) {
            this.delegate.notify(next);
        }
        if (!satisfiesPredicate) {
            pipe(this, dispose());
        }
    }
}
/**
 * Returns an `ObservableLike` which emits values emitted by the source as long
 * as each value satisfies the given predicate, and then completes as soon as
 * this predicate is not satisfied.
 *
 * @param predicate The predicate function.
 */
const takeWhile = (predicate, options = {}) => {
    const { inclusive = false } = options;
    const operator = (observer) => new TakeWhileObserver(observer, predicate, inclusive);
    operator.isSynchronous = true;
    return lift(operator);
};

const setupDurationSubscription = (observer, next) => {
    observer.durationSubscription.inner = pipe(observer.durationFunction(next), subscribe(observer, observer.onNotify));
};
function onDispose$7(e) {
    if (isNone(e) && this.mode !== "first" && this.hasValue) {
        pipe(this.value, fromValue(), observe(this.delegate));
    }
    else {
        pipe(this.delegate, dispose(e));
    }
}
class ThrottleObserver extends AbstractDelegatingObserver {
    constructor(delegate, durationFunction, mode) {
        super(delegate);
        this.durationFunction = durationFunction;
        this.mode = mode;
        this.durationSubscription = createSerialDisposable();
        this.value = none;
        this.hasValue = false;
        this.onNotify = (_) => {
            if (this.hasValue) {
                const value = this.value;
                this.value = none;
                this.hasValue = false;
                setupDurationSubscription(this, value);
                this.delegate.notify(value);
            }
        };
        addDisposableDisposeParentOnChildError(this, this.durationSubscription);
        addTeardown(this, onDispose$7);
    }
    notify(next) {
        assertObserverState(this);
        this.value = next;
        this.hasValue = true;
        const durationSubscriptionDisposableIsDisposed = this.durationSubscription
            .inner.isDisposed;
        if (durationSubscriptionDisposableIsDisposed && this.mode !== "last") {
            this.onNotify();
        }
        else if (durationSubscriptionDisposableIsDisposed) {
            setupDurationSubscription(this, next);
        }
    }
}
function throttle(duration, options = {}) {
    const { mode = "interval" } = options;
    const durationFunction = typeof duration === "number"
        ? (_) => fromValue({ delay: duration })(none)
        : duration;
    const operator = (observer) => new ThrottleObserver(observer, durationFunction, mode);
    operator.isSynchronous = false;
    return lift(operator);
}

function onDispose$8(error) {
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
class ThrowIfEmptyObserver extends AbstractDelegatingObserver {
    constructor(delegate, factory) {
        super(delegate);
        this.factory = factory;
        this.isEmpty = true;
        addTeardown(this, onDispose$8);
    }
    notify(next) {
        assertObserverState(this);
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
    const operator = (observer) => new ThrowIfEmptyObserver(observer, factory);
    operator.isSynchronous = true;
    return lift(operator);
};

const _timeoutError = Symbol("@reactive-js/core/lib/observable/timeoutError");
/** Symbol thrown when the timeout operator times out */
const timeoutError = _timeoutError;
const setupDurationSubscription$1 = (observer) => {
    observer.durationSubscription.inner = pipe(observer.duration, subscribe(observer));
};
class TimeoutObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, duration) {
        super(delegate);
        this.duration = duration;
        this.durationSubscription = createSerialDisposable();
        addDisposableDisposeParentOnChildError(this, this.durationSubscription);
        setupDurationSubscription$1(this);
    }
    notify(next) {
        assertObserverState(this);
        pipe(this.durationSubscription, dispose());
        this.delegate.notify(next);
    }
}
const returnTimeoutError = returns(timeoutError);
function timeout(duration) {
    const durationObs = typeof duration === "number"
        ? throws({ delay: duration })(returnTimeoutError)
        : concat(duration, throws()(returnTimeoutError));
    const operator = (observer) => new TimeoutObserver(observer, durationObs);
    operator.isSynchronous = false;
    return lift(operator);
}

class WithLatestFromObserver extends AbstractAutoDisposingDelegatingObserver {
    constructor(delegate, other, selector) {
        super(delegate);
        this.selector = selector;
        this.hasLatest = false;
        this.onNotify = (next) => {
            this.hasLatest = true;
            this.otherLatest = next;
        };
        this.selector = selector;
        const otherSubscription = pipe(other, subscribe(this, this.onNotify));
        addOnDisposedWithoutErrorTeardown(otherSubscription, () => {
            if (!this.hasLatest) {
                pipe(this, dispose());
            }
        });
        addDisposableDisposeParentOnChildError(this, otherSubscription);
    }
    notify(next) {
        assertObserverState(this);
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
    const operator = (observer) => new WithLatestFromObserver(observer, other, selector);
    operator.isSynchronous = false;
    return lift(operator);
};

class EnumeratorObserver extends AbstractDisposable {
    constructor() {
        super(...arguments);
        this.continuations = [];
        this.hasCurrent = false;
        this.inContinuation = false;
        this.now = 0;
    }
    get shouldYield() {
        return this.inContinuation;
    }
    move() {
        const continuations = this.continuations;
        this.hasCurrent = false;
        this.current = none;
        while (!this.hasCurrent) {
            const continuation = continuations.shift();
            if (isNone(continuation) || continuation.isDisposed) {
                break;
            }
            this.inContinuation = true;
            run(continuation);
            this.inContinuation = false;
            const error = this.error;
            if (isSome(error)) {
                const { cause } = error;
                throw cause;
            }
        }
        return this.hasCurrent;
    }
    notify(next) {
        assertObserverState(this);
        this.current = next;
        this.hasCurrent = true;
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
const subscribeInteractive = (obs) => {
    const observer = new EnumeratorObserver();
    pipe(obs, observe(observer));
    return observer;
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
function onDisposed(error) {
    if (isSome(error) || (this.buffer.length === 0 && !this.hasCurrent)) {
        pipe(this.delegate, dispose(error));
    }
}
class ZipObserver extends AbstractDelegatingObserver {
    constructor(delegate, enumerators) {
        super(delegate);
        this.enumerators = enumerators;
        this.buffer = [];
        this.hasCurrent = false;
        addTeardown(delegate, () => {
            this.hasCurrent = false;
            this.current = none;
            this.buffer.length = 0;
        });
        addTeardown(this, onDisposed);
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
        assertObserverState(this);
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
class ZipObservable {
    constructor(observables) {
        this.observables = observables;
        this.isSynchronous = pipe(observables, everySatisfy(obs => obs.isSynchronous));
    }
    observe(observer) {
        const observables = this.observables;
        const count = observables.length;
        if (this.isSynchronous) {
            const observable = using(defer$1(this.observables, map$1(subscribeInteractive)), (...enumerators) => pipe(enumerators, zipEnumerators, returns, fromEnumerator()));
            pipe(observable, observe(observer));
        }
        else {
            const enumerators = [];
            for (let index = 0; index < count; index++) {
                const observable = observables[index];
                if (observable.isSynchronous) {
                    const enumerator = subscribeInteractive(observable);
                    enumerator.move();
                    enumerators.push(enumerator);
                }
                else {
                    const innerObserver = new ZipObserver(observer, enumerators);
                    pipe(observable, observe(innerObserver));
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
const zipWith = (snd) => fst => zip(fst, snd);

/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
function zipLatest(...observables) {
    return latest(observables, 2 /* Zip */);
}
const zipLatestWith = (snd) => fst => zipLatest(fst, snd);

const toRunnable = (options = {}) => source => createRunnable(sink => {
    const { schedulerFactory = createVirtualTimeScheduler } = options;
    const scheduler = schedulerFactory();
    const subscription = pipe(source, subscribe(scheduler, e => sink.notify(e)));
    scheduler.run();
    const { error } = subscription;
    if (isSome(error)) {
        const { cause } = error;
        throw cause;
    }
    sink.done();
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

export { __currentScheduler, __do, __memo, __observe, __using, buffer, catchError, combineLatest, combineLatestWith, compute, concat, concatAll, concatMap, concatWith, createObservable, createSubject, defer, dispatchTo, distinctUntilChanged, empty, endWith, exhaust, exhaustMap, fromArray, fromDisposable, fromEnumerable, fromIterable, fromIterator, fromPromise, fromValue, genMap, generate, ignoreElements, keep, keepType, lift, map, mapAsync, mapTo, merge, mergeAll, mergeMap, mergeWith, never, observable, observe, onNotify, onSubscribe, pairwise, publish, reduce, repeat, retry, scan, scanAsync, share, skipFirst, startWith, subscribe, subscribeOn, switchAll, switchMap, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, throws, timeout, timeoutError, toPromise, toRunnable, using, withLatestFrom, zip, zipLatest, zipLatestWith, zipWith, zipWithLatestFrom };
