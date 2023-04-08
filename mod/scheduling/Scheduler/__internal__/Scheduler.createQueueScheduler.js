/// <reference types="./Scheduler.createQueueScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __QueueScheduler_delayed, __QueueScheduler_dueTime, __QueueScheduler_hostContinuation, __QueueScheduler_hostScheduler, __QueueScheduler_queue, __QueueScheduler_taskIDCounter, __QueueTask_continuation, __QueueTask_dueTime, __QueueTask_priority, __QueueTask_taskID, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, QueueLike_head, SerialDisposableLike_current, } from "../../../__internal__/util.internal.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import MutableEnumerator_mixin from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isNone, isSome, none, pipe, unsafeCast, } from "../../../functions.js";
import { ContinuationContextLike_yield, PauseableSchedulerLike_isPaused, PauseableSchedulerLike_pause, PauseableSchedulerLike_resume, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import { DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import SerialDisposable_mixin from "../../../util/Disposable/__internal__/SerialDisposable.mixin.js";
import Queue_createPriorityQueue from "../../../util/Queue/__internal__/Queue.createPriorityQueue.js";
import { ContinuationLike_continuationScheduler, ContinuationLike_priority, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "./Scheduler.mixin.js";
const Scheduler_createQueueScheduler = /*@__PURE__*/ (() => {
    const delayedComparator = (a, b) => {
        let diff = 0;
        diff =
            diff !== 0
                ? diff
                : a[__QueueTask_dueTime] - b[__QueueTask_dueTime];
        diff =
            diff !== 0
                ? diff
                : b[__QueueTask_taskID] - a[__QueueTask_taskID];
        return diff;
    };
    const peek = (instance) => {
        const { [__QueueScheduler_delayed]: delayed, [__QueueScheduler_queue]: queue, } = instance;
        const now = instance[__QueueScheduler_hostScheduler][SchedulerLike_now];
        while (true) {
            const task = delayed[QueueLike_head];
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = task[__QueueTask_continuation][DisposableLike_isDisposed];
            if (task[__QueueTask_dueTime] > now && !taskIsDispose) {
                break;
            }
            delayed[QueueLike_dequeue]();
            if (!taskIsDispose) {
                queue[QueueableLike_enqueue](task);
            }
        }
        let task = none;
        while (true) {
            task = queue[QueueLike_head];
            if (isNone(task)) {
                break;
            }
            if (!task[__QueueTask_continuation][DisposableLike_isDisposed]) {
                break;
            }
            queue[QueueLike_dequeue]();
        }
        return task ?? delayed[QueueLike_head];
    };
    const priorityShouldYield = (instance, next) => {
        const { [EnumeratorLike_current]: current } = instance;
        return (current !== next &&
            next[__QueueTask_dueTime] <=
                instance[__QueueScheduler_hostScheduler][SchedulerLike_now] &&
            next[__QueueTask_priority] >
                current[__QueueTask_priority]);
    };
    const scheduleOnHost = (instance) => {
        const task = peek(instance);
        const continuationActive = !instance[SerialDisposableLike_current][DisposableLike_isDisposed] &&
            isSome(task) &&
            instance[__QueueScheduler_dueTime] <=
                task[__QueueTask_dueTime];
        if (isNone(task) ||
            continuationActive ||
            instance[PauseableSchedulerLike_isPaused]) {
            return;
        }
        const dueTime = task[__QueueTask_dueTime];
        const delay = clampPositiveInteger(dueTime -
            instance[__QueueScheduler_hostScheduler][SchedulerLike_now]);
        instance[__QueueScheduler_dueTime] = dueTime;
        const continuation = instance[__QueueScheduler_hostContinuation] ??
            ((ctx) => {
                for (let task = peek(instance); isSome(task) && !instance[DisposableLike_isDisposed]; task = peek(instance)) {
                    const { [__QueueTask_continuation]: continuation, [__QueueTask_dueTime]: dueTime, } = task;
                    const delay = clampPositiveInteger(dueTime -
                        instance[__QueueScheduler_hostScheduler][SchedulerLike_now]);
                    if (delay > 0) {
                        instance[__QueueScheduler_dueTime] =
                            instance[__QueueScheduler_hostScheduler][SchedulerLike_now] + delay;
                    }
                    else {
                        instance[EnumeratorLike_move]();
                        instance[PrioritySchedulerImplementationLike_runContinuation](continuation);
                    }
                    ctx[ContinuationContextLike_yield](delay);
                }
            });
        instance[__QueueScheduler_hostContinuation] = continuation;
        instance[SerialDisposableLike_current] = instance[__QueueScheduler_hostScheduler][SchedulerLike_schedule](continuation, { delay });
    };
    return createInstanceFactory(mix(include(PriorityScheduler_mixin, MutableEnumerator_mixin(), SerialDisposable_mixin()), function QueueScheduler(instance, host, createImmediateQueue) {
        init(PriorityScheduler_mixin, instance, host[SchedulerLike_maxYieldInterval]);
        init(MutableEnumerator_mixin(), instance);
        init(SerialDisposable_mixin(), instance, Disposable_disposed);
        instance[__QueueScheduler_delayed] =
            Queue_createPriorityQueue(delayedComparator, MAX_SAFE_INTEGER, "overflow");
        (instance[__QueueScheduler_queue] = createImmediateQueue()),
            (instance[__QueueScheduler_hostScheduler] = host);
        return instance;
    }, props({
        [__QueueScheduler_delayed]: none,
        [__QueueScheduler_dueTime]: 0,
        [__QueueScheduler_hostScheduler]: none,
        [__QueueScheduler_hostContinuation]: none,
        [PauseableSchedulerLike_isPaused]: false,
        [__QueueScheduler_queue]: none,
        [__QueueScheduler_taskIDCounter]: 0,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[__QueueScheduler_hostScheduler][SchedulerLike_now];
        },
        get [PrioritySchedulerImplementationLike_shouldYield]() {
            unsafeCast(this);
            const next = peek(this);
            return (!this[EnumeratorLike_hasCurrent] ||
                this[PauseableSchedulerLike_isPaused] ||
                (isSome(next) ? priorityShouldYield(this, next) : false) ||
                this[__QueueScheduler_hostScheduler][SchedulerLike_shouldYield]);
        },
        [PauseableSchedulerLike_pause]() {
            this[PauseableSchedulerLike_isPaused] = true;
            this[SerialDisposableLike_current] = Disposable_disposed;
        },
        [PauseableSchedulerLike_resume]() {
            this[PauseableSchedulerLike_isPaused] = false;
            scheduleOnHost(this);
        },
        [EnumeratorLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = this[__QueueScheduler_queue][QueueLike_dequeue]();
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
            return this[EnumeratorLike_hasCurrent];
        },
        [ContinuationSchedulerLike_schedule](continuation, delay) {
            const priority = continuation[ContinuationLike_priority];
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            continuation[ContinuationLike_continuationScheduler] = this;
            const now = this[SchedulerLike_now];
            const dueTime = max(now + delay, now);
            const task = this[SchedulerLike_inContinuation] &&
                this[EnumeratorLike_hasCurrent] &&
                this[EnumeratorLike_current][__QueueTask_continuation] ===
                    continuation &&
                delay <= 0
                ? this[EnumeratorLike_current]
                : {
                    [__QueueTask_taskID]: this[__QueueScheduler_taskIDCounter]++,
                    [__QueueTask_continuation]: continuation,
                    [__QueueTask_dueTime]: dueTime,
                    [__QueueTask_priority]: clampPositiveInteger(priority ?? MAX_SAFE_INTEGER),
                };
            const { [__QueueScheduler_delayed]: delayed, [__QueueScheduler_queue]: queue, } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue[QueueableLike_enqueue](task);
            scheduleOnHost(this);
        },
    }));
})();
export default Scheduler_createQueueScheduler;
