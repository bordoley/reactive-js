/// <reference types="./Scheduler.createAnimationFrameScheduler.d.ts" />

import * as CurrentTime from "../../../__internal__/CurrentTime.js";
import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ContinuationSchedulerLike_schedule, } from "../../../__internal__/scheduling.js";
import { __AnimationFrameScheduler_delayScheduler, __AnimationFrameScheduler_immediateQueue, __AnimationFrameScheduler_rafSubscription, } from "../../../__internal__/symbols.js";
import { QueueLike_dequeue, } from "../../../__internal__/util.js";
import { invoke, isSome, none, pipe, pipeLazy, } from "../../../functions.js";
import { SchedulerLike_now, SchedulerLike_schedule, } from "../../../scheduling.js";
import { CollectionLike_count, DisposableLike_dispose, DisposableLike_isDisposed, QueueableLike_enqueue, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_create from "../../../util/Disposable/__internal__/Disposable.create.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import { PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_scheduleContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "./Scheduler.mixin.js";
const Scheduler_createAnimationFrameScheduler = /*@__PURE__*/ (() => {
    const scheduleRaf = (instance) => {
        if (!instance[__AnimationFrameScheduler_rafSubscription][DisposableLike_isDisposed]) {
            return;
        }
        const subscription = pipe(Disposable_create(), Disposable_addTo(instance));
        instance[__AnimationFrameScheduler_rafSubscription] = subscription;
        const cb = () => {
            const startTime = instance[SchedulerLike_now];
            const continuations = instance[__AnimationFrameScheduler_immediateQueue];
            instance[__AnimationFrameScheduler_immediateQueue] =
                Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow");
            let continuation = none;
            while (((continuation = continuations[QueueLike_dequeue]()),
                isSome(continuation))) {
                instance[PrioritySchedulerImplementationLike_runContinuation](continuation);
                const elapsedTime = instance[SchedulerLike_now] - startTime;
                if (elapsedTime > 5 /*ms*/) {
                    break;
                }
            }
            const continuationsCount = continuations[CollectionLike_count];
            const newContinuations = instance[__AnimationFrameScheduler_immediateQueue];
            const newContinuationsCount = newContinuations[CollectionLike_count];
            if (continuationsCount > 0 && newContinuationsCount === 0) {
                instance[__AnimationFrameScheduler_immediateQueue] = continuations;
            }
            else if (continuationsCount > 0) {
                // Merge the continuations copying the newly enqueued continuations
                // onto the original queue.
                instance[__AnimationFrameScheduler_immediateQueue] = continuations;
                let continuation = none;
                while (((continuation = newContinuations[QueueLike_dequeue]()),
                    isSome(continuation))) {
                    continuations[QueueableLike_enqueue](continuation);
                }
            }
            const immediateQueueCount = instance[__AnimationFrameScheduler_immediateQueue][CollectionLike_count];
            if (immediateQueueCount > 0) {
                requestAnimationFrame(cb);
            }
            else {
                subscription[DisposableLike_dispose]();
            }
        };
        requestAnimationFrame(cb);
    };
    return createInstanceFactory(mix(include(PriorityScheduler_mixin), function AnimationFrameScheduler(instance, delayScheduler) {
        init(PriorityScheduler_mixin, instance, 5);
        instance[__AnimationFrameScheduler_delayScheduler] = delayScheduler;
        instance[__AnimationFrameScheduler_immediateQueue] =
            Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow");
        instance[__AnimationFrameScheduler_rafSubscription] =
            Disposable_disposed;
        return instance;
    }, props({
        [__AnimationFrameScheduler_delayScheduler]: none,
        [__AnimationFrameScheduler_immediateQueue]: none,
        [__AnimationFrameScheduler_rafSubscription]: none,
    }), {
        get [SchedulerLike_now]() {
            return CurrentTime.now();
        },
        [PrioritySchedulerImplementationLike_shouldYield]: true,
        [PrioritySchedulerImplementationLike_scheduleContinuation](continuation, delay) {
            // The frame time is 16 ms at 60 fps so just ignore the delay
            // if its not more than a frame.
            if (delay > 16) {
                pipe(this[__AnimationFrameScheduler_delayScheduler], invoke(SchedulerLike_schedule, pipeLazy(this, invoke(ContinuationSchedulerLike_schedule, continuation)), { delay }), Disposable_addTo(continuation));
            }
            else {
                this[__AnimationFrameScheduler_immediateQueue][QueueableLike_enqueue](continuation);
                scheduleRaf(this);
            }
        },
    }));
})();
export default Scheduler_createAnimationFrameScheduler;
