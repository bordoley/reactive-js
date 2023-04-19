/// <reference types="./Scheduler.createHostScheduler.d.ts" />

import * as CurrentTime from "../../../__internal__/CurrentTime.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, pipe, unsafeCast } from "../../../functions.js";
import { SchedulerLike_now } from "../../../scheduling.js";
import { DisposableLike_dispose } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_create from "../../../util/Disposable/__internal__/Disposable.create.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import { PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_scheduleContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "./Scheduler.mixin.js";
const supportsSetImmediate = typeof setImmediate === "function";
const supportsIsInputPending = /*@__PURE__*/ (() => typeof navigator === "object" &&
    navigator.scheduling !== none &&
    navigator.scheduling.isInputPending !== none)();
const isInputPending = () => supportsIsInputPending && (navigator.scheduling?.isInputPending() ?? false);
const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
    const disposable = pipe(Disposable_create(), Disposable_addTo(continuation), Disposable_onDisposed(() => clearImmediate(immmediate)));
    const immmediate = setImmediate(runContinuation, scheduler, continuation, disposable);
};
const scheduleDelayed = (scheduler, continuation, delay) => {
    const disposable = pipe(Disposable_create(), Disposable_addTo(continuation), Disposable_onDisposed(_ => clearTimeout(timeout)));
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
    scheduler[PrioritySchedulerImplementationLike_runContinuation](continuation);
};
const createHostSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(PriorityScheduler_mixin), function HostScheduler(instance, maxYieldInterval) {
    init(PriorityScheduler_mixin, instance, maxYieldInterval);
    return instance;
}, props({}), {
    get [SchedulerLike_now]() {
        return CurrentTime.now();
    },
    get [PrioritySchedulerImplementationLike_shouldYield]() {
        unsafeCast(this);
        return isInputPending();
    },
    [PrioritySchedulerImplementationLike_scheduleContinuation](continuation, delay) {
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
