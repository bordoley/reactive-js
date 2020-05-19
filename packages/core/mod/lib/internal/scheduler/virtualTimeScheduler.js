import { AbstractDisposable, addDisposable, dispose } from "../../disposable.js";
import { none, isSome } from "../../option.js";
import { createPriorityQueue } from "../queues.js";
import { continue$ } from "./schedulerContinuation.js";
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
            dispose(scheduler);
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
        this.taskQueue = createPriorityQueue(comparator);
    }
    get shouldYield() {
        this.microTaskTicks++;
        return this.microTaskTicks >= this.maxMicroTaskTicks;
    }
    run() {
        while (!this.isDisposed && move(this)) {
            this.inContinuation = true;
            continue$(this.current);
            this.inContinuation = false;
        }
        dispose(this);
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
export const createVirtualTimeScheduler = ({ maxMicroTaskTicks } = { maxMicroTaskTicks: Number.MAX_SAFE_INTEGER }) => new VirtualTimeSchedulerImpl(maxMicroTaskTicks);
