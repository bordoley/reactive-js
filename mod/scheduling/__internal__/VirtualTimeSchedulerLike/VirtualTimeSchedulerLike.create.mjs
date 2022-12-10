/// <reference types="./VirtualTimeSchedulerLike.create.d.ts" />
import { MAX_SAFE_INTEGER } from '../../../__internal__/constants.mjs';
import { mutableEnumeratorMixin } from '../../../__internal__/ix/EnumeratorLike.mutable.mjs';
import { createInstanceFactory, mixin, include, init, props } from '../../../__internal__/mixins.mjs';
import { createPriorityQueue } from '../../../__internal__/scheduling/QueueLike.mjs';
import { getDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { disposableMixin } from '../../../__internal__/util/DisposableLike.mixins.mjs';
import { none, unsafeCast, pipe, isSome } from '../../../functions.mjs';
import { SourceLike_move, EnumeratorLike_current } from '../../../ix.mjs';
import { move, getCurrent } from '../../../ix/EnumeratorLike.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, ContinuationLike_run, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../../scheduling.mjs';
import { run } from '../../ContinuationLike.mjs';
import { addIgnoringChildErrors, isDisposed, dispose } from '../../../util/DisposableLike.mjs';
import { getCurrentTime } from '../SchedulerLike/SchedulerLike.getCurrentTime.mjs';

const comparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.id - b.id;
    return diff;
};
const typedMutableEnumeratorMixin = 
/*@__PURE__*/ mutableEnumeratorMixin();
const createVirtualTimeSchedulerInstance = /*@__PURE__*/ createInstanceFactory(mixin(include(disposableMixin, typedMutableEnumeratorMixin), function VirtualTimeScheduler(instance, maxMicroTaskTicks) {
    init(disposableMixin, instance);
    init(typedMutableEnumeratorMixin, instance);
    instance.maxMicroTaskTicks = maxMicroTaskTicks;
    instance.taskQueue = createPriorityQueue(comparator);
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
        while (move(this)) {
            const task = getCurrent(this);
            const { dueTime, continuation } = task;
            this.microTaskTicks = 0;
            this[SchedulerLike_now] = dueTime;
            this[SchedulerLike_inContinuation] = true;
            run(continuation);
            this[SchedulerLike_inContinuation] = false;
        }
    },
    [SchedulerLike_requestYield]() {
        this.yieldRequested = true;
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        pipe(this, addIgnoringChildErrors(continuation));
        if (!isDisposed(continuation)) {
            this.taskQueue.push({
                id: this.taskIDCount++,
                dueTime: getCurrentTime(this) + delay,
                continuation,
            });
        }
    },
    [SourceLike_move]() {
        const taskQueue = this.taskQueue;
        if (isDisposed(this)) {
            return;
        }
        const task = taskQueue.pop();
        if (isSome(task)) {
            this[EnumeratorLike_current] = task;
        }
        else {
            pipe(this, dispose());
        }
    },
}));
const create = (options = {}) => {
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    return createVirtualTimeSchedulerInstance(maxMicroTaskTicks);
};

export { create };
