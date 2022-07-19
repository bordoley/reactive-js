/// <reference types="./scheduling.d.ts" />
import { getDelay } from './__internal__/optionalArgs.mjs';
import { DisposableMixin_disposables, mixinDisposable } from './__internal__/util/disposables.mjs';
import { createDisposable } from './util.mjs';
import { addTo, onDisposed, dispose, DisposableLike_error, DisposableLike_isDisposed, addIgnoringChildErrors, isDisposed } from './util/DisposableLike.mjs';
import { none, isSome } from './util/Option.mjs';
import { pipe, instanceFactory, floor, getLength, newInstance } from './util/functions.mjs';
import { runContinuation } from './scheduling/SchedulerImplementationLike.mjs';
import { getCurrentTime, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, isInContinuation, SchedulerLike_requestYield, SchedulerLike_schedule } from './scheduling/SchedulerLike.mjs';
import { MAX_SAFE_INTEGER } from './__internal__/env.mjs';
import { EnumeratorMixin_current, EnumeratorMixin_hasCurrent, mixinEnumerator } from './__internal__/ix/enumerators.mjs';
import { EnumeratorLike_current } from './ix/EnumeratorLike.mjs';
import { InteractiveSourceLike_move } from './ix/InteractiveSourceLike.mjs';

const supportsPerformanceNow = /*@__PURE__*/ (() => typeof performance === "object" && typeof performance.now === "function")();
const supportsSetImmediate = /*@__PURE__*/ (() => typeof setImmediate === "function")();
const supportsProcessHRTime = /*@__PURE__*/ (() => typeof process === "object" && typeof process.hrtime === "function")();
const supportsIsInputPending = /*@__PURE__*/ (() => typeof navigator === "object" &&
    navigator.scheduling !== undefined &&
    navigator.scheduling.isInputPending !== undefined)();
const isInputPending = () => supportsIsInputPending && navigator.scheduling.isInputPending();
const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
    const disposable = pipe(createDisposable(), addTo(continuation), onDisposed(() => clearImmediate(immmediate)));
    const immmediate = setImmediate(run, scheduler, continuation, disposable);
};
const scheduleDelayed = (scheduler, continuation, delay) => {
    const disposable = pipe(createDisposable(), addTo(continuation), onDisposed(_ => clearTimeout(timeout)));
    const timeout = setTimeout(run, delay, scheduler, continuation, disposable);
};
const scheduleImmediate = (scheduler, continuation) => {
    if (supportsSetImmediate) {
        scheduleImmediateWithSetImmediate(scheduler, continuation);
    }
    else {
        scheduleDelayed(scheduler, continuation, 0);
    }
};
const run = (scheduler, continuation, immmediateOrTimerDisposable) => {
    // clear the immediateOrTimer disposable
    pipe(immmediateOrTimerDisposable, dispose());
    scheduler.startTime = getCurrentTime(scheduler);
    pipe(scheduler, runContinuation(continuation));
};
const hostSchedulerFactory = /*@__PURE__*/ (() => {
    var _a, _b, _c, _d;
    class HostScheduler {
        constructor(yieldInterval) {
            this.yieldInterval = yieldInterval;
            this[_a] = none;
            this[_b] = false;
            this[_c] = new Set();
            this[_d] = false;
            this.startTime = getCurrentTime(this);
            this.yieldRequested = false;
        }
        get [(_a = DisposableLike_error, _b = DisposableLike_isDisposed, _c = DisposableMixin_disposables, _d = SchedulerLike_inContinuation, SchedulerLike_now)]() {
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
        }
        get [SchedulerLike_shouldYield]() {
            const inContinuation = isInContinuation(this);
            const { yieldRequested } = this;
            if (inContinuation) {
                this.yieldRequested = false;
            }
            return (inContinuation &&
                (yieldRequested ||
                    getCurrentTime(this) > this.startTime + this.yieldInterval ||
                    isInputPending()));
        }
        [SchedulerLike_requestYield]() {
            this.yieldRequested = true;
        }
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
        }
    }
    return pipe(HostScheduler, mixinDisposable(), instanceFactory());
})();
const createHostScheduler = (options = {}) => {
    const { yieldInterval = 5 } = options;
    const hostScheduler = hostSchedulerFactory(yieldInterval);
    return hostScheduler;
};

