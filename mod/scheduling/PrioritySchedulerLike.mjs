/// <reference types="./PrioritySchedulerLike.d.ts" />
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { DisposableMixin_disposables, mixinDisposable } from '../__internal__/util/disposables.mjs';
import { DisposableLike_error, DisposableLike_isDisposed, addIgnoringChildErrors, isDisposed, addToIgnoringChildErrors } from '../util/DisposableLike.mjs';
import { none } from '../util/Option.mjs';
import { pipe, instanceFactory } from '../util/functions.mjs';
import { SchedulerLike_inContinuation, isInContinuation, SchedulerLike_now, getCurrentTime, SchedulerLike_shouldYield, shouldYield, SchedulerLike_requestYield, requestYield, SchedulerLike_schedule } from './SchedulerLike.mjs';

const schedulerWithPriorityFactory = /*@__PURE__*/ (() => {
    var _a, _b, _c;
    class SchedulerWithPriority {
        constructor(priorityScheduler, priority) {
            this.priorityScheduler = priorityScheduler;
            this.priority = priority;
            this[_a] = none;
            this[_b] = false;
            this[_c] = new Set();
        }
        get [(_a = DisposableLike_error, _b = DisposableLike_isDisposed, _c = DisposableMixin_disposables, SchedulerLike_inContinuation)]() {
            return isInContinuation(this.priorityScheduler);
        }
        get [SchedulerLike_now]() {
            return getCurrentTime(this.priorityScheduler);
        }
        get [SchedulerLike_shouldYield]() {
            return shouldYield(this.priorityScheduler);
        }
        [SchedulerLike_requestYield]() {
            requestYield(this.priorityScheduler);
        }
        [SchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            pipe(this, addIgnoringChildErrors(continuation));
            if (!isDisposed(continuation)) {
                this.priorityScheduler[SchedulerLike_schedule](continuation, {
                    priority: this.priority,
                    delay,
                });
            }
        }
    }
    return pipe(SchedulerWithPriority, mixinDisposable(), instanceFactory());
})();
/**
 * Converts a PrioritySchedulerLike to a SchedulerLike that schedules work with the given priority.
 *
 * @param priorityScheduler The underlying scheduler upon which to scheduler work.
 * @param priority The priority to schedule work at.
 */
const toScheduler = (priority) => priorityScheduler => pipe(schedulerWithPriorityFactory(priorityScheduler, priority), addToIgnoringChildErrors(priorityScheduler));

export { toScheduler };
