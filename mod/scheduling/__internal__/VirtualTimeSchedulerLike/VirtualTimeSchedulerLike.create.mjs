/// <reference types="./VirtualTimeSchedulerLike.create.d.ts" />
import { createInstanceFactory, mix, include, init, props } from '../../../__internal__/mixins.mjs';
import { getDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { MAX_SAFE_INTEGER } from '../../../constants.mjs';
import { none, unsafeCast, pipe, isSome } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import EnumeratorLike__getCurrent from '../../../ix/__internal__/EnumeratorLike/EnumeratorLike.getCurrent.mjs';
import EnumeratorLike__move from '../../../ix/__internal__/EnumeratorLike/EnumeratorLike.move.mjs';
import MutableEnumeratorLike__mixin from '../../../ix/__internal__/MutableEnumeratorLike/MutableEnumeratorLike.mixin.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, ContinuationLike_run, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import DisposableLike__addIgnoringChildErrors from '../../../util/__internal__/DisposableLike/DisposableLike.addIgnoringChildErrors.mjs';
import DisposableLike__dispose from '../../../util/__internal__/DisposableLike/DisposableLike.dispose.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import DisposableLike__mixin from '../../../util/__internal__/DisposableLike/DisposableLike.mixin.mjs';
import QueueLike__create from '../../../util/__internal__/QueueLike/QueueLike.create.mjs';
import QueueLike__pop from '../../../util/__internal__/QueueLike/QueueLike.pop.mjs';
import QueueLike__push from '../../../util/__internal__/QueueLike/QueueLike.push.mjs';
import ContinuationLike__run from '../ContinuationLike/ContinuationLike.run.mjs';
import SchedulerLike__getCurrentTime from '../SchedulerLike/SchedulerLike.getCurrentTime.mjs';

const comparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.id - b.id;
    return diff;
};
const typedMutableEnumeratorMixin = 
/*@__PURE__*/ MutableEnumeratorLike__mixin();
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mix(include(DisposableLike__mixin, typedMutableEnumeratorMixin), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
    init(DisposableLike__mixin, instance);
    init(typedMutableEnumeratorMixin, instance);
    instance.maxMicroTaskTicks = maxMicroTaskTicks;
    instance.taskQueue = QueueLike__create(comparator);
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
        while (EnumeratorLike__move(this)) {
            const task = EnumeratorLike__getCurrent(this);
            const { dueTime, continuation } = task;
            this.microTaskTicks = 0;
            this[SchedulerLike_now] = dueTime;
            this[SchedulerLike_inContinuation] = true;
            ContinuationLike__run(continuation);
            this[SchedulerLike_inContinuation] = false;
        }
    },
    [SchedulerLike_requestYield]() {
        this.yieldRequested = true;
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        pipe(this, DisposableLike__addIgnoringChildErrors(continuation));
        if (!DisposableLike__isDisposed(continuation)) {
            QueueLike__push(this.taskQueue, {
                id: this.taskIDCount++,
                dueTime: SchedulerLike__getCurrentTime(this) + delay,
                continuation,
            });
        }
    },
    [SourceLike_move]() {
        const taskQueue = this.taskQueue;
        if (DisposableLike__isDisposed(this)) {
            return;
        }
        const task = QueueLike__pop(taskQueue);
        if (isSome(task)) {
            this[EnumeratorLike_current] = task;
        }
        else {
            pipe(this, DisposableLike__dispose());
        }
    },
}));
const VirtualTimeSchedulerLike__create = (options = {}) => {
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};

export { VirtualTimeSchedulerLike__create as default };
