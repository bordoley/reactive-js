/// <reference types="./Scheduler.d.ts" />

import { unstable_NormalPriority, unstable_cancelCallback, unstable_now, unstable_scheduleCallback, unstable_shouldYield, } from "scheduler";
import * as Disposable from "../../Disposable.js";
import { SchedulerImplementationLike_runContinuation, SchedulerImplementationLike_scheduleContinuation, SchedulerImplementationLike_shouldYield, SchedulerImplementation_mixin, } from "../../Scheduler/__internal__/SchedulerImplementation.mixin.js";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { newInstance, none, pipe, pipeLazy } from "../../functions.js";
import { DisposableLike_dispose, SchedulerLike_now, } from "../../types.js";
const createReactScheduler = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(SchedulerImplementation_mixin), function ReactPriorityScheduler(instance, priority) {
        init(SchedulerImplementation_mixin, instance, 300);
        instance.priority = priority;
        return instance;
    }, props({
        priority: 3,
    }), {
        get [SchedulerLike_now]() {
            return unstable_now();
        },
        get [SchedulerImplementationLike_shouldYield]() {
            return unstable_shouldYield();
        },
        [SchedulerImplementationLike_scheduleContinuation](continuation, delay) {
            const callback = () => {
                callbackNodeDisposable[DisposableLike_dispose]();
                this[SchedulerImplementationLike_runContinuation](continuation);
            };
            const callbackNode = unstable_scheduleCallback(this.priority, callback, delay > 0 ? { delay } : none);
            const callbackNodeDisposable = pipe(Disposable.create(), Disposable.onDisposed(pipeLazy(callbackNode, unstable_cancelCallback)), Disposable.addTo(continuation));
        },
    }));
})();
export const get = /*@__PURE__*/ (() => {
    const schedulerCache = newInstance(Map);
    return (priority = unstable_NormalPriority) => schedulerCache.get(priority) ??
        (() => {
            const scheduler = createReactScheduler(priority);
            schedulerCache.set(priority, scheduler);
            return scheduler;
        })();
})();
