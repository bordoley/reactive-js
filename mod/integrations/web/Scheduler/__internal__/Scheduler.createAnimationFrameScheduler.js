/// <reference types="./Scheduler.createAnimationFrameScheduler.d.ts" />

import Delegating_mixin from "../../../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../../Disposable/__internal__/Disposable.addTo.js";
import Queue_createIndexedQueue from "../../../../Queue/__internal__/Queue.createIndexedQueue.js";
import { SchedulerImplementationLike_runContinuation, SchedulerImplementationLike_scheduleContinuation, SchedulerImplementationLike_shouldYield, SchedulerImplementation_mixin, } from "../../../../Scheduler/__internal__/SchedulerImplementation.mixin.js";
import * as CurrentTime from "../../../../__internal__/CurrentTime.js";
import { MAX_SAFE_INTEGER } from "../../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../../__internal__/mixins.js";
import { ContinuationSchedulerLike_schedule, DelegatingLike_delegate, QueueLike_dequeue, } from "../../../../__internal__/types.js";
import { invoke, isSome, none, pipe, pipeLazy, } from "../../../../functions.js";
import { CollectionLike_count, QueueableLike_enqueue, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../../types.js";
const Scheduler_createAnimationFrameScheduler = /*@__PURE__*/ (() => {
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
    return createInstanceFactory(mix(include(SchedulerImplementation_mixin, Delegating_mixin()), function AnimationFrameScheduler(instance, delayScheduler) {
        init(SchedulerImplementation_mixin, instance, 5);
        init(Delegating_mixin(), instance, delayScheduler);
        return instance;
    }, props({}), {
        get [SchedulerLike_now]() {
            return CurrentTime.now();
        },
        [SchedulerImplementationLike_shouldYield]: true,
        [SchedulerLike_shouldYield]: true,
        [SchedulerImplementationLike_scheduleContinuation](continuation, delay) {
            // The frame time is 16 ms at 60 fps so just ignore the delay
            // if its not more than a frame.
            if (delay > 16) {
                pipe(this[DelegatingLike_delegate], invoke(SchedulerLike_schedule, pipeLazy(this, invoke(ContinuationSchedulerLike_schedule, continuation)), { delay }), Disposable_addTo(continuation));
            }
            else {
                rafQueue[QueueableLike_enqueue](() => this[SchedulerImplementationLike_runContinuation](continuation));
                if (!rafIsRunning) {
                    rafIsRunning = true;
                    requestAnimationFrame(rafCallback);
                }
            }
        },
    }));
})();
export default Scheduler_createAnimationFrameScheduler;
