/// <reference types="./SchedulerLike.createHostScheduler.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { getDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { isFunction, pipe, unsafeCast } from '../../../functions.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import { run } from '../../ContinuationLike.mjs';
import { create, addTo, onDisposed, dispose, addIgnoringChildErrors, isDisposed } from '../../../util/DisposableLike.mjs';
import disposableMixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import getCurrentTime from './SchedulerLike.getCurrentTime.mjs';
import isInContinuation from './SchedulerLike.isInContinuation.mjs';

const supportsPerformanceNow = typeof performance === "object" && /*@__PURE__*/ isFunction(performance.now);
const supportsSetImmediate = typeof setImmediate === "function";
const supportsProcessHRTime = typeof process === "object" && /*@__PURE__*/ isFunction(process.hrtime);
const supportsIsInputPending = typeof navigator === "object" &&
    navigator.scheduling !== undefined &&
    navigator.scheduling.isInputPending !== undefined;
const isInputPending = () => { var _a, _b; return supportsIsInputPending && ((_b = (_a = navigator.scheduling) === null || _a === void 0 ? void 0 : _a.isInputPending()) !== null && _b !== void 0 ? _b : false); };
const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
    const disposable = pipe(create(), addTo(continuation), onDisposed(() => clearImmediate(immmediate)));
    const immmediate = setImmediate(runContinuation, scheduler, continuation, disposable);
};
const scheduleDelayed = (scheduler, continuation, delay) => {
    const disposable = pipe(create(), addTo(continuation), onDisposed(_ => clearTimeout(timeout)));
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
    pipe(immmediateOrTimerDisposable, dispose());
    scheduler.startTime = getCurrentTime(scheduler);
    scheduler[SchedulerLike_inContinuation] = true;
    run(continuation);
    scheduler[SchedulerLike_inContinuation] = false;
};
const createHostSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mix(include(disposableMixin), function HostScheduler(instance, yieldInterval) {
    init(disposableMixin, instance);
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
        const inContinuation = isInContinuation(this);
        const { yieldRequested } = this;
        if (inContinuation) {
            this.yieldRequested = false;
        }
        return (inContinuation &&
            (yieldRequested ||
                getCurrentTime(this) > this.startTime + this.yieldInterval ||
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
}));
const createHostScheduler = (options = {}) => {
    const { yieldInterval = 5 } = options;
    return createHostSchedulerInstance(yieldInterval);
};

export { createHostScheduler as default };
