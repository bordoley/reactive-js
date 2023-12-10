/// <reference types="./ContinuationSchedulerMixin.d.ts" />

import { MAX_SAFE_INTEGER, __DEV__ } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { include, init, mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { CollectionLike_count } from "../../collections.js";
import { ContinuationLike_activeChild, ContinuationLike_parent, ContinuationLike_run, ContinuationLike_scheduler, ContinuationLike_yield, ContinuationSchedulerLike_schedule, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, SchedulerLike_yield, } from "../../concurrent.js";
import { isNone, isSome, none, pipe, raiseIf, } from "../../functions.js";
import { DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import Continuation_create from "../Continuation/__private__/Continuation.create.js";
export const ContinuationSchedulerInstanceLike_shouldYield = Symbol("ContinuationSchedulerInstanceLike_shouldYield");
export const ContinuationSchedulerInstanceLike_scheduleContinuation = Symbol("ContinContinuationSchedulerInstanceLike_scheduleContinuationuationSchedulerDelegateLike_shouldYield");
export const ContinuationSchedulerMixinLike_runContinuation = Symbol("ContinuationSchedulerMixinLike_runContinuation");
const ContinuationSchedulerMixin = /*@__PURE__*/ (() => {
    const ContinuationSchedulerMixin_currentContinuation = Symbol("ContinuationSchedulerMixin_currentContinuation");
    const ContinuationSchedulerMixin_yieldRequested = Symbol("ContinuationSchedulerMixin_yieldRequested");
    const ContinuationSchedulerMixin_startTime = Symbol("ContinuationSchedulerMixin_startTime");
    const getActiveContinuation = (instance) => {
        let parent = instance[ContinuationSchedulerMixin_currentContinuation];
        let activeChild = parent?.[ContinuationLike_activeChild];
        while (isSome(activeChild) && activeChild !== parent) {
            parent = activeChild;
            activeChild = parent[ContinuationLike_activeChild];
        }
        return parent;
    };
    return mix(include(DisposableMixin), function ContinuationSchedulerMixin(instance, maxYieldInterval) {
        init(DisposableMixin, instance);
        instance[SchedulerLike_maxYieldInterval] =
            clampPositiveInteger(maxYieldInterval);
        return instance;
    }, props({
        [SchedulerLike_maxYieldInterval]: MAX_SAFE_INTEGER,
        [ContinuationSchedulerMixin_currentContinuation]: none,
        [ContinuationSchedulerMixin_yieldRequested]: false,
        [ContinuationSchedulerMixin_startTime]: 0,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            const currentContinuation = this[ContinuationSchedulerMixin_currentContinuation];
            return isSome(currentContinuation);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            const inContinuation = this[SchedulerLike_inContinuation];
            const isDisposed = this[DisposableLike_isDisposed];
            const yieldRequested = this[ContinuationSchedulerMixin_yieldRequested];
            return (inContinuation &&
                (isDisposed ||
                    yieldRequested ||
                    //exceededMaxYieldInterval
                    this[SchedulerLike_now] >
                        this[ContinuationSchedulerMixin_startTime] +
                            this[SchedulerLike_maxYieldInterval] ||
                    (getActiveContinuation(this)?.[CollectionLike_count] ?? 0) > 0 ||
                    this[ContinuationSchedulerInstanceLike_shouldYield]));
        },
        [SchedulerLike_requestYield]() {
            this[ContinuationSchedulerMixin_yieldRequested] = true;
        },
        [ContinuationSchedulerLike_schedule](continuation, options) {
            if (__DEV__) {
                raiseIf(continuation[ContinuationLike_scheduler] !== this, "Attempted to schedule a continuation created on a different scheduler");
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
                this[ContinuationSchedulerInstanceLike_scheduleContinuation](continuation, delay);
            }
            else {
                activeContinuation[QueueableLike_enqueue](continuation);
            }
        },
        [SchedulerLike_schedule](effect, options) {
            const continuation = pipe(Continuation_create(this, effect), Disposable.addTo(this, { ignoreChildErrors: true }));
            this[ContinuationSchedulerLike_schedule](continuation, options);
            return continuation;
        },
        [SchedulerLike_yield](delay = 0) {
            const shouldYield = delay > 0 || this[SchedulerLike_shouldYield];
            const currentContinuation = this[ContinuationSchedulerMixin_currentContinuation];
            if (shouldYield && isSome(currentContinuation)) {
                currentContinuation[ContinuationLike_yield](delay);
            }
        },
        [ContinuationSchedulerMixinLike_runContinuation](continuation) {
            this[ContinuationSchedulerMixin_startTime] = this[SchedulerLike_now];
            this[ContinuationSchedulerMixin_currentContinuation] = continuation;
            this[ContinuationSchedulerMixin_yieldRequested] = false;
            continuation[ContinuationLike_run]();
            this[ContinuationSchedulerMixin_yieldRequested] = false;
            this[ContinuationSchedulerMixin_currentContinuation] = none;
        },
    });
})();
export default ContinuationSchedulerMixin;
