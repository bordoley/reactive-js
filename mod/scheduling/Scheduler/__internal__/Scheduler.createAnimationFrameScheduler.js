/// <reference types="./Scheduler.createAnimationFrameScheduler.d.ts" />

import { createInstanceFactory, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import { SchedulerLike_now } from "../../../scheduling.js";
import { DisposableLike_dispose, DisposableLike_isDisposed, } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_create from "../../../util/Disposable/__internal__/Disposable.create.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import { ContinuationLike_continuationScheduler, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "./Scheduler.mixin.js";
const Scheduler_createAnimationFrameScheduler = /*@__PURE__*/ (() => {
    const scheduleImmediate = (scheduler, continuation) => {
        requestAnimationFrame(time => {
            scheduler[SchedulerLike_now] = time;
            scheduler[PrioritySchedulerImplementationLike_runContinuation](continuation);
        });
    };
    const runContinuation = (scheduler, continuation, immmediateOrTimerDisposable) => {
        // clear the immediateOrTimer disposable
        immmediateOrTimerDisposable[DisposableLike_dispose]();
        scheduleImmediate(scheduler, continuation);
    };
    const scheduleDelayed = (scheduler, continuation, delay) => {
        const disposable = pipe(Disposable_create(), Disposable_addTo(continuation), Disposable_onDisposed(_ => clearTimeout(timeout)));
        const timeout = setTimeout(runContinuation, delay, scheduler, continuation, disposable);
    };
    return createInstanceFactory(mix(include(PriorityScheduler_mixin), function AnimationFrameScheduler(instance) {
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
                scheduleDelayed(this, continuation, delay);
            }
            else {
                scheduleImmediate(this, continuation);
            }
        },
    }));
})();
export default Scheduler_createAnimationFrameScheduler;
