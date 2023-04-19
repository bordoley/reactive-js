/// <reference types="./Scheduler.mixin.d.ts" />

import { MAX_SAFE_INTEGER, __DEV__ } from "../../../__internal__/constants.js";
import { clampPositiveInteger } from "../../../__internal__/math.js";
import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ContinuationLike_activeChild, ContinuationLike_parent, ContinuationLike_priority, ContinuationLike_run, ContinuationLike_scheduler, ContinuationSchedulerLike_schedule, } from "../../../__internal__/scheduling.js";
import { __PrioritySchedulerImplementationLike_runContinuation as PrioritySchedulerImplementationLike_runContinuation, __PrioritySchedulerImplementationLike_scheduleContinuation as PrioritySchedulerImplementationLike_scheduleContinuation, __PrioritySchedulerImplementationLike_shouldYield as PrioritySchedulerImplementationLike_shouldYield, __SchedulerMixin_currentContinuation, __SchedulerMixin_startTime, __SchedulerMixin_yieldRequested, } from "../../../__internal__/symbols.js";
import { isNone, isSome, newInstance, none, pipe, raiseWithDebugMessage, unsafeCast, } from "../../../functions.js";
import { SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, } from "../../../scheduling.js";
import { CollectionLike_count, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Continuation_create from "../../Continuation/__internal__/Continuation.create.js";
import YieldError from "../../Continuation/__internal__/Continuation.yieldError.js";
export { PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_scheduleContinuation, PrioritySchedulerImplementationLike_shouldYield, };
export const PriorityScheduler_mixin = 
/*@__PURE__*/ (() => {
    const getActiveContinuation = (continuation) => {
        let parent = continuation;
        let activeChild = parent?.[ContinuationLike_activeChild];
        while (isSome(activeChild) && activeChild !== parent) {
            parent = activeChild;
            activeChild = parent[ContinuationLike_activeChild];
        }
        return parent;
    };
    const shouldYieldContinuation = (instance) => {
        const continuation = instance[__SchedulerMixin_currentContinuation];
        return ((getActiveContinuation(continuation)?.[CollectionLike_count] ?? 0) > 0);
    };
    return mix(include(Disposable_mixin), function SchedulerMixin(instance, maxYieldInterval) {
        init(Disposable_mixin, instance);
        instance[SchedulerLike_maxYieldInterval] =
            clampPositiveInteger(maxYieldInterval);
        return instance;
    }, props({
        [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
        [__SchedulerMixin_currentContinuation]: none,
        [__SchedulerMixin_yieldRequested]: false,
        [__SchedulerMixin_startTime]: 0,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            const currentContinuation = this[__SchedulerMixin_currentContinuation];
            return isSome(currentContinuation);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const inContinuation = this[SchedulerLike_inContinuation];
            const isDisposed = this[DisposableLike_isDisposed];
            const yieldRequested = this[__SchedulerMixin_yieldRequested];
            const exceededMaxYieldInterval = this[SchedulerLike_now] >
                this[__SchedulerMixin_startTime] +
                    this[SchedulerLike_maxYieldInterval];
            const currentContinuationHasNestedRequests = shouldYieldContinuation(this);
            return (inContinuation &&
                (isDisposed ||
                    yieldRequested ||
                    exceededMaxYieldInterval ||
                    currentContinuationHasNestedRequests ||
                    this[PrioritySchedulerImplementationLike_shouldYield]));
        },
        [SchedulerLike_requestYield]() {
            this[__SchedulerMixin_yieldRequested] = true;
        },
        [ContinuationSchedulerLike_schedule](continuation, options) {
            if (__DEV__ && continuation[ContinuationLike_scheduler] !== this) {
                raiseWithDebugMessage("Attempted to schedule a continuation created on a different scheduler");
            }
            const delay = clampPositiveInteger(options?.delay ?? 0);
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            const activeContinuation = getActiveContinuation(this[__SchedulerMixin_currentContinuation]);
            if (delay > 0 ||
                isNone(activeContinuation) ||
                activeContinuation[DisposableLike_isDisposed] ||
                activeContinuation[ContinuationLike_priority] !==
                    continuation[ContinuationLike_priority] ||
                activeContinuation === continuation ||
                continuation[ContinuationLike_parent] === activeContinuation) {
                continuation[ContinuationLike_parent] = none;
                this[PrioritySchedulerImplementationLike_scheduleContinuation](continuation, delay);
            }
            else {
                activeContinuation[QueueableLike_enqueue](continuation);
            }
        },
        [SchedulerLike_schedule](effect, options) {
            const { priority = 0 } = options ?? {};
            const continuation = Continuation_create(this, effect, priority);
            this[ContinuationSchedulerLike_schedule](continuation, options);
            return continuation;
        },
        [SchedulerLike_yield](delay = 0) {
            const shouldYield = delay > 0 || this[SchedulerLike_shouldYield];
            if (shouldYield) {
                throw newInstance(YieldError, delay);
            }
        },
        [PrioritySchedulerImplementationLike_runContinuation](continuation) {
            this[__SchedulerMixin_startTime] = this[SchedulerLike_now];
            this[__SchedulerMixin_currentContinuation] = continuation;
            this[__SchedulerMixin_yieldRequested] = false;
            continuation[ContinuationLike_run]();
            this[__SchedulerMixin_yieldRequested] = false;
            this[__SchedulerMixin_currentContinuation] = none;
        },
    });
})();
