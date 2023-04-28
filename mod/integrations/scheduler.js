/// <reference types="./scheduler.d.ts" />

import { unstable_NormalPriority, unstable_cancelCallback, unstable_now, unstable_scheduleCallback, unstable_shouldYield, } from "scheduler";
import { createInstanceFactory, include, init, mix, props, } from "../__internal__/mixins.js";
import { ContinuationLike_priority, } from "../__internal__/scheduling.js";
import { newInstance, none, pipe, pipeLazy } from "../functions.js";
import { SchedulerLike_now, } from "../scheduling.js";
import * as PriorityScheduler from "../scheduling/PriorityScheduler.js";
import { PrioritySchedulerImplementationLike_runContinuation, PrioritySchedulerImplementationLike_scheduleContinuation, PrioritySchedulerImplementationLike_shouldYield, PriorityScheduler_mixin, } from "../scheduling/Scheduler/__internal__/Scheduler.mixin.js";
import { DisposableLike_dispose } from "../util.js";
import * as Disposable from "../util/Disposable.js";
const createSchedulerWithPriority = /*@__PURE__*/ (() => {
    const createPriorityScheduler = createInstanceFactory(mix(include(PriorityScheduler_mixin), function ReactPriorityScheduler(instance) {
        init(PriorityScheduler_mixin, instance, 300);
        return instance;
    }, props({}), {
        get [SchedulerLike_now]() {
            return unstable_now();
        },
        get [PrioritySchedulerImplementationLike_shouldYield]() {
            return unstable_shouldYield();
        },
        [PrioritySchedulerImplementationLike_scheduleContinuation](continuation, delay) {
            const priority = continuation[ContinuationLike_priority];
            const callback = () => {
                callbackNodeDisposable[DisposableLike_dispose]();
                this[PrioritySchedulerImplementationLike_runContinuation](continuation);
            };
            const callbackNode = unstable_scheduleCallback(priority, callback, delay > 0 ? { delay } : none);
            const callbackNodeDisposable = pipe(Disposable.create(), Disposable.onDisposed(pipeLazy(callbackNode, unstable_cancelCallback)), Disposable.addTo(continuation));
        },
    }));
    return (priority) => {
        const priorityScheduler = createPriorityScheduler();
        return pipe(priorityScheduler, PriorityScheduler.toScheduler(priority), Disposable.bindTo(priorityScheduler));
    };
})();
export const getScheduler = /*@__PURE__*/ (() => {
    const schedulerCache = newInstance(Map);
    return (options = {}) => {
        const priority = options.priority ?? unstable_NormalPriority;
        return (schedulerCache.get(priority) ??
            (() => {
                const scheduler = createSchedulerWithPriority(priority);
                schedulerCache.set(priority, scheduler);
                return scheduler;
            })());
    };
})();
