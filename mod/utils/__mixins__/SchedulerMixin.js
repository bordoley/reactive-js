/// <reference types="./SchedulerMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { abs, clampPositiveInteger, floor } from "../../__internal__/math.js";
import { include, init, mix, mixInstanceFactory, props, unsafeCast, } from "../../__internal__/mixins.js";
import { error, isNone, isSome, newInstance, none, pipe, raiseIf, } from "../../functions.js";
import { ContinuationContextLike_yield, DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_count, QueueLike_dequeue, QueueableLike_enqueue, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DisposableMixin from "./DisposableMixin.js";
import QueueMixin from "./QueueMixin.js";
export const SchedulerContinuationLike_run = Symbol("SchedulerContinuationLike_run");
export const SchedulerContinuationLike_dueTime = Symbol("SchedulerContinuationLike_dueTime");
export const SchedulerContinuationLike_id = Symbol("SchedulerContinuationLike_id");
export const SchedulerContinuation = {
    compare: (a, b) => {
        const diff = a[SchedulerContinuationLike_dueTime] -
            b[SchedulerContinuationLike_dueTime];
        return floor(abs(diff)) !== 0
            ? diff
            : a[SchedulerContinuationLike_id] - b[SchedulerContinuationLike_id];
    },
};
export const SchedulerMixinHostLike_shouldYield = Symbol("SchedulerMixinHostLike_shouldYield");
export const SchedulerMixinHostLike_schedule = Symbol("SchedulerMixinHostLike_schedule");
const SchedulerMixin = /*@__PURE__*/ (() => {
    const QueueableSchedulerContinuationLike_parent = Symbol("QueueableSchedulerContinuationLike_parent");
    const QueueableSchedulerContinuationLike_isReschedulingChildren = Symbol("QueueableSchedulerContinuationLike_isReschedulingChildren");
    const SchedulerMixinLike_schedule = Symbol("SchedulerMixinLike_schedule");
    const SchedulerMixinLike_taskIDCounter = Symbol("SchedulerMixinLike_taskIDCounter");
    const SchedulerMixinLike_currentContinuation = Symbol("SchedulerMixinLike_currentContinuation");
    const SchedulerMixinLike_startTime = Symbol("SchedulerMixinLike_startTime");
    const SchedulerMixinLike_yieldRequested = Symbol("SchedulerMixinLike_yieldRequested");
    const createQueueableContinuation = (() => {
        class ContinuationYieldError {
            delay;
            constructor(delay) {
                this.delay = delay;
            }
        }
        const QueueableContinuation_effect = Symbol("QueueableContinuation_effect");
        const QueueableContinuation_scheduler = Symbol("QueueableContinuation_scheduler");
        const findNearestNonDisposedParent = (continuation) => {
            let parent = continuation[QueueableSchedulerContinuationLike_parent];
            while (isSome(parent) && parent[DisposableLike_isDisposed]) {
                parent = parent[QueueableSchedulerContinuationLike_parent];
            }
            return parent;
        };
        const rescheduleContinuation = (continuation) => {
            const scheduler = continuation[QueueableContinuation_scheduler];
            const parent = findNearestNonDisposedParent(continuation);
            if (isSome(parent)) {
                parent[QueueableLike_enqueue](continuation);
            }
            else {
                continuation[SchedulerContinuationLike_dueTime] =
                    scheduler[SchedulerLike_now];
                scheduler[SchedulerMixinLike_schedule](continuation);
            }
        };
        const rescheduleChildrenOnParentOrScheduler = (continuation) => {
            continuation[QueueableSchedulerContinuationLike_isReschedulingChildren] =
                true;
            const scheduler = continuation[QueueableContinuation_scheduler];
            const parent = findNearestNonDisposedParent(continuation);
            for (let head = none; (head = continuation[QueueLike_dequeue]()), isSome(head);) {
                if (head[DisposableLike_isDisposed]) {
                    // continue
                }
                else if (isSome(parent)) {
                    parent[QueueableLike_enqueue](head);
                }
                else {
                    scheduler[SchedulerMixinLike_schedule](head);
                }
            }
            continuation[QueueableSchedulerContinuationLike_isReschedulingChildren] =
                false;
        };
        function onContinuationDisposed() {
            rescheduleChildrenOnParentOrScheduler(this);
            // A continuation could be disposed and yet retained
            // by a scheduler in a queue so free all references
            // to avoid retaining memory.
            this[QueueableSchedulerContinuationLike_parent] = none;
            this[QueueableContinuation_scheduler] =
                none;
            this[QueueableContinuation_effect] =
                none;
        }
        return mixInstanceFactory(include(DisposableMixin, QueueMixin()), function QueueableContinuation(instance, scheduler, effect, dueTime) {
            init(DisposableMixin, instance);
            init(QueueMixin(), instance, none);
            instance[SchedulerContinuationLike_dueTime] = dueTime;
            instance[SchedulerContinuationLike_id] = ++scheduler[SchedulerMixinLike_taskIDCounter];
            instance[QueueableContinuation_scheduler] = scheduler;
            instance[QueueableContinuation_effect] = effect;
            pipe(instance, DisposableContainer.onDisposed(onContinuationDisposed));
            return instance;
        }, props({
            [QueueableSchedulerContinuationLike_parent]: none,
            [QueueableSchedulerContinuationLike_isReschedulingChildren]: false,
            [QueueableContinuation_scheduler]: none,
            [QueueableContinuation_effect]: none,
            [SchedulerContinuationLike_dueTime]: 0,
            [SchedulerContinuationLike_id]: 0,
        }), {
            [SchedulerContinuationLike_run]() {
                if (this[DisposableLike_isDisposed]) {
                    return;
                }
                const scheduler = this[QueueableContinuation_scheduler];
                const oldCurrentContinuation = scheduler[SchedulerMixinLike_currentContinuation];
                scheduler[SchedulerMixinLike_currentContinuation] = this;
                // A QueueableSchedulerContinuationLike may run inner continuations that will
                // set the currentContinuation to themselves, but we don't want to
                // reset the startTime or yieldRequested flags in this case since these
                // should be honored for the duration of the time that the synchronous
                // parent continuation is active.
                if (isNone(oldCurrentContinuation)) {
                    scheduler[SchedulerMixinLike_startTime] =
                        scheduler[SchedulerLike_now];
                    scheduler[SchedulerMixinLike_yieldRequested] = false;
                }
                // Flag whether the continuation has been rescheduled
                let rescheduled = false;
                // Run any inner continuations first.
                for (let head = none; (head = this[QueueLike_dequeue]()), isSome(head);) {
                    head[QueueableSchedulerContinuationLike_parent] = this;
                    head[SchedulerContinuationLike_run]();
                    head[QueueableSchedulerContinuationLike_parent] = none;
                    if (scheduler[SchedulerLike_shouldYield] &&
                        !this[DisposableLike_isDisposed]) {
                        rescheduleContinuation(this);
                        rescheduled = true;
                        break;
                    }
                }
                let err = none;
                let yieldError = none;
                if (!rescheduled && !this[DisposableLike_isDisposed]) {
                    try {
                        this[QueueableContinuation_effect](this);
                    }
                    catch (e) {
                        if (e instanceof ContinuationYieldError) {
                            yieldError = e;
                        }
                        else {
                            err = error(e);
                        }
                    }
                }
                // Reschedule the continuation if yielded
                if (isSome(yieldError)) {
                    const { delay } = yieldError;
                    if (delay > 0) {
                        // Bump the taskID so that the yielded with delay continuation is run
                        // at a lower relative priority to other previously scheduled continuations
                        // with the same due time.
                        this[SchedulerContinuationLike_id] = ++scheduler[SchedulerMixinLike_taskIDCounter];
                        this[SchedulerContinuationLike_dueTime] =
                            scheduler[SchedulerLike_now] + delay;
                        rescheduleChildrenOnParentOrScheduler(this);
                        scheduler[SchedulerMixinLike_schedule](this);
                    }
                    else {
                        rescheduleContinuation(this);
                    }
                    rescheduled = true;
                }
                if (!rescheduled) {
                    this[DisposableLike_dispose](err);
                }
                scheduler[SchedulerMixinLike_currentContinuation] =
                    oldCurrentContinuation;
            },
            [ContinuationContextLike_yield](delay = 0) {
                const scheduler = this[QueueableContinuation_scheduler];
                if (__DEV__) {
                    const currentContinuation = scheduler[SchedulerMixinLike_currentContinuation];
                    raiseIf(currentContinuation !== this, "Attempted to invoke yield outside of a continuation's run context");
                }
                const shouldYield = delay > 0 || scheduler[SchedulerLike_shouldYield];
                if (shouldYield) {
                    throw newInstance(ContinuationYieldError, delay);
                }
            },
        });
    })();
    return mix(include(DisposableMixin), function SchedulerMixin(instance) {
        init(DisposableMixin, instance);
        return instance;
    }, props({
        [SchedulerMixinLike_currentContinuation]: none,
        [SchedulerMixinLike_yieldRequested]: false,
        [SchedulerMixinLike_startTime]: 0,
        [SchedulerMixinLike_taskIDCounter]: 0,
    }), {
        get [SchedulerLike_inContinuation]() {
            unsafeCast(this);
            const currentContinuation = this[SchedulerMixinLike_currentContinuation];
            return isSome(currentContinuation);
        },
        get [SchedulerLike_shouldYield]() {
            unsafeCast(this);
            if (__DEV__) {
                const inContinuation = this[SchedulerLike_inContinuation];
                raiseIf(!inContinuation, "shouldYield may only be called from within a scheduler continuation");
            }
            const isDisposed = this[DisposableLike_isDisposed];
            const yieldRequested = this[SchedulerMixinLike_yieldRequested];
            const exceededMaxYieldInterval = this[SchedulerLike_now] >
                this[SchedulerMixinLike_startTime] +
                    this[SchedulerLike_maxYieldInterval];
            const currentContinuationHasScheduledChildren = this[SchedulerMixinLike_currentContinuation][QueueLike_count] > 0;
            return (isDisposed ||
                yieldRequested ||
                exceededMaxYieldInterval ||
                currentContinuationHasScheduledChildren ||
                this[SchedulerMixinHostLike_shouldYield]);
        },
        [SchedulerLike_requestYield]() {
            this[SchedulerMixinLike_yieldRequested] = true;
        },
        [SchedulerMixinLike_schedule](continuation) {
            const activeContinuation = this[SchedulerMixinLike_currentContinuation];
            const now = this[SchedulerLike_now];
            const dueTime = continuation[SchedulerContinuationLike_dueTime];
            if (dueTime > now ||
                isNone(activeContinuation) ||
                activeContinuation[DisposableLike_isDisposed] ||
                // Occurs when the continuation is rescheduling itself
                // and there is no non-disposed parent to enqueue itself onto.
                activeContinuation === continuation ||
                // Occurs when an active continuation is rescheduling its
                // children because it has been rescheduled in the future.
                activeContinuation[QueueableSchedulerContinuationLike_isReschedulingChildren]) {
                this[SchedulerMixinHostLike_schedule](continuation);
            }
            else {
                activeContinuation[QueueableLike_enqueue](continuation);
            }
        },
        [SchedulerLike_schedule](effect, options) {
            if (this[DisposableLike_isDisposed]) {
                return Disposable.disposed;
            }
            const dueTime = this[SchedulerLike_now] + clampPositiveInteger(options?.delay ?? 0);
            const continuation = pipe(createQueueableContinuation(this, effect, dueTime), Disposable.addToContainer(this));
            this[SchedulerMixinLike_schedule](continuation);
            return continuation;
        },
    });
})();
export default SchedulerMixin;
