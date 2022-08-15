import { addTo as addTo$1, onDisposed as onDisposed$1, dispose as dispose$1, addIgnoringChildErrors as addIgnoringChildErrors$1, isDisposed as isDisposed$1, add as add$1, addToIgnoringChildErrors as addToIgnoringChildErrors$1, bindTo as bindTo$1, getException as getException$1, onComplete as onComplete$1, onError as onError$1 } from './__internal__/util/__internal__DisposableLike.mjs';
import { disposableMixin, disposableRefMixin, createDisposable, disposed as disposed$1 } from './__internal__/util/__internal__Disposables.mjs';
import { pipe, unsafeCast, none, isSome, isNone, raise, newInstance, max, compose, getLength, pipeLazy, ignore } from './functions.mjs';
import { getDelay, hasDelay } from './__internal__/__internal__optionParsing.mjs';
import { createInstanceFactory, mixin, include, init, props } from './__internal__/util/__internal__Objects.mjs';
import './containers.mjs';
import { MAX_SAFE_INTEGER } from './__internal__/__internal__env.mjs';
import { SchedulerLike_inContinuation as SchedulerLike_inContinuation$1, SchedulerLike_now as SchedulerLike_now$1, getCurrentTime as getCurrentTime$1, isInContinuation as isInContinuation$1 } from './__internal__/__internal__scheduling.mjs';
import { createPriorityQueue } from './__internal__/scheduling/__internal__queue.mjs';
import { enumeratorMixin } from './__internal__/util/__internal__Enumerators.mjs';
import { ContinuationLike_run, SourceLike_move, EnumeratorLike_current, PauseableLike_pause, PauseableLike_resume, SinkLike_notify } from './util.mjs';
import { run } from './util/ContinuationLike.mjs';
import { move, getCurrent, hasCurrent } from './util/EnumeratorLike.mjs';
import { MutableRefLike_current } from './__internal__/util/__internal__MutableRefLike.mjs';
import { pause } from './util/PauseableLike.mjs';
import { move as move$1 } from './util/SourceLike.mjs';

