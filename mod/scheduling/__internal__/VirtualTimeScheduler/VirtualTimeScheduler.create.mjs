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
import Continuation_run from '../Continuation/Continuation.run.mjs';
import { getDelay } from '../Scheduler.options.mjs';
import Scheduler_getCurrentTime from '../Scheduler/Scheduler.getCurrentTime.mjs';

const comparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.id - b.id;
    return diff;
};
const typedMutableEnumeratorMixin = 
/*@__PURE__*/ MutableEnumerator_mixin();
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mix(include(Disposable_mixin, typedMutableEnumeratorMixin), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
    init(Disposable_mixin, instance);
    init(typedMutableEnumeratorMixin, instance);
    instance.maxMicroTaskTicks = maxMicroTaskTicks;
    instance.taskQueue = Queue_create(comparator);
    return instance;
}, props({
    [SchedulerLike_inContinuation]: false,
    [SchedulerLike_now]: 0,
    maxMicroTaskTicks: MAX_SAFE_INTEGER,
    microTaskTicks: 0,
    taskIDCount: 0,
    yieldRequested: false,
    taskQueue: none,
}), {
    get [SchedulerLike_shouldYield]() {
        unsafeCast(this);
        const { yieldRequested, [SchedulerLike_inContinuation]: inContinuation, } = this;
        if (inContinuation) {
            this.microTaskTicks++;
            this.yieldRequested = false;
        }
        return (inContinuation &&
            (yieldRequested || this.microTaskTicks >= this.maxMicroTaskTicks));
    },
    [ContinuationLike_run]() {
        while (Enumerator_move(this)) {
            const task = Enumerator_getCurrent(this);
            const { dueTime, continuation } = task;
            this.microTaskTicks = 0;
            this[SchedulerLike_now] = dueTime;
            this[SchedulerLike_inContinuation] = true;
            Continuation_run(continuation);
            this[SchedulerLike_inContinuation] = false;
        }
    },
    [SchedulerLike_requestYield]() {
        this.yieldRequested = true;
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        pipe(this, Disposable_addIgnoringChildErrors(continuation));
        if (!Disposable_isDisposed(continuation)) {
            Queue_push(this.taskQueue, {
                id: this.taskIDCount++,
                dueTime: Scheduler_getCurrentTime(this) + delay,
                continuation,
            });
        }
    },
    [SourceLike_move]() {
        const taskQueue = this.taskQueue;
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
