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
export const toSchedulerWithPriority = (priority) => priorityScheduler => new SchedulerWithPriorityImpl(priorityScheduler, priority);
