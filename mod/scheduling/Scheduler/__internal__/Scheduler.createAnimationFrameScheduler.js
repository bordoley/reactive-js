/// <reference types="./Scheduler.createAnimationFrameScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { AnimationFrameScheduler_delayScheduler, SchedulerLike_schedule, } from "../../../__internal__/symbols.js";
import { invoke, none, pipe, pipeLazy } from "../../../functions.js";
import { SchedulerLike_now } from "../../../scheduling.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import { ContinuationLike_continuationScheduler, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "./Scheduler.mixin.js";
const Scheduler_createAnimationFrameScheduler = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin, PriorityScheduler_mixin), function AnimationFrameScheduler(instance, delayScheduler) {
        init(Disposable_mixin, instance);
        init(PriorityScheduler_mixin, instance, 5);
        instance[AnimationFrameScheduler_delayScheduler] = delayScheduler;
        return instance;
    }, props({
        [SchedulerLike_now]: 0,
        [AnimationFrameScheduler_delayScheduler]: none,
    }), {
        [PrioritySchedulerImplementationLike_shouldYield]: true,
        [ContinuationSchedulerLike_schedule](continuation, delay) {
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            continuation[ContinuationLike_continuationScheduler] = this;
            // The frame time is 16 ms at 60 fps so just ignore the delay
            // if its not more than a frame.
            if (delay > 16) {
                pipe(this[AnimationFrameScheduler_delayScheduler], invoke(SchedulerLike_schedule, pipeLazy(this, invoke(ContinuationSchedulerLike_schedule, continuation, 0)), { delay }), Disposable_addTo(continuation));
            }
            else {
                requestAnimationFrame(time => {
                    this[SchedulerLike_now] = time;
                    this[PrioritySchedulerImplementationLike_runContinuation](continuation);
                });
            }
        },
    }));
})();
export default Scheduler_createAnimationFrameScheduler;
