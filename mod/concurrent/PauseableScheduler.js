/// <reference types="./PauseableScheduler.d.ts" />

import { MAX_VALUE } from "../__internal__/constants.js";
import { clampPositiveInteger } from "../__internal__/math.js";
import { include, init, mixInstanceFactory, props, unsafeCast, } from "../__internal__/mixins.js";
import { ContinuationContextLike_yield, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../concurrent.js";
import * as WritableStore from "../events/WritableStore.js";
import { StoreLike_value } from "../events.js";
import { isNone, isSome, none } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import QueueMixin from "../utils/__mixins__/QueueMixin.js";
import SerialDisposableMixin from "../utils/__mixins__/SerialDisposableMixin.js";
import { DisposableContainerLike_add, DisposableLike_isDisposed, QueueLike_dequeue, QueueLike_head, QueueableLike_enqueue, SerialDisposableLike_current, } from "../utils.js";
import SchedulerMixin, { SchedulerContinuation, SchedulerContinuationLike_dueTime, SchedulerContinuationLike_run, SchedulerMixinHostLike_schedule, SchedulerMixinHostLike_shouldYield, } from "./__mixins__/SchedulerMixin.js";
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
        const hostScheduler = instance[PauseableScheduler_hostScheduler];
        const hostSchedulerContinuation = instance[PauseableScheduler_hostSchedulerContinuation];
        const hostSchedulerContinuationIsScheduled = !instance[SerialDisposableLike_current][DisposableLike_isDisposed];
        const hostSchedulerContinuationDueTime = instance[PauseableScheduler_hostSchedulerContinuationDueTime];
        const nextContinuation = peek(instance);
        const nextContinuationDueTime = nextContinuation?.[SchedulerContinuationLike_dueTime] ?? MAX_VALUE;
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
        const now = instance[SchedulerLike_now];
        const dueTime = nextContinuation[SchedulerContinuationLike_dueTime];
        const delay = clampPositiveInteger(dueTime - now);
        instance[PauseableScheduler_hostSchedulerContinuationDueTime] = dueTime;
        instance[SerialDisposableLike_current] = hostScheduler[SchedulerLike_schedule](hostSchedulerContinuation, { delay });
    };
    return mixInstanceFactory(include(SchedulerMixin, SerialDisposableMixin(), QueueMixin()), function PauseableScheduler(instance, host) {
        init(SchedulerMixin, instance);
        init(SerialDisposableMixin(), instance, Disposable.disposed);
        init(QueueMixin(), instance, {
            comparator: SchedulerContinuation.compare,
        });
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
                const dueTime = nextContinuationToRun[SchedulerContinuationLike_dueTime];
                const now = instance[SchedulerLike_now];
                const delay = dueTime - now;
                if (delay > 0) {
                    instance[PauseableScheduler_hostSchedulerContinuationDueTime] =
                        dueTime;
                }
                else {
                    const continuation = instance[QueueLike_dequeue]();
                    instance[PauseableScheduler_activeContinuation] = continuation;
                    continuation?.[SchedulerContinuationLike_run]();
                    instance[PauseableScheduler_activeContinuation] = none;
                }
                ctx[ContinuationContextLike_yield](clampPositiveInteger(delay));
            }
        };
        host[DisposableContainerLike_add](instance);
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
        get [SchedulerLike_maxYieldInterval]() {
            unsafeCast(this);
            return this[PauseableScheduler_hostScheduler][SchedulerLike_maxYieldInterval];
        },
        get [SchedulerLike_now]() {
            unsafeCast(this);
            const hostNow = this[PauseableScheduler_hostScheduler][SchedulerLike_now];
            const isPaused = this[PauseableLike_isPaused][StoreLike_value];
            const pausedTime = this[PauseableScheduler_pausedTime] -
                this[PauseableScheduler_timeDrift];
            const activeTime = hostNow - this[PauseableScheduler_timeDrift];
            return isPaused ? pausedTime : activeTime;
        },
        get [SchedulerMixinHostLike_shouldYield]() {
            unsafeCast(this);
            const now = this[SchedulerLike_now];
            const nextContinuation = peek(this);
            const yieldToNextContinuation = isSome(nextContinuation) &&
                this[PauseableScheduler_activeContinuation] !== nextContinuation &&
                nextContinuation[SchedulerContinuationLike_dueTime] <= now;
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
        [SchedulerMixinHostLike_schedule](continuation) {
            this[QueueableLike_enqueue](continuation);
            scheduleOnHost(this);
        },
    });
})();
