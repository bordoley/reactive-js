/// <reference types="./Scheduler.toPausableScheduler.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger, max } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { __QueueScheduler_delayed, __QueueScheduler_dueTime, __QueueScheduler_hostContinuation, __QueueScheduler_hostScheduler, __QueueScheduler_queue, __QueueScheduler_taskIDCounter, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, QueueLike_head, SchedulerTaskLike_continuation, SchedulerTaskLike_dueTime, SchedulerTaskLike_id, SerialDisposableLike_current, } from "../../../__internal__/util.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import MutableEnumerator_mixin from "../../../containers/Enumerator/__internal__/MutableEnumerator.mixin.js";
import { isNone, isSome, none, unsafeCast, } from "../../../functions.js";
import { DisposableLike_isDisposed, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueableLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, } from "../../../util.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import SerialDisposable_mixin from "../../../util/Disposable/__internal__/SerialDisposable.mixin.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import Queue_createPriorityQueue from "../../../util/Queue/__internal__/Queue.createPriorityQueue.js";
import { SchedulerImplementationLike_runContinuation, SchedulerImplementationLike_scheduleContinuation, SchedulerImplementationLike_shouldYield, SchedulerImplementation_mixin, } from "./SchedulerImplementation.mixin.js";
const Scheduler_toPauseableScheduler = /*@__PURE__*/ (() => {
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
        const { [__QueueScheduler_delayed]: delayed, [__QueueScheduler_queue]: queue, } = instance;
        const now = instance[__QueueScheduler_hostScheduler][SchedulerLike_now];
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
            instance[__QueueScheduler_dueTime] <= task[SchedulerTaskLike_dueTime];
        if (isNone(task) ||
            continuationActive ||
            instance[PauseableLike_isPaused]) {
            return;
        }
        const dueTime = task[SchedulerTaskLike_dueTime];
        const delay = clampPositiveInteger(dueTime - instance[__QueueScheduler_hostScheduler][SchedulerLike_now]);
        instance[__QueueScheduler_dueTime] = dueTime;
        const continuation = instance[__QueueScheduler_hostContinuation] ??
            ((scheduler) => {
                for (let task = peek(instance); isSome(task) && !instance[DisposableLike_isDisposed]; task = peek(instance)) {
                    const { [SchedulerTaskLike_continuation]: continuation, [SchedulerTaskLike_dueTime]: dueTime, } = task;
                    const delay = clampPositiveInteger(dueTime -
                        instance[__QueueScheduler_hostScheduler][SchedulerLike_now]);
                    if (delay > 0) {
                        instance[__QueueScheduler_dueTime] =
                            instance[__QueueScheduler_hostScheduler][SchedulerLike_now] +
                                delay;
                    }
                    else {
                        instance[EnumeratorLike_move]();
                        instance[SchedulerImplementationLike_runContinuation](continuation);
                    }
                    scheduler[SchedulerLike_yield](delay);
                }
            });
        instance[__QueueScheduler_hostContinuation] = continuation;
        instance[SerialDisposableLike_current] = instance[__QueueScheduler_hostScheduler][SchedulerLike_schedule](continuation, { delay });
    };
    return createInstanceFactory(mix(include(SchedulerImplementation_mixin, MutableEnumerator_mixin(), SerialDisposable_mixin()), function QueueScheduler(instance, host) {
        init(SchedulerImplementation_mixin, instance, host[SchedulerLike_maxYieldInterval]);
        init(MutableEnumerator_mixin(), instance);
        init(SerialDisposable_mixin(), instance, Disposable_disposed);
        instance[__QueueScheduler_delayed] = Queue_createPriorityQueue(delayedComparator, MAX_SAFE_INTEGER, "overflow");
        instance[__QueueScheduler_queue] = Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow");
        instance[__QueueScheduler_hostScheduler] = host;
        return instance;
    }, props({
        [__QueueScheduler_delayed]: none,
        [__QueueScheduler_dueTime]: 0,
        [__QueueScheduler_hostScheduler]: none,
        [__QueueScheduler_hostContinuation]: none,
        [PauseableLike_isPaused]: true,
        [__QueueScheduler_queue]: none,
        [__QueueScheduler_taskIDCounter]: 0,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[__QueueScheduler_hostScheduler][SchedulerLike_now];
        },
        get [SchedulerImplementationLike_shouldYield]() {
            unsafeCast(this);
            const next = peek(this);
            return (!this[EnumeratorLike_hasCurrent] ||
                this[PauseableLike_isPaused] ||
                (isSome(next) &&
                    this[EnumeratorLike_current] !== next &&
                    next[SchedulerTaskLike_dueTime] <=
                        this[__QueueScheduler_hostScheduler][SchedulerLike_now]) ||
                this[__QueueScheduler_hostScheduler][SchedulerLike_shouldYield]);
        },
        [PauseableLike_pause]() {
            this[PauseableLike_isPaused] = true;
            this[SerialDisposableLike_current] = Disposable_disposed;
        },
        [PauseableLike_resume]() {
            this[PauseableLike_isPaused] = false;
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
                    [SchedulerTaskLike_id]: this[__QueueScheduler_taskIDCounter]++,
                    [SchedulerTaskLike_continuation]: continuation,
                    [SchedulerTaskLike_dueTime]: dueTime,
                };
            const { [__QueueScheduler_delayed]: delayed, [__QueueScheduler_queue]: queue, } = this;
            const targetQueue = dueTime > now ? delayed : queue;
            targetQueue[QueueableLike_enqueue](task);
            scheduleOnHost(this);
        },
    }));
})();
export default Scheduler_toPauseableScheduler;
