/// <reference types="./scheduling.d.ts" />
import { getDelay } from './__internal__/optionalArgs.mjs';
import { DisposableMixin_disposables, mixinDisposable } from './__internal__/util/disposables.mjs';
import { createDisposable } from './util.mjs';
import { addTo, onDisposed, dispose, DisposableLike_error, DisposableLike_isDisposed, addIgnoringChildErrors, isDisposed } from './util/DisposableLike.mjs';
import { none } from './util/Option.mjs';
import { pipe, instanceFactory } from './util/functions.mjs';
import { runContinuation } from './scheduling/SchedulerImplementationLike.mjs';
import { getCurrentTime, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, isInContinuation, SchedulerLike_requestYield, SchedulerLike_schedule } from './scheduling/SchedulerLike.mjs';

const supportsPerformanceNow = /*@__PURE__*/ (() => typeof performance === "object" && typeof performance.now === "function")();
const supportsSetImmediate = /*@__PURE__*/ (() => typeof setImmediate === "function")();
const supportsProcessHRTime = /*@__PURE__*/ (() => typeof process === "object" && typeof process.hrtime === "function")();
const supportsIsInputPending = /*@__PURE__*/ (() => typeof navigator === "object" &&
    navigator.scheduling !== undefined &&
    navigator.scheduling.isInputPending !== undefined)();
const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
    const disposable = pipe(createDisposable(), addTo(continuation), onDisposed(() => clearImmediate(immmediate)));
    const immmediate = setImmediate(run, scheduler, continuation, disposable);
};
const scheduleDelayed = (scheduler, continuation, delay) => {
    const disposable = pipe(createDisposable(), addTo(continuation), onDisposed(_ => clearTimeout(timeout)));
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
const hostSchedulerFactory = /*@__PURE__*/ (() => {
    var _a, _b, _c, _d;
    class HostScheduler {
        constructor(yieldInterval) {
            this.yieldInterval = yieldInterval;
            this[_a] = none;
            this[_b] = false;
            this[_c] = new Set();
            this[_d] = false;
            this.startTime = getCurrentTime(this);
            this.yieldRequested = false;
        }
        get [(_a = DisposableLike_error, _b = DisposableLike_isDisposed, _c = DisposableMixin_disposables, _d = SchedulerLike_inContinuation, SchedulerLike_now)]() {
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
        }
        get [SchedulerLike_shouldYield]() {
            const inContinuation = isInContinuation(this);
            const { yieldRequested } = this;
            if (inContinuation) {
                this.yieldRequested = false;
            }
            return (inContinuation &&
                (yieldRequested ||
                    getCurrentTime(this) > this.startTime + this.yieldInterval ||
                    this.isInputPending));
        }
        get isInputPending() {
            return (supportsIsInputPending && navigator.scheduling.isInputPending());
        }
        [SchedulerLike_requestYield]() {
            this.yieldRequested = true;
        }
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
        }
    }
    return pipe(HostScheduler, mixinDisposable(), instanceFactory());
})();
const createHostScheduler = (options = {}) => {
    const { yieldInterval = 5 } = options;
    const hostScheduler = hostSchedulerFactory(yieldInterval);
    return hostScheduler;
};

export { createHostScheduler };
