/// <reference types="./Scheduler.createVirtualTimeScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { QueueLike_dequeue, SchedulerTaskLike_continuation, SchedulerTaskLike_dueTime, SchedulerTaskLike_id, } from "../../../__internal__/core.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __VirtualTimeScheduler_maxMicroTaskTicks, __VirtualTimeScheduler_microTaskTicks, __VirtualTimeScheduler_taskIDCount, } from "../../../__internal__/symbols.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, QueueableLike_enqueue, SchedulerLike_now, VirtualTimeSchedulerLike_run, } from "../../../core.js";
import MutableEnumerator_mixin from "../../../core/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isSome, unsafeCast } from "../../../functions.js";
import Queue_priorityQueueMixin from "../../Queue/__internal__/Queue.priorityQueueMixin.js";
import { SchedulerImplementationLike_runContinuation, SchedulerImplementationLike_scheduleContinuation, SchedulerImplementationLike_shouldYield, SchedulerImplementation_mixin, } from "./SchedulerImplementation.mixin.js";
const comparator = (a, b) => {
    const diff = a[SchedulerTaskLike_dueTime] - b[SchedulerTaskLike_dueTime];
    return diff !== 0 ? diff : a[SchedulerTaskLike_id] - b[SchedulerTaskLike_id];
};
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(SchedulerImplementation_mixin, MutableEnumerator_mixin(), Queue_priorityQueueMixin()), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
    init(SchedulerImplementation_mixin, instance, 1);
    init(MutableEnumerator_mixin(), instance);
    init(Queue_priorityQueueMixin(), instance, comparator, MAX_SAFE_INTEGER, "overflow");
    instance[__VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;
    return instance;
}, props({
    [SchedulerLike_now]: 0,
    [__VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
    [__VirtualTimeScheduler_microTaskTicks]: 0,
    [__VirtualTimeScheduler_taskIDCount]: 0,
}), {
    get [SchedulerImplementationLike_shouldYield]() {
        unsafeCast(this);
        this[__VirtualTimeScheduler_microTaskTicks]++;
        return (this[__VirtualTimeScheduler_microTaskTicks] >=
            this[__VirtualTimeScheduler_maxMicroTaskTicks]);
    },
    [VirtualTimeSchedulerLike_run]() {
        while (!this[DisposableLike_isDisposed] &&
            this[EnumeratorLike_move]()) {
            const task = this[EnumeratorLike_current];
            const { [SchedulerTaskLike_dueTime]: dueTime, [SchedulerTaskLike_continuation]: continuation, } = task;
            this[__VirtualTimeScheduler_microTaskTicks] = 0;
            this[SchedulerLike_now] = dueTime;
            this[SchedulerImplementationLike_runContinuation](continuation);
        }
    },
    [SchedulerImplementationLike_scheduleContinuation](continuation, delay) {
        this[QueueableLike_enqueue]({
            [SchedulerTaskLike_id]: this[__VirtualTimeScheduler_taskIDCount]++,
            [SchedulerTaskLike_dueTime]: this[SchedulerLike_now] + delay,
            [SchedulerTaskLike_continuation]: continuation,
        });
    },
    [EnumeratorLike_move]() {
        const task = this[QueueLike_dequeue]();
        if (isSome(task)) {
            this[EnumeratorLike_current] = task;
        }
        else {
            this[DisposableLike_dispose]();
        }
        return this[EnumeratorLike_hasCurrent];
    },
})))();
const Scheduler_createVirtualTimeScheduler = (options = {}) => {
    const maxMicroTaskTicks = clampPositiveNonZeroInteger(options.maxMicroTaskTicks ?? MAX_SAFE_INTEGER);
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};
export default Scheduler_createVirtualTimeScheduler;