/** @ignore */
const SchedulerLike_inContinuation = SchedulerLike_inContinuation$1;
/** @ignore */
const SchedulerLike_now = SchedulerLike_now$1;
/** @ignore */
const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
/** @ignore */
const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
/** @ignore */
const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
/** @ignore */
const DispatcherLike_dispatch = Symbol("DispatcherLike_dispatch");
/** @ignore */
const DispatcherLike_scheduler = Symbol("DispatcherLike_scheduler");
const createHostScheduler = /*@__PURE__*/ (() => {
    const supportsPerformanceNow = typeof performance === "object" && typeof performance.now === "function";
    const supportsSetImmediate = typeof setImmediate === "function";
    const supportsProcessHRTime = typeof process === "object" && typeof process.hrtime === "function";
    const supportsIsInputPending = typeof navigator === "object" &&
        navigator.scheduling !== undefined &&
        navigator.scheduling.isInputPending !== undefined;
    const isInputPending = () => { var _a, _b; return supportsIsInputPending && ((_b = (_a = navigator.scheduling) === null || _a === void 0 ? void 0 : _a.isInputPending()) !== null && _b !== void 0 ? _b : false); };
    const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
        const disposable = pipe(create(), addTo$1(continuation), onDisposed$1(() => clearImmediate(immmediate)));
        const immmediate = setImmediate(runContinuation, scheduler, continuation, disposable);
    };
    const scheduleDelayed = (scheduler, continuation, delay) => {
        const disposable = pipe(create(), addTo$1(continuation), onDisposed$1(_ => clearTimeout(timeout)));
        const timeout = setTimeout(runContinuation, delay, scheduler, continuation, disposable);
    };
    const scheduleImmediate = (scheduler, continuation) => {
        if (supportsSetImmediate) {
            scheduleImmediateWithSetImmediate(scheduler, continuation);
        }
        else {
            scheduleDelayed(scheduler, continuation, 0);
        }
    };
    const runContinuation = (scheduler, continuation, immmediateOrTimerDisposable) => {
        // clear the immediateOrTimer disposable
        pipe(immmediateOrTimerDisposable, dispose$1());
        scheduler.startTime = getCurrentTime$1(scheduler);
        scheduler[SchedulerLike_inContinuation] = true;
        run(continuation);
        scheduler[SchedulerLike_inContinuation] = false;
    };
    const createHostSchedulerInstance = createInstanceFactory(mixin(include(disposableMixin), function HostScheduler(instance, yieldInterval) {
        init(disposableMixin, instance);
        instance.yieldInterval = yieldInterval;
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
        startTime: 0,
        yieldInterval: 0,
        yieldRequested: false,
    }), {
        get [SchedulerLike_now]() {
            if (supportsPerformanceNow) {
                return performance.now();
            }
            else if (supportsProcessHRTime) {
                const hr = process.hrtime();
                return hr[0] * 1000 + hr[1] / 1e6;
            }
            else {
                return Date.now();
            }
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const inContinuation = isInContinuation$1(this);
            const { yieldRequested } = this;
            if (inContinuation) {
                this.yieldRequested = false;
            }
            return (inContinuation &&
                (yieldRequested ||
                    getCurrentTime$1(this) > this.startTime + this.yieldInterval ||
                    isInputPending()));
        },
        [SchedulerLike_requestYield]() {
            this.yieldRequested = true;
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            pipe(this, addIgnoringChildErrors$1(continuation));
            const continuationIsDisposed = isDisposed$1(continuation);
            if (!continuationIsDisposed && delay > 0) {
                scheduleDelayed(this, continuation, delay);
            }
            else if (!continuationIsDisposed) {
                scheduleImmediate(this, continuation);
            }
        },
    }));
    return (options = {}) => {
        const { yieldInterval = 5 } = options;
        return createHostSchedulerInstance(yieldInterval);
    };
})();
const createVirtualTimeScheduler = /*@__PURE__*/ (() => {
    const comparator = (a, b) => {
        let diff = 0;
        diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
        diff = diff !== 0 ? diff : a.id - b.id;
        return diff;
    };
    const typedEnumeratorMixin = enumeratorMixin();
    const createVirtualTimeSchedulerInstance = createInstanceFactory(mixin(include(disposableMixin, typedEnumeratorMixin), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
        init(disposableMixin, instance);
        instance.maxMicroTaskTicks = maxMicroTaskTicks;
        instance.taskQueue = createPriorityQueue(comparator);
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
        [SchedulerLike_now]: 0,
        maxMicroTaskTicks: MAX_SAFE_INTEGER,
        microTaskTicks: 0,
        taskIDCount: 0,
        yieldRequested: false,
        taskQueue: none,
    }), {
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const { yieldRequested, [SchedulerLike_inContinuation]: inContinuation, } = this;
            if (inContinuation) {
                this.microTaskTicks++;
                this.yieldRequested = false;
            }
            return (inContinuation &&
                (yieldRequested || this.microTaskTicks >= this.maxMicroTaskTicks));
        },
        [ContinuationLike_run]() {
            while (move(this)) {
                const task = getCurrent(this);
                const { dueTime, continuation } = task;
                this.microTaskTicks = 0;
                this[SchedulerLike_now] = dueTime;
                this[SchedulerLike_inContinuation] = true;
                run(continuation);
                this[SchedulerLike_inContinuation] = false;
            }
        },
        [SchedulerLike_requestYield]() {
            this.yieldRequested = true;
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            pipe(this, addIgnoringChildErrors$1(continuation));
            if (!isDisposed$1(continuation)) {
                this.taskQueue.push({
                    id: this.taskIDCount++,
                    dueTime: getCurrentTime$1(this) + delay,
                    continuation,
                });
            }
        },
        [SourceLike_move]() {
            const taskQueue = this.taskQueue;
            if (isDisposed$1(this)) {
                return;
            }
            const task = taskQueue.pop();
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
            else {
                pipe(this, dispose$1());
            }
        },
    }));
    return (options = {}) => {
        const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
        return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
    };
})();
/** @ignore */
const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");
/** @ignore */
const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");

const dispatch = (v) => dispatcher => {
    dispatcher[DispatcherLike_dispatch](v);
    return dispatcher;
};
const dispatchTo = (dispatcher) => v => dispatcher[DispatcherLike_dispatch](v);
const getScheduler$1 = (dispatcher) => dispatcher[DispatcherLike_scheduler];

