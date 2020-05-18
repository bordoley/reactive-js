import { createDisposable, dispose, addDisposable, addTeardown, } from "../../disposable.js";
import { bind } from "../../functions.js";
import { YieldError, } from "./interfaces.js";
import { runContinuation } from "./schedulerContinuation.js";
const supportsPerformanceNow = typeof performance === "object" && typeof performance.now === "function";
const supportsProcessHRTime = typeof process === "object" && typeof process.hrtime === "function";
const supportsMessageChannel = typeof MessageChannel === "function";
const supportsSetImmediate = typeof setImmediate === "function";
const now = supportsPerformanceNow
    ? () => performance.now()
    : supportsProcessHRTime
        ? () => {
            const hr = process.hrtime();
            return hr[0] * 1000 + hr[1] / 1e6;
        }
        : () => Date.now();
const createScheduledCallback = (disposable, cb) => () => {
    if (!disposable.isDisposed) {
        dispose(disposable);
        cb();
    }
};
const scheduleImmediateWithSetImmediate = (cb) => {
    const disposable = createDisposable();
    const timeout = setImmediate(createScheduledCallback(disposable, cb));
    addTeardown(disposable, bind(clearImmediate, timeout));
    return disposable;
};
const scheduleImmediateWithMessageChannel = (channel) => (cb) => {
    const disposable = createDisposable();
    channel.port1.onmessage = createScheduledCallback(disposable, cb);
    channel.port2.postMessage(null);
    return disposable;
};
const scheduleDelayed = (cb, delay) => {
    const disposable = createDisposable();
    const timeout = setTimeout(createScheduledCallback(disposable, cb), delay);
    addTeardown(disposable, bind(clearTimeout, timeout));
    return disposable;
};
const scheduleImmediateWithSetTimeout = (cb) => scheduleDelayed(cb, 0);
const scheduleImmediate = supportsSetImmediate
    ? scheduleImmediateWithSetImmediate
    : supportsMessageChannel
        ? scheduleImmediateWithMessageChannel(new MessageChannel())
        : scheduleImmediateWithSetTimeout;
const createCallback = (scheduler, continuation) => () => {
    if (!continuation.isDisposed) {
        scheduler.inContinuation = true;
        scheduler.startTime = scheduler.now;
        runContinuation(scheduler, continuation);
        scheduler.inContinuation = false;
    }
};
class HostScheduler {
    constructor(yieldInterval) {
        this.yieldInterval = yieldInterval;
        this.inContinuation = false;
        this.startTime = this.now;
    }
    get now() {
        return now();
    }
    schedule(continuation, { delay } = { delay: 0 }) {
        if (!continuation.isDisposed) {
            const callback = createCallback(this, continuation);
            const callbackSubscription = delay > 0
                ? scheduleDelayed(callback, delay)
                : scheduleImmediate(callback);
            addDisposable(continuation, callbackSubscription);
        }
    }
    yield({ delay } = { delay: 0 }) {
        if (delay > 0 || this.now > this.startTime + this.yieldInterval) {
            throw new YieldError(delay);
        }
    }
}
export const createHostScheduler = (config = {
    yieldInterval: 5,
}) => new HostScheduler(config.yieldInterval);
