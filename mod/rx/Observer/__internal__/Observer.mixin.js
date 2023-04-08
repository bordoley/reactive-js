/// <reference types="./Observer.mixin.d.ts" />

import { include, init, mix, props, } from "../../../__internal__/mixins.js";
import { ObserverMixin_scheduler } from "../../../__internal__/symbols.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { SchedulerLike_now, SchedulerLike_schedule, SchedulerLike_shouldYield, } from "../../../scheduling.js";
import Scheduler_delegatingMixin from "../../../scheduling/Scheduler/__internal__/Scheduler.delegatingMixin.js";
import { ContinuationLike_continuationScheduler, ContinuationSchedulerLike_schedule, PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_shouldYield, } from "../../../scheduling/Scheduler/__internal__/Scheduler.mixin.js";
import { BufferLike_capacity, DisposableLike_isDisposed, QueueableLike_backpressureStrategy, } from "../../../util.js";
import Disposable_addIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addIgnoringChildErrors.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Observer_baseMixin from "./Observer.baseMixin.js";
export { ObserverMixin_scheduler };
const Observer_mixin = /*@__PURE__*/ (() => {
    return returns(mix(include(Observer_baseMixin(), Scheduler_delegatingMixin, Disposable_mixin), function ObserverMixin(instance, scheduler, config) {
        init(Disposable_mixin, instance);
        init(Scheduler_delegatingMixin, instance, scheduler);
        init(Observer_baseMixin(), instance, config);
        instance[ObserverMixin_scheduler] = scheduler;
        pipe(scheduler, Disposable_addIgnoringChildErrors(instance));
        return instance;
    }, props({
        [ObserverMixin_scheduler]: none,
    }), {
        get [SchedulerLike_now]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_now];
        },
        get [PrioritySchedulerImplementationLike_shouldYield]() {
            unsafeCast(this);
            return this[ObserverMixin_scheduler][SchedulerLike_shouldYield];
        },
        [ContinuationSchedulerLike_schedule](continuation, delay) {
            pipe(this, Disposable_addIgnoringChildErrors(continuation));
            if (continuation[DisposableLike_isDisposed]) {
                return;
            }
            continuation[ContinuationLike_continuationScheduler] = this;
            pipe(this[ObserverMixin_scheduler][SchedulerLike_schedule](() => {
                this[PrioritySchedulerImplementationLike_runContinuation](continuation);
            }, { delay }), Disposable_addTo(continuation));
        },
    }));
})();
export default Observer_mixin;
