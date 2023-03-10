/// <reference types="./QueueScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { max } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../containers.js";
import MutableEnumerator_mixin from "../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isNone, isSome, none, pipe, unsafeCast, } from "../../functions.js";
import { ContinuationContextLike_yield, PauseableSchedulerLike_isPaused, PauseableState_paused, SchedulerLike_inContinuation, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../scheduling.js";
import { DisposableLike_isDisposed, QueueLike_count, QueueLike_push, } from "../../util.js";
import Disposable_addIgnoringChildErrors from "../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_disposed from "../../util/Disposable/__internal__/Disposable.disposed.js";
import SerialDisposable_mixin from "../../util/Disposable/__internal__/SerialDisposable.mixin.js";
import PullableQueue_createPriorityQueue from "../../util/PullableQueue/__internal__/PullableQueue.createPriorityQueue.js";
import { PullableQueueLike_head, PullableQueueLike_pull, SerialDisposableLike_current, } from "../../util/__internal__/util.internal.js";
import { ContinuationLike_continuationScheduler, ContinuationLike_priority, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "../Scheduler/__internal__/Scheduler.mixin.js";
import { getDelay } from "./Scheduler.options.js";
export const create = 
/*@__PURE__*/ (() => {
    const QueueTask_continuation = Symbol("QueueTask_continuation");
    const QueueTask_dueTime = Symbol("QueueTask_dueTime");
    const QueueTask_priority = Symbol("QueueTask_priority");
    const QueueTask_taskID = Symbol("QueueTask_taskID");
    const delayedComparator = (a, b) => {
        let diff = 0;
        diff = diff !== 0 ? diff : a[QueueTask_dueTime] - b[QueueTask_dueTime];
        diff = diff !== 0 ? diff : a[QueueTask_taskID] - b[QueueTask_taskID];
        return diff;
    };
    const taskComparator = (a, b) => {
        let diff = 0;
        diff = diff !== 0 ? diff : a[QueueTask_priority] - b[QueueTask_priority];
        diff = diff !== 0 ? diff : a[QueueTask_taskID] - b[QueueTask_taskID];
        return diff;
    };
    const peek = (instance) => {
        const { [QueueScheduler_delayed]: delayed, [QueueScheduler_queue]: queue, } = instance;
        const now = instance[QueueScheduler_hostScheduler][SchedulerLike_now];
        while (true) {
            const task = delayed[PullableQueueLike_head];
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = task[QueueTask_continuation][DisposableLike_isDisposed];
            if (task[QueueTask_dueTime] > now && !taskIsDispose) {
                break;
            }
            delayed[PullableQueueLike_pull]();
            if (!taskIsDispose) {
                queue[QueueLike_push](task);
            }
        }
        let task = none;
        while (true) {
            task = queue[PullableQueueLike_head];
            if (isNone(task)) {
                break;
            }
            if (!task[QueueTask_continuation][DisposableLike_isDisposed]) {
                break;
            }
            queue[PullableQueueLike_pull]();
        }
        return task !== null && task !== void 0 ? task : delayed[PullableQueueLike_head];
    };
    const priorityShouldYield = (instance, next) => {
        const { [EnumeratorLike_current]: current } = instance;
        return (current !== next &&
            next[QueueTask_dueTime] <=
                instance[QueueScheduler_hostScheduler][SchedulerLike_now] &&
            next[QueueTask_priority] > current[QueueTask_priority]);
    };
    const scheduleOnHost = (instance) => {
        var _a;
        const task = peek(instance);
        const continuationActive = !instance[SerialDisposableLike_current][DisposableLike_isDisposed] &&
            isSome(task) &&
            instance[QueueScheduler_dueTime] <= task[QueueTask_dueTime];
        if (isNone(task) ||
            continuationActive ||
            instance[PauseableSchedulerLike_isPaused]) {
            return;
        }
        const dueTime = task[QueueTask_dueTime];
        const delay = max(dueTime - instance[QueueScheduler_hostScheduler][SchedulerLike_now], 0);
        instance[QueueScheduler_dueTime] = dueTime;
        const continuation = (_a = instance[QueueScheduler_hostContinuation]) !== null && _a !== void 0 ? _a : ((ctx) => {
            for (let task = peek(instance); isSome(task) && !instance[DisposableLike_isDisposed]; task = peek(instance)) {
                const { [QueueTask_continuation]: continuation, [QueueTask_dueTime]: dueTime, } = task;
                const delay = max(dueTime -
                    instance[QueueScheduler_hostScheduler][SchedulerLike_now], 0);
                if (delay === 0) {
                    instance[EnumeratorLike_move]();
                    instance[PrioritySchedulerImplementationLike_runContinuation](continuation);
                }
                else {
                    instance[QueueScheduler_dueTime] =
                        instance[QueueScheduler_hostScheduler][SchedulerLike_now] +
                            delay;
                }
                ctx[ContinuationContextLike_yield](delay);
            }
        });
        instance[QueueScheduler_hostContinuation] = continuation;
        instance[SerialDisposableLike_current] = instance[QueueScheduler_hostScheduler][SchedulerLike_schedule](continuation, { delay });
    };
    const typedSerialDisposableMixin = SerialDisposable_mixin();
    const typedMutableEnumeratorMixin = MutableEnumerator_mixin();
    const QueueScheduler_delayed = Symbol("QueueScheduler_delayed");
    const QueueScheduler_dueTime = Symbol("QueueScheduler_dueTime");
    const QueueScheduler_hostContinuation = Symbol("QueueScheduler_hostContinuation");
    const QueueScheduler_hostScheduler = Symbol("QueueScheduler_hostScheduler");
    const QueueScheduler_queue = Symbol("QueueScheduler_queue");
    const QueueScheduler_taskIDCounter = Symbol("QueueScheduler_taskIDCounter");
    return createInstanceFactory(mix(include(PriorityScheduler_mixin, typedMutableEnumeratorMixin, typedSerialDisposableMixin), function QueueScheduler(instance, host) {
        init(PriorityScheduler_mixin, instance);
        init(typedMutableEnumeratorMixin, instance);
        init(typedSerialDisposableMixin, instance, Disposable_disposed);
        instance[QueueScheduler_delayed] =
            PullableQueue_createPriorityQueue(delayedComparator);
        instance[QueueScheduler_queue] =
            PullableQueue_createPriorityQueue(taskComparator);
        instance[QueueScheduler_hostScheduler] = host;
        return instance;
    }, props({
        [QueueScheduler_delayed]: none,
        [QueueScheduler_dueTime]: 0,
        [QueueScheduler_hostScheduler]: none,
        [QueueScheduler_hostContinuation]: none,
        [PauseableSchedulerLike_isPaused]: false,
        [QueueScheduler_queue]: none,
        [QueueScheduler_taskIDCounter]: 0,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[QueueScheduler_hostScheduler][SchedulerLike_now];
        },
        get [PrioritySchedulerImplementationLike_shouldYield]() {
            unsafeCast(this);
            const next = peek(this);
            return (this[DisposableLike_isDisposed] ||
                !this[EnumeratorLike_hasCurrent] ||
                this[PauseableSchedulerLike_isPaused] ||
                (isSome(next) ? priorityShouldYield(this, next) : false) ||
                this[QueueScheduler_hostScheduler][SchedulerLike_shouldYield]);
        },
        get [QueueLike_count]() {
            unsafeCast(this);
            // Intentional. This is a little wierd because though the QueueScheduler
            // technically implements the QueuableLike interface, it doesn't ever
            // actually queue up the actions. It's somewhat of a weird API glitch
            // that enables a uniform Pausable interface between PausableScheduler
            // and Flowable (which does queue and dispatch its pause events).
            return 0;
        },
        [QueueLike_push](next) {
            if (next === PauseableState_paused) {
                this[PauseableSchedulerLike_isPaused] = true;
                this[SerialDisposableLike_current] = Disposable_disposed;
            }
            else {
                this[PauseableSchedulerLike_isPaused] = false;
                scheduleOnHost(this);
            }
        },
        [EnumeratorLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = this[QueueScheduler_queue][PullableQueueLike_pull]();
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
            return this[EnumeratorLike_hasCurrent];
        },
        [ContinuationSchedulerLike_schedule](continuation, options) {
            const delay = getDelay(options);
            const priority = continuation[ContinuationLike_priority];
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            continuation[ContinuationLike_continuationScheduler] = this;
            const now = this[QueueScheduler_hostScheduler][SchedulerLike_now];
            const dueTime = max(now + delay, now);
            const task = this[SchedulerLike_inContinuation] &&
                this[EnumeratorLike_hasCurrent] &&
                this[EnumeratorLike_current][QueueTask_continuation] ===
                    continuation &&
                delay <= 0
                ? this[EnumeratorLike_current]
                : {
                    [QueueTask_taskID]: this[QueueScheduler_taskIDCounter]++,
                    [QueueTask_continuation]: continuation,
                    [QueueTask_dueTime]: dueTime,
                    [QueueTask_priority]: isSome(priority)
                        ? max(priority, 0)
                        : MAX_SAFE_INTEGER,
                };
            const { [QueueScheduler_delayed]: delayed, [QueueScheduler_queue]: queue, } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue[QueueLike_push](task);
            scheduleOnHost(this);
        },
    }));
})();
