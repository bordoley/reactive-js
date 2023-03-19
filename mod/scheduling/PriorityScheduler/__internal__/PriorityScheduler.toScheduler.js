/// <reference types="./PriorityScheduler.toScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { PrioritySchedulerDelegatingScheduler_priority, PrioritySchedulerDelegatingScheduler_priorityScheduler, } from "../../../__internal__/symbols.js";
import { none, partial, pipe, unsafeCast, } from "../../../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
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
        return this[PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_inContinuation];
    },
    get [SchedulerLike_maxYieldInterval]() {
        unsafeCast(this);
        return this[PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_maxYieldInterval];
    },
    get [SchedulerLike_now]() {
        unsafeCast(this);
        return this[PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_now];
    },
    get [SchedulerLike_shouldYield]() {
        unsafeCast(this);
        return this[PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_shouldYield];
    },
    [SchedulerLike_requestYield]() {
        this[PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_requestYield]();
    },
    [SchedulerLike_schedule](effect, options) {
        const scheduler = this[PrioritySchedulerDelegatingScheduler_priorityScheduler];
        return pipe(scheduler[SchedulerLike_schedule](effect, {
            ...options,
            priority: this[PrioritySchedulerDelegatingScheduler_priority],
        }), Disposable_addToIgnoringChildErrors(this));
    },
}));
const PriorityScheduler_toScheduler = (priority) => pipe(createSchedulerInstance, partial(priority));
export default PriorityScheduler_toScheduler;
