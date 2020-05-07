import { createPriorityQueue } from "../queues.js";
import { none, isSome } from "../../option.js";
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
class VirtualTimeSchedulerImpl extends AbstractSchedulerContinuation {
    constructor(maxMicroTaskTicks) {
        super();
        this.maxMicroTaskTicks = maxMicroTaskTicks;
        this.current = none;
        this.hasCurrent = false;
        this.inContinuation = false;
        this.microTaskTicks = 0;
        this.now = 0;
        this.shouldYield = () => {
            const runShouldYield = this.hostShouldYield;
            this.microTaskTicks++;
            return (this.microTaskTicks >= this.maxMicroTaskTicks ||
                (isSome(runShouldYield) && runShouldYield()));
        };
        this.taskIDCount = 0;
        this.taskQueue = createPriorityQueue(comparator);
    }
    produce(hostShouldYield) {
        const hostShouldYieldIsDefined = isSome(hostShouldYield);
        this.hostShouldYield = hostShouldYield;
        if (this.maxMicroTaskTicks === Number.MAX_SAFE_INTEGER &&
            !hostShouldYieldIsDefined) {
            this.shouldYield = none;
        }
        while (move(this)) {
            const continuation = this.current;
            this.inContinuation = true;
            const delay = continuation.run(this.shouldYield);
            this.inContinuation = false;
            if (!continuation.isDisposed) {
                this.schedule(continuation, delay);
            }
            if (hostShouldYieldIsDefined) {
                if (hostShouldYield()) {
                    this.hostShouldYield = none;
                    return 0;
                }
            }
        }
        this.hostShouldYield = none;
        return -1;
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
}
export const createVirtualTimeScheduler = (maxMicroTaskTicks = Number.MAX_SAFE_INTEGER) => new VirtualTimeSchedulerImpl(maxMicroTaskTicks);
