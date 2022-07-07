/// <reference types="./observable.d.ts" />
import { reactive, createMapOperator, createOnNotifyOperator, createDistinctUntilChangedOperator, createKeepOperator, createPairwiseOperator, createScanOperator, createSkipFirstOperator, createTakeFirstOperator, createTakeWhileOperator, createThrowIfEmptyOperator } from './__internal__.liftable.mjs';
import { hasDelay, getDelay } from './__internal__.optionalArgs.mjs';
import { decorateWithMapNotify, decorateWithOnNotifyNotify, createUsing, createNever, decorateWithCatchErrorNotify, createCatchErrorOperator, createFromDisposable, decorateWithDecodeWithCharsetNotify, createDecodeWithCharsetOperator, decorateWithDistinctUntilChangedNotify, decorateWithEverySatisfyNotify, createEverySatisfyOperator, decorateWithKeepNotify, createOnSink, decorateWithPairwiseNotify, decorateWithReduceNotify, createReduceOperator, decorateWithScanNotify, decorateWithSkipFirstNotify, decorateWithSomeSatisfyNotify, createSomeSatisfyOperator, decorateWithTakeFirstNotify, decorateWithTakeLastNotify, createTakeLastOperator, decorateWithTakeWhileNotify, decorateWithThrowIfEmptyNotify } from './__internal__.reactiveContainer.mjs';
import { empty as empty$1, fromValue, throws, concatMap } from './container.mjs';
import { dispatch, dispatchTo } from './dispatcher.mjs';
import { dispose, addTo, isDisposed, onComplete, Disposable, onDisposed, add, disposed, toErrorHandler, bindTo } from './disposable.mjs';
import { move, getCurrent, hasCurrent, forEach } from './enumerator.mjs';
import { raise, pipe, newInstance, getLength, newInstanceWith, isEmpty, arrayEquality, ignore, pipeLazy, compose, max, returns, identity, instanceFactory } from './functions.mjs';
import { getScheduler, getDispatcher } from './observer.mjs';
import { sinkInto, sourceFrom } from './reactiveContainer.mjs';
import { schedule, __yield, isInContinuation, createVirtualTimeScheduler } from './scheduler.mjs';
import { createFromArray } from './__internal__.container.mjs';
import { none, isNone, isSome } from './option.mjs';
import { getDelegate } from './__internal__.delegating.mjs';
import { __DEV__, MAX_SAFE_INTEGER } from './__internal__.env.mjs';
import { notify, notifySink } from './reactiveSink.mjs';
import { DisposableRef } from './__internal__.disposable.mjs';
import { createRunnable } from './runnable.mjs';
import { map as map$1, everySatisfy as everySatisfy$1 } from './__internal__.readonlyArray.mjs';
import { enumerate, fromIterator as fromIterator$1, fromIterable as fromIterable$1, createEnumerable } from './enumerable.mjs';
import { AbstractEnumerator, reset, zip as zip$1 } from './__internal__.enumerator.mjs';
import { runContinuation } from './__internal__.schedulerImplementation.mjs';

class AbstractObservable {
    get T() {
        return raise();
    }
    get TContainerOf() {
        return this;
    }
    get TLiftableContainerState() {
        return raise();
    }
}
const isEnumerable = (obs) => obs.observableType === 2;
const isRunnable = (obs) => obs.observableType === 1;
const tagObservableType = (tag) => (obs) => {
    obs.observableType = tag;
    return obs;
};
const computeMinTag = (observables) => {
    let min = 2;
    const { length } = observables;
    for (let i = 0; i < length; i++) {
        const { observableType } = observables[i];
        min = observableType < min ? observableType : min;
    }
    return min;
};

class CreateObservable extends AbstractObservable {
    constructor(f) {
        super();
        this.f = f;
        this.observableType = 0;
    }
    sinkInto(observer) {
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

function defer(factory, options) {
    return createObservable(observer => {
        const sideEffect = factory();
        if (typeof sideEffect === "function") {
            const callback = () => sideEffect(observer);
            pipe(observer, getScheduler, schedule(callback, options), addTo(observer));
        }
        else {
            pipe(sideEffect, sinkInto(observer));
        }
    });
}
const deferT = {
    defer,
};

const empty = /*@__PURE__*/ pipe(createObservable(dispose()), tagObservableType(2));
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
    const { delayStart = true } = options !== null && options !== void 0 ? options : {};
    return count === 0 && isEnumerableTag
        ? empty
        : pipe(defer(() => {
            let index = startIndex;
            return (observer) => {
                while (index < endIndex && !isDisposed(observer)) {
                    const value = values[index];
                    index++;
                    observer.notify(value);
                    if (index < endIndex) {
                        __yield(options);
                    }
                }
                pipe(observer, dispose());
            };
        }, delayStart ? options : none), tagObservableType(hasDelay(options) ? 1 : 2));
});
const fromArrayT = {
    fromArray,
};

