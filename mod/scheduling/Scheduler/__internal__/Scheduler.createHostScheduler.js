/// <reference types="./Scheduler.createHostScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { isFunction, none, pipe, unsafeCast, } from "../../../functions.js";
import { SchedulerLike_now } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_create from "../../../util/Disposable/__internal__/Disposable.create.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import { ContinuationLike_continuationScheduler, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "../../PriorityScheduler/__internal__/PriorityScheduler.mixin.js";
const supportsPerformanceNow = /*@__PURE__*/ (() => typeof performance === "object" && isFunction(performance.now))();
const supportsSetImmediate = typeof setImmediate === "function";
const supportsProcessHRTime = /*@__PURE__*/ (() => typeof process === "object" && isFunction(process.hrtime))();
const supportsIsInputPending = /*@__PURE__*/ (() => typeof navigator === "object" &&
    navigator.scheduling !== none &&
    navigator.scheduling.isInputPending !== none)();
const isInputPending = () => { var _a, _b; return supportsIsInputPending && ((_b = (_a = navigator.scheduling) === null || _a === void 0 ? void 0 : _a.isInputPending()) !== null && _b !== void 0 ? _b : false); };
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
    scheduler[HostScheduler_startTime] = scheduler[SchedulerLike_now];
    scheduler[PrioritySchedulerImplementationLike_runContinuation](continuation);
};
const HostScheduler_startTime = Symbol("HostScheduler_startTime");
const HostScheduler_maxYieldInterval = Symbol("HostScheduler_maxYieldInterval");
const createHostSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(PriorityScheduler_mixin), function HostScheduler(instance, maxYieldInterval) {
    init(PriorityScheduler_mixin, instance);
    instance[HostScheduler_maxYieldInterval] = maxYieldInterval;
    return instance;
}, props({
    [HostScheduler_startTime]: 0,
    [HostScheduler_maxYieldInterval]: 0,
}), {
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
    get [PrioritySchedulerImplementationLike_shouldYield]() {
        unsafeCast(this);
        return (this[SchedulerLike_now] >
            this[HostScheduler_startTime] +
                this[HostScheduler_maxYieldInterval] || isInputPending());
    },
    [ContinuationSchedulerLike_schedule](continuation, delay) {
        pipe(this, Disposable_addIgnoringChildErrors(continuation));
        if (continuation[DisposableLike_isDisposed]) {
            return;
        }
        continuation[ContinuationLike_continuationScheduler] = this;
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
