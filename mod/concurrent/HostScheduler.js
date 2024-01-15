/// <reference types="./HostScheduler.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { SchedulerLike_now } from "../concurrent.js";
import { none, pipe } from "../functions.js";
import { DisposableLike_dispose } from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import { ContinuationLike_dueTime, ContinuationLike_run, } from "./__internal__/Continuation.js";
import { ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, } from "./__internal__/ContinuationScheduler.js";
import CurrentTimeSchedulerMixin from "./__mixins__/CurrentTimeSchedulerMixin.js";
const supportsSetImmediate = typeof setImmediate === "function";
const supportsIsInputPending = /*@__PURE__*/ (() => typeof navigator === "object" &&
    navigator.scheduling !== none &&
    navigator.scheduling.isInputPending !== none)();
const isInputPending = () => supportsIsInputPending && (navigator.scheduling?.isInputPending() ?? false);
const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
    const disposable = pipe(Disposable.create(), Disposable.addTo(continuation), Disposable.onDisposed(() => clearImmediate(immmediate)));
    const immmediate = setImmediate(runContinuation, scheduler, continuation, disposable);
};
const scheduleDelayed = (scheduler, continuation, delay) => {
    const disposable = pipe(Disposable.create(), Disposable.addTo(continuation), Disposable.onDisposed(_ => clearTimeout(timeout)));
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
    immmediateOrTimerDisposable[DisposableLike_dispose]();
    const dueTime = continuation[ContinuationLike_dueTime];
    const now = scheduler[SchedulerLike_now];
    // Occasionally the setTimeout will run delayed continuations early,
    // so reschedule in this case.
    if (now >= dueTime) {
        continuation[ContinuationLike_run]();
    }
    else {
        scheduler[ContinuationSchedulerLike_schedule](continuation);
    }
};
const createHostSchedulerInstance = /*@__PURE__*/ (() => mixInstanceFactory(include(CurrentTimeSchedulerMixin), function HostScheduler(instance, maxYieldInterval) {
    init(CurrentTimeSchedulerMixin, instance, maxYieldInterval);
    return instance;
}, props(), {
    get [ContinuationSchedulerLike_shouldYield]() {
        return isInputPending();
    },
    [ContinuationSchedulerLike_schedule](continuation) {
        const now = this[SchedulerLike_now];
        const dueTime = continuation[ContinuationLike_dueTime];
        const delay = dueTime - now;
        // setTimeout has min delay of 4 ms. So don't bother scheduling
        // delayed continuations is the intended delay is less than a 1 ms.
        if (delay > 1) {
            scheduleDelayed(this, continuation, delay);
        }
        else {
            scheduleImmediate(this, continuation);
        }
    },
}))();
export const create = (options = {}) => {
    const { maxYieldInterval = 300 } = options;
    return createHostSchedulerInstance(maxYieldInterval);
};
