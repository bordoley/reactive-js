import { AbstractSerialDisposable, disposed, addDisposable, addTeardown, } from "../../disposable.js";
import { none, isSome, isNone } from "../../option.js";
import { createPriorityQueue } from "../queues.js";
import { run, schedule, yield$ } from "./schedulerContinuation.js";
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
    const delay = dueTime - scheduler.now;
    scheduler.dueTime = dueTime;
    scheduler.inner = schedule(scheduler.host, scheduler.continuation, { delay });
};
class PriorityScheduler extends AbstractSerialDisposable {
    constructor(host) {
        super();
        this.host = host;
        this.continuation = (host) => {
            for (let task = peek(this); isSome(task) && !this.isDisposed; task = peek(this)) {
                const { continuation, dueTime } = task;
                const delay = Math.max(dueTime - this.now, 0);
                if (delay === 0) {
                    move(this);
                    this.inContinuation = true;
                    run(continuation);
                    this.inContinuation = false;
                }
                yield$(host, delay);
            }
        };
        this.current = none;
        this.delayed = createPriorityQueue(delayedComparator);
        this.dueTime = 0;
        this.inContinuation = false;
        this.isPaused = false;
        this.queue = createPriorityQueue(comparator);
        this.taskIDCounter = 0;
        addTeardown(this, _e => {
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
        const nextTaskIsHigherPriority = isSome(current) &&
            isSome(next) &&
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
        this.inner = disposed;
    }
    resume() {
        const head = peek(this);
        this.isPaused = false;
        if (this.inner.isDisposed && isSome(head)) {
            scheduleContinuation(this, head);
        }
    }
    schedule(continuation, options = {}) {
        let { delay, priority } = options;
        delay = Math.max(0, delay !== null && delay !== void 0 ? delay : 0);
        priority = isSome(priority)
            ? priority
            : this.inContinuation
                ? this.current.priority
                : Number.MAX_SAFE_INTEGER;
        addDisposable(this, continuation);
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
            if (head === task && !continuationActive && !this.isPaused) {
                scheduleContinuation(this, head);
            }
        }
    }
}
export const toPriorityScheduler = (hostScheduler) => new PriorityScheduler(hostScheduler);
export const toPausableScheduler = (hostScheduler) => {
    const scheduler = new PriorityScheduler(hostScheduler);
    scheduler.pause();
    return scheduler;
};
