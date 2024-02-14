/// <reference types="./AnimationFrameScheduler.d.ts" />

import { Map_delete, Map_get, Map_set, globalObject, } from "../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { ContinuationLike_dueTime, ContinuationLike_run, } from "../../concurrent/__internal__/Continuation.js";
import { ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, } from "../../concurrent/__internal__/ContinuationScheduler.js";
import CurrentTimeSchedulerMixin from "../../concurrent/__mixins__/CurrentTimeSchedulerMixin.js";
import { SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../concurrent.js";
import { invoke, isSome, newInstance, none, pipe, pipeLazy, raiseIfNone, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as IndexedQueue from "../../utils/IndexedQueue.js";
import { DisposableContainerLike_add, QueueLike_count, QueueLike_dequeue, QueueableLike_enqueue, } from "../../utils.js";
const create = /*@__PURE__*/ (() => {
    const AnimationFrameScheduler_delayScheduler = Symbol("AnimationFrameScheduler_delayScheduler");
    const AnimationFrameScheduler_rafCallback = Symbol("AnimationFrameScheduler_rafCallback");
    const AnimationFrameScheduler_rafQueue = Symbol("AnimationFrameScheduler_rafQueue");
    const AnimationFrameScheduler_rafIsRunning = Symbol("AnimationFrameScheduler_rafIsRunning");
    const raf = globalObject.requestAnimationFrame;
    raiseIfNone(raf, "requestAnimationFrame is not defined in the current environment");
    return mixInstanceFactory(include(CurrentTimeSchedulerMixin), function AnimationFrameScheduler(instance, hostScheduler) {
        init(CurrentTimeSchedulerMixin, instance, 5);
        instance[AnimationFrameScheduler_delayScheduler] = hostScheduler;
        instance[AnimationFrameScheduler_rafQueue] = IndexedQueue.create();
        instance[AnimationFrameScheduler_rafIsRunning] = false;
        instance[AnimationFrameScheduler_rafCallback] = () => {
            const startTime = instance[SchedulerLike_now];
            const workQueue = instance[AnimationFrameScheduler_rafQueue];
            instance[AnimationFrameScheduler_rafQueue] = IndexedQueue.create();
            let continuation = none;
            while (((continuation = workQueue[QueueLike_dequeue]()),
                isSome(continuation))) {
                continuation[ContinuationLike_run]();
                const elapsedTime = instance[SchedulerLike_now] - startTime;
                if (elapsedTime > 5 /*ms*/) {
                    break;
                }
            }
            const continuationsCount = workQueue[QueueLike_count];
            const newWorkQueue = instance[AnimationFrameScheduler_rafQueue];
            const newContinuationsCount = newWorkQueue[QueueLike_count];
            if (continuationsCount > 0 && newContinuationsCount === 0) {
                instance[AnimationFrameScheduler_rafQueue] = workQueue;
            }
            else if (continuationsCount > 0) {
                // Merge the job queues copying the newly enqueued jobs
                // onto the original queue.
                let continuation = none;
                while (((continuation = newWorkQueue[QueueLike_dequeue]()),
                    isSome(continuation))) {
                    workQueue[QueueableLike_enqueue](continuation);
                }
                instance[AnimationFrameScheduler_rafQueue] = workQueue;
            }
            const continuationsQueueCount = instance[AnimationFrameScheduler_rafQueue][QueueLike_count];
            if (continuationsQueueCount > 0) {
                raf(instance[AnimationFrameScheduler_rafCallback]);
            }
            else {
                instance[AnimationFrameScheduler_rafIsRunning] = false;
            }
        };
        hostScheduler[DisposableContainerLike_add](instance);
        return instance;
    }, props({
        [AnimationFrameScheduler_delayScheduler]: none,
        [AnimationFrameScheduler_rafCallback]: none,
        [AnimationFrameScheduler_rafQueue]: none,
        [AnimationFrameScheduler_rafIsRunning]: false,
    }), {
        [ContinuationSchedulerLike_shouldYield]: true,
        [SchedulerLike_shouldYield]: true,
        [ContinuationSchedulerLike_schedule](continuation) {
            const now = this[SchedulerLike_now];
            const dueTime = continuation[ContinuationLike_dueTime];
            const delay = dueTime - now;
            // The frame time is 16 ms at 60 fps so just ignore the delay
            // if its not more than a frame.
            if (delay > 16) {
                pipe(this[AnimationFrameScheduler_delayScheduler], invoke(SchedulerLike_schedule, pipeLazy(this, invoke(ContinuationSchedulerLike_schedule, continuation)), { delay }), Disposable.addTo(continuation));
            }
            else {
                this[AnimationFrameScheduler_rafQueue][QueueableLike_enqueue](continuation);
                if (!this[AnimationFrameScheduler_rafIsRunning]) {
                    this[AnimationFrameScheduler_rafIsRunning] = true;
                    raf(this[AnimationFrameScheduler_rafCallback]);
                }
            }
        },
    });
})();
export const get = /*@__PURE__*/ (() => {
    const schedulerCache = newInstance(Map);
    return (scheduler) => schedulerCache[Map_get](scheduler) ??
        (() => {
            const animationFrameScheduler = create(scheduler);
            schedulerCache[Map_set](scheduler, animationFrameScheduler);
            pipe(animationFrameScheduler, DisposableContainer.onDisposed(_ => schedulerCache[Map_delete](scheduler)));
            return scheduler;
        })();
})();
