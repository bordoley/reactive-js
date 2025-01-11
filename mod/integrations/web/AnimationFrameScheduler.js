/// <reference types="./AnimationFrameScheduler.d.ts" />

import * as CurrentTime from "../../__internal__/CurrentTime.js";
import { globalObject } from "../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import * as HostScheduler from "../../concurrent/HostScheduler.js";
import { ContinuationLike_dueTime, ContinuationLike_run, } from "../../concurrent/__internal__/Continuation.js";
import { ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, } from "../../concurrent/__internal__/ContinuationScheduler.js";
import CurrentTimeSchedulerMixin from "../../concurrent/__mixins__/CurrentTimeSchedulerMixin.js";
import { SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../concurrent.js";
import { invoke, isNone, isSome, none, pipe, pipeLazy, raiseIfNone, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as Queue from "../../utils/Queue.js";
import { QueueLike_count, QueueLike_dequeue, QueueableLike_enqueue, } from "../../utils.js";
export const get = /*@__PURE__*/ (() => {
    const raf = globalObject.requestAnimationFrame;
    raiseIfNone(raf, "requestAnimationFrame is not defined in the current environment");
    const AnimationFrameScheduler_rafQueue = Symbol("RafScheduler_rafQueue");
    const AnimationFrameScheduler_rafIsRunning = Symbol("RafScheduler_rafIsRunning");
    const rafCallback = () => {
        const startTime = CurrentTime.now();
        const animationFrameScheduler = globalAnimationFrameScheduler;
        const workQueue = animationFrameScheduler[AnimationFrameScheduler_rafQueue];
        animationFrameScheduler[AnimationFrameScheduler_rafQueue] = Queue.create();
        let continuation = none;
        while (((continuation = workQueue[QueueLike_dequeue]()), isSome(continuation))) {
            continuation[ContinuationLike_run]();
            const elapsedTime = CurrentTime.now() - startTime;
            if (elapsedTime > 5 /*ms*/) {
                break;
            }
        }
        const continuationsCount = workQueue[QueueLike_count];
        const newWorkQueue = animationFrameScheduler[AnimationFrameScheduler_rafQueue];
        const newContinuationsCount = newWorkQueue[QueueLike_count];
        if (continuationsCount > 0 && newContinuationsCount === 0) {
            animationFrameScheduler[AnimationFrameScheduler_rafQueue] = workQueue;
        }
        else if (continuationsCount > 0) {
            // Merge the job queues copying the newly enqueued jobs
            // onto the original queue.
            let continuation = none;
            while (((continuation = newWorkQueue[QueueLike_dequeue]()),
                isSome(continuation))) {
                workQueue[QueueableLike_enqueue](continuation);
            }
            animationFrameScheduler[AnimationFrameScheduler_rafQueue] = workQueue;
        }
        const continuationsQueueCount = animationFrameScheduler[AnimationFrameScheduler_rafQueue][QueueLike_count];
        if (continuationsQueueCount > 0) {
            raf(rafCallback);
        }
        else {
            animationFrameScheduler[AnimationFrameScheduler_rafIsRunning] = false;
        }
    };
    const createAnimationFrameScheduler = mixInstanceFactory(include(CurrentTimeSchedulerMixin), function AnimationFrameScheduler(instance) {
        init(CurrentTimeSchedulerMixin, instance);
        instance[AnimationFrameScheduler_rafQueue] =
            Queue.create();
        return instance;
    }, props({
        [AnimationFrameScheduler_rafIsRunning]: false,
        [AnimationFrameScheduler_rafQueue]: none,
    }), {
        [SchedulerLike_maxYieldInterval]: 5,
        [ContinuationSchedulerLike_shouldYield]: true,
        [SchedulerLike_shouldYield]: true,
        [ContinuationSchedulerLike_schedule](continuation) {
            const now = this[SchedulerLike_now];
            const dueTime = continuation[ContinuationLike_dueTime];
            const delay = dueTime - now;
            // The frame time is 16 ms at 60 fps so just ignore the delay
            // if its not more than a frame.
            if (delay > 16) {
                pipe(HostScheduler.get(), invoke(SchedulerLike_schedule, pipeLazy(this, invoke(ContinuationSchedulerLike_schedule, continuation)), { delay }), Disposable.addTo(continuation));
            }
            else {
                this[AnimationFrameScheduler_rafQueue][QueueableLike_enqueue](continuation);
                if (!this[AnimationFrameScheduler_rafIsRunning]) {
                    this[AnimationFrameScheduler_rafIsRunning] = true;
                    raf(rafCallback);
                }
            }
        },
    });
    let globalAnimationFrameScheduler = none;
    return () => {
        if (isNone(globalAnimationFrameScheduler)) {
            const scheduler = createAnimationFrameScheduler();
            globalAnimationFrameScheduler = scheduler;
        }
        return globalAnimationFrameScheduler;
    };
})();
