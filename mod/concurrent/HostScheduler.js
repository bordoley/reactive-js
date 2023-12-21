/// <reference types="./HostScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../__internal__/mixins.js";
import { none, pipe } from "../functions.js";
import { DisposableLike_dispose } from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import ContinuationSchedulerMixin, { ContinuationLike_run, ContinuationSchedulerImplementationLike_scheduleContinuation, ContinuationSchedulerImplementationLike_shouldYield, } from "./__mixins__/ContinuationSchedulerMixin.js";
import CurrentTimeSchedulerMixin from "./__mixins__/CurrentTimeSchedulerMixin.js";
const supportsSetImmediate = typeof setImmediate === "function";
const supportsIsInputPending = /*@__PURE__*/ (() => typeof navigator === "object" &&
    navigator.scheduling !== none &&
    navigator.scheduling.isInputPending !== none)();
const isInputPending = () => supportsIsInputPending && (navigator.scheduling?.isInputPending() ?? false);
const scheduleImmediateWithSetImmediate = (continuation) => {
    const disposable = pipe(Disposable.create(), Disposable.addTo(continuation), Disposable.onDisposed(() => clearImmediate(immmediate)));
    const immmediate = setImmediate(runContinuation, continuation, disposable);
};
const scheduleDelayed = (continuation, delay) => {
    const disposable = pipe(Disposable.create(), Disposable.addTo(continuation), Disposable.onDisposed(_ => clearTimeout(timeout)));
    const timeout = setTimeout(runContinuation, delay, continuation, disposable);
};
const scheduleImmediate = (continuation) => {
    if (supportsSetImmediate) {
        scheduleImmediateWithSetImmediate(continuation);
    }
    else {
        scheduleDelayed(continuation, 0);
    }
};
const runContinuation = (continuation, immmediateOrTimerDisposable) => {
    // clear the immediateOrTimer disposable
    immmediateOrTimerDisposable[DisposableLike_dispose]();
    continuation[ContinuationLike_run]();
};
const createHostSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(CurrentTimeSchedulerMixin, ContinuationSchedulerMixin), function HostScheduler(instance, maxYieldInterval) {
    init(CurrentTimeSchedulerMixin, instance);
    init(ContinuationSchedulerMixin, instance, maxYieldInterval);
    return instance;
}, props({}), {
    get [ContinuationSchedulerImplementationLike_shouldYield]() {
        return isInputPending();
    },
    [ContinuationSchedulerImplementationLike_scheduleContinuation](continuation, delay) {
        if (delay > 0) {
            scheduleDelayed(continuation, delay);
        }
        else {
            scheduleImmediate(continuation);
        }
    },
})))();
export const create = (options = {}) => {
    const { maxYieldInterval = 300 } = options;
    return createHostSchedulerInstance(maxYieldInterval);
};
