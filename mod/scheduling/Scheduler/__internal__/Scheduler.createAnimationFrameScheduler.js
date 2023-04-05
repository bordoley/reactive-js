/// <reference types="./Scheduler.createAnimationFrameScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe, raiseWithDebugMessage } from "../../../functions.js";
import { SchedulerLike_now } from "../../../scheduling.js";
import { DisposableLike_isDisposed } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import { ContinuationLike_continuationScheduler, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "./Scheduler.mixin.js";
const Scheduler_createAnimationFrameScheduler = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(Disposable_mixin, PriorityScheduler_mixin), function AnimationFrameScheduler(instance) {
        init(Disposable_mixin, instance);
        init(PriorityScheduler_mixin, instance, 5);
        return instance;
    }, props({
        [SchedulerLike_now]: 0,
    }), {
        [PrioritySchedulerImplementationLike_shouldYield]: true,
        [ContinuationSchedulerLike_schedule](continuation, delay) {
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            continuation[ContinuationLike_continuationScheduler] = this;
            if (delay > 0) {
                raiseWithDebugMessage("Cannot schedule delayed continuations on animation frame scheduler");
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
