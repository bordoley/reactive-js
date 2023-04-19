/// <reference types="./Continuation.create.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory, getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ContinuationLike_priority, ContinuationLike_run, ContinuationSchedulerLike_schedule, } from "../../../__internal__/scheduling.js";
import { __Continuation_childContinuation, __Continuation_effect, __Continuation_scheduler, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.js";
import { call, error, isSome, none, pipe, } from "../../../functions.js";
import { SchedulerLike_shouldYield, } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Queue_indexedQueueMixin from "../../../util/Queue/__internal__/Queue.indexedQueueMixin.js";
import YieldError from "./Continuation.yieldError.js";
const Continuation_create = /*@__PURE__*/ (() => {
    const indexedQueueProtoype = getPrototype(Queue_indexedQueueMixin());
    return createInstanceFactory(mix(include(Disposable_mixin, Queue_indexedQueueMixin()), function Continuation(instance, scheduler, effect, priority) {
        init(Disposable_mixin, instance);
        init(Queue_indexedQueueMixin(), instance, MAX_SAFE_INTEGER, "overflow");
        instance[__Continuation_scheduler] = scheduler;
        instance[__Continuation_effect] = effect;
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
        [__Continuation_scheduler]: none,
        [ContinuationLike_priority]: 0,
        [__Continuation_childContinuation]: none,
        [__Continuation_effect]: none,
    }), {
        [ContinuationLike_run]() {
            if (this[DisposableLike_isDisposed]) {
                return;
            }
            const scheduler = this[__Continuation_scheduler];
            // Run any inner continuations first.
            let head = none;
            while (((head = this[QueueLike_dequeue]()), isSome(head))) {
                this[__Continuation_childContinuation] = head;
                head[ContinuationLike_run]();
                this[__Continuation_childContinuation] = none;
                const shouldYield = scheduler[SchedulerLike_shouldYield];
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
        [QueueableLike_enqueue](continuation) {
            const childContinuation = this[__Continuation_childContinuation];
            if (continuation[DisposableLike_isDisposed]) {
                return false;
            }
            else if (this[DisposableLike_isDisposed]) {
                const scheduler = this[__Continuation_scheduler];
                scheduler[ContinuationSchedulerLike_schedule](continuation, 0);
                /*
              return raiseWithDebugMessage(
                "attempting to enqueue onto a disposed continuation",
              );*/
                return false;
            }
            else if (isSome(childContinuation) &&
                childContinuation !== continuation &&
                !childContinuation[DisposableLike_isDisposed]) {
                return childContinuation[QueueableLike_enqueue](continuation);
            }
            else {
                return call(indexedQueueProtoype[QueueableLike_enqueue], this, continuation);
            }
        },
    }));
})();
export default Continuation_create;
