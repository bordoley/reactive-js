/// <reference types="./SchedulerImplementation.mixin.d.ts" />

import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import { MAX_SAFE_INTEGER, __DEV__ } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { __SchedulerImplementationLike_runContinuation as SchedulerImplementationLike_runContinuation, __SchedulerImplementationLike_scheduleContinuation as SchedulerImplementationLike_scheduleContinuation, __SchedulerImplementationLike_shouldYield as SchedulerImplementationLike_shouldYield, __SchedulerImplementationMixin_currentContinuation, __SchedulerImplementationMixin_startTime, __SchedulerImplementationMixin_yieldRequested, } from "../../__internal__/symbols.js";
import { ContinuationLike_activeChild, ContinuationLike_parent, ContinuationLike_run, ContinuationLike_scheduler, ContinuationSchedulerLike_schedule, } from "../../__internal__/types.js";
import { isNone, isSome, newInstance, none, pipe, raiseWithDebugMessage, } from "../../functions.js";
import { CollectionLike_count, DisposableLike_isDisposed, QueueableLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, } from "../../types.js";
import Continuation_create from "./Continuation.create.js";
import YieldError from "./Continuation.yieldError.js";
export { SchedulerImplementationLike_runContinuation, SchedulerImplementationLike_scheduleContinuation, SchedulerImplementationLike_shouldYield, };
export const SchedulerImplementation_mixin = /*@__PURE__*/ (() => {
    const getActiveContinuation = (instance) => {
        let parent = instance[__SchedulerImplementationMixin_currentContinuation];
        let activeChild = parent?.[ContinuationLike_activeChild];
        while (isSome(activeChild) && activeChild !== parent) {
            parent = activeChild;
            activeChild = parent[ContinuationLike_activeChild];
        }
        return parent;
    };
    return mix(include(Disposable_mixin), function SchedulerImplementationMixin(instance, maxYieldInterval) {
        init(Disposable_mixin, instance);
        instance[SchedulerLike_maxYieldInterval] =
            clampPositiveInteger(maxYieldInterval);
        return instance;
    }, props({
        [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
        [__SchedulerImplementationMixin_currentContinuation]: none,
        [__SchedulerImplementationMixin_yieldRequested]: false,
        [__SchedulerImplementationMixin_startTime]: 0,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            const currentContinuation = this[__SchedulerImplementationMixin_currentContinuation];
            return isSome(currentContinuation);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const inContinuation = this[SchedulerLike_inContinuation];
            const isDisposed = this[DisposableLike_isDisposed];
            const yieldRequested = this[__SchedulerImplementationMixin_yieldRequested];
            return (inContinuation &&
                (isDisposed ||
                    yieldRequested ||
                    //exceededMaxYieldInterval
                    this[SchedulerLike_now] >
                        this[__SchedulerImplementationMixin_startTime] +
                            this[SchedulerLike_maxYieldInterval] ||
                    (getActiveContinuation(this)?.[CollectionLike_count] ?? 0) > 0 ||
                    this[SchedulerImplementationLike_shouldYield]));
        },
        [SchedulerLike_requestYield]() {
            this[__SchedulerImplementationMixin_yieldRequested] = true;
        },
        [ContinuationSchedulerLike_schedule](continuation, options) {
            if (__DEV__ && continuation[ContinuationLike_scheduler] !== this) {
                raiseWithDebugMessage("Attempted to schedule a continuation created on a different scheduler");
            }
            const delay = clampPositiveInteger(options?.delay ?? 0);
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            const activeContinuation = getActiveContinuation(this);
            if (delay > 0 ||
                isNone(activeContinuation) ||
                activeContinuation[DisposableLike_isDisposed] ||
                // Occurs when the continuation is rescheduling itself
                // and there is no non-disposed parent to enqueue itself onto.
                activeContinuation === continuation ||
                // Occurs when an active continuation is rescheduling its
                // children because it will be disposed.
                continuation[ContinuationLike_parent] === activeContinuation) {
                continuation[ContinuationLike_parent] = none;
                this[SchedulerImplementationLike_scheduleContinuation](continuation, delay);
            }
            else {
                activeContinuation[QueueableLike_enqueue](continuation);
            }
        },
        [SchedulerLike_schedule](effect, options) {
            const continuation = pipe(Continuation_create(this, effect), Disposable_addTo(this, { ignoreChildErrors: true }));
            this[ContinuationSchedulerLike_schedule](continuation, options);
            return continuation;
        },
        [SchedulerLike_yield](delay = 0) {
            const shouldYield = delay > 0 || this[SchedulerLike_shouldYield];
            if (shouldYield) {
                throw newInstance(YieldError, delay);
            }
        },
        [SchedulerImplementationLike_runContinuation](continuation) {
            this[__SchedulerImplementationMixin_startTime] =
                this[SchedulerLike_now];
            this[__SchedulerImplementationMixin_currentContinuation] = continuation;
            this[__SchedulerImplementationMixin_yieldRequested] = false;
            continuation[ContinuationLike_run]();
            this[__SchedulerImplementationMixin_yieldRequested] = false;
            this[__SchedulerImplementationMixin_currentContinuation] = none;
        },
    });
})();
