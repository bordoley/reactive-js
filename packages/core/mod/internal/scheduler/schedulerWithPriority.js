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
    schedule(continuation, delay = 0) {
        this.priorityScheduler.schedule(continuation, this.priority, delay);
    }
}
export const toSchedulerWithPriority = (priority) => priorityScheduler => new SchedulerWithPriorityImpl(priorityScheduler, priority);
