/// <reference types="./PrioritySchedulerLike.toScheduler.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { getDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { none, unsafeCast, pipe, partial } from '../../../functions.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import { addIgnoringChildErrors, isDisposed } from '../../../util/DisposableLike.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { isInContinuation, getCurrentTime, shouldYield, requestYield } from '../../SchedulerLike.mjs';

const createSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mix(include(DisposableLike__mixin), function PrioritySchedulerDelegatingScheduler(instance, scheduler, priority) {
    init(DisposableLike__mixin, instance);
    instance.priorityScheduler = scheduler;
    instance.priority = priority;
    return instance;
}, props({
    priorityScheduler: none,
    priority: 0,
}), {
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
const PrioritySchedulerLike__toScheduler = (priority) => pipe(createSchedulerInstance, partial(priority));

export { PrioritySchedulerLike__toScheduler as default };
