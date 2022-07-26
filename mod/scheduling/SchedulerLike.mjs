/// <reference types="./SchedulerLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/env.mjs';
import { getDelay } from '../__internal__/optionalArgs.mjs';
import { createPriorityQueue } from '../__internal__/scheduling/queue.mjs';
import { getCurrentTime, SchedulerLike_inContinuation, SchedulerLike_now, isInContinuation } from '../__internal__/schedulingInternal.mjs';
export { getCurrentTime, isInContinuation } from '../__internal__/schedulingInternal.mjs';
import { prototype } from '../__internal__/util/Disposable.mjs';
import { prototype as prototype$2 } from '../__internal__/util/DisposableRefLike.mjs';
import { prototype as prototype$1 } from '../__internal__/util/Enumerator.mjs';
import { MutableRefLike_current } from '../__internal__/util/MutableRefLike.mjs';
import { Object_properties, createObjectFactory, mix, Object_init, init } from '../__internal__/util/Object.mjs';
import { none, isSome, pipe, isNone, raise, newInstanceWith, max } from '../functions.mjs';
import { SchedulerLike_requestYield, SchedulerLike_shouldYield, SchedulerLike_schedule } from '../scheduling.mjs';
import { ContinuationLike_run, EnumeratorLike_current, disposed, SourceLike_move, PauseableLike_pause, PauseableLike_resume } from '../util.mjs';
import { run } from '../util/ContinuationLike.mjs';
import { addIgnoringChildErrors } from '../util/DisposableLike.mjs';
import { hasCurrent, getCurrent } from '../util/EnumeratorLike.mjs';
import { move } from '../util/SourceLike.mjs';
import { isDisposed, dispose } from '../__internal__/util/DisposableLikeInternal.mjs';

const requestYield = (scheduler) => scheduler[SchedulerLike_requestYield]();
const shouldYield = (scheduler) => scheduler[SchedulerLike_shouldYield];
const isYieldError = (e) => e instanceof YieldError;
class YieldError {
    constructor(delay) {
        this.delay = delay;
    }
}
let currentScheduler = none;
const createContinuation = /*@__PURE__*/ (() => {
    const properties = {
        ...prototype[Object_properties],
        scheduler: none,
        f: (() => { }),
    };
    return createObjectFactory(mix(prototype, {
        [Object_properties]: properties,
        [Object_init](scheduler, f) {
            init(prototype, this);
            this.scheduler = scheduler;
            this.f = f;
        },
        [ContinuationLike_run]() {
            if (!isDisposed(this)) {
                let error = none;
                let yieldError = none;
                const { scheduler } = this;
                const oldCurrentScheduler = currentScheduler;
                currentScheduler = scheduler;
                try {
                    this.f();
                }
                catch (cause) {
                    if (isYieldError(cause)) {
                        yieldError = cause;
                    }
                    else {
                        error = { cause };
                    }
                }
                currentScheduler = oldCurrentScheduler;
                if (isSome(yieldError)) {
                    pipe(scheduler, schedule(this, yieldError));
                }
                else {
                    pipe(this, dispose(error));
                }
            }
        },
    }));
})();
const __yield = (options) => {
    const delay = getDelay(options);
    const scheduler = isNone(currentScheduler)
        ? raise("__yield effect may only be invoked from within a SchedulerContinuation")
        : currentScheduler;
    if (delay > 0 || shouldYield(scheduler)) {
        pipe(YieldError, newInstanceWith(delay), raise);
    }
};
const schedule = (f, options) => scheduler => {
    const continuation = typeof f === "function" ? createContinuation(scheduler, f) : f;
    scheduler[SchedulerLike_schedule](continuation, options);
    return continuation;
};
const createQueueScheduler = 
/*@__PURE__*/ (() => {
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
                    self[SchedulerLike_inContinuation] = true;
                    run(continuation);
                    self[SchedulerLike_inContinuation] = false;
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
        ...prototype[Object_properties],
        ...prototype$1[Object_properties],
        ...prototype$2[Object_properties],
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
    return createObjectFactory(mix(prototype, prototype$1, prototype$2, {
        [Object_properties]: properties,
        [Object_init](host) {
            init(prototype, this);
            init(prototype$1, this);
            init(prototype$2, this, disposed);
            this.delayed = createPriorityQueue(delayedComparator);
            this.queue = createPriorityQueue(taskComparator);
            this.host = host;
        },
        get [SchedulerLike_now]() {
            const self = this;
            return getCurrentTime(self.host);
        },
        get [SchedulerLike_shouldYield]() {
            const self = this;
            const { [SchedulerLike_inContinuation]: inContinuation, yieldRequested, } = self;
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
        [SourceLike_move]() {
            // First fast forward through any disposed tasks.
            peek(this);
            const task = this.queue.pop();
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
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
    }));
})();
const toPausableScheduler = createQueueScheduler;
const toPriorityScheduler = createQueueScheduler;

export { __yield, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };
