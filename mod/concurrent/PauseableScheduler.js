/// <reference types="./PauseableScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { clampPositiveInteger, max } from "../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../__internal__/mixins.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../collections.js";
import MutableEnumeratorMixin from "../collections/__mixins__/MutableEnumeratorMixin.js";
import { PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, SchedulerTaskLike_continuation, SchedulerTaskLike_dueTime, SchedulerTaskLike_id, } from "../concurrent.js";
import { StoreLike_value } from "../events.js";
import * as WritableStore from "../events/WritableStore.js";
import { isNone, isSome, none } from "../functions.js";
import { DisposableLike_isDisposed, QueueLike_dequeue, QueueLike_head, QueueableLike_enqueue, SerialDisposableLike_current, } from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import * as IndexedQueue from "../utils/IndexedQueue.js";
import * as PriorityQueue from "../utils/PriorityQueue.js";
import SerialDisposableMixin from "../utils/__mixins__/SerialDisposableMixin.js";
import ContinuationSchedulerMixin, { ContinuationSchedulerImplementationLike_scheduleContinuation, ContinuationSchedulerImplementationLike_shouldYield, ContinuationSchedulerMixinLike_runContinuation, } from "./__mixins__/ContinuationSchedulerMixin.js";
export const create = /*@PURE__*/ (() => {
    const PauseableScheduler_delayed = Symbol("PauseableScheduler_delayed");
    const PauseableScheduler_dueTime = Symbol("PauseableScheduler_dueTime");
    const PauseableScheduler_hostScheduler = Symbol("PauseableScheduler_hostScheduler");
    const PauseableScheduler_hostContinuation = Symbol("PauseableScheduler_hostContinuation");
    const PauseableScheduler_queue = Symbol("PauseableScheduler_queue");
    const PauseableScheduler_taskIDCounter = Symbol("PauseableScheduler_taskIDCounter");
    const PauseableScheduler_initialTime = Symbol("PauseableScheduler_initialTime");
    const PauseableScheduler_resumedTime = Symbol("PauseableScheduler_resumedTime");
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
        const { [PauseableScheduler_delayed]: delayed, [PauseableScheduler_queue]: queue, } = instance;
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
            instance[PauseableScheduler_dueTime] <= task[SchedulerTaskLike_dueTime];
        if (isNone(task) ||
            continuationActive ||
            instance[PauseableLike_isPaused][StoreLike_value]) {
            return;
        }
        const dueTime = task[SchedulerTaskLike_dueTime];
        const delay = clampPositiveInteger(dueTime - instance[SchedulerLike_now]);
        instance[PauseableScheduler_dueTime] = dueTime;
        const continuation = instance[PauseableScheduler_hostContinuation] ??
            ((scheduler) => {
                for (let task = peek(instance); isSome(task) && !instance[DisposableLike_isDisposed]; task = peek(instance)) {
                    const { [SchedulerTaskLike_continuation]: continuation, [SchedulerTaskLike_dueTime]: dueTime, } = task;
                    const delay = clampPositiveInteger(dueTime - instance[SchedulerLike_now]);
                    if (delay > 0) {
                        instance[PauseableScheduler_dueTime] =
                            instance[SchedulerLike_now] + delay;
                    }
                    else {
                        instance[EnumeratorLike_move]();
                        instance[ContinuationSchedulerMixinLike_runContinuation](continuation);
                    }
                    scheduler[SchedulerLike_yield](delay);
                }
            });
        instance[PauseableScheduler_hostContinuation] = continuation;
        instance[SerialDisposableLike_current] = instance[PauseableScheduler_hostScheduler][SchedulerLike_schedule](continuation, { delay });
    };
    return createInstanceFactory(mix(include(ContinuationSchedulerMixin, MutableEnumeratorMixin(), SerialDisposableMixin()), function PauseableScheduler(instance, host) {
        init(ContinuationSchedulerMixin, instance, host[SchedulerLike_maxYieldInterval]);
        init(MutableEnumeratorMixin(), instance);
        init(SerialDisposableMixin(), instance, Disposable.disposed);
        instance[PauseableScheduler_delayed] = PriorityQueue.create(delayedComparator, MAX_SAFE_INTEGER, "overflow");
        instance[PauseableScheduler_queue] = IndexedQueue.create(MAX_SAFE_INTEGER, "overflow");
        instance[PauseableScheduler_hostScheduler] = host;
        instance[PauseableScheduler_initialTime] = host[SchedulerLike_now];
        instance[PauseableScheduler_resumedTime] =
            instance[PauseableScheduler_initialTime];
        instance[PauseableLike_isPaused] = WritableStore.create(true);
        return instance;
    }, props({
        [PauseableScheduler_delayed]: none,
        [PauseableScheduler_dueTime]: 0,
        [PauseableScheduler_hostScheduler]: none,
        [PauseableScheduler_hostContinuation]: none,
        [PauseableLike_isPaused]: none,
        [PauseableScheduler_queue]: none,
        [PauseableScheduler_taskIDCounter]: 0,
        [PauseableScheduler_initialTime]: 0,
        [PauseableScheduler_resumedTime]: 0,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            const hostNow = this[PauseableScheduler_hostScheduler][SchedulerLike_now];
            return (this[PauseableScheduler_initialTime] +
                (hostNow - this[PauseableScheduler_resumedTime]));
        },
        get [ContinuationSchedulerImplementationLike_shouldYield]() {
            unsafeCast(this);
            const next = peek(this);
            return (!this[EnumeratorLike_hasCurrent] ||
                this[PauseableLike_isPaused][StoreLike_value] ||
                (isSome(next) &&
                    this[EnumeratorLike_current] !== next &&
                    next[SchedulerTaskLike_dueTime] <= this[SchedulerLike_now]) ||
                this[PauseableScheduler_hostScheduler][SchedulerLike_shouldYield]);
        },
        [PauseableLike_pause]() {
            this[PauseableScheduler_initialTime] = this[SchedulerLike_now];
            this[SerialDisposableLike_current] = Disposable.disposed;
            this[PauseableLike_isPaused][StoreLike_value] = true;
        },
        [PauseableLike_resume]() {
            this[PauseableScheduler_resumedTime] =
                this[PauseableScheduler_hostScheduler][SchedulerLike_now];
            this[PauseableLike_isPaused][StoreLike_value] = false;
            scheduleOnHost(this);
        },
        [EnumeratorLike_move]() {
            // First fast forward through disposed tasks.
            peek(this);
            const task = this[PauseableScheduler_queue][QueueLike_dequeue]();
            if (isSome(task)) {
                this[EnumeratorLike_current] = task;
            }
            return this[EnumeratorLike_hasCurrent];
        },
        [ContinuationSchedulerImplementationLike_scheduleContinuation](continuation, delay) {
            const now = this[SchedulerLike_now];
            const dueTime = max(now + delay, now);
            const task = this[SchedulerLike_inContinuation] &&
                this[EnumeratorLike_hasCurrent] &&
                this[EnumeratorLike_current][SchedulerTaskLike_continuation] ===
                    continuation &&
                delay <= 0
                ? this[EnumeratorLike_current]
                : {
                    [SchedulerTaskLike_id]: this[PauseableScheduler_taskIDCounter]++,
                    [SchedulerTaskLike_continuation]: continuation,
                    [SchedulerTaskLike_dueTime]: dueTime,
                };
            const { [PauseableScheduler_delayed]: delayed, [PauseableScheduler_queue]: queue, } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue[QueueableLike_enqueue](task);
            scheduleOnHost(this);
        },
    }));
})();
