/// <reference types="./Continuation.create.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory, getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ContinuationLike_activeChild, ContinuationLike_parent, ContinuationLike_run, ContinuationLike_scheduler, ContinuationSchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../concurrent.js";
import { call, error, isSome, none, pipe, pipeLazy, } from "../../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueLike_dequeue, QueueableLike_enqueue, } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import IndexedQueueMixin from "../../../utils/__mixins__/IndexedQueueMixin.js";
import ContinuationYieldError from "../../__internal__/ContinuationYieldError.js";
const Continuation_effect = Symbol("Continuation_effect");
const Continuation_create = /*@__PURE__*/ (() => {
    const indexedQueueProtoype = getPrototype(IndexedQueueMixin());
    const findNearestNonDisposedParent = (continuation) => {
        let parent = continuation[ContinuationLike_parent];
        while (isSome(parent) && parent[DisposableLike_isDisposed]) {
            parent = parent[ContinuationLike_parent];
        }
        return parent;
    };
    const rescheduleContinuation = (continuation) => {
        const scheduler = continuation[ContinuationLike_scheduler];
        const parent = findNearestNonDisposedParent(continuation);
        if (isSome(parent)) {
            parent[QueueableLike_enqueue](continuation);
        }
        else {
            scheduler[ContinuationSchedulerLike_schedule](continuation);
        }
    };
    const rescheduleChildrenOnParentOrScheduler = (continuation) => {
        const scheduler = continuation[ContinuationLike_scheduler];
        const parent = findNearestNonDisposedParent(continuation);
        if (isSome(parent)) {
            let head = none;
            while (((head = continuation[QueueLike_dequeue]()), isSome(head))) {
                if (!head[DisposableLike_isDisposed]) {
                    parent[QueueableLike_enqueue](head);
                }
            }
        }
        else {
            let head = none;
            while (((head = continuation[QueueLike_dequeue]()), isSome(head))) {
                if (!head[DisposableLike_isDisposed]) {
                    scheduler[ContinuationSchedulerLike_schedule](head);
                }
            }
        }
    };
    return createInstanceFactory(mix(include(DisposableMixin, IndexedQueueMixin()), function Continuation(instance, scheduler, effect) {
        init(DisposableMixin, instance);
        init(IndexedQueueMixin(), instance, MAX_SAFE_INTEGER, "overflow");
        instance[ContinuationLike_scheduler] = scheduler;
        instance[Continuation_effect] = effect;
        pipe(instance, Disposable.onDisposed(pipeLazy(instance, rescheduleChildrenOnParentOrScheduler)));
        return instance;
    }, props({
        [ContinuationLike_activeChild]: none,
        [ContinuationLike_parent]: none,
        [ContinuationLike_scheduler]: none,
        [Continuation_effect]: none,
    }), {
        [ContinuationLike_run]() {
            const scheduler = this[ContinuationLike_scheduler];
            if (this[DisposableLike_isDisposed]) {
                rescheduleChildrenOnParentOrScheduler(this);
                return;
            }
            // Run any inner continuations first.
            let head = none;
            while (((head = this[QueueLike_dequeue]()), isSome(head))) {
                this[ContinuationLike_activeChild] = head;
                head[ContinuationLike_run]();
                this[ContinuationLike_activeChild] = none;
                if (this[DisposableLike_isDisposed]) {
                    rescheduleChildrenOnParentOrScheduler(this);
                    return;
                }
                else if (scheduler[SchedulerLike_shouldYield]) {
                    rescheduleContinuation(this);
                    return;
                }
            }
            let err = none;
            let yieldError = none;
            this[ContinuationLike_activeChild] = this;
            try {
                this[Continuation_effect](scheduler);
            }
            catch (e) {
                if (e instanceof ContinuationYieldError) {
                    yieldError = e;
                }
                else {
                    err = error(e);
                }
            }
            this[ContinuationLike_activeChild] = none;
            if (isSome(yieldError) && !this[DisposableLike_isDisposed]) {
                if (yieldError.delay > 0) {
                    rescheduleChildrenOnParentOrScheduler(this);
                    scheduler[ContinuationSchedulerLike_schedule](this, yieldError);
                }
                else {
                    rescheduleContinuation(this);
                }
            }
            else {
                this[DisposableLike_dispose](err);
                rescheduleChildrenOnParentOrScheduler(this);
            }
        },
        [QueueableLike_enqueue](continuation) {
            continuation[ContinuationLike_parent] = this;
            return call(indexedQueueProtoype[QueueableLike_enqueue], this, continuation);
        },
    }));
})();
export default Continuation_create;
