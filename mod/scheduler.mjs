/// <reference types="./scheduler.d.ts" />
import { AbstractDisposable, addTeardown, dispose, AbstractSerialDisposable, disposed, addDisposable } from './disposable.mjs';
import { pipe, raise, alwaysFalse } from './functions.mjs';
import { isSome, none, isNone } from './option.mjs';

const computeParentIndex = (index) => Math.floor((index - 1) / 2);
const siftDown = (queue, item) => {
    const { values, compare } = queue;
    const length = values.length;
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
    for (let index = values.length - 1, parentIndex = computeParentIndex(index), parent = values[parentIndex]; isSome(parent) && compare(parent, item) > 0; index = parentIndex,
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
        return this.values.length;
    }
    clear() {
        this.values.length = 0;
    }
    peek() {
        return this.values[0];
    }
    pop() {
        const { values } = this;
        const length = values.length;
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
const createPriorityQueue = (comparator) => new PriorityQueueImpl(comparator);

const notifyListeners = (listeners, state) => {
    for (const listener of listeners) {
        listener.onRunStatusChanged(state);
    }
};
const isYieldError = (e) => e instanceof YieldError;
class YieldError {
    constructor(delay) {
        this.delay = delay;
    }
}
let currentScheduler = none;
function clearListeners() {
    this.listeners = none;
}
class SchedulerContinuationImpl extends AbstractDisposable {
    constructor(scheduler, f) {
        super();
        this.scheduler = scheduler;
        this.f = f;
        this.listeners = none;
        addTeardown(this, clearListeners);
    }
    addListener(_ev, listener) {
        if (!this.isDisposed) {
            let { listeners } = this;
            if (isNone(listeners)) {
                this.listeners = new Set();
            }
            this.listeners.add(listener);
        }
    }
    removeListener(_ev, listener) {
        let { listeners } = this;
        if (isSome(listeners)) {
            listeners.delete(listener);
        }
    }
    continue() {
        if (!this.isDisposed) {
            const listeners = this.listeners;
            let error = none;
            let yieldError = none;
            if (isSome(listeners)) {
                notifyListeners(listeners, true);
            }
            const oldCurrentScheduler = currentScheduler;
            currentScheduler = this.scheduler;
            try {
                this.f();
            }
            catch (cause) {
                if (isYieldError(cause)) {
                    yieldError = cause;
                }
                else {
                    error = { cause };
                }
            }
            currentScheduler = oldCurrentScheduler;
            if (isSome(listeners)) {
                notifyListeners(listeners, false);
            }
            if (isSome(yieldError)) {
                this.scheduler.schedule(this, yieldError);
            }
            else {
                pipe(this, dispose(error));
            }
        }
    }
}
const run = (continuation) => {
    continuation.continue();
};
const __yield = (delay = 0) => {
    const scheduler = isNone(currentScheduler)
        ? raise("__yield effect may only be invoked from within a SchedulerContinuation")
        : currentScheduler;
    if (delay > 0 || scheduler.shouldYield) {
        throw new YieldError(delay);
    }
};
const schedule = (f, options) => scheduler => {
    const continuation = new SchedulerContinuationImpl(scheduler, f);
    scheduler.schedule(continuation, options);
    return continuation;
};

const move$1 = (scheduler) => {
    // First fast forward through any disposed tasks.
    peek(scheduler);
    const task = scheduler.queue.pop();
    const hasCurrent = isSome(task);
    scheduler.current = task;
    return hasCurrent;
};
const peek = (scheduler) => {
    const { delayed, queue } = scheduler;
    const now = scheduler.now;
    while (true) {
        const task = delayed.peek();
        if (isNone(task)) {
            break;
        }
        const taskIsDispose = task.continuation.isDisposed;
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
        if (!task.continuation.isDisposed) {
            break;
        }
        queue.pop();
    }
    return task !== null && task !== void 0 ? task : delayed.peek();
};
const comparator$1 = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.priority - b.priority;
    diff = diff !== 0 ? diff : a.taskID - b.taskID;
    return diff;
};
const delayedComparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.taskID - b.taskID;
    return diff;
};
const scheduleContinuation = (scheduler, task) => {
    const dueTime = task.dueTime;
    const delay = Math.max(dueTime - scheduler.now, 0);
    scheduler.dueTime = dueTime;
    scheduler.inner = pipe(scheduler.host, schedule(scheduler.continuation, { delay }));
};
function clearQueues() {
    this.queue.clear();
    this.delayed.clear();
}
class PriorityScheduler extends AbstractSerialDisposable {
    constructor(host) {
        super();
        this.host = host;
        this.continuation = () => {
            for (let task = peek(this); isSome(task) && !this.isDisposed; task = peek(this)) {
                const { continuation, dueTime } = task;
                const delay = Math.max(dueTime - this.now, 0);
                if (delay === 0) {
                    move$1(this);
                    this.inContinuation = true;
                    run(continuation);
                    this.inContinuation = false;
                }
                else {
                    this.dueTime = this.now + delay;
                }
                __yield(delay);
            }
        };
        this.current = none;
        this.delayed = createPriorityQueue(delayedComparator);
        this.dueTime = 0;
        this.inContinuation = false;
        this.isPaused = false;
        this.queue = createPriorityQueue(comparator$1);
        this.taskIDCounter = 0;
        this.yieldRequested = false;
        addTeardown(this, clearQueues);
    }
    get now() {
        return this.host.now;
    }
    get shouldYield() {
        const current = this.current;
        const next = peek(this);
        const nextTaskIsHigherPriority = isSome(current) &&
            isSome(next) &&
            current !== next &&
            next.dueTime <= this.now &&
            next.priority < current.priority;
        const { yieldRequested } = this;
        if (this.inContinuation) {
            this.yieldRequested = false;
        }
        return (this.inContinuation &&
            (yieldRequested ||
                this.isDisposed ||
                this.isPaused ||
                nextTaskIsHigherPriority ||
                this.host.shouldYield));
    }
    pause() {
        this.isPaused = true;
        this.inner = disposed;
    }
    resume() {
        const head = peek(this);
        this.isPaused = false;
        if (this.inner.isDisposed && isSome(head)) {
            scheduleContinuation(this, head);
        }
    }
    requestYield() {
        this.yieldRequested = true;
    }
    schedule(continuation, options = {}) {
        let { delay = 0, priority } = options;
        delay = Math.max(0, delay);
        priority = isSome(priority)
            ? priority
            : this.inContinuation
                ? this.current.priority
                : Number.MAX_SAFE_INTEGER;
        addDisposable(this, continuation);
        if (!continuation.isDisposed) {
            const now = this.now;
            const dueTime = Math.max(now + delay, now);
            const task = this.inContinuation &&
                isSome(this.current) &&
                this.current.continuation === continuation &&
                delay <= 0
                ? this.current
                : {
                    taskID: this.taskIDCounter++,
                    continuation,
                    priority,
                    dueTime,
                };
            const { delayed, queue } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue.push(task);
            const head = peek(this);
            const continuationActive = !this.inner.isDisposed && this.dueTime <= dueTime;
            if (head === task && !continuationActive && !this.isPaused) {
                scheduleContinuation(this, head);
            }
        }
    }
}
/**
 * Creates a new priority scheduler which schedules work using the provided
 * host scheduler.
 *
 * @param hostScheduler The underlying platform scheduler used by the priority
 * scheduler to schedule work.
 */
