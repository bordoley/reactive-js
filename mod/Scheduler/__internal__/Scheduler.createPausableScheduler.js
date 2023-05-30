/// <reference types="./Scheduler.createPausableScheduler.d.ts" />

import Disposable_disposed from "../../Disposable/__internal__/Disposable.disposed.js";
import SerialDisposable_mixin from "../../Disposable/__internal__/SerialDisposable.mixin.js";
import MutableEnumerator_mixin from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import Queue_createIndexedQueue from "../../Queue/__internal__/Queue.createIndexedQueue.js";
import Queue_createPriorityQueue from "../../Queue/__internal__/Queue.createPriorityQueue.js";
import Store_create from "../../Store/__internal__/Store.create.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveInteger, max } from "../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { __PauseableScheduler_delayed, __PauseableScheduler_dueTime, __PauseableScheduler_hostContinuation, __PauseableScheduler_hostScheduler, __PauseableScheduler_initialTime, __PauseableScheduler_queue, __PauseableScheduler_resumedTime, __PauseableScheduler_taskIDCounter, } from "../../__internal__/symbols.js";
import { QueueLike_dequeue, QueueLike_head, SchedulerTaskLike_continuation, SchedulerTaskLike_dueTime, SchedulerTaskLike_id, SerialDisposableLike_current, } from "../../__internal__/types.js";
import { isNone, isSome, none, } from "../../functions.js";
import { DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueableLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, StoreLike_value, } from "../../types.js";
import { SchedulerImplementationLike_runContinuation, SchedulerImplementationLike_scheduleContinuation, SchedulerImplementationLike_shouldYield, SchedulerImplementation_mixin, } from "./SchedulerImplementation.mixin.js";
const Scheduler_createPauseableScheduler = 
/*@__PURE__*/ (() => {
    const delayedComparator = (a, b) => {
        let diff = 0;
        diff =
            diff !== 0
                ? diff
                : a[SchedulerTaskLike_dueTime] - b[SchedulerTaskLike_dueTime];
        diff =
            diff !== 0 ? diff : b[SchedulerTaskLike_id] - a[SchedulerTaskLike_id];
        return diff;
    };
    const peek = (instance) => {
        const { [__PauseableScheduler_delayed]: delayed, [__PauseableScheduler_queue]: queue, } = instance;
        const now = instance[SchedulerLike_now];
        while (true) {
            const task = delayed[QueueLike_head];
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = task[SchedulerTaskLike_continuation][DisposableLike_isDisposed];
            if (task[SchedulerTaskLike_dueTime] > now && !taskIsDispose) {
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
            if (!task[SchedulerTaskLike_continuation][DisposableLike_isDisposed]) {
                break;
            }
            queue[QueueLike_dequeue]();
        }
        return task ?? delayed[QueueLike_head];
    };
    const scheduleOnHost = (instance) => {
        const task = peek(instance);
        const continuationActive = !instance[SerialDisposableLike_current][DisposableLike_isDisposed] &&
            isSome(task) &&
            instance[__PauseableScheduler_dueTime] <=
                task[SchedulerTaskLike_dueTime];
        if (isNone(task) ||
            continuationActive ||
            instance[PauseableLike_isPaused][StoreLike_value]) {
            return;
        }
        const dueTime = task[SchedulerTaskLike_dueTime];
        const delay = clampPositiveInteger(dueTime - instance[SchedulerLike_now]);
        instance[__PauseableScheduler_dueTime] = dueTime;
        const continuation = instance[__PauseableScheduler_hostContinuation] ??
            ((scheduler) => {
                for (let task = peek(instance); isSome(task) && !instance[DisposableLike_isDisposed]; task = peek(instance)) {
                    const { [SchedulerTaskLike_continuation]: continuation, [SchedulerTaskLike_dueTime]: dueTime, } = task;
                    const delay = clampPositiveInteger(dueTime - instance[SchedulerLike_now]);
                    if (delay > 0) {
                        instance[__PauseableScheduler_dueTime] =
                            instance[SchedulerLike_now] + delay;
                    }
                    else {
                        instance[EnumeratorLike_move]();
                        instance[SchedulerImplementationLike_runContinuation](continuation);
                    }
                    scheduler[SchedulerLike_yield](delay);
                }
            });
        instance[__PauseableScheduler_hostContinuation] = continuation;
        instance[SerialDisposableLike_current] = instance[__PauseableScheduler_hostScheduler][SchedulerLike_schedule](continuation, { delay });
    };
    return createInstanceFactory(mix(include(SchedulerImplementation_mixin, MutableEnumerator_mixin(), SerialDisposable_mixin()), function PauseableScheduler(instance, host) {
        init(SchedulerImplementation_mixin, instance, host[SchedulerLike_maxYieldInterval]);
        init(MutableEnumerator_mixin(), instance);
        init(SerialDisposable_mixin(), instance, Disposable_disposed);
        instance[__PauseableScheduler_delayed] = Queue_createPriorityQueue(delayedComparator, MAX_SAFE_INTEGER, "overflow");
        instance[__PauseableScheduler_queue] = Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow");
        instance[__PauseableScheduler_hostScheduler] = host;
        instance[__PauseableScheduler_initialTime] = host[SchedulerLike_now];
        instance[__PauseableScheduler_resumedTime] =
            instance[__PauseableScheduler_initialTime];
        instance[PauseableLike_isPaused] = Store_create(true);
        return instance;
    }, props({
        [__PauseableScheduler_delayed]: none,
        [__PauseableScheduler_dueTime]: 0,
        [__PauseableScheduler_hostScheduler]: none,
        [__PauseableScheduler_hostContinuation]: none,
        [PauseableLike_isPaused]: none,
        [__PauseableScheduler_queue]: none,
        [__PauseableScheduler_taskIDCounter]: 0,
        [__PauseableScheduler_initialTime]: 0,
        [__PauseableScheduler_resumedTime]: 0,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            const hostNow = this[__PauseableScheduler_hostScheduler][SchedulerLike_now];
            return (this[__PauseableScheduler_initialTime] +
                (hostNow - this[__PauseableScheduler_resumedTime]));
        },
        get [SchedulerImplementationLike_shouldYield]() {
            unsafeCast(this);
            const next = peek(this);
            return (!this[EnumeratorLike_hasCurrent] ||
                this[PauseableLike_isPaused][StoreLike_value] ||
                (isSome(next) &&
                    this[EnumeratorLike_current] !== next &&
                    next[SchedulerTaskLike_dueTime] <= this[SchedulerLike_now]) ||
                this[__PauseableScheduler_hostScheduler][SchedulerLike_shouldYield]);
        },
        [PauseableLike_pause]() {
            this[__PauseableScheduler_initialTime] = this[SchedulerLike_now];
            this[SerialDisposableLike_current] = Disposable_disposed;
            this[PauseableLike_isPaused][StoreLike_value] = true;
        },
        [PauseableLike_resume]() {
            this[__PauseableScheduler_resumedTime] =
                this[__PauseableScheduler_hostScheduler][SchedulerLike_now];
            this[PauseableLike_isPaused][StoreLike_value] = false;
            scheduleOnHost(this);
        },
        [EnumeratorLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = this[__PauseableScheduler_queue][QueueLike_dequeue]();
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
            return this[EnumeratorLike_hasCurrent];
        },
        [SchedulerImplementationLike_scheduleContinuation](continuation, delay) {
            const now = this[SchedulerLike_now];
            const dueTime = max(now + delay, now);
            const task = this[SchedulerLike_inContinuation] &&
                this[EnumeratorLike_hasCurrent] &&
                this[EnumeratorLike_current][SchedulerTaskLike_continuation] ===
                    continuation &&
                delay <= 0
                ? this[EnumeratorLike_current]
                : {
                    [SchedulerTaskLike_id]: this[__PauseableScheduler_taskIDCounter]++,
                    [SchedulerTaskLike_continuation]: continuation,
                    [SchedulerTaskLike_dueTime]: dueTime,
                };
            const { [__PauseableScheduler_delayed]: delayed, [__PauseableScheduler_queue]: queue, } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue[QueueableLike_enqueue](task);
            scheduleOnHost(this);
        },
    }));
})();
export default Scheduler_createPauseableScheduler;
