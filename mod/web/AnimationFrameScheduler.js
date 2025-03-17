/// <reference types="./AnimationFrameScheduler.d.ts" />

import * as CurrentTime from "../__internal__/CurrentTime.js";
import { globalObject } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { invoke, isNone, none, pipe, pipeLazy, raiseIfNone, } from "../functions.js";
import * as Disposable from "../utils/Disposable.js";
import * as HostScheduler from "../utils/HostScheduler.js";
import * as Queue from "../utils/Queue.js";
import CurrentTimeSchedulerMixin from "../utils/__mixins__/CurrentTimeSchedulerMixin.js";
import { SchedulerContinuationLike_dueTime, SchedulerContinuationLike_run, SchedulerMixinHostLike_schedule, SchedulerMixinHostLike_shouldYield, } from "../utils/__mixins__/SchedulerMixin.js";
import { CollectionEnumeratorLike_count, EnumeratorLike_current, EnumeratorLike_moveNext, QueueLike_enqueue, SchedulerLike_maxYieldInterval, SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../utils.js";
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
        while (workQueue[EnumeratorLike_moveNext]()) {
            continuation = workQueue[EnumeratorLike_current];
            continuation[SchedulerContinuationLike_run]();
            const elapsedTime = CurrentTime.now() - startTime;
            if (elapsedTime > 5 /*ms*/) {
                break;
            }
        }
        const continuationsCount = workQueue[CollectionEnumeratorLike_count];
        const newWorkQueue = animationFrameScheduler[AnimationFrameScheduler_rafQueue];
        const newContinuationsCount = newWorkQueue[CollectionEnumeratorLike_count];
        if (continuationsCount > 0 && newContinuationsCount === 0) {
            animationFrameScheduler[AnimationFrameScheduler_rafQueue] = workQueue;
        }
        else if (continuationsCount > 0) {
            // Merge the job queues copying the newly enqueued jobs
            // onto the original queue.
            while (newWorkQueue[EnumeratorLike_moveNext]()) {
                const continuation = newWorkQueue[EnumeratorLike_current];
                workQueue[QueueLike_enqueue](continuation);
            }
            animationFrameScheduler[AnimationFrameScheduler_rafQueue] = workQueue;
        }
        const continuationsQueueCount = animationFrameScheduler[AnimationFrameScheduler_rafQueue][CollectionEnumeratorLike_count];
        if (continuationsQueueCount > 0) {
            raf(rafCallback);
        }
        else {
            animationFrameScheduler[AnimationFrameScheduler_rafIsRunning] = false;
        }
    };
    const createAnimationFrameScheduler = mixInstanceFactory(include(CurrentTimeSchedulerMixin), function AnimationFrameScheduler() {
        init(CurrentTimeSchedulerMixin, this);
        this[AnimationFrameScheduler_rafQueue] =
            Queue.create();
        return this;
    }, props({
        [AnimationFrameScheduler_rafIsRunning]: false,
        [AnimationFrameScheduler_rafQueue]: none,
    }), {
        [SchedulerLike_maxYieldInterval]: 5,
        [SchedulerMixinHostLike_shouldYield]: true,
        [SchedulerLike_shouldYield]: true,
        [SchedulerMixinHostLike_schedule](continuation) {
            const now = this[SchedulerLike_now];
            const dueTime = continuation[SchedulerContinuationLike_dueTime];
            const delay = dueTime - now;
            // The frame time is 16 ms at 60 fps so just ignore the delay
            // if its not more than a frame.
            if (delay > 16) {
                pipe(HostScheduler.get(), invoke(SchedulerLike_schedule, pipeLazy(this, invoke(SchedulerMixinHostLike_schedule, continuation)), { delay }), Disposable.addTo(continuation));
            }
            else {
                this[AnimationFrameScheduler_rafQueue][QueueLike_enqueue](continuation);
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