const toPriorityScheduler = (hostScheduler) => new PriorityScheduler(hostScheduler);
const toPausableScheduler = (hostScheduler) => {
    const scheduler = new PriorityScheduler(hostScheduler);
    scheduler.pause();
    return scheduler;
};

class SchedulerWithPriorityImpl {
    constructor(priorityScheduler, priority) {
        this.priorityScheduler = priorityScheduler;
        this.priority = priority;
    }
    get inContinuation() {
        return this.priorityScheduler.inContinuation;
    }
    get now() {
        return this.priorityScheduler.now;
    }
    get shouldYield() {
        return this.priorityScheduler.shouldYield;
    }
    requestYield() {
        this.priorityScheduler.requestYield();
    }
    schedule(continuation, options = {}) {
        const { delay } = options;
        this.priorityScheduler.schedule(continuation, {
            priority: this.priority,
            delay,
        });
    }
}
/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toSchedulerWithPriority = (priority) => priorityScheduler => new SchedulerWithPriorityImpl(priorityScheduler, priority);

const supportsPerformanceNow = typeof performance === "object" && typeof performance.now === "function";
const supportsProcessHRTime = typeof process === "object" && typeof process.hrtime === "function";
const supportsSetImmediate = typeof setImmediate === "function";
const supportsIsInputPending = typeof navigator === "object" &&
    navigator.scheduling !== undefined &&
    navigator.scheduling.isInputPending !== undefined;
const inputIsPending = supportsIsInputPending
    ? () => navigator.scheduling.isInputPending()
    : alwaysFalse;
const now = supportsPerformanceNow
    ? () => performance.now()
    : supportsProcessHRTime
        ? () => {
            const hr = process.hrtime();
            return hr[0] * 1000 + hr[1] / 1e6;
        }
        : () => Date.now();
