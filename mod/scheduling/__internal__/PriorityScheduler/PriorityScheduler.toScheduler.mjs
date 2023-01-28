/// <reference types="./PriorityScheduler.toScheduler.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, unsafeCast, pipe, partial } from '../../../functions.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import Disposable_addIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import { getDelay } from '../Scheduler.options.mjs';
import Scheduler_getCurrentTime from '../Scheduler/Scheduler.getCurrentTime.mjs';
import Scheduler_isInContinuation from '../Scheduler/Scheduler.isInContinuation.mjs';
import Scheduler_requestYield from '../Scheduler/Scheduler.requestYield.mjs';
import Scheduler_shouldYield from '../Scheduler/Scheduler.shouldYield.mjs';

const PrioritySchedulerDelegatingScheduler_priorityScheduler = Symbol("PrioritySchedulerDelegatingScheduler_priorityScheduler");
const PrioritySchedulerDelegatingScheduler_priority = Symbol("PrioritySchedulerDelegatingScheduler_priority");
const createSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mix(include(Disposable_mixin), function PrioritySchedulerDelegatingScheduler(instance, scheduler, priority) {
    init(Disposable_mixin, instance);
    instance[PrioritySchedulerDelegatingScheduler_priorityScheduler] =
        scheduler;
    instance[PrioritySchedulerDelegatingScheduler_priority] = priority;
    return instance;
}, props({
    [PrioritySchedulerDelegatingScheduler_priorityScheduler]: none,
    [PrioritySchedulerDelegatingScheduler_priority]: 0,
}), {
    get [SchedulerLike_inContinuation]() {
        unsafeCast(this);
        return Scheduler_isInContinuation(this[PrioritySchedulerDelegatingScheduler_priorityScheduler]);
    },
    get [SchedulerLike_now]() {
        unsafeCast(this);
        return Scheduler_getCurrentTime(this[PrioritySchedulerDelegatingScheduler_priorityScheduler]);
    },
    get [SchedulerLike_shouldYield]() {
        unsafeCast(this);
        return Scheduler_shouldYield(this[PrioritySchedulerDelegatingScheduler_priorityScheduler]);
    },
    [SchedulerLike_requestYield]() {
        Scheduler_requestYield(this[PrioritySchedulerDelegatingScheduler_priorityScheduler]);
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        pipe(this, Disposable_addIgnoringChildErrors(continuation));
        if (!Disposable_isDisposed(continuation)) {
            this[PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_schedule](continuation, {
                priority: this[PrioritySchedulerDelegatingScheduler_priority],
                delay,
            });
        }
    },
}));
const PriorityScheduler_toScheduler = (priority) => pipe(createSchedulerInstance, partial(priority));

export { PriorityScheduler_toScheduler as default };
