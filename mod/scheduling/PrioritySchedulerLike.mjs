/// <reference types="./PrioritySchedulerLike.d.ts" />
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { create as create$1 } from '../__internal__/scheduling/QueueScheduler.mjs';
import { properties as properties$1, prototype as prototype$1, init } from '../__internal__/util/Disposable.mjs';
import { createObjectFactory } from '../__internal__/util/Object.mjs';
import { addIgnoringChildErrors } from '../util/DisposableLike.mjs';
import { none } from '../util/Option.mjs';
import { pipe } from '../util/functions.mjs';
import { isInContinuation, SchedulerLike_now, getCurrentTime, SchedulerLike_shouldYield, shouldYield, SchedulerLike_requestYield, requestYield, SchedulerLike_schedule } from './SchedulerLike.mjs';
import { SchedulerLike_inContinuation } from '../__internal__/scheduling.mjs';
import { isDisposed } from '../__internal__/util/DisposableLike.mjs';

const properties = {
    ...properties$1,
    priorityScheduler: none,
    priority: 0,
};
const prototype = {
    ...prototype$1,
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
const createInstance = /*@__PURE__*/ createObjectFactory(prototype, properties);
/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toScheduler = (priority) => priorityScheduler => {
    const instance = createInstance();
    init(instance);
    instance.priority = priority;
    instance.priorityScheduler = priorityScheduler;
    return instance;
};
const create = create$1;

export { create, toScheduler };
