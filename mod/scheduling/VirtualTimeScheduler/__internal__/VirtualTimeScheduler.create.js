/// <reference types="./VirtualTimeScheduler.create.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { MAX_SAFE_INTEGER } from "../../../constants.js";
import { isSome, none, pipe, unsafeCast } from "../../../functions.js";
import { EnumeratorLike_current, SourceLike_move, } from "../../../ix.js";
import Enumerator_getCurrent from "../../../ix/Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_move from "../../../ix/Enumerator/__internal__/Enumerator.move.js";
import MutableEnumerator_mixin from "../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.js";
import { ContinuationLike_run, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Queue_create from "../../../util/__internal__/Queue/Queue.create.js";
import Queue_pop from "../../../util/__internal__/Queue/Queue.pop.js";
import Queue_push from "../../../util/__internal__/Queue/Queue.push.js";
import getCurrentTime from "../../Scheduler/__internal__/Scheduler.getCurrentTime.js";
import { getDelay } from "../../__internal__/Scheduler.options.js";
const VirtualTask_continuation = Symbol("VirtualTask_continuation");
const VirtualTask_dueTime = Symbol("VirtualTask_dueTime");
const VirtualTask_id = Symbol("VirtualTask_id");
const comparator = (a, b) => {
    const diff = a[VirtualTask_dueTime] - b[VirtualTask_dueTime];
    return diff !== 0 ? diff : a[VirtualTask_id] - b[VirtualTask_id];
};
const typedMutableEnumeratorMixin = 
/*@__PURE__*/ MutableEnumerator_mixin();
const VirtualTimeScheduler_maxMicroTaskTicks = Symbol("VirtualTimeScheduler_maxMicroTaskTicks");
const VirtualTimeScheduler_microTaskTicks = Symbol("VirtualTimeScheduler_microTaskTicks");
const VirtualTimeScheduler_taskIDCount = Symbol("VirtualTimeScheduler_taskIDCount");
const VirtualTimeScheduler_yieldRequested = Symbol("VirtualTimeScheduler_yieldRequested");
const VirtualTimeScheduler_taskQueue = Symbol("VirtualTimeScheduler_taskQueue");
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
    init(Disposable_mixin, instance);
    init(typedMutableEnumeratorMixin, instance);
    instance[VirtualTimeScheduler_maxMicroTaskTicks] = maxMicroTaskTicks;
    instance[VirtualTimeScheduler_taskQueue] = Queue_create(comparator);
    return instance;
}, props({
    [SchedulerLike_inContinuation]: false,
    [SchedulerLike_now]: 0,
    [VirtualTimeScheduler_maxMicroTaskTicks]: MAX_SAFE_INTEGER,
    [VirtualTimeScheduler_microTaskTicks]: 0,
    [VirtualTimeScheduler_taskIDCount]: 0,
    [VirtualTimeScheduler_yieldRequested]: false,
    [VirtualTimeScheduler_taskQueue]: none,
}), {
    get [SchedulerLike_shouldYield]() {
        unsafeCast(this);
        const { [VirtualTimeScheduler_yieldRequested]: yieldRequested, [SchedulerLike_inContinuation]: inContinuation, } = this;
        if (inContinuation) {
            this[VirtualTimeScheduler_microTaskTicks]++;
            this[VirtualTimeScheduler_yieldRequested] = false;
        }
        return (inContinuation &&
            (yieldRequested ||
                this[VirtualTimeScheduler_microTaskTicks] >=
                    this[VirtualTimeScheduler_maxMicroTaskTicks]));
    },
    [ContinuationLike_run]() {
        while (Enumerator_move(this)) {
            const task = Enumerator_getCurrent(this);
            const { [VirtualTask_dueTime]: dueTime, [VirtualTask_continuation]: continuation, } = task;
            this[VirtualTimeScheduler_microTaskTicks] = 0;
            this[SchedulerLike_now] = dueTime;
            this[SchedulerLike_inContinuation] = true;
            continuation[ContinuationLike_run]();
            this[SchedulerLike_inContinuation] = false;
        }
    },
    [SchedulerLike_requestYield]() {
        this[VirtualTimeScheduler_yieldRequested] = true;
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        pipe(this, Disposable_addIgnoringChildErrors(continuation));
        if (!Disposable_isDisposed(continuation)) {
            Queue_push(this[VirtualTimeScheduler_taskQueue], {
                [VirtualTask_id]: this[VirtualTimeScheduler_taskIDCount]++,
                [VirtualTask_dueTime]: getCurrentTime(this) + delay,
                [VirtualTask_continuation]: continuation,
            });
        }
    },
    [SourceLike_move]() {
        const taskQueue = this[VirtualTimeScheduler_taskQueue];
        if (Disposable_isDisposed(this)) {
            return;
        }
        const task = Queue_pop(taskQueue);
        if (isSome(task)) {
            this[EnumeratorLike_current] = task;
        }
        else {
            pipe(this, Disposable_dispose());
        }
    },
}));
const VirtualTimeScheduler_create = (options = {}) => {
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};
export default VirtualTimeScheduler_create;
