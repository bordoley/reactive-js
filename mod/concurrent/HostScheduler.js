/// <reference types="./HostScheduler.d.ts" />

import { globalObject } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { SchedulerLike_now } from "../concurrent.js";
import { isSome, pipe } from "../functions.js";
import { DisposableLike_dispose } from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import { ContinuationLike_dueTime, ContinuationLike_run, } from "./__internal__/Continuation.js";
import { ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, } from "./__internal__/ContinuationScheduler.js";
import CurrentTimeSchedulerMixin from "./__mixins__/CurrentTimeSchedulerMixin.js";
const scheduleDelayed = (scheduler, continuation, delay) => {
    const disposable = pipe(Disposable.create(), Disposable.addTo(continuation), Disposable.onDisposed(_ => globalObject.clearTimeout(timeout)));
    const timeout = globalObject.setTimeout(runContinuation, delay, scheduler, continuation, disposable);
};
const scheduleImmediate = (scheduler, continuation) => {
    const { setImmediate } = globalObject;
    if (isSome(setImmediate)) {
        const disposable = pipe(Disposable.create(), Disposable.addTo(continuation), Disposable.onDisposed(() => globalObject.clearImmediate(immmediate)));
        const immmediate = setImmediate(runContinuation, scheduler, continuation, disposable);
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
        return globalObject?.navigator?.scheduling?.isInputPending?.() ?? false;
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