const getScheduler = (observer) => observer[ObserverLike_scheduler];
const getDispatcher = (observer) => observer[ObserverLike_dispatcher];

const isInContinuation = isInContinuation$1;
const getCurrentTime = getCurrentTime$1;
const requestYield = (scheduler) => scheduler[SchedulerLike_requestYield]();
const shouldYield = (scheduler) => scheduler[SchedulerLike_shouldYield];
const isYieldError = (e) => e instanceof YieldError;
class YieldError {
    constructor(delay) {
        this.delay = delay;
    }
}
let currentScheduler = none;
const createContinuation = /*@__PURE__*/ (() => {
    return createInstanceFactory(mixin(include(disposableMixin), function Continuation(instance, scheduler, f) {
        init(disposableMixin, instance);
        instance.scheduler = scheduler;
        instance.f = f;
        return instance;
    }, props({
        scheduler: none,
        f: none,
    }), {
        [ContinuationLike_run]() {
            if (!isDisposed$1(this)) {
                let error = none;
                let yieldError = none;
                const { scheduler } = this;
                const oldCurrentScheduler = currentScheduler;
                currentScheduler = scheduler;
                try {
                    this.f();
                }
                catch (cause) {
                    if (isYieldError(cause)) {
                        yieldError = cause;
                    }
                    else {
                        error = { cause };
                    }
                }
                currentScheduler = oldCurrentScheduler;
                if (isSome(yieldError)) {
                    pipe(scheduler, schedule(this, yieldError));
                }
                else {
                    pipe(this, dispose$1(error));
                }
            }
        },
    }));
})();
const __yield = (options) => {
    const delay = getDelay(options);
    const scheduler = isNone(currentScheduler)
        ? raise("__yield effect may only be invoked from within a SchedulerContinuation")
        : currentScheduler;
    if (delay > 0 || shouldYield(scheduler)) {
        pipe(newInstance(YieldError, delay), raise);
    }
};
const schedule = (f, options) => scheduler => {
    const continuation = typeof f === "function" ? createContinuation(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
};
const createQueueScheduler = 
/*@__PURE__*/ (() => {
    const delayedComparator = (a, b) => {
        let diff = 0;
        diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
        diff = diff !== 0 ? diff : a.taskID - b.taskID;
        return diff;
    };
    const taskComparator = (a, b) => {
        let diff = 0;
        diff = diff !== 0 ? diff : a.priority - b.priority;
        diff = diff !== 0 ? diff : a.taskID - b.taskID;
        return diff;
    };
    const peek = (instance) => {
        const { delayed, queue } = instance;
        const now = getCurrentTime(instance.host);
        while (true) {
            const task = delayed.peek();
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = isDisposed$1(task.continuation);
            if (task.dueTime > now && !taskIsDispose) {
                break;
            }
            delayed.pop();
            if (!taskIsDispose) {
                queue.push(task);
            }
        }
        let task = none;
        while (true) {
            task = queue.peek();
            if (isNone(task)) {
                break;
            }
            if (!isDisposed$1(task.continuation)) {
                break;
            }
            queue.pop();
        }
        return task !== null && task !== void 0 ? task : delayed.peek();
    };
    const priorityShouldYield = (instance, next) => {
        const { [EnumeratorLike_current]: current } = instance;
        return (current !== next &&
            next.dueTime <= getCurrentTime(instance.host) &&
            next.priority > current.priority);
    };
    const scheduleOnHost = (instance) => {
        var _a;
        const task = peek(instance);
        const continuationActive = !isDisposed$1(instance[MutableRefLike_current]) &&
            isSome(task) &&
            instance.dueTime <= task.dueTime;
        if (isNone(task) || continuationActive || instance.isPaused) {
            return;
        }
        const dueTime = task.dueTime;
        const delay = max(dueTime - getCurrentTime(instance.host), 0);
        instance.dueTime = dueTime;
        const continuation = (_a = instance.hostContinuation) !== null && _a !== void 0 ? _a : (() => {
            for (let task = peek(instance); isSome(task) && !isDisposed$1(instance); task = peek(instance)) {
                const { continuation, dueTime } = task;
                const delay = max(dueTime - getCurrentTime(instance.host), 0);
                if (delay === 0) {
                    move$1(instance);
                    instance[SchedulerLike_inContinuation] = true;
                    run(continuation);
                    instance[SchedulerLike_inContinuation] = false;
                }
                else {
                    instance.dueTime = getCurrentTime(instance.host) + delay;
                }
                __yield({ delay });
            }
        });
        instance.hostContinuation = continuation;
        instance[MutableRefLike_current] = pipe(instance.host, schedule(continuation, { delay }));
    };
    const typedDisposableRefMixin = disposableRefMixin();
    const typedEnumeratorMixin = enumeratorMixin();
    return createInstanceFactory(mixin(include(disposableMixin, typedEnumeratorMixin, typedDisposableRefMixin), function QueueScheduler(instance, host) {
        init(disposableMixin, instance);
        init(typedEnumeratorMixin, instance);
        init(typedDisposableRefMixin, instance, disposed);
        instance.delayed = createPriorityQueue(delayedComparator);
        instance.queue = createPriorityQueue(taskComparator);
        instance.host = host;
        return instance;
    }, props({
        [SchedulerLike_inContinuation]: false,
        delayed: none,
        dueTime: 0,
        host: none,
        hostContinuation: none,
        isPaused: false,
        queue: none,
        taskIDCounter: 0,
        yieldRequested: false,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return getCurrentTime(this.host);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const { [SchedulerLike_inContinuation]: inContinuation, yieldRequested, } = this;
            if (inContinuation) {
                this.yieldRequested = false;
            }
            const next = peek(this);
            return (inContinuation &&
                (yieldRequested ||
                    isDisposed$1(this) ||
                    !hasCurrent(this) ||
                    this.isPaused ||
                    (isSome(next) ? priorityShouldYield(this, next) : false) ||
                    shouldYield(this.host)));
        },
        [SourceLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = this.queue.pop();
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
        },
        [SchedulerLike_requestYield]() {
            this.yieldRequested = true;
        },
        [PauseableLike_pause]() {
            this.isPaused = true;
            this[MutableRefLike_current] = disposed;
        },
        [PauseableLike_resume]() {
            this.isPaused = false;
            scheduleOnHost(this);
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const { priority } = options !== null && options !== void 0 ? options : {};
            pipe(this, addIgnoringChildErrors$1(continuation));
            if (!isDisposed$1(continuation)) {
                const now = getCurrentTime(this.host);
                const dueTime = max(now + delay, now);
                const task = isInContinuation(this) &&
                    hasCurrent(this) &&
                    getCurrent(this).continuation === continuation &&
                    delay <= 0
                    ? getCurrent(this)
                    : {
                        taskID: this.taskIDCounter++,
                        continuation,
                        dueTime,
                        priority: isSome(priority)
                            ? max(priority, 0)
                            : MAX_SAFE_INTEGER,
                    };
                const { delayed, queue } = this;
                const targetQueue = dueTime > now ? delayed : queue;
                targetQueue.push(task);
                scheduleOnHost(this);
            }
        },
    }));
})();
const toPausableScheduler = compose(createQueueScheduler, pause);
const toPriorityScheduler = createQueueScheduler;

/** @ignore */
const ReactiveContainerLike_sinkInto = Symbol("ReactiveContainerLike_sinkInto");
/**  @ignore */
const ObservableLike_isEnumerable = Symbol("ObservableLike_isEnumerable");
/**  @ignore */
const ObservableLike_isRunnable = Symbol("ObservableLike_isRunnable");
/** @ignore */
const MulticastObservableLike_observerCount = Symbol("MulticastObservableLike_observerCount");
/** @ignore */
const MulticastObservableLike_replay = Symbol("MulticastObservableLike_replay");
/** @ignore */
const SubjectLike_publish = Symbol("SubjectLike_publish");
const createObservableImpl = /*@__PURE__*/ (() => {
    return createInstanceFactory(mixin(function CreateObservable(instance, f, isEnumerable, isRunnable) {
        instance.f = f;
        instance[ObservableLike_isEnumerable] = isEnumerable;
        instance[ObservableLike_isRunnable] = isEnumerable || isRunnable;
        return instance;
    }, props({
        f: none,
        [ObservableLike_isRunnable]: false,
        [ObservableLike_isEnumerable]: false,
    }), {
        [ReactiveContainerLike_sinkInto](observer) {
            try {
                this.f(observer);
            }
            catch (cause) {
                pipe(observer, dispose$1({ cause }));
            }
        },
    }));
})();
const createEnumerableObservable = (f) => createObservableImpl(f, true, true);
const createObservable = (f) => createObservableImpl(f, false, false);
const createRunnableObservable = (f) => createObservableImpl(f, false, true);
const createRunnable = /*@__PURE__*/ (() => {
    return createInstanceFactory(mixin(function Runnable(instance, run) {
        instance.run = run;
        return instance;
    }, props({
        run: none,
    }), {
        [ReactiveContainerLike_sinkInto](sink) {
            try {
                this.run(sink);
                pipe(sink, dispose$1());
            }
            catch (cause) {
                pipe(sink, dispose$1({ cause }));
            }
        },
    }));
})();
const createSubject = /*@__PURE__*/ (() => {
    const createSubjectInstance = createInstanceFactory(mixin(include(disposableMixin), function Subject(instance, replay) {
        init(disposableMixin, instance);
        instance[MulticastObservableLike_replay] = replay;
        instance.observers = newInstance(Set);
        instance.replayed = [];
        return instance;
    }, props({
        [MulticastObservableLike_replay]: 0,
        observers: none,
        replayed: none,
    }), {
        [ObservableLike_isEnumerable]: false,
        [ObservableLike_isRunnable]: false,
        get [MulticastObservableLike_observerCount]() {
            unsafeCast(this);
            return this.observers.size;
        },
        [SubjectLike_publish](next) {
            if (!isDisposed$1(this)) {
                const { replayed } = this;
                const replay = this[MulticastObservableLike_replay];
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
        },
        [ReactiveContainerLike_sinkInto](observer) {
            if (!isDisposed$1(this)) {
                const { observers } = this;
                observers.add(observer);
                pipe(observer, onDisposed$1(_ => {
                    observers.delete(observer);
                }));
            }
            const dispatcher = getDispatcher(observer);
            // The idea here is that an onSubscribe function may
            // call next from unscheduled sources such as event handlers.
            // So we marshall those events back to the scheduler.
            for (const next of this.replayed) {
                pipe(dispatcher, dispatch(next));
            }
            pipe(this, addIgnoringChildErrors$1(dispatcher));
        },
    }));
    return (options) => {
        const { replay: replayOption = 0 } = options !== null && options !== void 0 ? options : {};
        const replay = max(replayOption, 0);
        return createSubjectInstance(replay);
    };
})();
const deferObservableImpl = (factory, isEnumerable, isRunnable) => createObservableImpl(observer => {
    factory()[ReactiveContainerLike_sinkInto](observer);
}, isEnumerable, isRunnable);
const deferEnumerableObservable = (f => deferObservableImpl(f, true, true));
const deferEnumerableObservableT = {
    defer: deferEnumerableObservable,
};
const deferObservable = f => deferObservableImpl(f, false, false);
const deferObservableT = {
    defer: deferObservable,
};
const deferRunnableObservable = (f => deferObservableImpl(f, false, true));
const deferRunnableObservableT = {
    defer: deferRunnableObservable,
};
const deferRunnable = f => createRunnable(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
});
const deferRunnableT = { defer: deferRunnable };
const emptyObservable = ((options) => {
    const delay = getDelay(options);
    return delay > 0
        ? createRunnableObservable(sink => {
            pipe(sink, getScheduler, schedule(pipeLazy(sink, dispose$1()), { delay }));
        })
        : createEnumerableObservable(sink => {
            pipe(sink, dispose$1());
        });
});
const emptyEnumerableObservableT = {
    empty: emptyObservable,
};
const emptyObservableT = {
    empty: emptyObservable,
};
const emptyRunnableObservableT = {
    empty: emptyObservable,
};
const emptyRunnable = () => createRunnable(sink => {
    pipe(sink, dispose$1());
});
const emptyRunnableT = { empty: emptyRunnable };
/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
const generateObservable = ((generator, initialValue, options) => {
    const delay = getDelay(options);
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let acc = initialValue();
        const continuation = () => {
            while (!isDisposed$1(observer)) {
                acc = generator(acc);
                observer[SinkLike_notify](acc);
                __yield(options);
            }
        };
        pipe(observer, getScheduler, schedule(continuation, delayStart && hasDelay(options) ? options : none), addTo$1(observer));
    };
    return delay > 0
        ? createRunnableObservable(onSink)
        : createEnumerableObservable(onSink);
});
const generateEnumerableObservableT = { generate: generateObservable };
const generateObservableT = { generate: generateObservable };
const generateRunnableObservableT = { generate: generateObservable };
const generateRunnable = (generator, initialValue) => createRunnable((sink) => {
    let acc = initialValue();
    while (!isDisposed$1(sink)) {
        acc = generator(acc);
        sink[SinkLike_notify](acc);
    }
});
const generateRunnableT = {
    generate: generateRunnable,
};
const neverObservable = () => createEnumerableObservable(ignore);
const neverEnumerableObservableT = {
    never: neverObservable,
};
const neverObservableT = {
    never: neverObservable,
};
const neverRunnableObservableT = {
    never: neverObservable,
};
const neverRunnable = () => createRunnable(ignore);
const neverRunnableT = {
    never: neverRunnable,
};

