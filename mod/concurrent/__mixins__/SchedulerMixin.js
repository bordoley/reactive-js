/// <reference types="./SchedulerMixin.d.ts" />

import { __DEV__ } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { include, init, mix, mixInstanceFactory, props, unsafeCast, } from "../../__internal__/mixins.js";
import { ContinuationContextLike_yield, SchedulerLike_inContinuation, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_requestYield, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../concurrent.js";
import { error, isNone, isSome, newInstance, none, pipe, raiseIf, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import QueueMixin from "../../utils/__mixins__/QueueMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_count, QueueLike_dequeue, QueueableLike_enqueue, } from "../../utils.js";
export const SchedulerContinuationLike_run = Symbol("SchedulerContinuationLike_run");
export const SchedulerContinuationLike_dueTime = Symbol("SchedulerContinuationLike_dueTime");
export const SchedulerContinuationLike_id = Symbol("SchedulerContinuationLike_id");
export const SchedulerContinuation = {
    compare: (a, b) => {
        const diff = a[SchedulerContinuationLike_dueTime] -
            b[SchedulerContinuationLike_dueTime];
        return diff !== 0
            ? diff
            : a[SchedulerContinuationLike_id] - b[SchedulerContinuationLike_id];
    },
};
export const SchedulerMixinBaseLike_shouldYield = Symbol("SchedulerMixinBaseLike_shouldYield");
export const SchedulerMixinBaseLike_schedule = Symbol("SchedulerMixinBaseLike_schedule");
const SchedulerMixin = /*@__PURE__*/ (() => {
    const QueueableSchedulerContinuationLike_parent = Symbol("QueueableSchedulerContinuationLike_parent");
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
                scheduler[SchedulerMixinLike_schedule](continuation);
            }
        };
        const rescheduleChildrenOnParentOrScheduler = (continuation) => {
            const scheduler = continuation[QueueableContinuation_scheduler];
            const parent = findNearestNonDisposedParent(continuation);
            let head = none;
            while (((head = continuation[QueueLike_dequeue]()), isSome(head))) {
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
        };
        const runContinuation = (thiz) => {
            const scheduler = thiz[QueueableContinuation_scheduler];
            // Run any inner continuations first.
            let head = none;
            while (((head = thiz[QueueLike_dequeue]()), isSome(head))) {
                head[QueueableSchedulerContinuationLike_parent] = thiz;
                head[SchedulerContinuationLike_run]();
                head[QueueableSchedulerContinuationLike_parent] = none;
                if (scheduler[SchedulerLike_shouldYield] &&
                    !thiz[DisposableLike_isDisposed]) {
                    rescheduleContinuation(thiz);
                    return;
                }
            }
            if (thiz[DisposableLike_isDisposed]) {
                return;
            }
            let err = none;
            let yieldError = none;
            try {
                thiz[QueueableContinuation_effect](thiz);
            }
            catch (e) {
                if (e instanceof ContinuationYieldError) {
                    yieldError = e;
                }
                else {
                    err = error(e);
                }
            }
            if (isSome(yieldError) && !thiz[DisposableLike_isDisposed]) {
                const { delay } = yieldError;
                if (delay > 0) {
                    // Bump the taskID so that the yielded with delay continuation is run
                    // at a lower relative priority to other previously scheduled continuations
                    // with the same due time.
                    thiz[SchedulerContinuationLike_id] = ++scheduler[SchedulerMixinLike_taskIDCounter];
                    thiz[SchedulerContinuationLike_dueTime] =
                        scheduler[SchedulerLike_now] + delay;
                    rescheduleChildrenOnParentOrScheduler(thiz);
                    scheduler[SchedulerMixinLike_schedule](thiz);
                }
                else {
                    rescheduleContinuation(thiz);
                }
            }
            else {
                thiz[DisposableLike_dispose](err);
            }
        };
        return mixInstanceFactory(include(DisposableMixin, QueueMixin()), function QueueableContinuation(instance, scheduler, effect, dueTime) {
            init(DisposableMixin, instance);
            init(QueueMixin(), instance, none);
            instance[SchedulerContinuationLike_dueTime] = dueTime;
            instance[SchedulerContinuationLike_id] = ++scheduler[SchedulerMixinLike_taskIDCounter];
            instance[QueueableContinuation_scheduler] = scheduler;
            instance[QueueableContinuation_effect] = effect;
            pipe(instance, DisposableContainer.onDisposed(_ => {
                rescheduleChildrenOnParentOrScheduler(instance);
                // A continuation could be disposed and yet retained
                // by a scheduler in a queue so free all references
                // to avoid retaining memory.
                instance[QueueableSchedulerContinuationLike_parent] = none;
                instance[QueueableContinuation_scheduler] =
                    none;
                instance[QueueableContinuation_effect] =
                    none;
            }));
            return instance;
        }, props({
            [QueueableSchedulerContinuationLike_parent]: none,
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
                runContinuation(this);
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
                this[SchedulerMixinBaseLike_shouldYield]);
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
                activeContinuation[SchedulerContinuationLike_dueTime] > now) {
                this[SchedulerMixinBaseLike_schedule](continuation);
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
