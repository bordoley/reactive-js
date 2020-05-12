import { scheduleWithPriority } from "./schedule.js";
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
    schedule(continuation, { delay } = { delay: 0 }) {
        scheduleWithPriority(this.priorityScheduler, continuation, {
            priority: this.priority,
            delay,
        });
    }
    shouldYield() {
        return this.priorityScheduler.shouldYield();
    }
}
export const toSchedulerWithPriority = (priority) => priorityScheduler => new SchedulerWithPriorityImpl(priorityScheduler, priority);
