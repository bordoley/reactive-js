/// <reference types="./VirtualTimeScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../collections.js";
import MutableEnumeratorMixin from "../collections/__mixins__/MutableEnumeratorMixin.js";
import { SchedulerLike_now, VirtualTimeSchedulerLike_run, } from "../concurrent.js";
import { SchedulerTaskLike_continuation, SchedulerTaskLike_dueTime, SchedulerTaskLike_id, } from "../concurrent/__private__.js";
import { isSome } from "../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_dequeue, QueueableLike_enqueue, } from "../utils.js";
import PriorityQueueMixin from "../utils/__mixins__/PriorityQueueMixin.js";
import ContinuationSchedulerMixin, { ContinuationSchedulerImplementationLike_scheduleContinuation, ContinuationSchedulerImplementationLike_shouldYield, ContinuationSchedulerMixinLike_runContinuation, } from "./__mixins__/ContinuationSchedulerMixin.js";
const comparator = (a, b) => {
    const diff = a[SchedulerTaskLike_dueTime] - b[SchedulerTaskLike_dueTime];
    return diff !== 0 ? diff : a[SchedulerTaskLike_id] - b[SchedulerTaskLike_id];
};
const VirtualTimeScheduler_maxMicroTaskTicks = Symbol("VirtualTimeScheduler_maxMicroTaskTicks");
const VirtualTimeScheduler_microTaskTicks = Symbol("VirtualTimeScheduler_microTaskTicks");
const VirtualTimeScheduler_taskIDCount = Symbol("VirtualTimeScheduler_taskIDCount");
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ContinuationSchedulerMixin, MutableEnumeratorMixin(), PriorityQueueMixin()), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
    init(ContinuationSchedulerMixin, instance, 1);
    init(MutableEnumeratorMixin(), instance);
    init(PriorityQueueMixin(), instance, comparator, MAX_SAFE_INTEGER, "overflow");
    instance[VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;
    return instance;
}, props({
    [SchedulerLike_now]: 0,
    [VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
    [VirtualTimeScheduler_microTaskTicks]: 0,
    [VirtualTimeScheduler_taskIDCount]: 0,
}), {
    get [ContinuationSchedulerImplementationLike_shouldYield]() {
        unsafeCast(this);
        this[VirtualTimeScheduler_microTaskTicks]++;
        return (this[VirtualTimeScheduler_microTaskTicks] >=
            this[VirtualTimeScheduler_maxMicroTaskTicks]);
    },
    [VirtualTimeSchedulerLike_run]() {
        while (!this[DisposableLike_isDisposed] &&
            this[EnumeratorLike_move]()) {
            const task = this[EnumeratorLike_current];
            const { [SchedulerTaskLike_dueTime]: dueTime, [SchedulerTaskLike_continuation]: continuation, } = task;
            this[VirtualTimeScheduler_microTaskTicks] = 0;
            this[SchedulerLike_now] = dueTime;
            this[ContinuationSchedulerMixinLike_runContinuation](continuation);
        }
    },
    [ContinuationSchedulerImplementationLike_scheduleContinuation](continuation, delay) {
        this[QueueableLike_enqueue]({
            [SchedulerTaskLike_id]: this[VirtualTimeScheduler_taskIDCount]++,
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
export const create = (options = {}) => {
    const maxMicroTaskTicks = clampPositiveNonZeroInteger(options.maxMicroTaskTicks ?? MAX_SAFE_INTEGER);
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};
