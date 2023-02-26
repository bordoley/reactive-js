/// <reference types="./Scheduler.createHostScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { isFunction, none, pipe, unsafeCast, } from "../../../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_create from "../../../util/Disposable/__internal__/Disposable.create.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Continuation_run from "../../Continuation/__internal__/Continuation.run.js";
import { getDelay } from "../../__internal__/Scheduler.options.js";
import getCurrentTime from "./Scheduler.getCurrentTime.js";
import isInContinuation from "./Scheduler.isInContinuation.js";
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
    pipe(immmediateOrTimerDisposable, Disposable_dispose());
    scheduler[HostScheduler_startTime] = getCurrentTime(scheduler);
    scheduler[SchedulerLike_inContinuation] = true;
    Continuation_run(continuation);
    scheduler[SchedulerLike_inContinuation] = false;
};
const HostScheduler_startTime = Symbol("HostScheduler_startTime");
const HostScheduler_yieldInterval = Symbol("HostScheduler_yieldInterval");
const HostScheduler_yieldRequested = Symbol("HostScheduler_yieldRequested");
const createHostSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin), function HostScheduler(instance, yieldInterval) {
    init(Disposable_mixin, instance);
    instance[HostScheduler_yieldInterval] = yieldInterval;
    return instance;
}, props({
    [SchedulerLike_inContinuation]: false,
    [HostScheduler_startTime]: 0,
    [HostScheduler_yieldInterval]: 0,
    [HostScheduler_yieldRequested]: false,
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
    get [SchedulerLike_shouldYield]() {
        unsafeCast(this);
        const inContinuation = isInContinuation(this);
        const { [HostScheduler_yieldRequested]: yieldRequested } = this;
        if (inContinuation) {
            this[HostScheduler_yieldRequested] = false;
        }
        return (inContinuation &&
            (yieldRequested ||
                getCurrentTime(this) >
                    this[HostScheduler_startTime] +
                        this[HostScheduler_yieldInterval] ||
                isInputPending()));
    },
    [SchedulerLike_requestYield]() {
        this[HostScheduler_yieldRequested] = true;
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        pipe(this, Disposable_addIgnoringChildErrors(continuation));
        const continuationIsDisposed = Disposable_isDisposed(continuation);
        if (!continuationIsDisposed && delay > 0) {
            scheduleDelayed(this, continuation, delay);
        }
        else if (!continuationIsDisposed) {
            scheduleImmediate(this, continuation);
        }
    },
})))();
const Scheduler_createHostScheduler = (options = {}) => {
    const { yieldInterval = 5 } = options;
    return createHostSchedulerInstance(yieldInterval);
};
export default Scheduler_createHostScheduler;
