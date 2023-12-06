/// <reference types="./AnimationFrameScheduler.create.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../../__internal__/mixins.js";
import { CollectionLike_count } from "../../../../collections.js";
import { ContinuationSchedulerLike_schedule, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../../concurrent.js";
import * as CurrentTime from "../../../../concurrent/__internal__/CurrentTime.js";
import ContinuationSchedulerMixin, { ContinuationSchedulerInstanceLike_scheduleContinuation, ContinuationSchedulerInstanceLike_shouldYield, ContinuationSchedulerMixinLike_runContinuation, } from "../../../../concurrent/__mixins__/ContinuationSchedulerMixin.js";
import { invoke, isSome, none, pipe, pipeLazy, } from "../../../../functions.js";
import { QueueLike_dequeue, QueueableLike_enqueue, } from "../../../../utils.js";
import * as Disposable from "../../../../utils/Disposable.js";
import Queue_createIndexedQueue from "../../../../utils/Queue/__internal__/Queue.createIndexedQueue.js";
const AnimationFrameScheduler_host = Symbol("AnimationFrameScheduler_host");
const AnimationFrameScheduler_create = 
/*@__PURE__*/ (() => {
    let rafQueue = Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow");
    let rafIsRunning = false;
    const rafCallback = () => {
        const startTime = CurrentTime.now();
        const workQueue = rafQueue;
        rafQueue = Queue_createIndexedQueue(MAX_SAFE_INTEGER, "overflow");
        let job = none;
        while (((job = workQueue[QueueLike_dequeue]()), isSome(job))) {
            job();
            const elapsedTime = CurrentTime.now() - startTime;
            if (elapsedTime > 5 /*ms*/) {
                break;
            }
        }
        const jobsCount = workQueue[CollectionLike_count];
        const newWorkQueue = rafQueue;
        const newJobsCount = newWorkQueue[CollectionLike_count];
        if (jobsCount > 0 && newJobsCount === 0) {
            rafQueue = workQueue;
        }
        else if (jobsCount > 0) {
            // Merge the job queues copying the newly enqueued jobs
            // onto the original queue.
            let job = none;
            while (((job = newWorkQueue[QueueLike_dequeue]()), isSome(job))) {
                workQueue[QueueableLike_enqueue](job);
            }
            rafQueue = workQueue;
        }
        const workQueueCount = rafQueue[CollectionLike_count];
        if (workQueueCount > 0) {
            requestAnimationFrame(rafCallback);
        }
        else {
            rafIsRunning = false;
        }
    };
    return createInstanceFactory(mix(include(ContinuationSchedulerMixin), function AnimationFrameScheduler(instance, hostScheduler) {
        init(ContinuationSchedulerMixin, instance, 5);
        instance[AnimationFrameScheduler_host] = hostScheduler;
        return instance;
    }, props({
        [AnimationFrameScheduler_host]: none,
    }), {
        get [SchedulerLike_now]() {
            return CurrentTime.now();
        },
        [ContinuationSchedulerInstanceLike_shouldYield]: true,
        [SchedulerLike_shouldYield]: true,
        [ContinuationSchedulerInstanceLike_scheduleContinuation](continuation, delay) {
            // The frame time is 16 ms at 60 fps so just ignore the delay
            // if its not more than a frame.
            if (delay > 16) {
                pipe(this[AnimationFrameScheduler_host], invoke(SchedulerLike_schedule, pipeLazy(this, invoke(ContinuationSchedulerLike_schedule, continuation)), { delay }), Disposable.addTo(continuation));
            }
            else {
                rafQueue[QueueableLike_enqueue](() => this[ContinuationSchedulerMixinLike_runContinuation](continuation));
                if (!rafIsRunning) {
                    rafIsRunning = true;
                    requestAnimationFrame(rafCallback);
                }
            }
        },
    }));
})();
export default AnimationFrameScheduler_create;
