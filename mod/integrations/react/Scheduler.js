/// <reference types="./Scheduler.d.ts" />

import { unstable_NormalPriority, unstable_cancelCallback, unstable_now, unstable_scheduleCallback, unstable_shouldYield, } from "scheduler";
import { Map_get, Map_set } from "../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import { SchedulerLike_now } from "../../concurrent.js";
import { ContinuationLike_dueTime, ContinuationLike_run, } from "../../concurrent/__internal__/Continuation.js";
import { ContinuationSchedulerLike_schedule, ContinuationSchedulerLike_shouldYield, } from "../../concurrent/__internal__/ContinuationScheduler.js";
import SchedulerMixin from "../../concurrent/__mixins__/SchedulerMixin.js";
import { newInstance, none, pipe, pipeLazy } from "../../functions.js";
import { DisposableLike_dispose } from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
const createReactScheduler = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(SchedulerMixin), function ReactPriorityScheduler(instance, priority) {
        init(SchedulerMixin, instance, 300);
        instance.priority = priority;
        return instance;
    }, props({
        priority: 3,
    }), {
        get [SchedulerLike_now]() {
            return unstable_now();
        },
        get [ContinuationSchedulerLike_shouldYield]() {
            return unstable_shouldYield();
        },
        [ContinuationSchedulerLike_schedule](continuation) {
            const callback = () => {
                callbackNodeDisposable[DisposableLike_dispose]();
                continuation[ContinuationLike_run]();
            };
            const now = this[SchedulerLike_now];
            const dueTime = continuation[ContinuationLike_dueTime];
            const delay = dueTime - now;
            const callbackNode = unstable_scheduleCallback(this.priority, callback, delay > 0 ? { delay } : none);
            const callbackNodeDisposable = pipe(Disposable.create(), Disposable.onDisposed(pipeLazy(callbackNode, unstable_cancelCallback)), Disposable.addTo(continuation));
        },
    });
})();
export const get = /*@__PURE__*/ (() => {
    const schedulerCache = newInstance(Map);
    return (priority = unstable_NormalPriority) => schedulerCache[Map_get](priority) ??
        (() => {
            const scheduler = createReactScheduler(priority);
            schedulerCache[Map_set](priority, scheduler);
            return scheduler;
        })();
})();