const add = add$1;
const addIgnoringChildErrors = addIgnoringChildErrors$1;
const addTo = addTo$1;
const addToIgnoringChildErrors = addToIgnoringChildErrors$1;
const bindTo = bindTo$1;
const create = () => createDisposable();
const dispose = dispose$1;
const disposed = disposed$1;
const getException = getException$1;
const isDisposed = isDisposed$1;
const onDisposed = onDisposed$1;
const onComplete = onComplete$1;
const onError = onError$1;
const toAbortSignal = (disposable) => {
    const abortController = newInstance(AbortController);
    pipe(disposable, onDisposed(e => abortController.abort(e === null || e === void 0 ? void 0 : e.cause)));
    return abortController.signal;
};
const toObservable = () => compose(addTo, createObservable);
/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
const toErrorHandler = (disposable) => cause => pipe(disposable, dispose({ cause }));

export { requestYield as $, emptyObservable as A, dispatch as B, dispatchTo as C, DispatcherLike_scheduler as D, createHostScheduler as E, deferRunnableObservableT as F, deferRunnableT as G, MulticastObservableLike_replay as H, getScheduler$1 as I, disposed as J, bindTo as K, neverObservable as L, MulticastObservableLike_observerCount as M, SchedulerLike_inContinuation as N, ObservableLike_isEnumerable as O, SchedulerLike_now as P, SchedulerLike_shouldYield as Q, ReactiveContainerLike_sinkInto as R, SubjectLike_publish as S, SchedulerLike_requestYield as T, SchedulerLike_schedule as U, toPausableScheduler as V, getDispatcher as W, toErrorHandler as X, isInContinuation as Y, shouldYield as Z, __yield as _, ObservableLike_isRunnable as a, toAbortSignal as a0, toPriorityScheduler as a1, deferEnumerableObservable as a2, deferEnumerableObservableT as a3, deferObservable as a4, deferObservableT as a5, deferRunnableObservable as a6, deferRunnable as a7, emptyEnumerableObservableT as a8, emptyObservableT as a9, emptyRunnableObservableT as aa, emptyRunnable as ab, emptyRunnableT as ac, generateEnumerableObservableT as ad, generateObservableT as ae, generateRunnableObservableT as af, generateRunnable as ag, generateRunnableT as ah, neverEnumerableObservableT as ai, neverObservableT as aj, neverRunnableObservableT as ak, neverRunnable as al, neverRunnableT as am, createEnumerableObservable as b, createSubject as c, createRunnableObservable as d, createObservable as e, dispose as f, getScheduler as g, addTo as h, isDisposed as i, createRunnable as j, onDisposed as k, DispatcherLike_dispatch as l, ObserverLike_scheduler as m, ObserverLike_dispatcher as n, onComplete as o, addToIgnoringChildErrors as p, onError as q, create as r, schedule as s, addIgnoringChildErrors as t, getException as u, add as v, createVirtualTimeScheduler as w, toObservable as x, getCurrentTime as y, generateObservable as z };
