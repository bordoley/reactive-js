/// <reference types="./Scheduler.createAnimationFrameScheduler.d.ts" />

import * as CurrentTime from "../../../__internal__/CurrentTime.js";
import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ContinuationSchedulerLike_schedule, } from "../../../__internal__/scheduling.js";
import { __AnimationFrameScheduler_delayScheduler } from "../../../__internal__/symbols.js";
import { invoke, none, pipe, pipeLazy } from "../../../functions.js";
import { SchedulerLike_now, SchedulerLike_schedule, } from "../../../scheduling.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import { PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_scheduleContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "./Scheduler.mixin.js";
const Scheduler_createAnimationFrameScheduler = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(PriorityScheduler_mixin), function AnimationFrameScheduler(instance, delayScheduler) {
        init(PriorityScheduler_mixin, instance, 5);
        instance[__AnimationFrameScheduler_delayScheduler] = delayScheduler;
        return instance;
    }, props({
        [__AnimationFrameScheduler_delayScheduler]: none,
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
                requestAnimationFrame(pipeLazy(this, invoke(PrioritySchedulerImplementationLike_runContinuation, continuation)));
            }
        },
    }));
})();
export default Scheduler_createAnimationFrameScheduler;
