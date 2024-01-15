/// <reference types="./AnimationFrameScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../concurrent.js";
import { ContinuationLike_dueTime, ContinuationLike_run, } from "../../concurrent/__internal__/Continuation.js";
import { ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, } from "../../concurrent/__internal__/ContinuationScheduler.js";
import CurrentTimeSchedulerMixin from "../../concurrent/__mixins__/CurrentTimeSchedulerMixin.js";
import { bindMethod, invoke, isSome, none, pipe, pipeLazy, } from "../../functions.js";
import { QueueLike_count, QueueLike_dequeue, QueueableLike_enqueue, } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import * as IndexedQueue from "../../utils/IndexedQueue.js";
export const create = /*@__PURE__*/ (() => {
    const AnimationFrameScheduler_host = Symbol("AnimationFrameScheduler_host");
    const AnimationFrameScheduler_rafCallback = Symbol("AnimationFrameScheduler_rafCallback");
    const AnimationFrameScheduler_rafQueue = Symbol("AnimationFrameScheduler_rafQueue");
    const AnimationFrameScheduler_rafIsRunning = Symbol("AnimationFrameScheduler_rafIsRunning");
    return createInstanceFactory(mix(include(CurrentTimeSchedulerMixin), function AnimationFrameScheduler(instance, hostScheduler) {
        init(CurrentTimeSchedulerMixin, instance, 5);
        instance[AnimationFrameScheduler_host] = hostScheduler;
        instance[AnimationFrameScheduler_rafQueue] =
            IndexedQueue.create();
        instance[AnimationFrameScheduler_rafIsRunning] = false;
        instance[AnimationFrameScheduler_rafCallback] = () => {
            const startTime = instance[SchedulerLike_now];
            const workQueue = instance[AnimationFrameScheduler_rafQueue];
            instance[AnimationFrameScheduler_rafQueue] = IndexedQueue.create();
            let job = none;
            while (((job = workQueue[QueueLike_dequeue]()), isSome(job))) {
                job();
                const elapsedTime = instance[SchedulerLike_now] - startTime;
                if (elapsedTime > 5 /*ms*/) {
                    break;
                }
            }
            const jobsCount = workQueue[QueueLike_count];
            const newWorkQueue = instance[AnimationFrameScheduler_rafQueue];
            const newJobsCount = newWorkQueue[QueueLike_count];
            if (jobsCount > 0 && newJobsCount === 0) {
                instance[AnimationFrameScheduler_rafQueue] = workQueue;
            }
            else if (jobsCount > 0) {
                // Merge the job queues copying the newly enqueued jobs
                // onto the original queue.
                let job = none;
                while (((job = newWorkQueue[QueueLike_dequeue]()), isSome(job))) {
                    workQueue[QueueableLike_enqueue](job);
                }
                instance[AnimationFrameScheduler_rafQueue] = workQueue;
            }
            const workQueueCount = instance[AnimationFrameScheduler_rafQueue][QueueLike_count];
            if (workQueueCount > 0) {
                requestAnimationFrame(instance[AnimationFrameScheduler_rafCallback]);
            }
            else {
                instance[AnimationFrameScheduler_rafIsRunning] = false;
            }
        };
        return instance;
    }, props({
        [AnimationFrameScheduler_host]: none,
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
                pipe(this[AnimationFrameScheduler_host], invoke(SchedulerLike_schedule, pipeLazy(this, invoke(ContinuationSchedulerLike_schedule, continuation)), { delay }), Disposable.addTo(continuation));
            }
            else {
                this[AnimationFrameScheduler_rafQueue][QueueableLike_enqueue](bindMethod(continuation, ContinuationLike_run));
                if (!this[AnimationFrameScheduler_rafIsRunning]) {
                    this[AnimationFrameScheduler_rafIsRunning] = true;
                    requestAnimationFrame(this[AnimationFrameScheduler_rafCallback]);
                }
            }
        },
    }));
})();
