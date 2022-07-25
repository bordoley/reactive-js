/// <reference types="./QueueScheduler.d.ts" />
import { MAX_SAFE_INTEGER } from '../env.mjs';
import { properties as properties$2, prototype as prototype$2 } from '../ix/Enumerator.mjs';
import { getDelay } from '../optionalArgs.mjs';
import { runContinuation } from '../scheduling.mjs';
import { properties as properties$1, prototype as prototype$1 } from '../util/Disposable.mjs';
import { properties as properties$3, prototype as prototype$3 } from '../util/DisposableRefLike.mjs';
import { MutableRefLike_current } from '../util/MutableRefLike.mjs';
import { Object_init, init, createObjectFactory } from '../util/Object.mjs';
import { max, pipe } from '../../functions.mjs';
import { EnumeratorLike_current, InteractiveSourceLike_move } from '../../ix.mjs';
import { hasCurrent, getCurrent } from '../../ix/EnumeratorLike.mjs';
import { move } from '../../ix/InteractiveSourceLike.mjs';
import { SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_shouldYield, SchedulerLike_requestYield, SchedulerLike_schedule } from '../../scheduling.mjs';
import { getCurrentTime, __yield, schedule, shouldYield, isInContinuation } from '../../scheduling/SchedulerLike.mjs';
import { PauseableLike_pause, PauseableLike_resume } from '../../util.mjs';
import { disposed, addIgnoringChildErrors } from '../../util/DisposableLike.mjs';
import { isNone, none, isSome } from '../../util/Option.mjs';
import { createPriorityQueue } from './queue.mjs';
import { isDisposed } from '../util/DisposableLike.mjs';

const delayedComparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.dueTime - b.dueTime;
    diff = diff !== 0 ? diff : a.taskID - b.taskID;
    return diff;
};
const taskComparator = (a, b) => {
    let diff = 0;
    diff = diff !== 0 ? diff : a.priority - b.priority;
    diff = diff !== 0 ? diff : a.taskID - b.taskID;
    return diff;
};
const peek = (self) => {
    const { delayed, queue } = self;
    const now = getCurrentTime(self.host);
    while (true) {
        const task = delayed.peek();
        if (isNone(task)) {
            break;
        }
        const taskIsDispose = isDisposed(task.continuation);
        if (task.dueTime > now && !taskIsDispose) {
            break;
        }
        delayed.pop();
        if (!taskIsDispose) {
            queue.push(task);
        }
    }
    let task = none;
    while (true) {
        task = queue.peek();
        if (isNone(task)) {
            break;
        }
        if (!isDisposed(task.continuation)) {
            break;
        }
        queue.pop();
    }
    return task !== null && task !== void 0 ? task : delayed.peek();
};
const priorityShouldYield = (self, next) => {
    const { [EnumeratorLike_current]: current } = self;
    return (current !== next &&
        next.dueTime <= getCurrentTime(self.host) &&
        next.priority > current.priority);
};
const scheduleOnHost = (self) => {
    var _a;
    const task = peek(self);
    const continuationActive = !isDisposed(self[MutableRefLike_current]) &&
        isSome(task) &&
        self.dueTime <= task.dueTime;
    if (isNone(task) || continuationActive || self.isPaused) {
        return;
    }
    const dueTime = task.dueTime;
    const delay = max(dueTime - getCurrentTime(self.host), 0);
    self.dueTime = dueTime;
    const continuation = (_a = self.hostContinuation) !== null && _a !== void 0 ? _a : (() => {
        for (let task = peek(self); isSome(task) && !isDisposed(self); task = peek(self)) {
            const { continuation, dueTime } = task;
            const delay = max(dueTime - getCurrentTime(self.host), 0);
            if (delay === 0) {
                move(self);
                pipe(self, runContinuation(continuation));
            }
            else {
                self.dueTime = getCurrentTime(self.host) + delay;
            }
            __yield({ delay });
        }
    });
    self.hostContinuation = continuation;
    self[MutableRefLike_current] = pipe(self.host, schedule(continuation, { delay }));
};
const properties = {
    ...properties$1,
    ...properties$2,
    ...properties$3,
    [SchedulerLike_inContinuation]: false,
    delayed: none,
    dueTime: 0,
    host: none,
    hostContinuation: none,
    isPaused: false,
    queue: none,
    taskIDCounter: 0,
    yieldRequested: false,
};
const prototype = {
    ...prototype$1,
    ...prototype$2,
    ...prototype$3,
    get [SchedulerLike_now]() {
        const self = this;
        return getCurrentTime(self.host);
    },
    get [SchedulerLike_shouldYield]() {
        const self = this;
        const { [SchedulerLike_inContinuation]: inContinuation, yieldRequested } = self;
        if (inContinuation) {
            self.yieldRequested = false;
        }
        const next = peek(self);
        return (inContinuation &&
            (yieldRequested ||
                isDisposed(self) ||
                !hasCurrent(self) ||
                self.isPaused ||
                (isSome(next) ? priorityShouldYield(self, next) : false) ||
                shouldYield(self.host)));
    },
    [InteractiveSourceLike_move]() {
        // First fast forward through any disposed tasks.
        peek(this);
        const task = this.queue.pop();
        if (isSome(task)) {
            this[EnumeratorLike_current] = task;
        }
    },
    [Object_init](host) {
        init(prototype$1, this);
        init(prototype$3, this, disposed);
        this.delayed = createPriorityQueue(delayedComparator);
        this.queue = createPriorityQueue(taskComparator);
        this.host = host;
    },
    [SchedulerLike_requestYield]() {
        this.yieldRequested = true;
    },
    [PauseableLike_pause]() {
        this.isPaused = true;
        this[MutableRefLike_current] = disposed;
    },
    [PauseableLike_resume]() {
        this.isPaused = false;
        scheduleOnHost(this);
    },
    [SchedulerLike_schedule](continuation, options) {
        const delay = getDelay(options);
        const { priority } = options !== null && options !== void 0 ? options : {};
        pipe(this, addIgnoringChildErrors(continuation));
        if (!isDisposed(continuation)) {
            const now = getCurrentTime(this.host);
            const dueTime = max(now + delay, now);
            const task = isInContinuation(this) &&
                hasCurrent(this) &&
                getCurrent(this).continuation === continuation &&
                delay <= 0
                ? getCurrent(this)
                : {
                    taskID: this.taskIDCounter++,
                    continuation,
                    dueTime,
                    priority: isSome(priority)
                        ? max(priority, 0)
                        : MAX_SAFE_INTEGER,
                };
            const { delayed, queue } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue.push(task);
            scheduleOnHost(this);
        }
    },
};
const create = 
/*@__PURE__*/ createObjectFactory(prototype, properties);

export { create };
