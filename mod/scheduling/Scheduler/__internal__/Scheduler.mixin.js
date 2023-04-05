/// <reference types="./Scheduler.mixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveInteger } from "../../../__internal__/math.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ContinuationLike_continuationScheduler, ContinuationLike_priority, ContinuationLike_run, ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, Continuation_childContinuation, Continuation_effect, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, SchedulerMixin_currentContinuation, SchedulerMixin_startTime, SchedulerMixin_yieldRequested, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.internal.js";
import { error, isNone, isSome, newInstance, none, pipe, unsafeCast, } from "../../../functions.js";
import { ContinuationContextLike_yield, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import { CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
export { ContinuationLike_continuationScheduler, ContinuationLike_priority, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, };
class YieldError {
    delay;
    constructor(delay) {
        this.delay = delay;
    }
}
export const PriorityScheduler_mixin = /*@__PURE__*/ (() => {
    const createContinuation = createInstanceFactory(mix(include(Disposable_mixin, IndexedQueue_fifoQueueMixin()), function Continuation(instance, scheduler, effect, priority) {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin(), instance, MAX_SAFE_INTEGER, "overflow");
        instance[ContinuationLike_continuationScheduler] = scheduler;
        instance[Continuation_effect] = effect;
        instance[ContinuationLike_priority] = priority;
        pipe(instance, Disposable_onDisposed(_ => {
            let head = none;
            while (((head = instance[QueueLike_dequeue]()), isSome(head))) {
                if (!head[DisposableLike_isDisposed]) {
                    scheduler[ContinuationSchedulerLike_schedule](head, 0);
                }
            }
        }));
        return instance;
    }, props({
        [ContinuationLike_continuationScheduler]: none,
        [ContinuationLike_priority]: 0,
        [Continuation_childContinuation]: none,
        [Continuation_effect]: none,
    }), {
        get [ContinuationSchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[ContinuationLike_continuationScheduler][ContinuationSchedulerLike_shouldYield];
        },
        [ContinuationContextLike_yield](delay = 0) {
            const shouldYield = delay > 0 ||
                this[CollectionLike_count] > 0 ||
                this[ContinuationSchedulerLike_shouldYield];
            if (shouldYield) {
                throw newInstance(YieldError, delay);
            }
        },
        [ContinuationLike_run]() {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            const scheduler = this[ContinuationLike_continuationScheduler];
            // Run any inner continuations first.
            let head = none;
            while (((head = this[QueueLike_dequeue]()), isSome(head))) {
                this[Continuation_childContinuation] = head;
                head[ContinuationLike_run]();
                this[Continuation_childContinuation] = none;
                const shouldYield = scheduler[ContinuationSchedulerLike_shouldYield];
                if (this[DisposableLike_isDisposed]) {
                    return;
                }
                else if (shouldYield) {
                    scheduler[ContinuationSchedulerLike_schedule](this, 0);
                    return;
                }
            }
            let err = none;
            let yieldError = none;
            try {
                this[Continuation_effect](this);
            }
            catch (e) {
                if (e instanceof YieldError) {
                    yieldError = e;
                }
                else {
                    err = error(e);
                }
            }
            if (isSome(yieldError) && !this[DisposableLike_isDisposed]) {
                scheduler[ContinuationSchedulerLike_schedule](this, yieldError.delay);
                if (yieldError.delay > 0) {
                    let head = none;
                    // If the current continuation is being rescheduled with delay,
                    // reschedule all its children on the parent.
                    while (((head = this[QueueLike_dequeue]()), isSome(head))) {
                        if (!head[DisposableLike_isDisposed]) {
                            scheduler[ContinuationSchedulerLike_schedule](head, 0);
                        }
                    }
                }
            }
            else {
                this[DisposableLike_dispose](err);
            }
        },
        [ContinuationSchedulerLike_schedule](continuation, delay) {
            const childContinuation = this[Continuation_childContinuation];
            continuation[ContinuationLike_continuationScheduler] = this;
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            if (delay > 0 || this[DisposableLike_isDisposed]) {
                this[ContinuationLike_continuationScheduler][ContinuationSchedulerLike_schedule](continuation, delay);
            }
            else if (isSome(childContinuation) &&
                childContinuation !== continuation &&
                !childContinuation[DisposableLike_isDisposed]) {
                childContinuation[ContinuationSchedulerLike_schedule](continuation, 0);
            }
            else {
                this[QueueableLike_enqueue](continuation);
            }
        },
    }));
    return mix(function SchedulerMixin(instance, maxYieldInterval) {
        instance[SchedulerLike_maxYieldInterval] =
            clampPositiveInteger(maxYieldInterval);
        return instance;
    }, props({
        [SchedulerMixin_currentContinuation]: none,
        [SchedulerMixin_yieldRequested]: false,
        [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
        [SchedulerMixin_startTime]: 0,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            const currentContinuation = this[SchedulerMixin_currentContinuation];
            return isSome(currentContinuation);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const inContinuation = this[SchedulerLike_inContinuation];
            const isDisposed = this[DisposableLike_isDisposed];
            const yieldRequested = this[SchedulerMixin_yieldRequested];
            const exceededMaxYieldInterval = this[SchedulerLike_now] >
                this[SchedulerMixin_startTime] + this[SchedulerLike_maxYieldInterval];
            return (inContinuation &&
                (isDisposed ||
                    yieldRequested ||
                    exceededMaxYieldInterval ||
                    this[PrioritySchedulerImplementationLike_shouldYield]));
        },
        get [ContinuationSchedulerLike_shouldYield]() {
            unsafeCast(this);
            return this[SchedulerLike_shouldYield];
        },
        [SchedulerLike_requestYield]() {
            this[SchedulerMixin_yieldRequested] = true;
        },
        [SchedulerLike_schedule](effect, options) {
            const delay = clampPositiveInteger(options?.delay ?? 0);
            const { priority = 0 } = options ?? {};
            const continuation = createContinuation(this, effect, priority);
            const currentContinuation = this[SchedulerMixin_currentContinuation];
            if (delay > 0 ||
                isNone(currentContinuation) ||
                currentContinuation[ContinuationLike_priority] !== priority) {
                this[ContinuationSchedulerLike_schedule](continuation, delay);
            }
            else {
                currentContinuation[ContinuationSchedulerLike_schedule](continuation, 0);
            }
            return continuation;
        },
        [PrioritySchedulerImplementationLike_runContinuation](continuation) {
            this[SchedulerMixin_startTime] = this[SchedulerLike_now];
            this[SchedulerMixin_currentContinuation] = continuation;
            this[SchedulerMixin_yieldRequested] = false;
            continuation[ContinuationLike_run]();
            this[SchedulerMixin_yieldRequested] = false;
            this[SchedulerMixin_currentContinuation] = none;
        },
    });
})();
