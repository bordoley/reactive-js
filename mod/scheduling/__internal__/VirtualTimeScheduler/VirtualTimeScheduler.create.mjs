/// <reference types="./VirtualTimeScheduler.create.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { MAX_SAFE_INTEGER } from '../../../constants.mjs';
import { none, unsafeCast, pipe, isSome } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Enumerator_getCurrent from '../../../ix/__internal__/Enumerator/Enumerator.getCurrent.mjs';
import Enumerator_move from '../../../ix/__internal__/Enumerator/Enumerator.move.mjs';
import MutableEnumerator_mixin from '../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, ContinuationLike_run, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import Disposable_addIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable_mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Queue_create from '../../../util/__internal__/Queue/Queue.create.mjs';
import Queue_pop from '../../../util/__internal__/Queue/Queue.pop.mjs';
import Queue_push from '../../../util/__internal__/Queue/Queue.push.mjs';
import { getDelay } from '../Scheduler.options.mjs';
import Scheduler_getCurrentTime from '../Scheduler/Scheduler.getCurrentTime.mjs';

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
                [VirtualTask_dueTime]: Scheduler_getCurrentTime(this) + delay,
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

export { VirtualTimeScheduler_create as default };
