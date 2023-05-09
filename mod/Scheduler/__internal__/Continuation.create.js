/// <reference types="./Continuation.create.d.ts" />

import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
import Queue_indexedQueueMixin from "../../Queue/__internal__/Queue.indexedQueueMixin.js";
import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { createInstanceFactory, getPrototype, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __Continuation_effect } from "../../__internal__/symbols.js";
import { ContinuationLike_activeChild, ContinuationLike_parent, ContinuationLike_run, ContinuationLike_scheduler, ContinuationSchedulerLike_schedule, QueueLike_dequeue, } from "../../__internal__/types.js";
import { call, error, isSome, none, pipe, pipeLazy, } from "../../functions.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, SchedulerLike_shouldYield, } from "../../types.js";
import YieldError from "./Continuation.yieldError.js";
const Continuation_create = /*@__PURE__*/ (() => {
    const indexedQueueProtoype = getPrototype(Queue_indexedQueueMixin());
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
    return createInstanceFactory(mix(include(Disposable_mixin, Queue_indexedQueueMixin()), function Continuation(instance, scheduler, effect) {
        init(Disposable_mixin, instance);
        init(Queue_indexedQueueMixin(), instance, MAX_SAFE_INTEGER, "overflow");
        instance[ContinuationLike_scheduler] = scheduler;
        instance[__Continuation_effect] = effect;
        pipe(instance, Disposable_onDisposed(pipeLazy(instance, rescheduleChildrenOnParentOrScheduler)));
        return instance;
    }, props({
        [ContinuationLike_activeChild]: none,
        [ContinuationLike_parent]: none,
        [ContinuationLike_scheduler]: none,
        [__Continuation_effect]: none,
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
                this[__Continuation_effect](scheduler);
            }
            catch (e) {
                if (e instanceof YieldError) {
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