const computeParentIndex = (index) => floor((index - 1) / 2);
const siftDown = (queue, item) => {
    const { values, compare } = queue;
    const length = getLength(values);
    for (let index = 0; index < length;) {
        const leftIndex = (index + 1) * 2 - 1;
        const rightIndex = leftIndex + 1;
        const left = values[leftIndex];
        const right = values[rightIndex];
        if (isSome(left) && compare(left, item) < 0) {
            if (isSome(right) && compare(right, left) < 0) {
                values[index] = right;
                values[rightIndex] = item;
                index = rightIndex;
            }
            else {
                values[index] = left;
                values[leftIndex] = item;
                index = leftIndex;
            }
        }
        else if (isSome(right) && compare(right, item) < 0) {
            values[index] = right;
            values[rightIndex] = item;
            index = rightIndex;
        }
        else {
            break;
        }
    }
};
const siftUp = (queue, item) => {
    const { values, compare } = queue;
    for (let index = getLength(values) - 1, parentIndex = computeParentIndex(index), parent = values[parentIndex]; isSome(parent) && compare(parent, item) > 0; index = parentIndex,
        parentIndex = computeParentIndex(index),
        parent = values[parentIndex]) {
        values[parentIndex] = item;
        values[index] = parent;
    }
};
class PriorityQueueImpl {
    constructor(compare) {
        this.compare = compare;
        this.values = [];
    }
    get count() {
        return getLength(this.values);
    }
    clear() {
        this.values.length = 0;
    }
    peek() {
        return this.values[0];
    }
    pop() {
        const { values } = this;
        const length = getLength(values);
        if (length === 0) {
            return none;
        }
        else if (length === 1) {
            return values.shift();
        }
        else {
            const first = values[0];
            const last = values.pop();
            values[0] = last;
            siftDown(this, last);
            return first;
        }
    }
    push(item) {
        const { values } = this;
        values.push(item);
        siftUp(this, item);
    }
}
const createPriorityQueue = (comparator) => newInstance(PriorityQueueImpl, comparator);

const comparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.id - b.id;
    return diff;
};
const virtualTimeSchedulerFactory = /*@__PURE__*/ (() => {
    var _a, _b, _c, _d, _e, _f, _g;
    class VirtualTimeScheduler {
        constructor(maxMicroTaskTicks = MAX_SAFE_INTEGER) {
            this.maxMicroTaskTicks = maxMicroTaskTicks;
            this[_a] = none;
            this[_b] = false;
            this[_c] = new Set();
            this[_d] = none;
            this[_e] = false;
            this[_f] = false;
            this[_g] = 0;
            this.microTaskTicks = 0;
            this.taskIDCount = 0;
            this.yieldRequested = false;
            this.taskQueue = createPriorityQueue(comparator);
        }
        get [(_a = DisposableLike_error, _b = DisposableLike_isDisposed, _c = DisposableMixin_disposables, _d = EnumeratorMixin_current, _e = EnumeratorMixin_hasCurrent, _f = SchedulerLike_inContinuation, _g = SchedulerLike_now, SchedulerLike_shouldYield)]() {
            const { yieldRequested, [SchedulerLike_inContinuation]: inContinuation } = this;
            if (inContinuation) {
                this.microTaskTicks++;
                this.yieldRequested = false;
            }
            return (inContinuation &&
                (yieldRequested || this.microTaskTicks >= this.maxMicroTaskTicks));
        }
        [InteractiveSourceLike_move]() {
            const taskQueue = this.taskQueue;
            if (!isDisposed(this)) {
                const task = taskQueue.pop();
                if (isSome(task)) {
                    const { dueTime, continuation } = task;
                    this.microTaskTicks = 0;
                    this[SchedulerLike_now] = dueTime;
                    this[EnumeratorLike_current] = none;
                    pipe(this, runContinuation(continuation));
                }
                else {
                    pipe(this, dispose());
                }
            }
        }
        [SchedulerLike_requestYield]() {
            this.yieldRequested = true;
        }
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            pipe(this, addIgnoringChildErrors(continuation));
            if (!isDisposed(continuation)) {
                this.taskQueue.push({
                    id: this.taskIDCount++,
                    dueTime: getCurrentTime(this) + delay,
                    continuation,
                });
            }
        }
    }
    return pipe(VirtualTimeScheduler, mixinDisposable(), mixinEnumerator(), instanceFactory());
})();
/**
 * Creates a new virtual time scheduler instance.
 *
 * @param maxMicroTaskTicks The max number of times
 * shouldYield should return false before returning true. Useful
 * for testing cooperative multitasking.
 */
const createVirtualTimeScheduler = (options = {}) => {
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    return pipe(maxMicroTaskTicks, virtualTimeSchedulerFactory);
};

export { createHostScheduler, createVirtualTimeScheduler };
