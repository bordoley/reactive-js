import { alwaysFalse } from "../../functions.js";
import { none, isSome } from "../../option.js";
import { createPriorityQueue } from "../queues.js";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation.js";
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
            scheduler.dispose();
        }
    }
    return scheduler.hasCurrent;
};
const ignoreScheduler = {
    inContinuation: true,
    now: 0,
    schedule(_schduler, _delay) { },
    shouldYield: alwaysFalse,
};
class VirtualTimeSchedulerImpl extends AbstractSchedulerContinuation {
    constructor(maxMicroTaskTicks) {
        super();
        this.maxMicroTaskTicks = maxMicroTaskTicks;
        this.current = none;
        this.hasCurrent = false;
        this.inContinuation = false;
        this.microTaskTicks = 0;
        this.now = 0;
        this.host = ignoreScheduler;
        this.taskIDCount = 0;
        this.taskQueue = createPriorityQueue(comparator);
    }
    produce(scheduler) {
        this.host = scheduler;
        while (move(this)) {
            const continuation = this.current;
            this.inContinuation = true;
            continuation.run(this);
            this.inContinuation = false;
            if (scheduler.shouldYield()) {
                this.host = ignoreScheduler;
                scheduler.schedule(this);
                return;
            }
        }
        this.host = ignoreScheduler;
        this.dispose();
    }
    run(scheduler = ignoreScheduler) {
        super.run(scheduler);
    }
    schedule(continuation, delay = 0) {
        this.add(continuation);
        if (!continuation.isDisposed) {
            const work = {
                id: this.taskIDCount++,
                dueTime: this.now + delay,
                continuation,
            };
            this.taskQueue.push(work);
        }
    }
    shouldYield() {
        const host = this.host;
        this.microTaskTicks++;
        return this.microTaskTicks >= this.maxMicroTaskTicks || host.shouldYield();
    }
}
export const createVirtualTimeScheduler = (maxMicroTaskTicks = Number.MAX_SAFE_INTEGER) => new VirtualTimeSchedulerImpl(maxMicroTaskTicks);
