/// <reference types="./PriorityScheduler.toScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { none, partial, pipe, unsafeCast, } from "../../../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Scheduler_getCurrentTime from "../../Scheduler/__internal__/Scheduler.getCurrentTime.js";
import Scheduler_isInContinuation from "../../Scheduler/__internal__/Scheduler.isInContinuation.js";
import Scheduler_requestYield from "../../Scheduler/__internal__/Scheduler.requestYield.js";
import Scheduler_shouldYield from "../../Scheduler/__internal__/Scheduler.shouldYield.js";
import { getDelay } from "../../__internal__/Scheduler.options.js";
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
export default PriorityScheduler_toScheduler;
