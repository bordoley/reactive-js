import { createDisposable, dispose } from "../../disposable.js";
import { bind } from "../../functions.js";
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
const scheduleImmediateWithSetImmediate = (cb) => {
    const immediate = setImmediate(cb);
    return createDisposable(bind(clearImmediate, immediate));
};
const scheduleImmediateWithMessageChannel = (channel) => (cb) => {
    const disposable = createDisposable();
    channel.port1.onmessage = () => {
        if (!disposable.isDisposed) {
            cb();
            dispose(disposable);
        }
    };
    channel.port2.postMessage(null);
    return disposable;
};
const scheduleDelayed = (cb, delay) => {
    const disposable = createDisposable(() => clearTimeout(timeout));
    const timeout = setTimeout(() => {
        cb();
        dispose(disposable);
    }, delay);
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
        continuation.run(scheduler);
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
            continuation.add(callbackSubscription);
        }
    }
    shouldYield() {
        return this.now > this.startTime + this.yieldInterval;
    }
}
export const createHostScheduler = (config = {
    yieldInterval: 5,
}) => new HostScheduler(config.yieldInterval);
