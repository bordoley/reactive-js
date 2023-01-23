/// <reference types="./PrioritySchedulerLike.toScheduler.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, unsafeCast, pipe, partial } from '../../../functions.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import DisposableLike__addIgnoringChildErrors from '../../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import { getDelay } from '../SchedulerLike.options.mjs';
import SchedulerLike__getCurrentTime from '../SchedulerLike/SchedulerLike.getCurrentTime.mjs';
import SchedulerLike__isInContinuation from '../SchedulerLike/SchedulerLike.isInContinuation.mjs';
import SchedulerLike__requestYield from '../SchedulerLike/SchedulerLike.requestYield.mjs';
import SchedulerLike__shouldYield from '../SchedulerLike/SchedulerLike.shouldYield.mjs';

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
        return SchedulerLike__isInContinuation(this.priorityScheduler);
    },
    get [SchedulerLike_now]() {
        unsafeCast(this);
        return SchedulerLike__getCurrentTime(this.priorityScheduler);
    },
    get [SchedulerLike_shouldYield]() {
        unsafeCast(this);
        return SchedulerLike__shouldYield(this.priorityScheduler);
    },
    [SchedulerLike_requestYield]() {
        SchedulerLike__requestYield(this.priorityScheduler);
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        pipe(this, DisposableLike__addIgnoringChildErrors(continuation));
        if (!DisposableLike__isDisposed(continuation)) {
            this.priorityScheduler[SchedulerLike_schedule](continuation, {
                priority: this.priority,
                delay,
            });
        }
    },
}));
const PrioritySchedulerLike__toScheduler = (priority) => pipe(createSchedulerInstance, partial(priority));

export { PrioritySchedulerLike__toScheduler as default };
