/// <reference types="./Scheduler.createVirtualTimeScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { VirtualTask_continuation, VirtualTask_dueTime, VirtualTask_id, VirtualTimeScheduler_maxMicroTaskTicks, VirtualTimeScheduler_microTaskTicks, VirtualTimeScheduler_taskIDCount, } from "../../../__internal__/symbols.js";
import { QueueLike_pull, } from "../../../__internal__/util.internal.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import MutableEnumerator_mixin from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isSome, pipe, unsafeCast } from "../../../functions.js";
import { SchedulerLike_now, VirtualTimeSchedulerLike_run, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_push, } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Queue_priorityQueueMixin from "../../../util/Queue/__internal__/Queue.priorityQueueMixin.js";
import { ContinuationLike_continuationScheduler, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "./Scheduler.mixin.js";
const comparator = (a, b) => {
    const diff = a[VirtualTask_dueTime] - b[VirtualTask_dueTime];
    return diff !== 0 ? diff : a[VirtualTask_id] - b[VirtualTask_id];
};
const typedMutableEnumeratorMixin = 
/*@__PURE__*/ MutableEnumerator_mixin();
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ (() => createInstanceFactory(mix(include(PriorityScheduler_mixin, typedMutableEnumeratorMixin, Queue_priorityQueueMixin()), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
    init(PriorityScheduler_mixin, instance, 1);
    init(typedMutableEnumeratorMixin, instance);
    init(Queue_priorityQueueMixin(), instance, comparator, MAX_SAFE_INTEGER);
    instance[VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;
    return instance;
}, props({
    [SchedulerLike_now]: 0,
    [VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
    [VirtualTimeScheduler_microTaskTicks]: 0,
    [VirtualTimeScheduler_taskIDCount]: 0,
}), {
    get [PrioritySchedulerImplementationLike_shouldYield]() {
        unsafeCast(this);
        this[VirtualTimeScheduler_microTaskTicks]++;
        return (this[VirtualTimeScheduler_microTaskTicks] >=
            this[VirtualTimeScheduler_maxMicroTaskTicks]);
    },
    [VirtualTimeSchedulerLike_run]() {
        while (!this[DisposableLike_isDisposed] &&
            this[EnumeratorLike_move]()) {
            const task = this[EnumeratorLike_current];
            const { [VirtualTask_dueTime]: dueTime, [VirtualTask_continuation]: continuation, } = task;
            this[VirtualTimeScheduler_microTaskTicks] = 0;
            this[SchedulerLike_now] = dueTime;
            this[PrioritySchedulerImplementationLike_runContinuation](continuation);
        }
    },
    [ContinuationSchedulerLike_schedule](continuation, delay) {
        pipe(this, Disposable_addIgnoringChildErrors(continuation));
        if (!continuation[DisposableLike_isDisposed]) {
            continuation[ContinuationLike_continuationScheduler] = this;
            this[QueueableLike_push]({
                [VirtualTask_id]: this[VirtualTimeScheduler_taskIDCount]++,
                [VirtualTask_dueTime]: this[SchedulerLike_now] + delay,
                [VirtualTask_continuation]: continuation,
            });
        }
    },
    [EnumeratorLike_move]() {
        const task = this[QueueLike_pull]();
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
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};
export default Scheduler_createVirtualTimeScheduler;
