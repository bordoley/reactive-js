/// <reference types="./scheduling.d.ts" />
import { getDelay } from './__internal__/optionalArgs.mjs';
import { runContinuation } from './__internal__/scheduling.mjs';
import { properties as properties$3, prototype as prototype$3, init as init$1 } from './__internal__/util/Disposable.mjs';
import { createObject } from './__internal__/util/createObject.mjs';
import { createDisposable } from './util.mjs';
import { addTo, onDisposed, dispose, addIgnoringChildErrors, isDisposed, disposed } from './util/DisposableLike.mjs';
import { pipe, floor, getLength, newInstance, max } from './util/functions.mjs';
import { getCurrentTime, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, isInContinuation, SchedulerLike_requestYield, SchedulerLike_schedule, schedule, shouldYield, __yield } from './scheduling/SchedulerLike.mjs';
import { MAX_SAFE_INTEGER } from './__internal__/env.mjs';
import { properties as properties$4, prototype as prototype$4 } from './__internal__/ix/Enumerator.mjs';
import { EnumeratorLike_current, hasCurrent, getCurrent } from './ix/EnumeratorLike.mjs';
import { InteractiveSourceLike_move, move } from './ix/InteractiveSourceLike.mjs';
import { isSome, none, isNone } from './util/Option.mjs';
import { MutableRefLike_current } from './__internal__/util/MutableRefLike.mjs';
import { properties as properties$5, prototype as prototype$5, init as init$2 } from './__internal__/util/SerialDisposable.mjs';
import { PauseableLike_pause, PauseableLike_resume } from './util/PauseableLike.mjs';

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
const properties$2 = {
    ...properties$3,
    [SchedulerLike_inContinuation]: false,
    startTime: 0,
    yieldInterval: 0,
    yieldRequested: false,
};
const prototype$2 = {
    ...prototype$3,
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
        const self = this;
        const inContinuation = isInContinuation(self);
        const { yieldRequested } = self;
        if (inContinuation) {
            self.yieldRequested = false;
        }
        return (inContinuation &&
            (yieldRequested ||
                getCurrentTime(self) > self.startTime + self.yieldInterval ||
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
};
const createHostScheduler = (options = {}) => {
    const { yieldInterval = 5 } = options;
    const instance = createObject(prototype$2, properties$2);
    init$1(instance);
    instance.yieldInterval = yieldInterval;
    instance.startTime = getCurrentTime(instance);
    return instance;
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
const properties$1 = {
    ...properties$3,
    ...properties$4,
    [SchedulerLike_inContinuation]: false,
    [SchedulerLike_now]: 0,
    maxMicroTaskTicks: MAX_SAFE_INTEGER,
    microTaskTicks: 0,
    taskIDCount: 0,
    yieldRequested: false,
    taskQueue: none,
};
const prototype$1 = {
    ...prototype$3,
    ...prototype$4,
    get [SchedulerLike_shouldYield]() {
        const self = this;
        const { yieldRequested, [SchedulerLike_inContinuation]: inContinuation } = self;
        if (inContinuation) {
            self.microTaskTicks++;
            self.yieldRequested = false;
        }
        return (inContinuation &&
            (yieldRequested || self.microTaskTicks >= self.maxMicroTaskTicks));
    },
    [SchedulerLike_requestYield]() {
        this.yieldRequested = true;
    },
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
    },
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
    },
};
/**
 * Creates a new virtual time scheduler instance.
 *
 * @param maxMicroTaskTicks The max number of times
 * shouldYield should return false before returning true. Useful
 * for testing cooperative multitasking.
 */
const createVirtualTimeScheduler = (options = {}) => {
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    const instance = createObject(prototype$1, properties$1);
    init$1(instance);
    instance.maxMicroTaskTicks = maxMicroTaskTicks;
    instance.taskQueue = createPriorityQueue(comparator);
    return instance;
};

const delayedComparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.taskID - b.taskID;
    return diff;
};
const taskComparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.priority - b.priority;
    diff = diff !== 0 ? diff : a.taskID - b.taskID;
    return diff;
};
const peek = (self) => {
    const { delayed, queue } = self;
    const now = getCurrentTime(self.host);
    while (true) {
        const task = delayed.peek();
        if (isNone(task)) {
            break;
        }
        const taskIsDispose = isDisposed(task.continuation);
        if (task.dueTime > now && !taskIsDispose) {
            break;
        }
        delayed.pop();
        if (!taskIsDispose) {
            queue.push(task);
        }
    }
    let task = none;
    while (true) {
        task = queue.peek();
        if (isNone(task)) {
            break;
        }
        if (!isDisposed(task.continuation)) {
            break;
        }
        queue.pop();
    }
    return task !== null && task !== void 0 ? task : delayed.peek();
};
const priorityShouldYield = (self, next) => {
    const { [EnumeratorLike_current]: current } = self;
    return (current !== next &&
        next.dueTime <= getCurrentTime(self.host) &&
        next.priority > current.priority);
};
const scheduleOnHost = (self) => {
    const task = peek(self);
    const continuationActive = !isDisposed(self[MutableRefLike_current]) &&
        isSome(task) &&
        self.dueTime <= task.dueTime;
    if (isNone(task) || continuationActive || self.isPaused) {
        return;
    }
    const dueTime = task.dueTime;
    const delay = max(dueTime - getCurrentTime(self.host), 0);
    self.dueTime = dueTime;
    self[MutableRefLike_current] = pipe(self.host, schedule(self.hostContinuation, { delay }));
};
const properties = {
    ...properties$3,
    ...properties$4,
    ...properties$5,
    [SchedulerLike_inContinuation]: false,
    delayed: none,
    dueTime: 0,
    host: none,
    hostContinuation: () => { },
    isPaused: false,
    queue: none,
    taskIDCounter: 0,
    yieldRequested: false,
};
const prototype = {
    ...prototype$3,
    ...prototype$4,
    ...prototype$5,
    get [SchedulerLike_now]() {
        const self = this;
        return getCurrentTime(self.host);
    },
    get [SchedulerLike_shouldYield]() {
        const self = this;
        const { [SchedulerLike_inContinuation]: inContinuation, yieldRequested } = self;
        if (inContinuation) {
            self.yieldRequested = false;
        }
        const next = peek(self);
        return (inContinuation &&
            (yieldRequested ||
                isDisposed(self) ||
                !hasCurrent(self) ||
                self.isPaused ||
                (isSome(next) ? priorityShouldYield(self, next) : false) ||
                shouldYield(self.host)));
    },
    [InteractiveSourceLike_move]() {
        // First fast forward through any disposed tasks.
        peek(this);
        const task = this.queue.pop();
        if (isSome(task)) {
            this[EnumeratorLike_current] = task;
        }
    },
    [SchedulerLike_requestYield]() {
        this.yieldRequested = true;
    },
    [PauseableLike_pause]() {
        this.isPaused = true;
        this[MutableRefLike_current] = disposed;
    },
    [PauseableLike_resume]() {
        this.isPaused = false;
        scheduleOnHost(this);
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        const { priority } = options !== null && options !== void 0 ? options : {};
        pipe(this, addIgnoringChildErrors(continuation));
        if (!isDisposed(continuation)) {
            const now = getCurrentTime(this.host);
            const dueTime = max(now + delay, now);
            const task = isInContinuation(this) &&
                hasCurrent(this) &&
                getCurrent(this).continuation === continuation &&
                delay <= 0
                ? getCurrent(this)
                : {
                    taskID: this.taskIDCounter++,
                    continuation,
                    dueTime,
                    priority: isSome(priority)
                        ? max(priority, 0)
                        : MAX_SAFE_INTEGER,
                };
            const { delayed, queue } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue.push(task);
            scheduleOnHost(this);
        }
    },
};
const init = (instance, host) => {
    init$1(instance);
    init$2(instance, disposed);
    instance.delayed = createPriorityQueue(delayedComparator);
    instance.queue = createPriorityQueue(taskComparator);
    instance.host = host;
    instance.hostContinuation = () => {
        for (let task = peek(instance); isSome(task) && !isDisposed(instance); task = peek(instance)) {
            const { continuation, dueTime } = task;
            const delay = max(dueTime - getCurrentTime(instance), 0);
            if (delay === 0) {
                move(instance);
                pipe(instance, runContinuation(continuation));
            }
            else {
                instance.dueTime = getCurrentTime(instance) + delay;
            }
            __yield({ delay });
        }
    };
};
const createInstance = (scheduler) => {
    const instance = createObject(prototype, properties);
    init(instance, scheduler);
    return instance;
};
const createPauseableScheduler = createInstance;
const createPriorityScheduler = createInstance;

export { createHostScheduler, createPauseableScheduler, createPriorityScheduler, createVirtualTimeScheduler };
