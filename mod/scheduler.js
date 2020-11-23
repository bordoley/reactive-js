'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var disposable = require('./disposable.js');
var queues = require('./queues.js');

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
class SchedulerContinuationImpl extends disposable.AbstractDisposable {
    constructor(scheduler, f) {
        super();
        this.scheduler = scheduler;
        this.f = f;
        this.listeners = new Set();
        disposable.addTeardown(this, _e => {
            this.listeners.clear();
        });
    }
    addListener(_ev, listener) {
        if (!this.isDisposed) {
            this.listeners.add(listener);
        }
    }
    removeListener(_ev, listener) {
        this.listeners.delete(listener);
    }
    continue() {
        if (!this.isDisposed) {
            const listeners = this.listeners;
            let error = option.none;
            let yieldError = option.none;
            notifyListeners(listeners, true);
            try {
                this.f(this.scheduler);
            }
            catch (cause) {
                if (isYieldError(cause)) {
                    yieldError = cause;
                }
                else {
                    error = { cause };
                }
            }
            notifyListeners(listeners, false);
            if (option.isSome(yieldError)) {
                this.scheduler.schedule(this, yieldError);
            }
            else {
                functions.pipe(this, disposable.dispose(error));
            }
        }
    }
}
const run = (continuation) => {
    continuation.continue();
};
const yield$ = (scheduler, delay) => {
    if (delay > 0 || scheduler.shouldYield) {
        throw new YieldError(delay);
    }
};
const schedule = (f, options) => scheduler => {
    const continuation = new SchedulerContinuationImpl(scheduler, f);
    scheduler.schedule(continuation, options);
    return continuation;
};

const move = (scheduler) => {
    // First fast forward through any disposed tasks.
    peek(scheduler);
    const task = scheduler.queue.pop();
    const hasCurrent = option.isSome(task);
    scheduler.current = task;
    return hasCurrent;
};
const peek = (scheduler) => {
    const { delayed, queue } = scheduler;
    const now = scheduler.now;
    while (true) {
        const task = delayed.peek();
        if (option.isNone(task)) {
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
    let task = option.none;
    while (true) {
        task = queue.peek();
        if (option.isNone(task)) {
            break;
        }
        if (!task.continuation.isDisposed) {
            break;
        }
        queue.pop();
    }
    return task !== null && task !== void 0 ? task : delayed.peek();
};
const comparator = (a, b) => {
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
    scheduler.inner = functions.pipe(scheduler.host, schedule(scheduler.continuation, { delay }));
};
class PriorityScheduler extends disposable.AbstractSerialDisposable {
    constructor(host) {
        super();
        this.host = host;
        this.continuation = (host) => {
            for (let task = peek(this); option.isSome(task) && !this.isDisposed; task = peek(this)) {
                const { continuation, dueTime } = task;
                const delay = Math.max(dueTime - this.now, 0);
                if (delay === 0) {
                    move(this);
                    this.inContinuation = true;
                    run(continuation);
                    this.inContinuation = false;
                }
                else {
                    this.dueTime = this.now + delay;
                }
                yield$(host, delay);
            }
        };
        this.current = option.none;
        this.delayed = queues.createPriorityQueue(delayedComparator);
        this.dueTime = 0;
        this.inContinuation = false;
        this.isPaused = false;
        this.queue = queues.createPriorityQueue(comparator);
        this.taskIDCounter = 0;
        disposable.addTeardown(this, _e => {
            this.queue.clear();
            this.delayed.clear();
        });
    }
    get now() {
        return this.host.now;
    }
    get shouldYield() {
        const current = this.current;
        const next = peek(this);
        const nextTaskIsHigherPriority = option.isSome(current) &&
            option.isSome(next) &&
            current !== next &&
            next.dueTime <= this.now &&
            next.priority < current.priority;
        return (this.inContinuation &&
            (this.isDisposed ||
                this.isPaused ||
                nextTaskIsHigherPriority ||
                this.host.shouldYield));
    }
    pause() {
        this.isPaused = true;
        this.inner = disposable.disposed;
    }
    resume() {
        const head = peek(this);
        this.isPaused = false;
        if (this.inner.isDisposed && option.isSome(head)) {
            scheduleContinuation(this, head);
        }
    }
    schedule(continuation, options = {}) {
        let { delay = 0, priority } = options;
        delay = Math.max(0, delay);
        priority = option.isSome(priority)
            ? priority
            : this.inContinuation
                ? this.current.priority
                : Number.MAX_SAFE_INTEGER;
        disposable.addDisposable(this, continuation);
        if (!continuation.isDisposed) {
            const now = this.now;
            const dueTime = Math.max(now + delay, now);
            const task = {
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
const createScheduledCallback = (disposable$1, cb) => () => {
    if (!disposable$1.isDisposed) {
        functions.pipe(disposable$1, disposable.dispose());
        cb();
    }
};
const scheduleImmediateWithSetImmediate = (cb) => {
    const disposable$1 = disposable.createDisposable();
    const immediate = setImmediate(createScheduledCallback(disposable$1, cb));
    disposable.addTeardown(disposable$1, functions.defer(immediate, clearImmediate));
    return disposable$1;
};
const scheduleImmediateWithMessageChannel = (channel) => (cb) => {
    const disposable$1 = disposable.createDisposable();
    channel.port1.onmessage = createScheduledCallback(disposable$1, cb);
    channel.port2.postMessage(null);
    return disposable$1;
};
const scheduleDelayed = (cb, delay) => {
    const disposable$1 = disposable.createDisposable();
    const timeout = setTimeout(createScheduledCallback(disposable$1, cb), delay);
    disposable.addTeardown(disposable$1, functions.defer(timeout, clearTimeout));
    return disposable$1;
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
        run(continuation);
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
    get shouldYield() {
        return (this.inContinuation && this.now > this.startTime + this.yieldInterval);
    }
    schedule(continuation, options = {}) {
        const { delay = 0 } = options;
        if (!continuation.isDisposed) {
            const callback = createCallback(this, continuation);
            const callbackSubscription = delay > 0
                ? scheduleDelayed(callback, delay)
                : scheduleImmediate(callback);
            disposable.addDisposable(continuation, callbackSubscription);
        }
    }
}
const createHostScheduler = (options = {}) => {
    const { yieldInterval = 5 } = options;
    return new HostScheduler(yieldInterval);
};

const comparator$1 = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.id - b.id;
    return diff;
};
const move$1 = (scheduler) => {
    const taskQueue = scheduler.taskQueue;
    scheduler.hasCurrent = false;
    if (!scheduler.isDisposed) {
        const task = taskQueue.pop();
        if (option.isSome(task)) {
            const { dueTime, continuation } = task;
            scheduler.current = continuation;
            scheduler.hasCurrent = true;
            scheduler.microTaskTicks = 0;
            scheduler.now = dueTime;
        }
        else {
            functions.pipe(scheduler, disposable.dispose());
        }
    }
    return scheduler.hasCurrent;
};
class VirtualTimeSchedulerImpl extends disposable.AbstractDisposable {
    constructor(maxMicroTaskTicks) {
        super();
        this.maxMicroTaskTicks = maxMicroTaskTicks;
        this.current = option.none;
        this.hasCurrent = false;
        this.inContinuation = false;
        this.microTaskTicks = 0;
        this.now = 0;
        this.taskIDCount = 0;
        this.taskQueue = queues.createPriorityQueue(comparator$1);
    }
    get shouldYield() {
        if (this.inContinuation) {
            this.microTaskTicks++;
        }
        return this.inContinuation && this.microTaskTicks >= this.maxMicroTaskTicks;
    }
    run() {
        while (!this.isDisposed && move$1(this)) {
            this.inContinuation = true;
            run(this.current);
            this.inContinuation = false;
        }
        functions.pipe(this, disposable.dispose());
    }
    schedule(continuation, { delay } = { delay: 0 }) {
        delay = Math.max(0, delay);
        disposable.addDisposable(this, continuation);
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

exports.YieldError = YieldError;
exports.createHostScheduler = createHostScheduler;
exports.createVirtualTimeScheduler = createVirtualTimeScheduler;
exports.run = run;
exports.schedule = schedule;
exports.toPausableScheduler = toPausableScheduler;
exports.toPriorityScheduler = toPriorityScheduler;
exports.toSchedulerWithPriority = toSchedulerWithPriority;
exports.yield$ = yield$;
