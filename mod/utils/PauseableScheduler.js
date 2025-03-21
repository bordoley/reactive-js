/// <reference types="./PauseableScheduler.d.ts" />

import { MAX_VALUE } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, unsafeCast, } from "../__internal__/mixins.js";
import * as Iterable from "../computations/Iterable.js";
import * as WritableStore from "../computations/WritableStore.js";
import { StoreLike_value } from "../computations.js";
import { bind, isNone, isSome, none, pipe } from "../functions.js";
import { clampPositiveInteger } from "../math.js";
import { ContinuationContextLike_yield, DisposableContainerLike_add, DisposableLike_isDisposed, EnumeratorLike_current, EnumeratorLike_moveNext, PauseableLike_isPaused, PauseableLike_pause, PauseableLike_resume, QueueLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, SerialDisposableLike_current, } from "../utils.js";
import * as Disposable from "./Disposable.js";
import QueueMixin from "./__mixins__/QueueMixin.js";
import SchedulerMixin, { SchedulerContinuation, SchedulerContinuationLike_dueTime, SchedulerContinuationLike_run, SchedulerMixinHostLike_schedule, SchedulerMixinHostLike_shouldYield, } from "./__mixins__/SchedulerMixin.js";
import SerialDisposableMixin from "./__mixins__/SerialDisposableMixin.js";
export const create = /*@PURE__*/ (() => {
    const PauseableScheduler_hostScheduler = Symbol("PauseableScheduler_hostScheduler");
    const PauseableScheduler_hostSchedulerContinuationDueTime = Symbol("PauseableScheduler_hostSchedulerContinuationDueTime");
    const PauseableScheduler_pausedTime = Symbol("PauseableScheduler_pausedTime");
    const PauseableScheduler_timeDrift = Symbol("PauseableScheduler_timeDrift");
    const PauseableScheduler_activeContinuation = Symbol("PauseableScheduler_activeContinuation");
    const peek = (instance) => {
        let continuation = none;
        while (true) {
            continuation = pipe(instance, Iterable.first());
            if (isNone(continuation) || !continuation[DisposableLike_isDisposed]) {
                break;
            }
            instance[EnumeratorLike_moveNext]();
        }
        return continuation;
    };
    const scheduleOnHost = (instance) => {
        const hostScheduler = instance[PauseableScheduler_hostScheduler];
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
        instance[SerialDisposableLike_current] = hostScheduler[SchedulerLike_schedule](bind(hostSchedulerContinuation, instance), { delay });
    };
    function hostSchedulerContinuation(ctx) {
        while (!this[DisposableLike_isDisposed]) {
            const nextContinuationToRun = peek(this);
            if (isNone(nextContinuationToRun)) {
                break;
            }
            const dueTime = nextContinuationToRun[SchedulerContinuationLike_dueTime];
            const now = this[SchedulerLike_now];
            const delay = dueTime - now;
            if (delay > 0) {
                this[PauseableScheduler_hostSchedulerContinuationDueTime] = dueTime;
            }
            else {
                this[EnumeratorLike_moveNext]();
                const continuation = this[EnumeratorLike_current];
                this[PauseableScheduler_activeContinuation] = continuation;
                continuation?.[SchedulerContinuationLike_run]();
                this[PauseableScheduler_activeContinuation] = none;
            }
            ctx[ContinuationContextLike_yield](clampPositiveInteger(delay));
        }
    }
    return mixInstanceFactory(include(SchedulerMixin, SerialDisposableMixin(), QueueMixin()), function PauseableScheduler(host) {
        init(SchedulerMixin, this);
        init(SerialDisposableMixin(), this, Disposable.disposed);
        init(QueueMixin(), this, {
            comparator: SchedulerContinuation.compare,
        });
        this[PauseableScheduler_hostScheduler] = host;
        this[PauseableScheduler_pausedTime] = host[SchedulerLike_now];
        this[PauseableScheduler_timeDrift] = 0;
        this[PauseableLike_isPaused] = WritableStore.create(true);
        host[DisposableContainerLike_add](this);
        return this;
    }, props({
        [PauseableLike_isPaused]: none,
        [PauseableScheduler_hostScheduler]: none,
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
            this[QueueLike_enqueue](continuation);
            scheduleOnHost(this);
        },
    });
})();
