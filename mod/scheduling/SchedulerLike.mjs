/// <reference types="./SchedulerLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/constants.mjs';
import { mutableEnumeratorMixin } from '../__internal__/ix/EnumeratorLike.mutable.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../__internal__/mixins.mjs';
import { createPriorityQueue } from '../__internal__/scheduling/QueueLike.mjs';
import { getDelay } from '../__internal__/scheduling/SchedulerLike.options.mjs';
import { disposableMixin } from '../__internal__/util/DisposableLike.mixins.mjs';
import { disposableRefMixin } from '../__internal__/util/DisposableRefLike.mjs';
import { MutableRefLike_current } from '../__internal__/util/MutableRefLike.mjs';
import { none, isSome, pipe, isNone, raise, newInstance, isFunction, max, unsafeCast, compose } from '../functions.mjs';
import { EnumeratorLike_current, SourceLike_move } from '../ix.mjs';
import { move, hasCurrent, getCurrent } from '../ix/EnumeratorLike.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_shouldYield, SchedulerLike_schedule } from '../scheduling.mjs';
import { ContinuationLike_run, PauseableLike_pause, PauseableLike_resume } from '../util.mjs';
import { run } from '../util/ContinuationLike.mjs';
import { isDisposed, dispose, disposed, addIgnoringChildErrors, create, addTo, onDisposed } from '../util/DisposableLike.mjs';
import { pause } from '../util/PauseableLike.mjs';

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
    const continuation = isFunction(f) ? createContinuation(scheduler, f) : f;
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
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    return createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin, typedDisposableRefMixin), function QueueScheduler(instance, host) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
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
    const supportsPerformanceNow = typeof performance === "object" && isFunction(performance.now);
    const supportsSetImmediate = typeof setImmediate === "function";
    const supportsProcessHRTime = typeof process === "object" && isFunction(process.hrtime);
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
    const typedMutableEnumeratorMixin = mutableEnumeratorMixin();
    const createVirtualTimeSchedulerInstance = createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
        init(disposableMixin, instance);
        init(typedMutableEnumeratorMixin, instance);
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

export { __yield, createHostScheduler, createVirtualTimeScheduler, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };
