import { createPriorityQueue } from "../queues.js";
import { AbstractSerialDisposable, disposed, } from "../../disposable.js";
import { none, isSome, isNone } from "../../option.js";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation.js";
import { alwaysFalse } from "../../functions.js";
const move = (scheduler) => {
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
        const taskIsDispose = task.continuation.isDisposed;
        if (!taskIsDispose) {
            break;
        }
        queue.pop();
    }
    return task ?? delayed.peek();
};
class PrioritySchedulerContinuation extends AbstractSchedulerContinuation {
    constructor(scheduler) {
        super();
        this.scheduler = scheduler;
        this.hostShouldYield = alwaysFalse;
        this.shouldYield = () => {
            const scheduler = this.scheduler;
            const current = scheduler.current;
            const next = peek(scheduler);
            const nextTaskIsHigherPriority = isSome(current) &&
                isSome(next) &&
                current !== next &&
                next.dueTime <= scheduler.now &&
                next.priority < current.priority;
            return (this.isDisposed || nextTaskIsHigherPriority || this.hostShouldYield());
        };
    }
    produce(hostShouldYield) {
        this.hostShouldYield = hostShouldYield ?? alwaysFalse;
        const { scheduler } = this;
        const { delayed, queue } = scheduler;
        for (let task = peek(scheduler), isDisposed = this.isDisposed; isSome(task) && !isDisposed; task = peek(scheduler)) {
            const { continuation, dueTime } = task;
            const now = scheduler.now;
            const delay = dueTime - now;
            if (delay > 0) {
                scheduler.dueTime = dueTime;
                return delay;
            }
            move(scheduler);
            scheduler.inContinuation = true;
            const nextDelay = continuation.run(this.shouldYield);
            scheduler.inContinuation = false;
            if (!continuation.isDisposed) {
                const now = scheduler.now;
                task.taskID = scheduler.taskIDCounter++;
                task.dueTime = now + nextDelay;
                const targetQueue = task.dueTime > now ? delayed : queue;
                targetQueue.push(task);
            }
            isDisposed = this.isDisposed;
            if (!isDisposed && this.hostShouldYield()) {
                return 0;
            }
        }
        return -1;
    }
}
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
    const continuation = new PrioritySchedulerContinuation(scheduler);
    scheduler.inner = continuation;
    const dueTime = task.dueTime;
    scheduler.dueTime = dueTime;
    const delay = dueTime - scheduler.now;
    scheduler.hostScheduler.schedule(continuation, delay);
};
const scheduleWithPriority = (scheduler, continuation, priority, delay = 0) => {
    delay = Math.max(0, delay);
    scheduler.add(continuation);
    if (!continuation.isDisposed) {
        const now = scheduler.now;
        const dueTime = now + delay;
        const task = {
            taskID: scheduler.taskIDCounter++,
            continuation,
            priority,
            dueTime,
        };
        const { delayed, queue } = scheduler;
        const targetQueue = dueTime > now ? delayed : queue;
        targetQueue.push(task);
        const head = peek(scheduler);
        const continuationActive = !scheduler.inner.isDisposed && scheduler.dueTime <= dueTime;
        if (head === task && !continuationActive) {
            scheduleContinuation(scheduler, head);
        }
    }
};
class PriorityQueueScheduler extends AbstractSerialDisposable {
    constructor(hostScheduler) {
        super();
        this.hostScheduler = hostScheduler;
        this.inContinuation = false;
        this.delayed = createPriorityQueue(delayedComparator);
        this.queue = createPriorityQueue(comparator);
        this.current = none;
        this.taskIDCounter = 0;
        this.dueTime = 0;
        this.add(() => {
            this.queue.clear();
            this.delayed.clear();
        });
    }
    get now() {
        return this.hostScheduler.now;
    }
}
class PrioritySchedulerImpl extends PriorityQueueScheduler {
    schedule(continuation, priority, delay = 0) {
        scheduleWithPriority(this, continuation, priority, delay);
    }
}
export const toPriorityScheduler = (hostScheduler) => new PrioritySchedulerImpl(hostScheduler);
class PausableSchedulerImpl extends PriorityQueueScheduler {
    constructor() {
        super(...arguments);
        this.isPaused = true;
    }
    pause() {
        this.isPaused = true;
        this.inner = disposed;
    }
    resume() {
        this.isPaused = false;
        const head = peek(this);
        if (this.inner.isDisposed && isSome(head)) {
            scheduleContinuation(this, head);
        }
    }
    schedule(continuation, delay = 0) {
        scheduleWithPriority(this, continuation, 0, delay);
        if (this.isPaused) {
            this.inner = disposed;
        }
    }
}
export const toPausableScheduler = (hostScheduler) => new PausableSchedulerImpl(hostScheduler);
