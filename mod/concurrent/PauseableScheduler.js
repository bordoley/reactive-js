/// <reference types="./PauseableScheduler.d.ts" />

import { MAX_VALUE } from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, unsafeCast, } from "../__internal__/mixins.js";
import { ContinuationContextLike_yield, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../concurrent.js";
import { SchedulerTaskLike_continuation, SchedulerTaskLike_dueTime, SchedulerTaskLike_id, SchedulerTask_comparator, } from "../concurrent/__private__.js";
import { StoreLike_value } from "../events.js";
import * as WritableStore from "../events/WritableStore.js";
import { isNone, isSome, none } from "../functions.js";
import { DisposableLike_isDisposed, QueueLike_dequeue, QueueLike_head, QueueableLike_enqueue, SerialDisposableLike_current, } from "../utils.js";
import * as Disposable from "../utils/Disposable.js";
import * as IndexedQueue from "../utils/IndexedQueue.js";
import * as PriorityQueue from "../utils/PriorityQueue.js";
import SerialDisposableMixin from "../utils/__mixins__/SerialDisposableMixin.js";
import ContinuationSchedulerMixin, { ContinuationLike_run, ContinuationSchedulerLike_scheduleContinuation, ContinuationSchedulerLike_shouldYield, } from "./__mixins__/ContinuationSchedulerMixin.js";
export const create = /*@PURE__*/ (() => {
    const PauseableScheduler_hostScheduler = Symbol("PauseableScheduler_hostScheduler");
    const PauseableScheduler_hostSchedulerContinuation = Symbol("PauseableScheduler_hostSchedulerContinuation");
    const PauseableScheduler_hostSchedulerContinuationDueTime = Symbol("PauseableScheduler_hostSchedulerContinuationDueTime");
    const PauseableScheduler_delayedQueue = Symbol("PauseableScheduler_delayedQueue");
    const PauseableScheduler_immediateQueue = Symbol("PauseableScheduler_immediateQueue");
    const PauseableScheduler_taskIDCounter = Symbol("PauseableScheduler_taskIDCounter");
    const PauseableScheduler_pausedTime = Symbol("PauseableScheduler_pausedTime");
    const PauseableScheduler_timeDrift = Symbol("PauseableScheduler_timeDrift");
    const PauseableScheduler_activeContinuation = Symbol("PauseableScheduler_activeContinuation");
    const peek = (instance, now) => {
        const delayedQueue = instance[PauseableScheduler_delayedQueue];
        const immediateQueue = instance[PauseableScheduler_immediateQueue];
        let task = none;
        while (true) {
            task = delayedQueue[QueueLike_head];
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = task[SchedulerTaskLike_continuation][DisposableLike_isDisposed];
            const taskDueTime = task[SchedulerTaskLike_dueTime];
            if (taskDueTime > now && !taskIsDispose) {
                break;
            }
            delayedQueue[QueueLike_dequeue]();
            if (!taskIsDispose) {
                immediateQueue[QueueableLike_enqueue](task);
            }
        }
        while (true) {
            task = immediateQueue[QueueLike_head];
            if (isNone(task)) {
                break;
            }
            const taskIsDispose = task[SchedulerTaskLike_continuation][DisposableLike_isDisposed];
            if (!taskIsDispose) {
                break;
            }
            immediateQueue[QueueLike_dequeue]();
        }
        return task ?? delayedQueue[QueueLike_head];
    };
    const scheduleOnHost = (instance) => {
        const now = instance[SchedulerLike_now];
        const hostScheduler = instance[PauseableScheduler_hostScheduler];
        const hostSchedulerContinuation = instance[PauseableScheduler_hostSchedulerContinuation];
        const hostSchedulerContinuationIsScheduled = !instance[SerialDisposableLike_current][DisposableLike_isDisposed];
        const hostSchedulerContinuationDueTime = instance[PauseableScheduler_hostSchedulerContinuationDueTime];
        const nextTask = peek(instance, now);
        const nextTaskDueTime = nextTask?.[SchedulerTaskLike_dueTime] ?? MAX_VALUE;
        const hasActiveContinuation = isSome(instance[PauseableScheduler_activeContinuation]);
        const isPaused = instance[PauseableLike_isPaused][StoreLike_value];
        const hostContinuationAlreadyScheduled = hostSchedulerContinuationIsScheduled &&
            hostSchedulerContinuationDueTime <= nextTaskDueTime;
        if (isNone(nextTask) ||
            hasActiveContinuation ||
            hostContinuationAlreadyScheduled ||
            isPaused) {
            return;
        }
        const dueTime = nextTask[SchedulerTaskLike_dueTime];
        const delay = clampPositiveInteger(dueTime - now);
        instance[PauseableScheduler_hostSchedulerContinuationDueTime] = dueTime;
        instance[SerialDisposableLike_current] = hostScheduler[SchedulerLike_schedule](hostSchedulerContinuation, { delay });
    };
    return createInstanceFactory(mix(include(ContinuationSchedulerMixin, SerialDisposableMixin()), function PauseableScheduler(instance, host) {
        init(ContinuationSchedulerMixin, instance, host[SchedulerLike_maxYieldInterval]);
        init(SerialDisposableMixin(), instance, Disposable.disposed);
        instance[PauseableScheduler_delayedQueue] = PriorityQueue.create(SchedulerTask_comparator);
        instance[PauseableScheduler_immediateQueue] = IndexedQueue.create();
        instance[PauseableScheduler_hostScheduler] = host;
        instance[PauseableScheduler_pausedTime] = host[SchedulerLike_now];
        instance[PauseableScheduler_timeDrift] = 0;
        instance[PauseableLike_isPaused] = WritableStore.create(true);
        instance[PauseableScheduler_hostSchedulerContinuation] = (ctx) => {
            while (!instance[DisposableLike_isDisposed]) {
                const now = instance[SchedulerLike_now];
                const nextTaskToRun = peek(instance, now);
                if (isNone(nextTaskToRun)) {
                    break;
                }
                const dueTime = nextTaskToRun[SchedulerTaskLike_dueTime];
                const delay = dueTime - now;
                if (delay > 0) {
                    instance[PauseableScheduler_hostSchedulerContinuationDueTime] =
                        now + delay;
                }
                else {
                    const taskToRun = instance[PauseableScheduler_immediateQueue][QueueLike_dequeue]();
                    const continuation = taskToRun?.[SchedulerTaskLike_continuation];
                    instance[PauseableScheduler_activeContinuation] = taskToRun;
                    continuation?.[ContinuationLike_run]();
                    instance[PauseableScheduler_activeContinuation] = none;
                }
                ctx[ContinuationContextLike_yield](clampPositiveInteger(delay));
            }
        };
        return instance;
    }, props({
        [PauseableLike_isPaused]: none,
        [PauseableScheduler_hostScheduler]: none,
        [PauseableScheduler_hostSchedulerContinuation]: none,
        [PauseableScheduler_hostSchedulerContinuationDueTime]: 0,
        [PauseableScheduler_delayedQueue]: none,
        [PauseableScheduler_immediateQueue]: none,
        [PauseableScheduler_taskIDCounter]: 0,
        [PauseableScheduler_pausedTime]: 0,
        [PauseableScheduler_timeDrift]: 0,
        [PauseableScheduler_activeContinuation]: none,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            const hostNow = this[PauseableScheduler_hostScheduler][SchedulerLike_now];
            const isPaused = this[PauseableLike_isPaused][StoreLike_value];
            const pausedTime = this[PauseableScheduler_pausedTime] -
                this[PauseableScheduler_timeDrift];
            const activeTime = hostNow - this[PauseableScheduler_timeDrift];
            return isPaused ? pausedTime : activeTime;
        },
        get [ContinuationSchedulerLike_shouldYield]() {
            unsafeCast(this);
            const now = this[SchedulerLike_now];
            const nextTask = peek(this, now);
            return (!isSome(this[PauseableScheduler_activeContinuation]) ||
                this[PauseableLike_isPaused][StoreLike_value] ||
                (isSome(nextTask) &&
                    this[PauseableScheduler_activeContinuation] !== nextTask &&
                    nextTask[SchedulerTaskLike_dueTime] <= now) ||
                this[PauseableScheduler_hostScheduler][SchedulerLike_shouldYield]);
        },
        [PauseableLike_pause]() {
            const hostNow = this[PauseableScheduler_hostScheduler][SchedulerLike_now];
            this[PauseableScheduler_pausedTime] = hostNow;
            this[SerialDisposableLike_current] = Disposable.disposed;
            this[PauseableLike_isPaused][StoreLike_value] = true;
        },
        [PauseableLike_resume]() {
            const hostNow = this[PauseableScheduler_hostScheduler][SchedulerLike_now];
            this[PauseableScheduler_timeDrift] +=
                hostNow - this[PauseableScheduler_pausedTime];
            this[PauseableLike_isPaused][StoreLike_value] = false;
            scheduleOnHost(this);
        },
        [ContinuationSchedulerLike_scheduleContinuation](continuation, delay) {
            const now = this[SchedulerLike_now];
            const dueTime = now + delay;
            const task = this[SchedulerLike_inContinuation] &&
                isSome(this[PauseableScheduler_activeContinuation]) &&
                this[PauseableScheduler_activeContinuation][SchedulerTaskLike_continuation] === continuation &&
                delay <= 0
                ? this[PauseableScheduler_activeContinuation]
                : {
                    [SchedulerTaskLike_id]: this[PauseableScheduler_taskIDCounter]++,
                    [SchedulerTaskLike_continuation]: continuation,
                    [SchedulerTaskLike_dueTime]: dueTime,
                };
            const { [PauseableScheduler_delayedQueue]: delayed, [PauseableScheduler_immediateQueue]: queue, } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue[QueueableLike_enqueue](task);
            scheduleOnHost(this);
        },
    }));
})();
