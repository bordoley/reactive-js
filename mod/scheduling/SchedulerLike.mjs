/// <reference types="./SchedulerLike.d.ts" />
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { i as isDisposed, d as dispose, m as mixinDisposable } from '../DisposableLike-ef44e42b.mjs';
import { none, isSome, isNone } from '../util/Option.mjs';
import { pipe, raise, newInstanceWith, newInstance } from '../util/functions.mjs';
import { ContinuationLike_run } from './ContinuationLike.mjs';

const SchedulerLike_inContinuation = Symbol("SchedulerLike_inContinuation");
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
const Continuation = /*@__PURE__*/ (() => {
    class Continuation {
        constructor(scheduler, f) {
            this.scheduler = scheduler;
            this.f = f;
        }
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
        }
    }
    return pipe(Continuation, mixinDisposable());
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
    const continuation = typeof f === "function" ? newInstance(Continuation, scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
};

export { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, __yield, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield };
