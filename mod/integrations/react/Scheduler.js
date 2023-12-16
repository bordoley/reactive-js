/// <reference types="./Scheduler.d.ts" />

import { unstable_NormalPriority, unstable_cancelCallback, unstable_now, unstable_scheduleCallback, unstable_shouldYield, } from "scheduler";
import { createInstanceFactory, include, init, mix, props, } from "../../__internal__/mixins.js";
import { SchedulerLike_now } from "../../concurrent.js";
import ContinuationSchedulerMixin, { ContinuationLike_run, ContinuationSchedulerImplementationLike_scheduleContinuation, ContinuationSchedulerImplementationLike_shouldYield, } from "../../concurrent/__mixins__/ContinuationSchedulerMixin.js";
import { newInstance, none, pipe, pipeLazy } from "../../functions.js";
import { DisposableLike_dispose } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
const createReactScheduler = /*@__PURE__*/ (() => {
    return createInstanceFactory(mix(include(ContinuationSchedulerMixin), function ReactPriorityScheduler(instance, priority) {
        init(ContinuationSchedulerMixin, instance, 300);
        instance.priority = priority;
        return instance;
    }, props({
        priority: 3,
    }), {
        get [SchedulerLike_now]() {
            return unstable_now();
        },
        get [ContinuationSchedulerImplementationLike_shouldYield]() {
            return unstable_shouldYield();
        },
        [ContinuationSchedulerImplementationLike_scheduleContinuation](continuation, delay) {
            const callback = () => {
                callbackNodeDisposable[DisposableLike_dispose]();
                continuation[ContinuationLike_run]();
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