class LiftedObservable extends AbstractObservable {
    constructor(source, operators, observableType) {
        super();
        this.source = source;
        this.operators = operators;
        this.observableType = observableType;
    }
    sinkInto(observer) {
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
    return newInstance(LiftedObservable, sourceSource, allFunctions, isEnumerableOperator
        ? 2
        : 0);
};
const liftT = {
    lift,
    variance: reactive,
};
const liftSynchronousT = {
    lift: op => lift(op, true),
    variance: reactive,
};

const scheduleDrainQueue = (dispatcher) => {
    if (getLength(dispatcher.nextQueue) === 1) {
        const { observer } = dispatcher;
        pipe(getScheduler(observer), schedule(dispatcher.continuation), addTo(observer), onComplete(dispatcher.onContinuationDispose));
    }
};
class ObserverDelegatingDispatcher extends Disposable {
    constructor(observer) {
        super();
        this.observer = observer;
        this.continuation = () => {
            const { nextQueue } = this;
            const { observer } = this;
            while (getLength(nextQueue) > 0) {
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
    get scheduler() {
        return getScheduler(this.observer);
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
class Observer extends Disposable {
    constructor(scheduler) {
        super();
        this.scheduler = scheduler;
        this._dispatcher = none;
    }
    get dispatcher() {
        if (isNone(this._dispatcher)) {
            const dispatcher = pipe(ObserverDelegatingDispatcher, newInstanceWith(this), addTo(this, true), onDisposed(e => {
                if (isEmpty(dispatcher.nextQueue)) {
                    pipe(this, dispose(e));
                }
            }));
            this._dispatcher = dispatcher;
        }
        return this._dispatcher;
    }
    notify(_) { }
}
class AbstractDisposableBindingDelegatingObserver {
    constructor(delegate) {
        this.delegate = delegate;
        this._dispatcher = none;
    }
    get dispatcher() {
        if (isNone(this._dispatcher)) {
            const dispatcher = pipe(ObserverDelegatingDispatcher, newInstanceWith(this), addTo(this, true), onDisposed(e => {
                if (isEmpty(dispatcher.nextQueue)) {
                    pipe(this, dispose(e));
                }
            }));
            this._dispatcher = dispatcher;
        }
        return this._dispatcher;
    }
    get error() {
        return this.delegate.error;
    }
    get isDisposed() {
        return this.delegate.isDisposed;
    }
    get scheduler() {
        return getScheduler(this.delegate);
    }
    add(disposable, ignoreChildErrors) {
        this.delegate.add(disposable, ignoreChildErrors);
    }
    dispose(error) {
        this.delegate.dispose(error);
    }
    notify(_) { }
}
class AbstractDelegatingObserver extends Observer {
    constructor(delegate) {
        super(getScheduler(delegate));
        this.delegate = delegate;
    }
    notify(_) { }
}
class DelegatingObserver extends AbstractDelegatingObserver {
    notify(next) {
        pipe(this, getDelegate, notify(next));
    }
}
const createDelegatingObserver = (delegate) => newInstance(DelegatingObserver, delegate);
const decorateNotifyWithAssertions = (ObserverClass) => {
    if (__DEV__) {
        const notify = ObserverClass.prototype.notify;
        ObserverClass.prototype.notify = function notifyWithAssertion(next) {
            if (!pipe(this, getScheduler, isInContinuation)) {
                raise("Observer.notify() may only be invoked within a scheduled SchedulerContinuation");
            }
            else if (isDisposed(this)) {
                raise("Observer is disposed");
            }
            notify.call(this, next);
        };
    }
};

const map = /*@__PURE__*/ (() => {
    class MapObserver extends AbstractDelegatingObserver {
        constructor(delegate, mapper) {
            super(delegate);
            this.mapper = mapper;
        }
    }
    decorateWithMapNotify(MapObserver);
    decorateNotifyWithAssertions(MapObserver);
    return createMapOperator(liftSynchronousT, MapObserver);
})();
const mapT = {
    map,
};

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
const onNotify = /*@__PURE__*/ (() => {
    class OnNotifyObserver extends AbstractDelegatingObserver {
        constructor(delegate, onNotify) {
            super(delegate);
            this.onNotify = onNotify;
        }
    }
    decorateWithOnNotifyNotify(OnNotifyObserver);
    decorateNotifyWithAssertions(OnNotifyObserver);
    return createOnNotifyOperator(liftSynchronousT, OnNotifyObserver);
})();

class Subject extends Disposable {
    constructor(replay = 1) {
        super();
        this.replay = replay;
        this.observers = newInstance(Set);
        this.replayed = [];
        this.observableType = 0;
    }
    get T() {
        return raise();
    }
    get TContainerOf() {
        return raise();
    }
    get TLiftableContainerState() {
        return raise();
    }
    get observerCount() {
        return this.observers.size;
    }
    publish(next) {
        if (!isDisposed(this)) {
            const { replay, replayed } = this;
            if (replay > 0) {
                replayed.push(next);
                if (getLength(replayed) > replay) {
                    replayed.shift();
                }
            }
            for (const observer of this.observers) {
                pipe(observer, getDispatcher, dispatch(next));
            }
        }
    }
    sinkInto(observer) {
        if (!isDisposed(this)) {
            const { observers } = this;
            observers.add(observer);
            pipe(observer, onDisposed(_ => {
                observers.delete(observer);
            }));
        }
        // The idea here is that an onSubscribe function may
        // call next from unscheduled sources such as event handlers.
        // So we marshall those events back to the scheduler.
        const { dispatcher } = observer;
        for (const next of this.replayed) {
            pipe(dispatcher, dispatch(next));
        }
        pipe(this, add(dispatcher, true));
    }
}
const publish = (v) => subject => {
    subject.publish(v);
    return subject;
};
const publishTo = (subject) => v => {
    subject.publish(v);
    return v;
};

/**
 * Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
 * using the provided scheduler. The returned `DisposableLike`
 * may used to cancel the subscription.
 *
 * @param scheduler The SchedulerLike instance that should be used by the source to notify it's observer.
 */
const subscribe = (scheduler) => observable => pipe(Observer, newInstanceWith(scheduler), addTo(scheduler, true), sourceFrom(observable));

function onDispose() {
    if (isDisposed(this.currentRef.current)) {
        pipe(this, getDelegate, dispose());
    }
}
class SwitchObserver extends AbstractDelegatingObserver {
    constructor() {
        super(...arguments);
        this.currentRef = newInstance(DisposableRef, getDelegate(this), disposed);
    }
    notify(next) {
        this.currentRef.current = pipe(next, onNotify(pipe(this, getDelegate, notifySink)), subscribe(getScheduler(this)), onComplete(() => {
            if (isDisposed(this)) {
                pipe(this, getDelegate, dispose());
            }
        }));
    }
}
const operator = (delegate) => pipe(SwitchObserver, newInstanceWith(delegate), addTo(delegate), onComplete(onDispose));
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
    if (getLength(observer.queue) > 0 && observer.hasLatest) {
        observer.hasLatest = false;
        const next = observer.queue.shift();
        const result = observer.selector(next, observer.otherLatest);
        pipe(observer, getDelegate, notify(result));
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
            if (isDisposed(observer) && isDisposed(otherSubscription)) {
                pipe(delegate, dispose());
            }
        };
        const observer = pipe(ZipWithLatestFromObserver, newInstanceWith(delegate, selector), onComplete(disposeDelegate));
        const otherSubscription = pipe(other, onNotify(otherLatest => {
            observer.hasLatest = true;
            observer.otherLatest = otherLatest;
            notifyDelegate(observer);
            if (isDisposed(observer) && isEmpty(observer.queue)) {
                pipe(observer, getDelegate, dispose());
            }
        }), subscribe(getScheduler(delegate)), onComplete(disposeDelegate));
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
        const newEffect = type === 1 /* EffecTContainerOf.Memo */
            ? {
                type,
                f: ignore,
                args: [],
                value: none,
            }
            : type === 2 /* EffecTContainerOf.Observe */
                ? {
                    type,
                    observable: empty$1(fromArrayT),
                    subscription: disposed,
                    value: none,
                    hasValue: false,
                }
                : type === 3 /* EffecTContainerOf.Using */
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
            const hasOutstandingEffects = effects.findIndex(effect => effect.type === 2 /* EffecTContainerOf.Observe */ &&
                !isDisposed(effect.subscription)) >= 0;
            if (!hasOutstandingEffects &&
                isDisposed(this.scheduledComputationSubscription)) {
                pipe(this.observer, dispose());
            }
        };
    }
    memo(f, ...args) {
        const effect = validateObservableEffect(this, 1 /* EffecTContainerOf.Memo */);
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
        const effect = validateObservableEffect(this, 2 /* EffecTContainerOf.Observe */);
        if (effect.observable === observable) {
            return effect.value;
        }
        else {
            pipe(effect.subscription, dispose());
            const { observer, runComputation } = this;
            const scheduler = getScheduler(observer);
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
            }), subscribe(scheduler), addTo(observer), onComplete(this.cleanup));
            effect.observable = observable;
            effect.subscription = subscription;
            effect.value = none;
            effect.hasValue = false;
            return none;
        }
    }
    using(f, ...args) {
        const effect = validateObservableEffect(this, 3 /* EffecTContainerOf.Using */);
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
        const effectsLength = getLength(effects);
        // Inline this for perf
        let allObserveEffectsHaveValues = true;
        let hasOutstandingEffects = false;
        for (let i = 0; i < effectsLength; i++) {
            const effect = effects[i];
            const { type } = effect;
            if (type === 2 /* EffecTContainerOf.Observe */ &&
                !effect.hasValue) {
                allObserveEffectsHaveValues = false;
            }
            if (type === 2 /* EffecTContainerOf.Observe */ &&
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
    const scheduler = getScheduler(ctx.observer);
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
    return getScheduler(ctx.observer);
}

class LatestCtx {
    constructor(delegate, mode) {
        this.delegate = delegate;
        this.mode = mode;
        this.completedCount = 0;
        this.observers = [];
        this.readyCount = 0;
    }
    add(observer) {
        this.observers.push(observer);
    }
    notify() {
        const { mode, observers, readyCount } = this;
        if (readyCount === getLength(observers)) {
            const result = pipe(observers, map$1(observer => observer.latest));
            pipe(this, getDelegate, notify(result));
            if (mode === 2 /* LatestMode.Zip */) {
                for (const sub of observers) {
                    sub.ready = false;
                    sub.latest = none;
                }
                this.readyCount = 0;
            }
        }
    }
    onCompleted() {
        this.completedCount++;
        if (this.completedCount === getLength(this.observers)) {
            pipe(this, getDelegate, dispose());
        }
    }
}
class LatestObserver extends Observer {
    constructor(scheduler, ctx) {
        super(scheduler);
        this.ctx = ctx;
        this.ready = false;
        this.latest = none;
    }
    notify(next) {
        const { ctx } = this;
        this.latest = next;
        if (!this.ready) {
            ctx.readyCount++;
            this.ready = true;
        }
        ctx.notify();
    }
}
const latest = (observables, mode) => {
    const factory = () => (delegate) => {
        const latestCtxDelegate = new LatestCtx(delegate, mode);
        const onCompleteCb = () => {
            latestCtxDelegate.onCompleted();
        };
        const scheduler = getScheduler(delegate);
        for (const observable of observables) {
            const innerObserver = pipe(LatestObserver, newInstanceWith(scheduler, latestCtxDelegate), addTo(delegate), onComplete(onCompleteCb), sourceFrom(observable));
            latestCtxDelegate.add(innerObserver);
        }
    };
    return pipe(defer(factory), tagObservableType(computeMinTag(observables)));
};
/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
function combineLatest(...observables) {
    return latest(observables, 1 /* LatestMode.Combine */);
}
const combineLatestT = {
    zip: combineLatest,
};
/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
function zipLatest(...observables) {
    return latest(observables, 2 /* LatestMode.Zip */);
}
const zipLatestT = {
    zip: zipLatest,
};
function forkCombineLatest(...ops) {
    return (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 1 /* LatestMode.Combine */);
}
function forkZipLatest(...ops) {
    return (obs) => latest(pipe(ops, map$1(op => pipe(obs, op))), 2 /* LatestMode.Zip */);
}

const createConcatObserver = (delegate, observables, next) => pipe(createDelegatingObserver(delegate), addTo(delegate), onComplete(() => {
    if (next < getLength(observables)) {
        pipe(createConcatObserver(delegate, observables, next + 1), sourceFrom(observables[next]));
    }
    else {
        pipe(delegate, dispose());
    }
}));
function concat(...observables) {
    return pipe(createObservable(observer => {
        if (!isEmpty(observables)) {
            pipe(createConcatObserver(observer, observables, 1), sourceFrom(observables[0]));
        }
        else {
            pipe(observer, dispose());
        }
    }), tagObservableType(computeMinTag(observables)));
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
const fromEnumerator = (options) => f => {
    const { delayStart = true } = options !== null && options !== void 0 ? options : {};
    return pipe(using(f, enumerator => defer(() => (observer) => {
        while (move(enumerator) && !isDisposed(observer)) {
            observer.notify(getCurrent(enumerator));
            __yield(options);
        }
        pipe(observer, dispose());
    }, delayStart ? options : none)), tagObservableType(hasDelay(options) ? 1 : 2));
};
/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `Enumerable` with a specified `delay` between emitted items.
 *
 * @param values The `Enumerable`.
 * @param delay The requested delay between emitted items by the observable.
 */
const fromEnumerable = (options) => enumerable => pipe(pipeLazy(enumerable, enumerate), fromEnumerator(options));
const fromEnumerableT = {
    fromEnumerable,
};
/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterator` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
const fromIterator = (options) => compose(fromIterator$1(), fromEnumerable(options));
const fromIteratorT = {
    fromIterator,
};
/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterable` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
const fromIterable = (options) => compose(fromIterable$1(), fromEnumerable(options));
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
        const count = getLength(observables);
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
const neverT = {
    never,
};

class BufferObserver extends AbstractDelegatingObserver {
    constructor(delegate, durationFunction, maxBufferSize) {
        super(delegate);
        this.durationFunction = durationFunction;
        this.maxBufferSize = maxBufferSize;
        this.buffer = [];
        this.durationSubscription = newInstance(DisposableRef, this, disposed);
    }
    notify(next) {
        const { buffer, maxBufferSize } = this;
        buffer.push(next);
        const doOnNotify = () => {
            this.durationSubscription.current = disposed;
            const buffer = this.buffer;
            this.buffer = [];
            pipe(this, getDelegate, notify(buffer));
        };
        if (getLength(buffer) === maxBufferSize) {
            doOnNotify();
        }
        else if (isDisposed(this.durationSubscription.current)) {
            this.durationSubscription.current = pipe(next, this.durationFunction, onNotify(doOnNotify), subscribe(getScheduler(this)));
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
    const operator = (delegate) => {
        return pipe(BufferObserver, newInstanceWith(delegate, durationFunction, maxBufferSize), addTo(delegate), onComplete(function onDispose() {
            const { buffer } = this;
            this.buffer = [];
            if (isEmpty(buffer)) {
                pipe(this, getDelegate, dispose());
            }
            else {
                pipe(buffer, fromValue(fromArrayT), sinkInto(getDelegate(this)));
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
            pipe(nextObs, onNotify(notifySink(getDelegate(observer))), subscribe(getScheduler(observer)), addTo(getDelegate(observer)), onComplete(observer.onDispose));
        }
        else if (isDisposed(observer)) {
            pipe(observer, getDelegate, dispose());
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
        const { queue } = this;
        queue.push(next);
        // Drop old events if the maxBufferSize has been exceeded
        if (getLength(queue) + this.activeCount > this.maxBufferSize) {
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
    const operator = (delegate) => {
        const observer = pipe(delegate, onDisposed(_ => {
            observer.queue.length = 0;
        }), delegate => newInstance(MergeObserver, delegate, maxBufferSize, maxConcurrency), addTo(delegate), onComplete(() => {
            if (getLength(observer.queue) + observer.activeCount === 0) {
                pipe(observer, getDelegate, dispose());
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
            pipe(observable, onNotify(notifySink(delegate)), subscribe(getScheduler(delegate)), addTo(delegate, true), onDisposed(doOnDispose));
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
    observer.durationSubscription.current = pipe(observer.durationFunction(next), onNotify(observer.onNotify), subscribe(getScheduler(observer)));
};
class ThrottleObserver extends AbstractDelegatingObserver {
    constructor(delegate, durationFunction, mode) {
        super(delegate);
        this.durationFunction = durationFunction;
        this.mode = mode;
        this.value = none;
        this.hasValue = false;
        this.durationSubscription = newInstance(DisposableRef, this, disposed);
        this.onNotify = (_) => {
            if (this.hasValue) {
                const value = this.value;
                this.value = none;
                this.hasValue = false;
                setupDurationSubscription$1(this, value);
                getDelegate(this).notify(value);
            }
        };
    }
    notify(next) {
        this.value = next;
        this.hasValue = true;
        const durationSubscriptionDisposableIsDisposed = isDisposed(this.durationSubscription.current);
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
        const observer = pipe(ThrottleObserver, newInstanceWith(delegate, durationFunction, mode), addTo(delegate), onComplete(() => {
            if (observer.mode !== "first" && observer.hasValue) {
                pipe(observer.value, fromValue(fromArrayT), sinkInto(delegate));
            }
        }));
        return observer;
    };
    return lift(operator);
}

const _timeoutError = /*@__PURE__*/ Symbol("@reactive-js/core/lib/observable/timeoutError");
/** Symbol thrown when the timeout operator times out */
const timeoutError = _timeoutError;
const setupDurationSubscription = (observer) => {
    observer.durationSubscription.current = pipe(observer.duration, subscribe(getScheduler(observer)));
};
class TimeoutObserver extends AbstractDisposableBindingDelegatingObserver {
    constructor(delegate, duration) {
        super(delegate);
        this.duration = duration;
        this.durationSubscription = newInstance(DisposableRef, this, disposed);
    }
    notify(next) {
        pipe(this.durationSubscription.current, dispose());
        pipe(this, getDelegate, notify(next));
    }
}
const returnTimeoutError = returns(timeoutError);
function timeout(duration) {
    const durationObs = typeof duration === "number"
        ? throws({ ...fromArrayT, ...mapT }, { delay: duration })(returnTimeoutError)
        : concat(duration, throws({ ...fromArrayT, ...mapT })(returnTimeoutError));
    const operator = (delegate) => {
        const observer = pipe(TimeoutObserver, newInstanceWith(delegate, durationObs));
        setupDurationSubscription(observer);
        return observer;
    };
    return lift(operator);
}

class WithLatestFromObserver extends AbstractDisposableBindingDelegatingObserver {
    constructor(delegate, selector) {
        super(delegate);
        this.selector = selector;
        this.hasLatest = false;
        this.selector = selector;
    }
    notify(next) {
        if (!isDisposed(this) && this.hasLatest) {
            const result = this.selector(next, this.otherLatest);
            pipe(this, getDelegate, notify(result));
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
        const observer = pipe(WithLatestFromObserver, newInstanceWith(delegate, selector));
        pipe(other, onNotify(next => {
            observer.hasLatest = true;
            observer.otherLatest = next;
        }), subscribe(getScheduler(observer)), addTo(observer), onComplete(() => {
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
        return isInContinuation(this);
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
        if (!isDisposed(this) && getLength(buffer) > 0) {
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
        const { enumerator, enumerators } = this;
        if (!isDisposed(this)) {
            if (hasCurrent(enumerator)) {
                enumerator.buffer.push(next);
            }
            else {
                enumerator.current = next;
            }
            if (shouldEmit(enumerators)) {
                const next = pipe(enumerators, map$1(getCurrent));
                const shouldCompleteResult = shouldComplete(enumerators);
                pipe(this, getDelegate, notify(next));
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
        ? pipe(using(pipeLazy(observables, map$1(enumerateObs)), (...enumerators) => pipe(zip$1(...enumerators), returns, fromEnumerator())), tagObservableType(2))
        : createObservable(observer => {
            const count = getLength(observables);
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

const catchError = /*@__PURE__*/ (() => {
    class CatchErrorObserver extends AbstractDelegatingObserver {
    }
    decorateWithCatchErrorNotify(CatchErrorObserver);
    decorateNotifyWithAssertions(CatchErrorObserver);
    return createCatchErrorOperator(liftSynchronousT, CatchErrorObserver);
})();
const catchErrorT = {
    catchError,
};
const fromDisposable = /*@__PURE__*/ createFromDisposable(createT);
const decodeWithCharset = /*@__PURE__*/ (() => {
    class DecodeWithCharsetObserver extends AbstractDelegatingObserver {
        constructor(delegate, textDecoder) {
            super(delegate);
            this.textDecoder = textDecoder;
        }
    }
    decorateWithDecodeWithCharsetNotify(DecodeWithCharsetObserver);
    decorateNotifyWithAssertions(DecodeWithCharsetObserver);
    return createDecodeWithCharsetOperator({ ...liftSynchronousT, ...fromArrayT }, DecodeWithCharsetObserver);
})();
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
const distinctUntilChanged = /*@__PURE__*/ (() => {
    class DistinctUntilChangedObserver extends AbstractDelegatingObserver {
        constructor(delegate, equality) {
            super(delegate);
            this.equality = equality;
            this.prev = none;
            this.hasValue = false;
        }
    }
    decorateWithDistinctUntilChangedNotify(DistinctUntilChangedObserver);
    decorateNotifyWithAssertions(DistinctUntilChangedObserver);
    return createDistinctUntilChangedOperator(liftSynchronousT, DistinctUntilChangedObserver);
})();
const distinctUntilChangedT = {
    distinctUntilChanged,
};
const everySatisfy = /*@__PURE__*/ (() => {
    class EverySatisfyObserver extends AbstractDelegatingObserver {
        constructor(delegate, predicate) {
            super(delegate);
            this.predicate = predicate;
        }
    }
    decorateWithEverySatisfyNotify(EverySatisfyObserver);
    decorateNotifyWithAssertions(EverySatisfyObserver);
    return createEverySatisfyOperator({ ...fromArrayT, ...liftSynchronousT }, EverySatisfyObserver);
})();
const everySatisfyT = {
    everySatisfy,
};
const fromObservable = () => identity;
const fromObservableT = {
    fromObservable,
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
    const { delayStart = true } = options !== null && options !== void 0 ? options : {};
    const factory = () => {
        let acc = initialValue();
        return (observer) => {
            while (!isDisposed(observer)) {
                acc = generator(acc);
                observer.notify(acc);
                __yield(options);
            }
        };
    };
    return pipe(defer(factory, delayStart ? options : none), tagObservableType(hasDelay(options) ? 1 : 2));
};
const generateT = {
    generate,
};
const keep = 
/*@__PURE__*/ (() => {
    class KeepObserver extends AbstractDelegatingObserver {
        constructor(delegate, predicate) {
            super(delegate);
            this.predicate = predicate;
        }
    }
    decorateWithKeepNotify(KeepObserver);
    decorateNotifyWithAssertions(KeepObserver);
    return createKeepOperator(liftSynchronousT, KeepObserver);
})();
const keepT = {
    keep,
};
const mapAsync = (f) => concatMap({ ...switchAllT, ...mapT }, (a) => fromPromise(() => f(a)));
const onSubscribe = /*@__PURE__*/ createOnSink(createT);
const getObserverCount = (observable) => observable.observerCount;
const pairwise = 
/*@__PURE__*/ (() => {
    class PairwiseObserver extends AbstractDelegatingObserver {
        constructor() {
            super(...arguments);
            this.hasPrev = false;
        }
    }
    decorateWithPairwiseNotify(PairwiseObserver);
    decorateNotifyWithAssertions(PairwiseObserver);
    return createPairwiseOperator(liftSynchronousT, PairwiseObserver);
})();
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
const multicast = (scheduler, options = {}) => observable => {
    const { replay = 0 } = options;
    const subject = newInstance(Subject, replay);
    pipe(observable, onNotify(publishTo(subject)), subscribe(scheduler), bindTo(subject));
    return subject;
};
const reduce = /*@__PURE__*/ (() => {
    class ReducerObserver extends AbstractDelegatingObserver {
        constructor(delegate, reducer, acc) {
            super(delegate);
            this.reducer = reducer;
            this.acc = acc;
        }
    }
    decorateWithReduceNotify(ReducerObserver);
    decorateNotifyWithAssertions(ReducerObserver);
    return createReduceOperator({ ...fromArrayT, ...liftSynchronousT }, ReducerObserver);
})();
const reduceT = {
    reduce,
};
const getReplay = (observable) => observable.replay;
const scan = /*@__PURE__*/ (() => {
    class ScanObserver extends AbstractDelegatingObserver {
        constructor(delegate, reducer, acc) {
            super(delegate);
            this.reducer = reducer;
            this.acc = acc;
        }
    }
    decorateWithScanNotify(ScanObserver);
    decorateNotifyWithAssertions(ScanObserver);
    return createScanOperator(liftSynchronousT, ScanObserver);
})();
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
const scanAsync = (scanner, initialValue) => observable => using(instanceFactory(Subject), accFeedbackStream => pipe(observable, zipWithLatestFrom(accFeedbackStream, (next, acc) => pipe(scanner(acc, next), takeFirst())), switchAll(), onNotify(publishTo(accFeedbackStream)), onSubscribe(() => pipe(accFeedbackStream, publish(initialValue())))));
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
    let multicasted = none;
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
/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
const skipFirst = /*@__PURE__*/ (() => {
    class SkipFirstObserver extends AbstractDelegatingObserver {
        constructor(delegate, skipCount) {
            super(delegate);
            this.skipCount = skipCount;
            this.count = 0;
        }
    }
    decorateWithSkipFirstNotify(SkipFirstObserver);
    decorateNotifyWithAssertions(SkipFirstObserver);
    return createSkipFirstOperator(liftSynchronousT, SkipFirstObserver);
})();
const skipFirstT = {
    skipFirst,
};
const someSatisfy = /*@__PURE__*/ (() => {
    class SomeSatisfyObserver extends AbstractDelegatingObserver {
        constructor(delegate, predicate) {
            super(delegate);
            this.predicate = predicate;
        }
    }
    decorateWithSomeSatisfyNotify(SomeSatisfyObserver);
    decorateNotifyWithAssertions(SomeSatisfyObserver);
    return createSomeSatisfyOperator({ ...fromArrayT, ...liftSynchronousT }, SomeSatisfyObserver);
})();
const someSatisfyT = {
    someSatisfy,
};
const subscribeOn = (scheduler) => observable => createObservable(({ dispatcher }) => pipe(observable, onNotify(dispatchTo(dispatcher)), subscribe(scheduler), bindTo(dispatcher)));
const takeFirst = /*@__PURE__*/ (() => {
    class TakeFirstObserver extends AbstractDelegatingObserver {
        constructor(delegate, maxCount) {
            super(delegate);
            this.maxCount = maxCount;
            this.count = 0;
        }
    }
    decorateWithTakeFirstNotify(TakeFirstObserver);
    decorateNotifyWithAssertions(TakeFirstObserver);
    return createTakeFirstOperator({ ...fromArrayT, ...liftSynchronousT }, TakeFirstObserver);
})();
const takeFirstT = {
    takeFirst,
};
/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
const takeLast = /*@__PURE__*/ (() => {
    class TakeLastObserver extends AbstractDelegatingObserver {
        constructor(delegate, maxCount) {
            super(delegate);
            this.maxCount = maxCount;
            this.last = [];
        }
    }
    decorateWithTakeLastNotify(TakeLastObserver);
    decorateNotifyWithAssertions(TakeLastObserver);
    return createTakeLastOperator({ ...fromArrayT, ...liftSynchronousT }, TakeLastObserver);
})();
const takeLastT = {
    takeLast,
};
const takeUntil = (notifier) => {
    const operator = (delegate) => {
        const takeUntilObserver = pipe(createDelegatingObserver(delegate), bindTo(delegate), bindTo(pipe(notifier, takeFirst(), subscribe(getScheduler(delegate)))));
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
const takeWhile = /*@__PURE__*/ (() => {
    class TakeWhileObserver extends AbstractDelegatingObserver {
        constructor(delegate, predicate, inclusive) {
            super(delegate);
            this.predicate = predicate;
            this.inclusive = inclusive;
        }
    }
    decorateWithTakeWhileNotify(TakeWhileObserver);
    decorateNotifyWithAssertions(TakeWhileObserver);
    return createTakeWhileOperator(liftSynchronousT, TakeWhileObserver);
})();
const takeWhileT = {
    takeWhile,
};
const throwIfEmpty = /*@__PURE__*/ (() => {
    class ThrowIfEmptyObserver extends AbstractDelegatingObserver {
        constructor() {
            super(...arguments);
            this.isEmpty = true;
        }
    }
    decorateWithThrowIfEmptyNotify(ThrowIfEmptyObserver);
    decorateNotifyWithAssertions(ThrowIfEmptyObserver);
    return createThrowIfEmptyOperator(liftT, ThrowIfEmptyObserver);
})();
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
const TContainerOf = undefined;

export { Subject, TContainerOf, __currentScheduler, __do, __memo, __observe, __using, buffer, bufferT, catchError, catchErrorT, combineLatest, combineLatestT, concat, concatAll, concatAllT, concatT, createObservable, createT, decodeWithCharset, decodeWithCharsetT, defer, deferT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, exhaust, exhaustT, forkCombineLatest, forkMerge, forkZipLatest, fromArray, fromArrayT, fromDisposable, fromEnumerable, fromEnumerableT, fromIterable, fromIterableT, fromIterator, fromIteratorT, fromObservable, fromObservableT, fromPromise, generate, generateT, getObserverCount, getReplay, isEnumerable, isRunnable, keep, keepT, map, mapAsync, mapT, merge, mergeAll, mergeAllT, mergeT, multicast, never, neverT, observable, onNotify, onSubscribe, pairwise, pairwiseT, publish, publishTo, reduce, reduceT, repeat, repeatT, retry, scan, scanAsync, scanAsyncT, scanT, share, skipFirst, skipFirstT, someSatisfy, someSatisfyT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throttle, throwIfEmpty, throwIfEmptyT, timeout, timeoutError, toEnumerable, toEnumerableT, toObservable, toObservableT, toPromise, toRunnable, toRunnableT, using, usingT, withLatestFrom, zip, zipLatest, zipLatestT, zipT, zipWithLatestFrom };
