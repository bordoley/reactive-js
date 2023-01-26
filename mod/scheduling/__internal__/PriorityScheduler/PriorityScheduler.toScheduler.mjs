/// <reference types="./PriorityScheduler.toScheduler.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { none, unsafeCast, pipe, partial } from '../../../functions.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import Disposable$addIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import { getDelay } from '../Scheduler.options.mjs';
import Scheduler$getCurrentTime from '../Scheduler/Scheduler.getCurrentTime.mjs';
import Scheduler$isInContinuation from '../Scheduler/Scheduler.isInContinuation.mjs';
import Scheduler$requestYield from '../Scheduler/Scheduler.requestYield.mjs';
import Scheduler$shouldYield from '../Scheduler/Scheduler.shouldYield.mjs';

const createSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mix(include(Disposable$mixin), function PrioritySchedulerDelegatingScheduler(instance, scheduler, priority) {
    init(Disposable$mixin, instance);
    instance.priorityScheduler = scheduler;
    instance.priority = priority;
    return instance;
}, props({
    priorityScheduler: none,
    priority: 0,
}), {
    get [SchedulerLike_inContinuation]() {
        unsafeCast(this);
        return Scheduler$isInContinuation(this.priorityScheduler);
    },
    get [SchedulerLike_now]() {
        unsafeCast(this);
        return Scheduler$getCurrentTime(this.priorityScheduler);
    },
    get [SchedulerLike_shouldYield]() {
        unsafeCast(this);
        return Scheduler$shouldYield(this.priorityScheduler);
    },
    [SchedulerLike_requestYield]() {
        Scheduler$requestYield(this.priorityScheduler);
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        pipe(this, Disposable$addIgnoringChildErrors(continuation));
        if (!Disposable$isDisposed(continuation)) {
            this.priorityScheduler[SchedulerLike_schedule](continuation, {
                priority: this.priority,
                delay,
            });
        }
    },
}));
const PriorityScheduler$toScheduler = (priority) => pipe(createSchedulerInstance, partial(priority));

export { PriorityScheduler$toScheduler as default };
