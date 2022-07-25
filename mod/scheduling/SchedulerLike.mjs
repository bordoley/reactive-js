/// <reference types="./SchedulerLike.d.ts" />
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { runContinuation } from '../__internal__/scheduling.mjs';
import { properties, prototype } from '../__internal__/util/Disposable.mjs';
import { Object_init, init, createObjectFactory } from '../__internal__/util/Object.mjs';
import { pipe, raise, newInstanceWith } from '../functions.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_shouldYield, ContinuationLike_run, SchedulerLike_schedule } from '../scheduling.mjs';
import { create as create$1, addTo, onDisposed, addIgnoringChildErrors } from '../util/DisposableLike.mjs';
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

export { __yield, create, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield };
