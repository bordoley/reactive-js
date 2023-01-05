/// <reference types="./SchedulerLike.createHostScheduler.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { getDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { isFunction, pipe, unsafeCast } from '../../../functions.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import DisposableLike__addIgnoringChildErrors from '../../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import DisposableLike__create from '../../../util/__internal__/DisposableLike/DisposableLike.create.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import DisposableLike__onDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.onDisposed.mjs';
import ContinuationLike__run from '../ContinuationLike/ContinuationLike.run.mjs';
import SchedulerLike__getCurrentTime from './SchedulerLike.getCurrentTime.mjs';
import SchedulerLike__isInContinuation from './SchedulerLike.isInContinuation.mjs';

const supportsPerformanceNow = typeof performance === "object" && /*@__PURE__*/ isFunction(performance.now);
const supportsSetImmediate = typeof setImmediate === "function";
const supportsProcessHRTime = typeof process === "object" && /*@__PURE__*/ isFunction(process.hrtime);
const supportsIsInputPending = typeof navigator === "object" &&
    navigator.scheduling !== undefined &&
    navigator.scheduling.isInputPending !== undefined;
const isInputPending = () => { var _a, _b; return supportsIsInputPending && ((_b = (_a = navigator.scheduling) === null || _a === void 0 ? void 0 : _a.isInputPending()) !== null && _b !== void 0 ? _b : false); };
const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
    const disposable = pipe(DisposableLike__create(), DisposableLike__addTo(continuation), DisposableLike__onDisposed(() => clearImmediate(immmediate)));
    const immmediate = setImmediate(runContinuation, scheduler, continuation, disposable);
};
const scheduleDelayed = (scheduler, continuation, delay) => {
    const disposable = pipe(DisposableLike__create(), DisposableLike__addTo(continuation), DisposableLike__onDisposed(_ => clearTimeout(timeout)));
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
    pipe(immmediateOrTimerDisposable, DisposableLike__dispose());
    scheduler.startTime = SchedulerLike__getCurrentTime(scheduler);
    scheduler[SchedulerLike_inContinuation] = true;
    ContinuationLike__run(continuation);
    scheduler[SchedulerLike_inContinuation] = false;
};
const createHostSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mix(include(DisposableLike__mixin), function HostScheduler(instance, yieldInterval) {
    init(DisposableLike__mixin, instance);
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
        const inContinuation = SchedulerLike__isInContinuation(this);
        const { yieldRequested } = this;
        if (inContinuation) {
            this.yieldRequested = false;
        }
        return (inContinuation &&
            (yieldRequested ||
                SchedulerLike__getCurrentTime(this) > this.startTime + this.yieldInterval ||
                isInputPending()));
    },
    [SchedulerLike_requestYield]() {
        this.yieldRequested = true;
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        pipe(this, DisposableLike__addIgnoringChildErrors(continuation));
        const continuationIsDisposed = DisposableLike__isDisposed(continuation);
        if (!continuationIsDisposed && delay > 0) {
            scheduleDelayed(this, continuation, delay);
        }
        else if (!continuationIsDisposed) {
            scheduleImmediate(this, continuation);
        }
    },
}));
const SchedulerLike__createHostScheduler = (options = {}) => {
    const { yieldInterval = 5 } = options;
    return createHostSchedulerInstance(yieldInterval);
};

export { SchedulerLike__createHostScheduler as default };
