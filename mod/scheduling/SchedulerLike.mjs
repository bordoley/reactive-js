/// <reference types="./SchedulerLike.d.ts" />
import { MAX_SAFE_INTEGER } from '../__internal__/__internal__env.mjs';
import { getDelay } from '../__internal__/__internal__optionParsing.mjs';
import { isInContinuation as isInContinuation$1, getCurrentTime as getCurrentTime$1 } from '../__internal__/__internal__scheduling.mjs';
import { createPriorityQueue } from '../__internal__/scheduling/__internal__queue.mjs';
import { isDisposed, dispose, addIgnoringChildErrors } from '../__internal__/util/__internal__DisposableLike.mjs';
import { disposableMixin, disposableRefMixin } from '../__internal__/util/__internal__Disposables.mjs';
import { enumeratorMixin } from '../__internal__/util/__internal__Enumerators.mjs';
import { MutableRefLike_current } from '../__internal__/util/__internal__MutableRefLike.mjs';
import { createInstanceFactory, clazz, __extends, init } from '../__internal__/util/__internal__Objects.mjs';
import { none, unsafeCast, isSome, pipe, isNone, raise, newInstance, max, compose } from '../functions.mjs';
import { SchedulerLike_requestYield, SchedulerLike_shouldYield, SchedulerLike_schedule, SchedulerLike_inContinuation, SchedulerLike_now } from '../scheduling.mjs';
import { ContinuationLike_run, EnumeratorLike_current, disposed, SourceLike_move, PauseableLike_pause, PauseableLike_resume } from '../util.mjs';
import { run } from '../util/ContinuationLike.mjs';
import { hasCurrent, getCurrent } from '../util/EnumeratorLike.mjs';
import { pause } from '../util/PauseableLike.mjs';
import { move } from '../util/SourceLike.mjs';

const isInContinuation = isInContinuation$1;
const getCurrentTime = getCurrentTime$1;
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
    return createInstanceFactory(clazz(__extends(disposableMixin), function Continuation(instance, scheduler, f) {
        init(disposableMixin, instance);
        unsafeCast(instance);
        instance.scheduler = scheduler;
        instance.f = f;
        return instance;
    }, {
        scheduler: none,
        f: none,
    }, {
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
        pipe(newInstance(YieldError, delay), raise);
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
    const peek = (instance) => {
        const { delayed, queue } = instance;
        const now = getCurrentTime(instance.host);
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
    const priorityShouldYield = (instance, next) => {
        const { [EnumeratorLike_current]: current } = instance;
        return (current !== next &&
            next.dueTime <= getCurrentTime(instance.host) &&
            next.priority > current.priority);
    };
    const scheduleOnHost = (instance) => {
        var _a;
        const task = peek(instance);
        const continuationActive = !isDisposed(instance[MutableRefLike_current]) &&
            isSome(task) &&
            instance.dueTime <= task.dueTime;
        if (isNone(task) || continuationActive || instance.isPaused) {
            return;
        }
        const dueTime = task.dueTime;
        const delay = max(dueTime - getCurrentTime(instance.host), 0);
        instance.dueTime = dueTime;
        const continuation = (_a = instance.hostContinuation) !== null && _a !== void 0 ? _a : (() => {
            for (let task = peek(instance); isSome(task) && !isDisposed(instance); task = peek(instance)) {
                const { continuation, dueTime } = task;
                const delay = max(dueTime - getCurrentTime(instance.host), 0);
                if (delay === 0) {
                    move(instance);
                    instance[SchedulerLike_inContinuation] = true;
                    run(continuation);
                    instance[SchedulerLike_inContinuation] = false;
                }
                else {
                    instance.dueTime = getCurrentTime(instance.host) + delay;
                }
                __yield({ delay });
            }
        });
        instance.hostContinuation = continuation;
        instance[MutableRefLike_current] = pipe(instance.host, schedule(continuation, { delay }));
    };
    const typedDisposableRefMixin = disposableRefMixin();
    const typedEnumeratorMixin = enumeratorMixin();
    return createInstanceFactory(clazz(__extends(disposableMixin, typedEnumeratorMixin, typedDisposableRefMixin), function QueueScheduler(instance, host) {
        init(disposableMixin, instance);
        init(typedEnumeratorMixin, instance);
        init(typedDisposableRefMixin, instance, disposed);
        unsafeCast(instance);
        instance.delayed = createPriorityQueue(delayedComparator);
        instance.queue = createPriorityQueue(taskComparator);
        instance.host = host;
        return instance;
    }, {
        [SchedulerLike_inContinuation]: false,
        delayed: none,
        dueTime: 0,
        host: none,
        hostContinuation: none,
        isPaused: false,
        queue: none,
        taskIDCounter: 0,
        yieldRequested: false,
    }, {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return getCurrentTime(this.host);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const { [SchedulerLike_inContinuation]: inContinuation, yieldRequested, } = this;
            if (inContinuation) {
                this.yieldRequested = false;
            }
            const next = peek(this);
            return (inContinuation &&
                (yieldRequested ||
                    isDisposed(this) ||
                    !hasCurrent(this) ||
                    this.isPaused ||
                    (isSome(next) ? priorityShouldYield(this, next) : false) ||
                    shouldYield(this.host)));
        },
        [SourceLike_move]() {
            // First fast forward through disposed tasks.
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
const toPausableScheduler = compose(createQueueScheduler, pause);
const toPriorityScheduler = createQueueScheduler;

export { __yield, getCurrentTime, isInContinuation, requestYield, schedule, shouldYield, toPausableScheduler, toPriorityScheduler };
