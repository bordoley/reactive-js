/// <reference types="./SchedulerLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/env.mjs';
import { properties as properties$1, prototype as prototype$1 } from '../__internal__/ix/Enumerator.mjs';
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { runContinuation } from '../__internal__/scheduling.mjs';
import { createPriorityQueue } from '../__internal__/scheduling/queue.mjs';
import { properties, prototype } from '../__internal__/util/Disposable.mjs';
import { properties as properties$2, prototype as prototype$2 } from '../__internal__/util/DisposableRefLike.mjs';
import { MutableRefLike_current } from '../__internal__/util/MutableRefLike.mjs';
import { Object_init, init, createObjectFactory } from '../__internal__/util/Object.mjs';
import { pipe, raise, newInstanceWith, max } from '../functions.mjs';
import { EnumeratorLike_current, InteractiveSourceLike_move } from '../ix.mjs';
import { hasCurrent, getCurrent } from '../ix/EnumeratorLike.mjs';
import { move } from '../ix/InteractiveSourceLike.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_shouldYield, ContinuationLike_run, SchedulerLike_schedule } from '../scheduling.mjs';
import { PauseableLike_pause, PauseableLike_resume } from '../util.mjs';
import { create as create$1, addTo, onDisposed, addIgnoringChildErrors, disposed } from '../util/DisposableLike.mjs';
import { none, isSome, isNone } from '../util/Option.mjs';
import { isDisposed, dispose } from '../__internal__/util/DisposableLike.mjs';

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
    const properties$1 = {
        ...properties,
        scheduler: none,
        f: () => { },
    };
    const prototype$1 = {
        ...prototype,
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
        [Object_init](scheduler, f) {
            init(prototype, this);
            this.scheduler = scheduler;
            this.f = f;
        },
    };
    return createObjectFactory(prototype$1, properties$1);
})();
const __yield = (options) => {
    const delay = getDelay(options);
    const scheduler = isNone(currentScheduler)
        ? raise("__yield effect may only be invoked from within a SchedulerContinuation")
        : currentScheduler;
    if (delay > 0 || shouldYield(scheduler)) {
        pipe(YieldError, newInstanceWith(delay), raise);
    }
};
const schedule = (f, options) => scheduler => {
    const continuation = typeof f === "function" ? createContinuation(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
};
const create = /*@__PURE__*/ (() => {
    const supportsPerformanceNow = /*@__PURE__*/ (() => typeof performance === "object" && typeof performance.now === "function")();
    const supportsSetImmediate = /*@__PURE__*/ (() => typeof setImmediate === "function")();
    const supportsProcessHRTime = /*@__PURE__*/ (() => typeof process === "object" && typeof process.hrtime === "function")();
    const supportsIsInputPending = /*@__PURE__*/ (() => typeof navigator === "object" &&
        navigator.scheduling !== undefined &&
        navigator.scheduling.isInputPending !== undefined)();
    const isInputPending = () => supportsIsInputPending && navigator.scheduling.isInputPending();
    const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
        const disposable = pipe(create$1(), addTo(continuation), onDisposed(() => clearImmediate(immmediate)));
        const immmediate = setImmediate(run, scheduler, continuation, disposable);
    };
    const scheduleDelayed = (scheduler, continuation, delay) => {
        const disposable = pipe(create$1(), addTo(continuation), onDisposed(_ => clearTimeout(timeout)));
        const timeout = setTimeout(run, delay, scheduler, continuation, disposable);
    };
    const scheduleImmediate = (scheduler, continuation) => {
        if (supportsSetImmediate) {
            scheduleImmediateWithSetImmediate(scheduler, continuation);
        }
        else {
            scheduleDelayed(scheduler, continuation, 0);
        }
    };
    const run = (scheduler, continuation, immmediateOrTimerDisposable) => {
        // clear the immediateOrTimer disposable
        pipe(immmediateOrTimerDisposable, dispose());
        scheduler.startTime = getCurrentTime(scheduler);
        pipe(scheduler, runContinuation(continuation));
    };
    const properties$1 = {
        ...properties,
        [SchedulerLike_inContinuation]: false,
        startTime: 0,
        yieldInterval: 0,
        yieldRequested: false,
    };
    const prototype$1 = {
        ...prototype,
        [Object_init](yieldInterval) {
            init(prototype, this);
            this.yieldInterval = yieldInterval;
        },
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
            const self = this;
            const inContinuation = isInContinuation(self);
            const { yieldRequested } = self;
            if (inContinuation) {
                self.yieldRequested = false;
            }
            return (inContinuation &&
                (yieldRequested ||
                    getCurrentTime(self) > self.startTime + self.yieldInterval ||
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
    };
    const createInstance = /*@__PURE__*/ createObjectFactory(prototype$1, properties$1);
    return (options = {}) => {
        const { yieldInterval = 5 } = options;
        return createInstance(yieldInterval);
    };
})();
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
    const peek = (self) => {
        const { delayed, queue } = self;
        const now = getCurrentTime(self.host);
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
    const priorityShouldYield = (self, next) => {
        const { [EnumeratorLike_current]: current } = self;
        return (current !== next &&
            next.dueTime <= getCurrentTime(self.host) &&
            next.priority > current.priority);
    };
    const scheduleOnHost = (self) => {
        var _a;
        const task = peek(self);
        const continuationActive = !isDisposed(self[MutableRefLike_current]) &&
            isSome(task) &&
            self.dueTime <= task.dueTime;
        if (isNone(task) || continuationActive || self.isPaused) {
            return;
        }
        const dueTime = task.dueTime;
        const delay = max(dueTime - getCurrentTime(self.host), 0);
        self.dueTime = dueTime;
        const continuation = (_a = self.hostContinuation) !== null && _a !== void 0 ? _a : (() => {
            for (let task = peek(self); isSome(task) && !isDisposed(self); task = peek(self)) {
                const { continuation, dueTime } = task;
                const delay = max(dueTime - getCurrentTime(self.host), 0);
                if (delay === 0) {
                    move(self);
                    pipe(self, runContinuation(continuation));
                }
                else {
                    self.dueTime = getCurrentTime(self.host) + delay;
                }
                __yield({ delay });
            }
        });
        self.hostContinuation = continuation;
        self[MutableRefLike_current] = pipe(self.host, schedule(continuation, { delay }));
    };
    const properties$3 = {
        ...properties,
        ...properties$1,
        ...properties$2,
        [SchedulerLike_inContinuation]: false,
        delayed: none,
        dueTime: 0,
        host: none,
        hostContinuation: none,
        isPaused: false,
        queue: none,
        taskIDCounter: 0,
        yieldRequested: false,
    };
    const prototype$3 = {
        ...prototype,
        ...prototype$1,
        ...prototype$2,
        get [SchedulerLike_now]() {
            const self = this;
            return getCurrentTime(self.host);
        },
        get [SchedulerLike_shouldYield]() {
            const self = this;
            const { [SchedulerLike_inContinuation]: inContinuation, yieldRequested, } = self;
            if (inContinuation) {
                self.yieldRequested = false;
            }
            const next = peek(self);
            return (inContinuation &&
                (yieldRequested ||
                    isDisposed(self) ||
                    !hasCurrent(self) ||
                    self.isPaused ||
                    (isSome(next) ? priorityShouldYield(self, next) : false) ||
                    shouldYield(self.host)));
        },
        [InteractiveSourceLike_move]() {
            // First fast forward through any disposed tasks.
            peek(this);
            const task = this.queue.pop();
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
        },
        [Object_init](host) {
            init(prototype, this);
            init(prototype$2, this, disposed);
            this.delayed = createPriorityQueue(delayedComparator);
            this.queue = createPriorityQueue(taskComparator);
            this.host = host;
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
    };
    return createObjectFactory(prototype$3, properties$3);
})();
const toPausableScheduler = createQueueScheduler;
const toPriorityScheduler = createQueueScheduler;

export { __yield, create, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };
