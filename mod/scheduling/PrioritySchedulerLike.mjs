/// <reference types="./PrioritySchedulerLike.d.ts" />
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { disposableMixin } from '../__internal__/util/DisposableLikeMixins.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/Object.mjs';
import { none, pipe, partial } from '../functions.mjs';
import { SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../scheduling.mjs';
import '../util/DisposableLike.mjs';
import { shouldYield, requestYield } from './SchedulerLike.mjs';
import { SchedulerLike_inContinuation, isInContinuation, SchedulerLike_now, getCurrentTime } from '../__internal__/schedulingInternal.mjs';
import { addIgnoringChildErrors, isDisposed } from '../__internal__/util/DisposableLikeInternal.mjs';

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toScheduler = /*@__PURE__*/ (() => {
    const createSchedulerInstance = createInstanceFactory(clazz(__extends(disposableMixin), function PrioritySchedulerDelegatingScheduler(scheduler, priority) {
        init(disposableMixin, this);
        this.priorityScheduler = scheduler;
        this.priority = priority;
        return this;
    }, {
        priorityScheduler: none,
        priority: 0,
    }, {
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
    }));
    return (priority) => pipe(createSchedulerInstance, partial(priority));
})();

export { toScheduler };
