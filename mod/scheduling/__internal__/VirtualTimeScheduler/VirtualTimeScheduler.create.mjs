/// <reference types="./VirtualTimeScheduler.create.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { MAX_SAFE_INTEGER } from '../../../constants.mjs';
import { none, unsafeCast, pipe, isSome } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import Enumerator$getCurrent from '../../../ix/__internal__/Enumerator/Enumerator.getCurrent.mjs';
import Enumerator$move from '../../../ix/__internal__/Enumerator/Enumerator.move.mjs';
import MutableEnumerator$mixin from '../../../ix/__internal__/MutableEnumerator/MutableEnumerator.mixin.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, ContinuationLike_run, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import Disposable$addIgnoringChildErrors from '../../../util/__internal__/Disposable/Disposable.addIgnoringChildErrors.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Disposable$mixin from '../../../util/__internal__/Disposable/Disposable.mixin.mjs';
import Queue$create from '../../../util/__internal__/Queue/Queue.create.mjs';
import Queue$pop from '../../../util/__internal__/Queue/Queue.pop.mjs';
import Queue$push from '../../../util/__internal__/Queue/Queue.push.mjs';
import Continuation$run from '../Continuation/Continuation.run.mjs';
import { getDelay } from '../Scheduler.options.mjs';
import Scheduler$getCurrentTime from '../Scheduler/Scheduler.getCurrentTime.mjs';

const comparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.id - b.id;
    return diff;
};
const typedMutableEnumeratorMixin = 
/*@__PURE__*/ MutableEnumerator$mixin();
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mix(include(Disposable$mixin, typedMutableEnumeratorMixin), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
    init(Disposable$mixin, instance);
    init(typedMutableEnumeratorMixin, instance);
    instance.maxMicroTaskTicks = maxMicroTaskTicks;
    instance.taskQueue = Queue$create(comparator);
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
        while (Enumerator$move(this)) {
            const task = Enumerator$getCurrent(this);
            const { dueTime, continuation } = task;
            this.microTaskTicks = 0;
            this[SchedulerLike_now] = dueTime;
            this[SchedulerLike_inContinuation] = true;
            Continuation$run(continuation);
            this[SchedulerLike_inContinuation] = false;
        }
    },
    [SchedulerLike_requestYield]() {
        this.yieldRequested = true;
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        pipe(this, Disposable$addIgnoringChildErrors(continuation));
        if (!Disposable$isDisposed(continuation)) {
            Queue$push(this.taskQueue, {
                id: this.taskIDCount++,
                dueTime: Scheduler$getCurrentTime(this) + delay,
                continuation,
            });
        }
    },
    [SourceLike_move]() {
        const taskQueue = this.taskQueue;
        if (Disposable$isDisposed(this)) {
            return;
        }
        const task = Queue$pop(taskQueue);
        if (isSome(task)) {
            this[EnumeratorLike_current] = task;
        }
        else {
            pipe(this, Disposable$dispose());
        }
    },
}));
const VirtualTimeScheduler$create = (options = {}) => {
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};

export { VirtualTimeScheduler$create as default };
