/// <reference types="./QueueableContinuation.d.ts" />

import { __DEV__ } from "../../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../../../__internal__/mixins.js";
import { ContinuationContextLike_yield, SchedulerLike_now, SchedulerLike_shouldYield, } from "../../../../concurrent.js";
import { error, isSome, newInstance, none, pipe, raiseIf, } from "../../../../functions.js";
import * as DisposableContainer from "../../../../utils/DisposableContainer.js";
import DisposableMixin from "../../../../utils/__mixins__/DisposableMixin.js";
import QueueMixin from "../../../../utils/__mixins__/QueueMixin.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_dequeue, QueueableLike_enqueue, } from "../../../../utils.js";
import { ContinuationLike_dueTime, ContinuationLike_id, ContinuationLike_run, } from "../../../__internal__/Continuation.js";
export const QueueableContinuationLike_parent = Symbol("QueueableContinuationLike_parent");
export const QueueableContinuationSchedulerLike_schedule = Symbol("QueueableContinuationSchedulerLike_schedule");
export const QueueableContinuationSchedulerLike_nextTaskID = Symbol("QueueableContinuationSchedulerLike_nextTaskID");
export const QueueableContinuationSchedulerLike_currentContinuation = Symbol("QueueableContinuationSchedulerLike_currentContinuation");
export const create = /*@__PURE__*/ (() => {
    class ContinuationYieldError {
        delay;
        constructor(delay) {
            this.delay = delay;
        }
    }
    const QueueableContinuation_effect = Symbol("QueueableContinuation_effect");
    const QueueableContinuation_scheduler = Symbol("QueueableContinuation_scheduler");
    const findNearestNonDisposedParent = (continuation) => {
        let parent = continuation[QueueableContinuationLike_parent];
        while (isSome(parent) && parent[DisposableLike_isDisposed]) {
            parent = parent[QueueableContinuationLike_parent];
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
            scheduler[QueueableContinuationSchedulerLike_schedule](continuation);
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
                scheduler[QueueableContinuationSchedulerLike_schedule](head);
            }
        }
    };
    const runContinuation = (thiz) => {
        const scheduler = thiz[QueueableContinuation_scheduler];
        // Run any inner continuations first.
        let head = none;
        while (((head = thiz[QueueLike_dequeue]()), isSome(head))) {
            head[QueueableContinuationLike_parent] = thiz;
            head[ContinuationLike_run]();
            head[QueueableContinuationLike_parent] = none;
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
                thiz[ContinuationLike_id] =
                    scheduler[QueueableContinuationSchedulerLike_nextTaskID];
                thiz[ContinuationLike_dueTime] = scheduler[SchedulerLike_now] + delay;
                rescheduleChildrenOnParentOrScheduler(thiz);
                scheduler[QueueableContinuationSchedulerLike_schedule](thiz);
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
        instance[ContinuationLike_dueTime] = dueTime;
        instance[ContinuationLike_id] =
            scheduler[QueueableContinuationSchedulerLike_nextTaskID];
        instance[QueueableContinuation_scheduler] = scheduler;
        instance[QueueableContinuation_effect] = effect;
        pipe(instance, DisposableContainer.onDisposed(_ => {
            rescheduleChildrenOnParentOrScheduler(instance);
            // A continuation could be disposed and yet retained
            // by a scheduler in a queue so free all references
            // to avoid retaining memory.
            instance[QueueableContinuationLike_parent] = none;
            instance[QueueableContinuation_scheduler] =
                none;
            instance[QueueableContinuation_effect] =
                none;
        }));
        return instance;
    }, props({
        [QueueableContinuationLike_parent]: none,
        [QueueableContinuation_scheduler]: none,
        [QueueableContinuation_effect]: none,
        [ContinuationLike_dueTime]: 0,
        [ContinuationLike_id]: 0,
    }), {
        [ContinuationLike_run]() {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            const scheduler = this[QueueableContinuation_scheduler];
            const oldCurrentContinuation = scheduler[QueueableContinuationSchedulerLike_currentContinuation];
            scheduler[QueueableContinuationSchedulerLike_currentContinuation] =
                this;
            runContinuation(this);
            scheduler[QueueableContinuationSchedulerLike_currentContinuation] =
                oldCurrentContinuation;
        },
        [ContinuationContextLike_yield](delay = 0) {
            const scheduler = this[QueueableContinuation_scheduler];
            if (__DEV__) {
                const currentContinuation = scheduler[QueueableContinuationSchedulerLike_currentContinuation];
                raiseIf(currentContinuation !== this, "Attempted to invoke yield outside of a continuation's run context");
            }
            const shouldYield = delay > 0 || scheduler[SchedulerLike_shouldYield];
            if (shouldYield) {
                throw newInstance(ContinuationYieldError, delay);
            }
        },
    });
})();
