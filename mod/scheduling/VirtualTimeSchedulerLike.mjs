/// <reference types="./VirtualTimeSchedulerLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/env.mjs';
import { properties as properties$2, prototype as prototype$2 } from '../__internal__/ix/Enumerator.mjs';
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { runContinuation } from '../__internal__/scheduling.mjs';
import { createPriorityQueue } from '../__internal__/scheduling/queue.mjs';
import { properties as properties$1, prototype as prototype$1 } from '../__internal__/util/Disposable.mjs';
import { Object_init, init, createObjectFactory } from '../__internal__/util/Object.mjs';
import { pipe } from '../functions.mjs';
import { InteractiveSourceLike_move, EnumeratorLike_current } from '../ix.mjs';
import { getCurrent } from '../ix/EnumeratorLike.mjs';
import { move } from '../ix/InteractiveSourceLike.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, ContinuationLike_run, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../scheduling.mjs';
import { addIgnoringChildErrors } from '../util/DisposableLike.mjs';
import { none, isSome } from '../util/Option.mjs';
import { getCurrentTime } from './SchedulerLike.mjs';
import { isDisposed, dispose } from '../__internal__/util/DisposableLike.mjs';

const comparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.id - b.id;
    return diff;
};
const properties = {
    ...properties$1,
    ...properties$2,
    [SchedulerLike_inContinuation]: false,
    [SchedulerLike_now]: 0,
    maxMicroTaskTicks: MAX_SAFE_INTEGER,
    microTaskTicks: 0,
    taskIDCount: 0,
    yieldRequested: false,
    taskQueue: none,
};
const prototype = {
    ...prototype$1,
    ...prototype$2,
    [ContinuationLike_run]() {
        while (move(this)) {
            const task = getCurrent(this);
            const { dueTime, continuation } = task;
            this.microTaskTicks = 0;
            this[SchedulerLike_now] = dueTime;
            pipe(this, runContinuation(continuation));
        }
    },
    [InteractiveSourceLike_move]() {
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
    [Object_init](maxMicroTaskTicks) {
        init(prototype$1, this);
        this.maxMicroTaskTicks = maxMicroTaskTicks;
        this.taskQueue = createPriorityQueue(comparator);
    },
    get [SchedulerLike_shouldYield]() {
        const self = this;
        const { yieldRequested, [SchedulerLike_inContinuation]: inContinuation } = self;
        if (inContinuation) {
            self.microTaskTicks++;
            self.yieldRequested = false;
        }
        return (inContinuation &&
            (yieldRequested || self.microTaskTicks >= self.maxMicroTaskTicks));
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
};
const createInstance = 
/*@__PURE__*/ createObjectFactory(prototype, properties);
/**
 * Creates a new virtual time scheduler instance.
 *
 * @param maxMicroTaskTicks The max number of times
 * shouldYield should return false before returning true. Useful
 * for testing cooperative multitasking.
 */
const create = (options = {}) => {
    const { maxMicroTaskTicks = MAX_SAFE_INTEGER } = options;
    return createInstance(maxMicroTaskTicks);
};

export { create };
