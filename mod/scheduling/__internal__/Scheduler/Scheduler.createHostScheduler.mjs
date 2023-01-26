/// <reference types="./Scheduler.createHostScheduler.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { isFunction, pipe, unsafeCast } from '../../../functions.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import Disposable_addIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_create from '../../../util/__internal__/Disposable/Disposable.create.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Disposable_onDisposed from '../../../util/__internal__/Disposable/Disposable.onDisposed.mjs';
import Continuation_run from '../Continuation/Continuation.run.mjs';
import { getDelay } from '../Scheduler.options.mjs';
import Scheduler_getCurrentTime from './Scheduler.getCurrentTime.mjs';
import Scheduler_isInContinuation from './Scheduler.isInContinuation.mjs';

const supportsPerformanceNow = typeof performance === "object" && /*@__PURE__*/ isFunction(performance.now);
const supportsSetImmediate = typeof setImmediate === "function";
const supportsProcessHRTime = typeof process === "object" && /*@__PURE__*/ isFunction(process.hrtime);
const supportsIsInputPending = typeof navigator === "object" &&
    navigator.scheduling !== undefined &&
    navigator.scheduling.isInputPending !== undefined;
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
    scheduler.startTime = Scheduler_getCurrentTime(scheduler);
    scheduler[SchedulerLike_inContinuation] = true;
    Continuation_run(continuation);
    scheduler[SchedulerLike_inContinuation] = false;
};
const createHostSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mix(include(Disposable_mixin), function HostScheduler(instance, yieldInterval) {
    init(Disposable_mixin, instance);
    instance.yieldInterval = yieldInterval;
    return instance;
}, props({
    [SchedulerLike_inContinuation]: false,
    startTime: 0,
    yieldInterval: 0,
    yieldRequested: false,
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
        const inContinuation = Scheduler_isInContinuation(this);
        const { yieldRequested } = this;
        if (inContinuation) {
            this.yieldRequested = false;
        }
        return (inContinuation &&
            (yieldRequested ||
                Scheduler_getCurrentTime(this) > this.startTime + this.yieldInterval ||
                isInputPending()));
    },
    [SchedulerLike_requestYield]() {
        this.yieldRequested = true;
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
}));
const Scheduler_createHostScheduler = (options = {}) => {
    const { yieldInterval = 5 } = options;
    return createHostSchedulerInstance(yieldInterval);
};

export { Scheduler_createHostScheduler as default };
