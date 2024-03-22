/// <reference types="./PauseableScheduler.d.ts" />

import { MAX_VALUE } from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
import { include, init, mixInstanceFactory, props, unsafeCast, } from "../__internal__/mixins.js";
import { ContinuationContextLike_yield, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../concurrent.js";
import * as WritableStore from "../events/WritableStore.js";
import { StoreLike_value } from "../events.js";
import { isNone, isSome, none } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import PriorityQueueMixin from "../utils/__mixins__/PriorityQueueMixin.js";
import SerialDisposableMixin from "../utils/__mixins__/SerialDisposableMixin.js";
import { DisposableContainerLike_add, DisposableLike_isDisposed, QueueLike_dequeue, QueueLike_head, QueueableLike_enqueue, SerialDisposableLike_current, } from "../utils.js";
import { ContinuationLike_dueTime, ContinuationLike_run, } from "./__internal__/Continuation.js";
import * as Continuation from "./__internal__/Continuation.js";
import { ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, } from "./__internal__/ContinuationScheduler.js";
import SchedulerMixin from "./__mixins__/SchedulerMixin.js";
export const create = /*@PURE__*/ (() => {
    const PauseableScheduler_hostScheduler = Symbol("PauseableScheduler_hostScheduler");
    const PauseableScheduler_hostSchedulerContinuation = Symbol("PauseableScheduler_hostSchedulerContinuation");
    const PauseableScheduler_hostSchedulerContinuationDueTime = Symbol("PauseableScheduler_hostSchedulerContinuationDueTime");
    const PauseableScheduler_pausedTime = Symbol("PauseableScheduler_pausedTime");
    const PauseableScheduler_timeDrift = Symbol("PauseableScheduler_timeDrift");
    const PauseableScheduler_activeContinuation = Symbol("PauseableScheduler_activeContinuation");
    const peek = (instance) => {
        let continuation = none;
        while (true) {
            continuation = instance[QueueLike_head];
            if (isNone(continuation) || !continuation[DisposableLike_isDisposed]) {
                break;
            }
            instance[QueueLike_dequeue]();
        }
        return continuation;
    };
    const scheduleOnHost = (instance) => {
        const now = instance[SchedulerLike_now];
        const hostScheduler = instance[PauseableScheduler_hostScheduler];
        const hostSchedulerContinuation = instance[PauseableScheduler_hostSchedulerContinuation];
        const hostSchedulerContinuationIsScheduled = !instance[SerialDisposableLike_current][DisposableLike_isDisposed];
        const hostSchedulerContinuationDueTime = instance[PauseableScheduler_hostSchedulerContinuationDueTime];
        const nextContinuation = peek(instance);
        const nextContinuationDueTime = nextContinuation?.[ContinuationLike_dueTime] ?? MAX_VALUE;
        const inContinuation = instance[SchedulerLike_inContinuation];
        const isPaused = instance[PauseableLike_isPaused][StoreLike_value];
        const hostContinuationAlreadyScheduled = hostSchedulerContinuationIsScheduled &&
            hostSchedulerContinuationDueTime <= nextContinuationDueTime;
        if (isNone(nextContinuation) ||
            inContinuation ||
            hostContinuationAlreadyScheduled ||
            isPaused) {
            return;
        }
        const dueTime = nextContinuation[ContinuationLike_dueTime];
        const delay = clampPositiveInteger(dueTime - now);
        instance[PauseableScheduler_hostSchedulerContinuationDueTime] = dueTime;
        instance[SerialDisposableLike_current] = hostScheduler[SchedulerLike_schedule](hostSchedulerContinuation, { delay });
        hostScheduler[DisposableContainerLike_add](instance);
    };
    return mixInstanceFactory(include(SchedulerMixin, SerialDisposableMixin(), PriorityQueueMixin()), function PauseableScheduler(instance, host) {
        init(SchedulerMixin, instance, host[SchedulerLike_maxYieldInterval]);
        init(SerialDisposableMixin(), instance, Disposable.disposed);
        init(PriorityQueueMixin(), instance, Continuation.compare, none);
        instance[PauseableScheduler_hostScheduler] = host;
        instance[PauseableScheduler_pausedTime] = host[SchedulerLike_now];
        instance[PauseableScheduler_timeDrift] = 0;
        instance[PauseableLike_isPaused] = WritableStore.create(true);
        instance[PauseableScheduler_hostSchedulerContinuation] = (ctx) => {
            while (!instance[DisposableLike_isDisposed]) {
                const nextContinuationToRun = peek(instance);
                if (isNone(nextContinuationToRun)) {
                    break;
                }
                const dueTime = nextContinuationToRun[ContinuationLike_dueTime];
                const now = instance[SchedulerLike_now];
                const delay = dueTime - now;
                if (delay > 0) {
                    instance[PauseableScheduler_hostSchedulerContinuationDueTime] =
                        dueTime;
                }
                else {
                    const continuation = instance[QueueLike_dequeue]();
                    instance[PauseableScheduler_activeContinuation] = continuation;
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
            const nextContinuation = peek(this);
            const yieldToNextContinuation = isSome(nextContinuation) &&
                this[PauseableScheduler_activeContinuation] !== nextContinuation &&
                nextContinuation[ContinuationLike_dueTime] <= now;
            return (this[PauseableLike_isPaused][StoreLike_value] ||
                yieldToNextContinuation ||
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
        [ContinuationSchedulerLike_schedule](continuation) {
            this[QueueableLike_enqueue](continuation);
            scheduleOnHost(this);
        },
    });
})();
