/// <reference types="./PriorityScheduler.toScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __PrioritySchedulerDelegatingScheduler_priority, __PrioritySchedulerDelegatingScheduler_priorityScheduler, } from "../../../__internal__/symbols.js";
import { none, partial, pipe, unsafeCast, } from "../../../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, } from "../../../scheduling.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
const createSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(Disposable_mixin), function PrioritySchedulerDelegatingScheduler(instance, scheduler, priority) {
    init(Disposable_mixin, instance);
    instance[__PrioritySchedulerDelegatingScheduler_priorityScheduler] =
        scheduler;
    instance[__PrioritySchedulerDelegatingScheduler_priority] = priority;
    return instance;
}, props({
    [__PrioritySchedulerDelegatingScheduler_priorityScheduler]: none,
    [__PrioritySchedulerDelegatingScheduler_priority]: 0,
}), {
    get [SchedulerLike_inContinuation]() {
        unsafeCast(this);
        return this[__PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_inContinuation];
    },
    get [SchedulerLike_maxYieldInterval]() {
        unsafeCast(this);
        return this[__PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_maxYieldInterval];
    },
    get [SchedulerLike_now]() {
        unsafeCast(this);
        return this[__PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_now];
    },
    get [SchedulerLike_shouldYield]() {
        unsafeCast(this);
        return this[__PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_shouldYield];
    },
    [SchedulerLike_requestYield]() {
        this[__PrioritySchedulerDelegatingScheduler_priorityScheduler][SchedulerLike_requestYield]();
    },
    [SchedulerLike_schedule](effect, options) {
        const scheduler = this[__PrioritySchedulerDelegatingScheduler_priorityScheduler];
        return pipe(scheduler[SchedulerLike_schedule](effect, {
            ...options,
            priority: this[__PrioritySchedulerDelegatingScheduler_priority],
        }), Disposable_addTo(this, { ignoreChildErrors: true }));
    },
    [SchedulerLike_yield](delay = 0) {
        const scheduler = this[__PrioritySchedulerDelegatingScheduler_priorityScheduler];
        scheduler[SchedulerLike_yield](delay);
    },
})))();
const PriorityScheduler_toScheduler = (priority) => pipe(createSchedulerInstance, partial(priority));
export default PriorityScheduler_toScheduler;
