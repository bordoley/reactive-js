import { getDelay, hasDelay } from './__internal__/__internal__optionParsing.mjs';
import { add as add$1, addIgnoringChildErrors as addIgnoringChildErrors$1, addTo as addTo$1, addToIgnoringChildErrors as addToIgnoringChildErrors$1, bindTo as bindTo$1, dispose as dispose$1, getException as getException$1, isDisposed as isDisposed$1, onDisposed as onDisposed$1, onComplete as onComplete$1, onError as onError$1 } from './__internal__/util/__internal__DisposableLike.mjs';
import { createInstanceFactory, mixin, include, init, props } from './__internal__/util/__internal__Objects.mjs';
import './containers.mjs';
import { newInstance, pipe, compose, none, isSome, isNone, raise, max, unsafeCast, pipeLazy, ignore } from './functions.mjs';
import { getScheduler } from './scheduling/ObserverLike.mjs';
import { MAX_SAFE_INTEGER } from './__internal__/__internal__env.mjs';
import { createPriorityQueue } from './__internal__/scheduling/__internal__queue.mjs';
import { createDisposable, disposed as disposed$1, disposableMixin, disposableRefMixin } from './__internal__/util/__internal__Disposables.mjs';
import { enumeratorMixin } from './__internal__/util/__internal__Enumerators.mjs';
import { MutableRefLike_current } from './__internal__/util/__internal__MutableRefLike.mjs';
import { EnumeratorLike_current, SourceLike_move } from './ix.mjs';
import { move, hasCurrent, getCurrent } from './ix/EnumeratorLike.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_shouldYield, SchedulerLike_schedule } from './scheduling.mjs';
import { ContinuationLike_run, PauseableLike_pause, PauseableLike_resume, SinkLike_notify } from './util.mjs';
import { run } from './util/ContinuationLike.mjs';
import { pause } from './util/PauseableLike.mjs';

const add = add$1;
const addIgnoringChildErrors = addIgnoringChildErrors$1;
const addTo = addTo$1;
const addToIgnoringChildErrors = addToIgnoringChildErrors$1;
const bindTo = bindTo$1;
const create = createDisposable;
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

const isInContinuation = (scheduler) => scheduler[SchedulerLike_inContinuation];
const getCurrentTime = (scheduler) => scheduler[SchedulerLike_now];
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
            if (!isDisposed(this)) {
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
                    pipe(this, dispose(error));
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
            const taskIsDispose = isDisposed(task.continuation);
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
            if (!isDisposed(task.continuation)) {
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
        const continuationActive = !isDisposed(instance[MutableRefLike_current]) &&
            isSome(task) &&
            instance.dueTime <= task.dueTime;
        if (isNone(task) || continuationActive || instance.isPaused) {
            return;
        }
        const dueTime = task.dueTime;
        const delay = max(dueTime - getCurrentTime(instance.host), 0);
        instance.dueTime = dueTime;
        const continuation = (_a = instance.hostContinuation) !== null && _a !== void 0 ? _a : (() => {
            for (let task = peek(instance); isSome(task) && !isDisposed(instance); task = peek(instance)) {
                const { continuation, dueTime } = task;
                const delay = max(dueTime - getCurrentTime(instance.host), 0);
                if (delay === 0) {
                    move(instance);
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
                    isDisposed(this) ||
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
            pipe(this, addIgnoringChildErrors(continuation));
            if (!isDisposed(continuation)) {
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
const createHostScheduler = /*@__PURE__*/ (() => {
    const supportsPerformanceNow = typeof performance === "object" && typeof performance.now === "function";
    const supportsSetImmediate = typeof setImmediate === "function";
    const supportsProcessHRTime = typeof process === "object" && typeof process.hrtime === "function";
    const supportsIsInputPending = typeof navigator === "object" &&
        navigator.scheduling !== undefined &&
        navigator.scheduling.isInputPending !== undefined;
    const isInputPending = () => { var _a, _b; return supportsIsInputPending && ((_b = (_a = navigator.scheduling) === null || _a === void 0 ? void 0 : _a.isInputPending()) !== null && _b !== void 0 ? _b : false); };
    const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
        const disposable = pipe(create(), addTo(continuation), onDisposed(() => clearImmediate(immmediate)));
        const immmediate = setImmediate(runContinuation, scheduler, continuation, disposable);
    };
    const scheduleDelayed = (scheduler, continuation, delay) => {
        const disposable = pipe(create(), addTo(continuation), onDisposed(_ => clearTimeout(timeout)));
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
        pipe(immmediateOrTimerDisposable, dispose());
        scheduler.startTime = getCurrentTime(scheduler);
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
            const inContinuation = isInContinuation(this);
            const { yieldRequested } = this;
            if (inContinuation) {
                this.yieldRequested = false;
            }
            return (inContinuation &&
                (yieldRequested ||
                    getCurrentTime(this) > this.startTime + this.yieldInterval ||
                    isInputPending()));
        },
        [SchedulerLike_requestYield]() {
            this.yieldRequested = true;
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            pipe(this, addIgnoringChildErrors(continuation));
            const continuationIsDisposed = isDisposed(continuation);
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
            pipe(this, addIgnoringChildErrors(continuation));
            if (!isDisposed(continuation)) {
                this.taskQueue.push({
                    id: this.taskIDCount++,
                    dueTime: getCurrentTime(this) + delay,
                    continuation,
                });
            }
        },
        [SourceLike_move]() {
            const taskQueue = this.taskQueue;
            if (isDisposed(this)) {
                return;
            }
            const task = taskQueue.pop();
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
            else {
                pipe(this, dispose());
            }
        },
    }));
    return (options = {}) => {
        const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
        return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
    };
})();

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

export { generateObservableT as $, disposed as A, bindTo as B, neverObservable as C, isInContinuation as D, toPausableScheduler as E, toErrorHandler as F, shouldYield as G, requestYield as H, toAbortSignal as I, toPriorityScheduler as J, deferEnumerableObservable as K, deferEnumerableObservableT as L, MulticastObservableLike_replay as M, deferObservable as N, ObservableLike_isEnumerable as O, deferObservableT as P, deferRunnableObservable as Q, ReactiveContainerLike_sinkInto as R, SubjectLike_publish as S, deferRunnable as T, emptyEnumerableObservableT as U, emptyObservableT as V, emptyRunnableObservableT as W, emptyRunnable as X, emptyRunnableT as Y, generateEnumerableObservableT as Z, __yield as _, ObservableLike_isRunnable as a, generateRunnableObservableT as a0, generateRunnable as a1, generateRunnableT as a2, neverEnumerableObservableT as a3, neverObservableT as a4, neverRunnableObservableT as a5, neverRunnable as a6, neverRunnableT as a7, createRunnableObservable as b, createEnumerableObservable as c, createObservable as d, dispose as e, addTo as f, createRunnable as g, MulticastObservableLike_observerCount as h, isDisposed as i, addIgnoringChildErrors as j, onComplete as k, addToIgnoringChildErrors as l, onError as m, create as n, onDisposed as o, getException as p, add as q, createVirtualTimeScheduler as r, schedule as s, toObservable as t, getCurrentTime as u, generateObservable as v, emptyObservable as w, createHostScheduler as x, deferRunnableObservableT as y, deferRunnableT as z };
