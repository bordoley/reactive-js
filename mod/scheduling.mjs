/// <reference types="./scheduling.d.ts" />
import { MAX_SAFE_INTEGER } from './__internal__/env.mjs';
import { getDelay } from './__internal__/optionalArgs.mjs';
import { createPriorityQueue } from './__internal__/scheduling/queue.mjs';
import { getCurrentTime, SchedulerLike_inContinuation, SchedulerLike_now, isInContinuation } from './__internal__/schedulingInternal.mjs';
export { SchedulerLike_inContinuation, SchedulerLike_now } from './__internal__/schedulingInternal.mjs';
import { prototype } from './__internal__/util/Disposable.mjs';
import { prototype as prototype$1 } from './__internal__/util/Enumerator.mjs';
import { Object_properties, Object_init, init, mixWith, createObjectFactory } from './__internal__/util/Object.mjs';
import { pipe, none, isSome } from './functions.mjs';
import { createDisposable, ContinuationLike_run, SourceLike_move, EnumeratorLike_current } from './util.mjs';
import { run } from './util/ContinuationLike.mjs';
import { addTo, onDisposed, addIgnoringChildErrors } from './util/DisposableLike.mjs';
import { getCurrent } from './util/EnumeratorLike.mjs';
import { move } from './util/SourceLike.mjs';
import { dispose, isDisposed } from './__internal__/util/DisposableLikeInternal.mjs';

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
    const isInputPending = () => supportsIsInputPending && navigator.scheduling.isInputPending();
    const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
        const disposable = pipe(createDisposable(), addTo(continuation), onDisposed(() => clearImmediate(immmediate)));
        const immmediate = setImmediate(runContinuation, scheduler, continuation, disposable);
    };
    const scheduleDelayed = (scheduler, continuation, delay) => {
        const disposable = pipe(createDisposable(), addTo(continuation), onDisposed(_ => clearTimeout(timeout)));
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
    const createInstance = pipe({
        [Object_properties]: {
            [SchedulerLike_inContinuation]: false,
            startTime: 0,
            yieldInterval: 0,
            yieldRequested: false,
        },
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
    }, mixWith(prototype), createObjectFactory());
    return (options = {}) => {
        const { yieldInterval = 5 } = options;
        return createInstance(yieldInterval);
    };
})();
const createVirtualTimeScheduler = /*@__PURE__*/ (() => {
    const comparator = (a, b) => {
        let diff = 0;
        diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
        diff = diff !== 0 ? diff : a.id - b.id;
        return diff;
    };
    const createInstance = pipe({
        [Object_properties]: {
            [SchedulerLike_inContinuation]: false,
            [SchedulerLike_now]: 0,
            maxMicroTaskTicks: MAX_SAFE_INTEGER,
            microTaskTicks: 0,
            taskIDCount: 0,
            yieldRequested: false,
            taskQueue: none,
        },
        [Object_init](maxMicroTaskTicks) {
            init(prototype, this);
            this.maxMicroTaskTicks = maxMicroTaskTicks;
            this.taskQueue = createPriorityQueue(comparator);
        },
        get [SchedulerLike_shouldYield]() {
            const self = this;
            const { yieldRequested, [SchedulerLike_inContinuation]: inContinuation, } = self;
            if (inContinuation) {
                self.microTaskTicks++;
                self.yieldRequested = false;
            }
            return (inContinuation &&
                (yieldRequested || self.microTaskTicks >= self.maxMicroTaskTicks));
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
    }, mixWith(prototype, prototype$1), createObjectFactory());
    return (options = {}) => {
        const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
        return createInstance(maxMicroTaskTicks);
    };
})();
/** @ignore */
const ObserverLike_dispatcher = Symbol("ObserverLike_dispatcher");
/** @ignore */
const ObserverLike_scheduler = Symbol("ObserverLike_scheduler");

export { DispatcherLike_dispatch, DispatcherLike_scheduler, ObserverLike_dispatcher, ObserverLike_scheduler, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, createHostScheduler, createVirtualTimeScheduler };
