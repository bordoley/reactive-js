/// <reference types="./PrioritySchedulerLike.d.ts" />
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { prototype } from '../__internal__/util/Disposable.mjs';
import { mixWithProps, Object_properties, Object_init, init, mixWith, createObjectFactory } from '../__internal__/util/Object.mjs';
import { pipe, none } from '../functions.mjs';
import { SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../scheduling.mjs';
import { addIgnoringChildErrors } from '../util/DisposableLike.mjs';
import { shouldYield, requestYield } from './SchedulerLike.mjs';
import { SchedulerLike_inContinuation, isInContinuation, SchedulerLike_now, getCurrentTime } from '../__internal__/schedulingInternal.mjs';
import { isDisposed } from '../__internal__/util/DisposableLikeInternal.mjs';

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toScheduler = /*@__PURE__*/ (() => {
    const properties = pipe({
        priorityScheduler: none,
        priority: 0,
    }, mixWithProps(prototype));
    const createInstance = pipe({
        [Object_properties]: properties,
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
            requestYield(this.priorityScheduler);
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
    }, mixWith(prototype), createObjectFactory());
    return (priority) => priorityScheduler => createInstance(priorityScheduler, priority);
})();

export { toScheduler };
