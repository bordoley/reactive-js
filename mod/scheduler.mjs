/// <reference types="./scheduler.d.ts" />
import { isDisposed, AbstractDisposable, dispose, disposed, add, addTo, onDisposed, createDisposable } from './disposable.mjs';
import { MAX_SAFE_INTEGER } from './env.mjs';
import { floor, length, newInstance, max, pipe, raise, instanceFactory, newInstanceWith } from './functions.mjs';
import { isSome, none, isNone } from './option.mjs';
import { AbstractEnumerator, move, hasCurrent, reset, current } from './enumerator.mjs';

const computeParentIndex = (index) => floor((index - 1) / 2);
const siftDown = (queue, item) => {
    const { values, compare } = queue;
    const length$1 = length(values);
    for (let index = 0; index < length$1;) {
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
    for (let index = length(values) - 1, parentIndex = computeParentIndex(index), parent = values[parentIndex]; isSome(parent) && compare(parent, item) > 0; index = parentIndex,
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
        return length(this.values);
    }
    clear() {
        this.values.length = 0;
    }
    peek() {
        return this.values[0];
    }
    pop() {
        const { values } = this;
        const length$1 = length(values);
        if (length$1 === 0) {
            return none;
        }
        else if (length$1 === 1) {
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

const runContinuation = (continuation) => scheduler => {
    if (!isDisposed(continuation)) {
        scheduler.inContinuation = true;
        continuation.continue();
        scheduler.inContinuation = false;
    }
    return scheduler;
};
const inContinuation = (scheduler) => scheduler.inContinuation;
const now = (scheduler) => scheduler.now;
const shouldYield = (scheduler) => scheduler.shouldYield;
const getDelay = (options = {}) => { var _a; return floor(max((_a = options.delay) !== null && _a !== void 0 ? _a : 0, 0)); };
const hasDelay = (options = {}) => getDelay(options) > 0;

const isYieldError = (e) => e instanceof YieldError;
class YieldError {
    constructor(delay) {
        this.delay = delay;
    }
}
let currentScheduler = none;
class SchedulerContinuationImpl extends AbstractDisposable {
    constructor(scheduler, f) {
        super();
        this.scheduler = scheduler;
        this.f = f;
    }
    continue() {
        if (!isDisposed(this)) {
            let error = none;
            let yieldError = none;
            const { scheduler } = this;
            const oldCurrentScheduler = currentScheduler;
            currentScheduler = scheduler;
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
            if (isSome(yieldError)) {
                scheduler.schedule(this, yieldError);
            }
            else {
                pipe(this, dispose(error));
            }
        }
    }
}
const __yield = (options) => {
    const delay = getDelay(options);
    const scheduler = isNone(currentScheduler)
        ? raise("__yield effect may only be invoked from within a SchedulerContinuation")
        : currentScheduler;
    if (delay > 0 || shouldYield(scheduler)) {
        pipe(delay, instanceFactory(YieldError), raise);
    }
};
const schedule = (f, options) => scheduler => {
    const continuation = newInstance(SchedulerContinuationImpl, scheduler, f);
    scheduler.schedule(continuation, options);
    return continuation;
};

const peek = (scheduler) => {
    const { delayed, queue } = scheduler;
    const now$1 = now(scheduler);
    while (true) {
        const task = delayed.peek();
        if (isNone(task)) {
            break;
        }
        const taskIsDispose = isDisposed(task.continuation);
        if (task.dueTime > now$1 && !taskIsDispose) {
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
const delayedComparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.taskID - b.taskID;
    return diff;
};
class AbstractQueueScheduler extends AbstractEnumerator {
    constructor(host) {
        super();
        this.host = host;
        this.delayed = createPriorityQueue(delayedComparator);
        this.inContinuation = false;
        this.dueTime = 0;
        this.taskIDCounter = 0;
        this.yieldRequested = false;
        this._inner = disposed;
        this.hostContinuation = () => {
            for (let task = peek(this); isSome(task) && !isDisposed(this); task = peek(this)) {
                const { continuation, dueTime } = task;
                const delay = max(dueTime - now(this), 0);
                if (delay === 0) {
                    move(this);
                    pipe(this, runContinuation(continuation));
                }
                else {
                    this.dueTime = now(this) + delay;
                }
                __yield({ delay });
            }
        };
    }
    get inner() {
        return this._inner;
    }
    set inner(newInner) {
        const { _inner: oldInner } = this;
        if (oldInner !== newInner) {
            oldInner.dispose();
            this._inner = newInner;
        }
    }
    get now() {
        return now(this.host);
    }
    get shouldYield() {
        const { inContinuation, yieldRequested } = this;
        if (inContinuation) {
            this.yieldRequested = false;
        }
        const next = peek(this);
        return (inContinuation &&
            (yieldRequested ||
                isDisposed(this) ||
                !hasCurrent(this) ||
                this.isPaused ||
                (isSome(next) ? this._shouldYield(next) : false) ||
                shouldYield(this.host)));
    }
    move() {
        reset(this);
        // First fast forward through any disposed tasks.
        peek(this);
        const task = this.queue.pop();
        if (isSome(task)) {
            this.current = task;
        }
        return hasCurrent(this);
    }
    requestYield() {
        this.yieldRequested = true;
    }
    scheduleOnHost() {
        const task = peek(this);
        const continuationActive = !isDisposed(this.inner) && isSome(task) && this.dueTime <= task.dueTime;
        if (isNone(task) || continuationActive || this.isPaused) {
            return;
        }
        const dueTime = task.dueTime;
        const delay = max(dueTime - now(this), 0);
        this.dueTime = dueTime;
        this.inner = pipe(this.host, schedule(this.hostContinuation, { delay }));
    }
    schedule(continuation, options) {
        const delay = getDelay(options);
        pipe(this, add(continuation, true));
        if (!isDisposed(continuation)) {
            const { now } = this;
            const dueTime = max(now + delay, now);
            const task = inContinuation(this) &&
                hasCurrent(this) &&
                current(this).continuation === continuation &&
                delay <= 0
                ? current(this)
                : this.createTask({
                    taskID: this.taskIDCounter++,
                    continuation,
                    dueTime,
                }, options);
            const { delayed, queue } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue.push(task);
            this.scheduleOnHost();
        }
    }
}

const comparator$2 = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.priority - b.priority;
    diff = diff !== 0 ? diff : a.taskID - b.taskID;
    return diff;
};
class PriorityScheduler extends AbstractQueueScheduler {
    constructor() {
        super(...arguments);
        this.isPaused = false;
        this.queue = createPriorityQueue(comparator$2);
    }
    _shouldYield(next) {
        const { current } = this;
        return (current !== next &&
            next.dueTime <= now(this) &&
            next.priority > current.priority);
    }
    createTask(task, options = {}) {
        const { priority } = options;
        return {
            ...task,
            priority: isSome(priority)
                ? max(priority, 0)
                : MAX_SAFE_INTEGER,
        };
    }
}
/**
 * Creates a new priority scheduler which schedules work using the provided
 * host scheduler.
 *
 * @param hostScheduler The underlying platform scheduler used by the priority
 * scheduler to schedule work.
 */
const createPriorityScheduler = (hostScheduler) => {
    const scheduler = pipe(PriorityScheduler, newInstanceWith(hostScheduler), addTo(hostScheduler, true), onDisposed(() => {
        scheduler.queue.clear();
        scheduler.delayed.clear();
    }));
    return scheduler;
};

const comparator$1 = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.taskID - b.taskID;
    return diff;
};
class PausableScheduler extends AbstractQueueScheduler {
    constructor() {
        super(...arguments);
        this.isPaused = false;
        this.queue = createPriorityQueue(comparator$1);
    }
    pause() {
        this.isPaused = true;
        this.inner = disposed;
    }
    resume() {
        this.isPaused = false;
        this.scheduleOnHost();
    }
    _shouldYield() {
        return false;
    }
    createTask(task, _) {
        return task;
    }
}
const createPausableScheduler = (hostScheduler) => {
    const scheduler = pipe(PausableScheduler, newInstanceWith(hostScheduler), addTo(hostScheduler, true), onDisposed(() => {
        scheduler.queue.clear();
        scheduler.delayed.clear();
    }));
    scheduler.pause();
    return scheduler;
};

class SchedulerWithPriorityImpl extends AbstractDisposable {
    constructor(priorityScheduler, priority) {
        super();
        this.priorityScheduler = priorityScheduler;
        this.priority = priority;
    }
    get inContinuation() {
        return inContinuation(this.priorityScheduler);
    }
    get now() {
        return now(this.priorityScheduler);
    }
    get shouldYield() {
        return shouldYield(this.priorityScheduler);
    }
    requestYield() {
        this.priorityScheduler.requestYield();
    }
    schedule(continuation, options) {
        const delay = getDelay(options);
        pipe(this, add(continuation, true));
        if (!isDisposed(continuation)) {
            this.priorityScheduler.schedule(continuation, {
                priority: this.priority,
                delay,
            });
        }
    }
}
/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toSchedulerWithPriority = (priority) => priorityScheduler => pipe(SchedulerWithPriorityImpl, newInstanceWith(priorityScheduler, priority), addTo(priorityScheduler, true));

const scheduleImmediateWithSetImmediate = (scheduler, continuation) => {
    const disposable = pipe(createDisposable(), addTo(continuation), onDisposed(() => clearImmediate(immmediate)));
    const immmediate = setImmediate(run, scheduler, continuation, disposable);
};
const scheduleImmediateWithMessageChannel = (scheduler, channel, continuation) => {
    channel.port1.onmessage = () => run(scheduler, continuation, disposed);
    channel.port2.postMessage(null);
};
const scheduleDelayed = (scheduler, continuation, delay) => {
    const disposable = pipe(createDisposable(), addTo(continuation), onDisposed(_ => clearTimeout(timeout)));
    const timeout = setTimeout(run, delay, scheduler, continuation, disposable);
};
const scheduleImmediate = (scheduler, continuation) => {
    const { messageChannel, supportsSetImmediate } = scheduler;
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
const run = (scheduler, continuation, immmediateOrTimerDisposable) => {
    // clear the immediateOrTimer disposable
    pipe(immmediateOrTimerDisposable, dispose());
    scheduler.startTime = now(scheduler);
    pipe(scheduler, runContinuation(continuation));
};
class HostScheduler extends AbstractDisposable {
    constructor(yieldInterval) {
        super();
        this.yieldInterval = yieldInterval;
        this.inContinuation = false;
        this.messageChannel = none;
        this.supportsPerformanceNow = false;
        this.supportsIsInputPending = false;
        this.supportsSetImmediate = false;
        this.supportsProcessHRTime = false;
        this.startTime = now(this);
        this.yieldRequested = false;
    }
    get now() {
        const { supportsPerformanceNow, supportsProcessHRTime } = this;
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
    get shouldYield() {
        const { inContinuation, yieldRequested } = this;
        if (inContinuation) {
            this.yieldRequested = false;
        }
        return (inContinuation &&
            (yieldRequested ||
                now(this) > this.startTime + this.yieldInterval ||
                this.isInputPending));
    }
    get isInputPending() {
        return (this.supportsIsInputPending &&
            navigator.scheduling.isInputPending());
    }
    requestYield() {
        this.yieldRequested = true;
    }
    schedule(continuation, options) {
        const delay = getDelay(options);
        pipe(this, add(continuation, true));
        const continuationIsDisposed = isDisposed(continuation);
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
    const hostScheduler = newInstance(HostScheduler, yieldInterval);
    hostScheduler.supportsPerformanceNow =
        typeof performance === "object" && typeof performance.now === "function";
    hostScheduler.supportsSetImmediate = typeof setImmediate === "function";
    hostScheduler.supportsProcessHRTime =
        typeof process === "object" && typeof process.hrtime === "function";
    hostScheduler.supportsIsInputPending =
        typeof navigator === "object" &&
            navigator.scheduling !== undefined &&
            navigator.scheduling.isInputPending !== undefined;
    if (typeof MessageChannel === "function") {
        const messageChannel = newInstance(MessageChannel);
        hostScheduler.messageChannel = messageChannel;
        pipe(hostScheduler, onDisposed(_ => {
            messageChannel.port1.close();
            messageChannel.port2.close();
        }));
    }
    return hostScheduler;
};

const comparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.id - b.id;
    return diff;
};
class VirtualTimeSchedulerImpl extends AbstractEnumerator {
    constructor(maxMicroTaskTicks = MAX_SAFE_INTEGER) {
        super();
        this.maxMicroTaskTicks = maxMicroTaskTicks;
        this.inContinuation = false;
        this.microTaskTicks = 0;
        this.now = 0;
        this.taskIDCount = 0;
        this.yieldRequested = false;
        this.taskQueue = createPriorityQueue(comparator);
    }
    get shouldYield() {
        const { inContinuation, yieldRequested } = this;
        if (inContinuation) {
            this.microTaskTicks++;
            this.yieldRequested = false;
        }
        return (inContinuation &&
            (yieldRequested || this.microTaskTicks >= this.maxMicroTaskTicks));
    }
    move() {
        const taskQueue = this.taskQueue;
        reset(this);
        if (!isDisposed(this)) {
            const task = taskQueue.pop();
            if (isSome(task)) {
                const { dueTime, continuation } = task;
                this.microTaskTicks = 0;
                this.now = dueTime;
                this.current = none;
                pipe(this, runContinuation(continuation));
            }
            else {
                pipe(this, dispose());
            }
        }
        return hasCurrent(this);
    }
    requestYield() {
        this.yieldRequested = true;
    }
    schedule(continuation, options) {
        const delay = getDelay(options);
        pipe(this, add(continuation, true));
        if (!isDisposed(continuation)) {
            this.taskQueue.push({
                id: this.taskIDCount++,
                dueTime: now(this) + delay,
                continuation,
            });
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
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    return newInstance(VirtualTimeSchedulerImpl, maxMicroTaskTicks);
};

export { __yield, createHostScheduler, createPausableScheduler, createPriorityScheduler, createVirtualTimeScheduler, getDelay, hasDelay, inContinuation, now, runContinuation, schedule, shouldYield, toSchedulerWithPriority };
