/// <reference types="./PrioritySchedulerLike.d.ts" />
import { getDelay } from '../__internal__/__internal__optionParsing.mjs';
import { disposableMixin } from '../__internal__/util/__internal__Disposables.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/__internal__Objects.mjs';
import { unsafeCast, none, pipe, partial } from '../functions.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../scheduling.mjs';
import { addIgnoringChildErrors, isDisposed } from '../util/DisposableLike.mjs';
import { isInContinuation, getCurrentTime, shouldYield, requestYield } from './SchedulerLike.mjs';

/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toScheduler = /*@__PURE__*/ (() => {
    const createSchedulerInstance = createInstanceFactory(clazz(__extends(disposableMixin), function PrioritySchedulerDelegatingScheduler(instance, scheduler, priority) {
        init(disposableMixin, instance);
        unsafeCast(instance);
        instance.priorityScheduler = scheduler;
        instance.priority = priority;
        return instance;
    }, {
        priorityScheduler: none,
        priority: 0,
    }, {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            return isInContinuation(this.priorityScheduler);
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return getCurrentTime(this.priorityScheduler);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            return shouldYield(this.priorityScheduler);
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
