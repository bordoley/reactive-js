/// <reference types="./Scheduler.createHostScheduler.d.ts" />

import * as CurrentTime from "../../../__internal__/CurrentTime.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { SchedulerLike_now, } from "../../../concurrent.js";
import { none, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import ContinuationSchedulerMixin, { ContinuationSchedulerInstanceLike_scheduleContinuation, ContinuationSchedulerInstanceLike_shouldYield, ContinuationSchedulerMixinLike_runContinuation, } from "../../__mixins__/ContinuationSchedulerMixin.js";
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
    scheduler[ContinuationSchedulerMixinLike_runContinuation](continuation);
};
const createHostSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ContinuationSchedulerMixin), function HostScheduler(instance, maxYieldInterval) {
    init(ContinuationSchedulerMixin, instance, maxYieldInterval);
    return instance;
}, props({}), {
    get [SchedulerLike_now]() {
        return CurrentTime.now();
    },
    get [ContinuationSchedulerInstanceLike_shouldYield]() {
        return isInputPending();
    },
    [ContinuationSchedulerInstanceLike_scheduleContinuation](continuation, delay) {
        if (delay > 0) {
            scheduleDelayed(this, continuation, delay);
        }
        else {
            scheduleImmediate(this, continuation);
        }
    },
})))();
const Scheduler_createHostScheduler = (options = {}) => {
    const { maxYieldInterval = 300 } = options;
    return createHostSchedulerInstance(maxYieldInterval);
};
export default Scheduler_createHostScheduler;
