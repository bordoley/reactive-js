import { AbstractSerialDisposable, disposed, AbstractDisposable, } from "../../disposable.js";
import { none, isSome, isNone } from "../../option.js";
import { createPriorityQueue } from "../queues.js";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation.js";
import { toSchedulerWithPriority } from "./schedulerWithPriority.js";
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
    return task !== null && task !== void 0 ? task : delayed.peek();
};
class PrioritySchedulerContinuation extends AbstractSchedulerContinuation {
    constructor(priorityScheduler) {
        super();
        this.priorityScheduler = priorityScheduler;
    }
    produce(host) {
        const priorityScheduler = this.priorityScheduler;
        for (let task = peek(priorityScheduler), isDisposed = this.isDisposed; isSome(task) && !isDisposed; task = peek(priorityScheduler)) {
            const { continuation, dueTime, priority } = task;
            const now = host.now;
            const delay = dueTime - now;
            if (delay > 0) {
                priorityScheduler.dueTime = dueTime;
                host.schedule(this, { delay });
                return;
            }
            move(priorityScheduler);
            const scheduler = toSchedulerWithPriority(priority)(priorityScheduler);
            priorityScheduler.inContinuation = true;
            continuation.run(scheduler);
            priorityScheduler.inContinuation = false;
            isDisposed = this.isDisposed;
            if (!isDisposed && host.shouldYield()) {
                host.schedule(this);
                return;
            }
        }
        this.dispose();
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
    scheduler.host.schedule(continuation, { delay });
};
class PriorityScheduler extends AbstractSerialDisposable {
    constructor(host) {
        super();
        this.host = host;
        this.current = none;
        this.delayed = createPriorityQueue(delayedComparator);
        this.dueTime = 0;
        this.inContinuation = false;
        this.queue = createPriorityQueue(comparator);
        this.taskIDCounter = 0;
        this.add(() => {
            this.queue.clear();
            this.delayed.clear();
        });
    }
    get now() {
        return this.host.now;
    }
    schedule(continuation, { priority, delay = 0 }) {
        this.add(continuation);
        if (!continuation.isDisposed) {
            const now = this.now;
            const dueTime = now + delay;
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
            if (head === task && !continuationActive) {
                scheduleContinuation(this, head);
            }
        }
    }
    shouldYield() {
        const current = this.current;
        const next = peek(this);
        const nextTaskIsHigherPriority = isSome(current) &&
            isSome(next) &&
            current !== next &&
            next.dueTime <= this.now &&
            next.priority < current.priority;
        return (this.isDisposed || nextTaskIsHigherPriority || this.host.shouldYield());
    }
}
export const toPriorityScheduler = (hostScheduler) => new PriorityScheduler(hostScheduler);
class PausableSchedulerImpl extends AbstractDisposable {
    constructor(priorityScheduler) {
        super();
        this.priorityScheduler = priorityScheduler;
        this.isPaused = true;
        this.add(priorityScheduler);
        priorityScheduler.add(this);
    }
    get inContinuation() {
        return this.priorityScheduler.inContinuation;
    }
    get now() {
        return this.priorityScheduler.now;
    }
    pause() {
        this.isPaused = true;
        this.priorityScheduler.inner = disposed;
    }
    resume() {
        const priorityScheduler = this.priorityScheduler;
        const head = peek(priorityScheduler);
        this.isPaused = false;
        if (priorityScheduler.inner.isDisposed && isSome(head)) {
            scheduleContinuation(priorityScheduler, head);
        }
    }
    schedule(continuation, { delay } = { delay: 0 }) {
        const priorityScheduler = this.priorityScheduler;
        priorityScheduler.schedule(continuation, { priority: 0, delay });
        if (this.isPaused) {
            priorityScheduler.inner = disposed;
        }
    }
    shouldYield() {
        return this.priorityScheduler.shouldYield();
    }
}
export const toPausableScheduler = (hostScheduler) => new PausableSchedulerImpl(new PriorityScheduler(hostScheduler));
