/// <reference types="./VirtualTimeScheduler.d.ts" />

import { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, } from "../__internal__/constants.js";
import { clampPositiveNonZeroInteger, max } from "../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../__internal__/mixins.js";
import { SchedulerLike_now, VirtualTimeSchedulerLike_run, } from "../concurrent.js";
import { SchedulerTaskLike_continuation, SchedulerTaskLike_dueTime, SchedulerTaskLike_id, SchedulerTask_comparator, } from "../concurrent/__private__.js";
import { isSome, none } from "../functions.js";
import { DisposableLike_dispose, QueueLike_count, QueueLike_dequeue, QueueLike_head, QueueableLike_enqueue, } from "../utils.js";
import * as PriorityQueue from "../utils/PriorityQueue.js";
import ContinuationSchedulerMixin, { ContinuationLike_run, ContinuationSchedulerLike_scheduleContinuation, ContinuationSchedulerLike_shouldYield, } from "./__mixins__/ContinuationSchedulerMixin.js";
const VirtualTimeScheduler_maxMicroTaskTicks = Symbol("VirtualTimeScheduler_maxMicroTaskTicks");
const VirtualTimeScheduler_microTaskTicks = Symbol("VirtualTimeScheduler_microTaskTicks");
const VirtualTimeScheduler_taskIDCount = Symbol("VirtualTimeScheduler_taskIDCount");
const VirtualTimeScheduler_queue = Symbol("VirtualTimeScheduler_queue");
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(ContinuationSchedulerMixin), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
    init(ContinuationSchedulerMixin, instance, 1);
    instance[VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;
    instance[VirtualTimeScheduler_queue] = PriorityQueue.create(SchedulerTask_comparator);
    return instance;
}, props({
    [SchedulerLike_now]: 0,
    [VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
    [VirtualTimeScheduler_microTaskTicks]: 0,
    [VirtualTimeScheduler_taskIDCount]: 0,
    [VirtualTimeScheduler_queue]: none,
}), {
    get [ContinuationSchedulerLike_shouldYield]() {
        unsafeCast(this);
        this[VirtualTimeScheduler_microTaskTicks]++;
        return (this[VirtualTimeScheduler_microTaskTicks] >=
            this[VirtualTimeScheduler_maxMicroTaskTicks]);
    },
    [VirtualTimeSchedulerLike_run]() {
        let queue = none;
        while (((queue = this[VirtualTimeScheduler_queue]),
            queue[QueueLike_count] > 0)) {
            this[VirtualTimeScheduler_queue] = PriorityQueue.create(SchedulerTask_comparator);
            const currentTime = this[SchedulerLike_now];
            let task = none;
            while (((task = queue[QueueLike_dequeue]()), isSome(task))) {
                if (task[SchedulerTaskLike_dueTime] > currentTime) {
                    // copy the task and all other remaining tasks back to the scheduler queue
                    this[VirtualTimeScheduler_queue][QueueableLike_enqueue](task);
                    while (((task = queue[QueueLike_dequeue]()), isSome(task))) {
                        this[VirtualTimeScheduler_queue][QueueableLike_enqueue](task);
                    }
                }
                else {
                    this[VirtualTimeScheduler_microTaskTicks] = 0;
                    task[SchedulerTaskLike_continuation][ContinuationLike_run]();
                }
            }
            const queueHeadDueTime = this[VirtualTimeScheduler_queue][QueueLike_head]?.[SchedulerTaskLike_dueTime] ?? MIN_SAFE_INTEGER;
            this[SchedulerLike_now] = max(queueHeadDueTime, currentTime + 1);
        }
        this[DisposableLike_dispose]();
    },
    [ContinuationSchedulerLike_scheduleContinuation](continuation, delay) {
        this[VirtualTimeScheduler_queue][QueueableLike_enqueue]({
            [SchedulerTaskLike_id]: this[VirtualTimeScheduler_taskIDCount]++,
            [SchedulerTaskLike_dueTime]: this[SchedulerLike_now] + delay,
            [SchedulerTaskLike_continuation]: continuation,
        });
    },
})))();
export const create = (options = {}) => {
    const maxMicroTaskTicks = clampPositiveNonZeroInteger(options?.maxMicroTaskTicks ?? MAX_SAFE_INTEGER);
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};
