/// <reference types="./PrioritySchedulerLike.d.ts" />
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { properties, prototype } from '../__internal__/util/Disposable.mjs';
import { Object_init, init, createObjectFactory } from '../__internal__/util/Object.mjs';
import { pipe } from '../functions.mjs';
import { S as SchedulerLike_inContinuation, i as isInContinuation, b as SchedulerLike_now, g as getCurrentTime, c as SchedulerLike_shouldYield, s as shouldYield, d as SchedulerLike_requestYield, r as requestYield, e as SchedulerLike_schedule } from '../scheduling-bf2730af.mjs';
import { addIgnoringChildErrors } from '../util/DisposableLike.mjs';
import { none } from '../util/Option.mjs';
import { isDisposed } from '../__internal__/util/DisposableLike.mjs';

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toScheduler = /*@__PURE__*/ (() => {
    const properties$1 = {
        ...properties,
        priorityScheduler: none,
        priority: 0,
    };
    const prototype$1 = {
        ...prototype,
        [Object_init](scheduler, priority) {
            init(prototype, this);
            this.priorityScheduler = scheduler;
            this.priority = priority;
        },
        get [SchedulerLike_inContinuation]() {
            const self = this;
            return isInContinuation(self.priorityScheduler);
        },
        get [SchedulerLike_now]() {
            const self = this;
            return getCurrentTime(self.priorityScheduler);
        },
        get [SchedulerLike_shouldYield]() {
            const self = this;
            return shouldYield(self.priorityScheduler);
        },
        [SchedulerLike_requestYield]() {
            const self = this;
            requestYield(self.priorityScheduler);
        },
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            pipe(this, addIgnoringChildErrors(continuation));
            if (!isDisposed(continuation)) {
                this.priorityScheduler[SchedulerLike_schedule](continuation, {
                    priority: this.priority,
                    delay,
                });
            }
        },
    };
    const createInstance = createObjectFactory(prototype$1, properties$1);
    return (priority) => priorityScheduler => createInstance(priorityScheduler, priority);
})();

export { toScheduler };
