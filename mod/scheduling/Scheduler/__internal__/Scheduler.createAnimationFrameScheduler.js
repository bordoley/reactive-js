/// <reference types="./Scheduler.createAnimationFrameScheduler.d.ts" />

import * as CurrentTime from "../../../__internal__/CurrentTime.js";
import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ContinuationSchedulerLike_schedule, } from "../../../__internal__/scheduling.js";
import { DelegatingLike_delegate, QueueLike_dequeue, } from "../../../__internal__/util.js";
import { invoke, isSome, none, pipe, pipeLazy, } from "../../../functions.js";
import { SchedulerLike_now, SchedulerLike_schedule, } from "../../../scheduling.js";
import { CollectionLike_count, QueueableLike_enqueue, } from "../../../util.js";
import Delegating_mixin from "../../../util/Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Queue_createIndexedQueue from "../../../util/Queue/__internal__/Queue.createIndexedQueue.js";
import { PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_scheduleContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "./Scheduler.mixin.js";
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
    return createInstanceFactory(mix(include(PriorityScheduler_mixin, Delegating_mixin()), function AnimationFrameScheduler(instance, delayScheduler) {
        init(PriorityScheduler_mixin, instance, 5);
        init(Delegating_mixin(), instance, delayScheduler);
        return instance;
    }, props({}), {
        get [SchedulerLike_now]() {
            return CurrentTime.now();
        },
        [PrioritySchedulerImplementationLike_shouldYield]: true,
        [PrioritySchedulerImplementationLike_scheduleContinuation](continuation, delay) {
            // The frame time is 16 ms at 60 fps so just ignore the delay
            // if its not more than a frame.
            if (delay > 16) {
                pipe(this[DelegatingLike_delegate], invoke(SchedulerLike_schedule, pipeLazy(this, invoke(ContinuationSchedulerLike_schedule, continuation)), { delay }), Disposable_addTo(continuation));
            }
            else {
                rafQueue[QueueableLike_enqueue](() => this[PrioritySchedulerImplementationLike_runContinuation](continuation));
                if (!rafIsRunning) {
                    rafIsRunning = true;
                    requestAnimationFrame(rafCallback);
                }
            }
        },
    }));
})();
export default Scheduler_createAnimationFrameScheduler;
