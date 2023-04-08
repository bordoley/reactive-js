/// <reference types="./Scheduler.createVirtualTimeScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __VirtualTask_continuation, __VirtualTask_dueTime, __VirtualTask_id, __VirtualTimeScheduler_maxMicroTaskTicks, __VirtualTimeScheduler_microTaskTicks, __VirtualTimeScheduler_taskIDCount, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import MutableEnumerator_mixin from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isSome, pipe, unsafeCast } from "../../../functions.js";
import { SchedulerLike_now, VirtualTimeSchedulerLike_run, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Queue_priorityQueueMixin from "../../../util/Queue/__internal__/Queue.priorityQueueMixin.js";
import { ContinuationLike_continuationScheduler, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "./Scheduler.mixin.js";
const comparator = (a, b) => {
    const diff = a[__VirtualTask_dueTime] - b[__VirtualTask_dueTime];
    return diff !== 0
        ? diff
        : a[__VirtualTask_id] - b[__VirtualTask_id];
};
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(PriorityScheduler_mixin, MutableEnumerator_mixin(), Queue_priorityQueueMixin()), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
    init(PriorityScheduler_mixin, instance, 1);
    init(MutableEnumerator_mixin(), instance);
    init(Queue_priorityQueueMixin(), instance, comparator, MAX_SAFE_INTEGER, "overflow");
    instance[__VirtualTimeScheduler_maxMicroTaskTicks] =
        maxMicroTaskTicks;
    return instance;
}, props({
    [SchedulerLike_now]: 0,
    [__VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
    [__VirtualTimeScheduler_microTaskTicks]: 0,
    [__VirtualTimeScheduler_taskIDCount]: 0,
}), {
    get [PrioritySchedulerImplementationLike_shouldYield]() {
        unsafeCast(this);
        this[__VirtualTimeScheduler_microTaskTicks]++;
        return (this[__VirtualTimeScheduler_microTaskTicks] >=
            this[__VirtualTimeScheduler_maxMicroTaskTicks]);
    },
    [VirtualTimeSchedulerLike_run]() {
        while (!this[DisposableLike_isDisposed] &&
            this[EnumeratorLike_move]()) {
            const task = this[EnumeratorLike_current];
            const { [__VirtualTask_dueTime]: dueTime, [__VirtualTask_continuation]: continuation, } = task;
            this[__VirtualTimeScheduler_microTaskTicks] = 0;
            this[SchedulerLike_now] = dueTime;
            this[PrioritySchedulerImplementationLike_runContinuation](continuation);
        }
    },
    [ContinuationSchedulerLike_schedule](continuation, delay) {
        pipe(this, Disposable_addIgnoringChildErrors(continuation));
        if (!continuation[DisposableLike_isDisposed]) {
            continuation[ContinuationLike_continuationScheduler] = this;
            this[QueueableLike_enqueue]({
                [__VirtualTask_id]: this[__VirtualTimeScheduler_taskIDCount]++,
                [__VirtualTask_dueTime]: this[SchedulerLike_now] + delay,
                [__VirtualTask_continuation]: continuation,
            });
        }
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