const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
    const immmediate = setImmediate(runContinuation, scheduler, continuation);
    addTeardown(scheduler, () => clearImmediate(immmediate));
};
const scheduleImmediateWithMessageChannel = (scheduler, channel, continuation) => {
    channel.port1.onmessage = () => runContinuation(scheduler, continuation);
    channel.port2.postMessage(null);
};
const scheduleDelayed = (scheduler, continuation, delay) => {
    const timeout = setTimeout(runContinuation, delay, scheduler, continuation);
    addTeardown(scheduler, () => clearTimeout(timeout));
};
const scheduleImmediate = (scheduler, continuation) => {
    const { messageChannel } = scheduler;
    if (supportsSetImmediate) {
        scheduleImmediateWithSetImmediate(scheduler, continuation);
    }
    else if (isSome(messageChannel)) {
        scheduleImmediateWithMessageChannel(scheduler, messageChannel, continuation);
    }
    else {
        scheduleDelayed(scheduler, continuation, 0);
    }
};
const runContinuation = (scheduler, continuation) => {
    if (!continuation.isDisposed) {
        scheduler.inContinuation = true;
        scheduler.startTime = scheduler.now;
        run(continuation);
        scheduler.inContinuation = false;
    }
};
class HostScheduler extends AbstractDisposable {
    constructor(yieldInterval) {
        super();
        this.yieldInterval = yieldInterval;
        this.inContinuation = false;
        this.messageChannel = none;
        this.startTime = this.now;
        this.yieldRequested = false;
        const supportsMessageChannel = typeof MessageChannel === "function";
        if (supportsMessageChannel) {
            const messageChannel = new MessageChannel();
            this.messageChannel = messageChannel;
            addTeardown(this, () => {
                messageChannel.port1.close();
                messageChannel.port2.close();
            });
        }
    }
    get now() {
        return now();
    }
    get shouldYield() {
        const { yieldRequested } = this;
        if (this.inContinuation) {
            this.yieldRequested = false;
        }
        return (this.inContinuation &&
            (yieldRequested ||
                this.now > this.startTime + this.yieldInterval ||
                inputIsPending()));
    }
    requestYield() {
        this.yieldRequested = true;
    }
    schedule(continuation, options = {}) {
        addDisposable(this, continuation);
        const { delay = 0 } = options;
        const continuationIsDisposed = continuation.isDisposed;
        if (!continuationIsDisposed && delay > 0) {
            scheduleDelayed(this, continuation, delay);
        }
        else if (!continuationIsDisposed) {
            scheduleImmediate(this, continuation);
        }
    }
}
const createHostScheduler = (options = {}) => {
    const { yieldInterval = 5 } = options;
    return new HostScheduler(yieldInterval);
};

const comparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.id - b.id;
    return diff;
};
const move = (scheduler) => {
    const taskQueue = scheduler.taskQueue;
    scheduler.hasCurrent = false;
    if (!scheduler.isDisposed) {
        const task = taskQueue.pop();
        if (isSome(task)) {
            const { dueTime, continuation } = task;
            scheduler.current = continuation;
            scheduler.hasCurrent = true;
            scheduler.microTaskTicks = 0;
            scheduler.now = dueTime;
        }
        else {
            pipe(scheduler, dispose());
        }
    }
    return scheduler.hasCurrent;
};
class VirtualTimeSchedulerImpl extends AbstractDisposable {
    constructor(maxMicroTaskTicks) {
        super();
        this.maxMicroTaskTicks = maxMicroTaskTicks;
        this.current = none;
        this.hasCurrent = false;
        this.inContinuation = false;
        this.microTaskTicks = 0;
        this.now = 0;
        this.taskIDCount = 0;
        this.yieldRequested = false;
        this.taskQueue = createPriorityQueue(comparator);
    }
    get shouldYield() {
        const { yieldRequested } = this;
        if (this.inContinuation) {
            this.microTaskTicks++;
            this.yieldRequested = false;
        }
        return (this.inContinuation &&
            (yieldRequested || this.microTaskTicks >= this.maxMicroTaskTicks));
    }
    requestYield() {
        this.yieldRequested = true;
    }
    run() {
        while (!this.isDisposed && move(this)) {
            this.inContinuation = true;
            run(this.current);
            this.inContinuation = false;
        }
        pipe(this, dispose());
    }
    schedule(continuation, { delay } = { delay: 0 }) {
        delay = Math.max(0, delay);
        addDisposable(this, continuation);
        if (!continuation.isDisposed) {
            const work = {
                id: this.taskIDCount++,
                dueTime: this.now + delay,
                continuation,
            };
            this.taskQueue.push(work);
        }
    }
}
/**
 * Creates a new virtual time scheduler instance.
 *
 * @param maxMicroTaskTicks The max number of times
 * shouldYield should return false before returning true. Useful
 * for testing cooperative multitasking.
 */
const createVirtualTimeScheduler = (options = {}) => {
    const { maxMicroTaskTicks = Number.MAX_SAFE_INTEGER } = options;
    return new VirtualTimeSchedulerImpl(maxMicroTaskTicks);
};

export { YieldError, __yield, createHostScheduler, createVirtualTimeScheduler, run, schedule, toPausableScheduler, toPriorityScheduler, toSchedulerWithPriority };
