/// <reference types="./SchedulerLike.d.ts" />
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { runContinuation, SchedulerLike_inContinuation } from '../__internal__/scheduling.mjs';
export { SchedulerLike_inContinuation } from '../__internal__/scheduling.mjs';
import { properties as properties$1, prototype as prototype$1 } from '../__internal__/util/Disposable.mjs';
import { Object_init, init, createObjectFactory } from '../__internal__/util/Object.mjs';
import { ContinuationLike_run } from './ContinuationLike.mjs';
import { create as create$1, addTo, onDisposed, addIgnoringChildErrors } from '../util/DisposableLike.mjs';
import { none, isSome, isNone } from '../util/Option.mjs';
import { pipe, raise, newInstanceWith } from '../util/functions.mjs';
import { dispose, isDisposed } from '../__internal__/util/DisposableLike.mjs';

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
const properties = {
    ...properties$1,
    [SchedulerLike_inContinuation]: false,
    startTime: 0,
    yieldInterval: 0,
    yieldRequested: false,
};
const prototype = {
    ...prototype$1,
    [Object_init](yieldInterval) {
        init(prototype$1, this);
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
const createInstance = /*@__PURE__*/ createObjectFactory(prototype, properties);
const create = (options = {}) => {
    const { yieldInterval = 5 } = options;
    return createInstance(yieldInterval);
};

const SchedulerLike_now = Symbol("SchedulerLike_now");
const SchedulerLike_requestYield = Symbol("SchedulerLike_requestYield");
const SchedulerLike_shouldYield = Symbol("SchedulerLike_shouldYield");
const SchedulerLike_schedule = Symbol("SchedulerLike_schedule");
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
    const properties = {
        ...properties$1,
        scheduler: none,
        f: () => { },
    };
    const prototype = {
        ...prototype$1,
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
            init(prototype$1, this);
            this.scheduler = scheduler;
            this.f = f;
        },
    };
    return createObjectFactory(prototype, properties);
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

export { SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, __yield, create, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield };
