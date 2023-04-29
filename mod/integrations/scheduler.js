/// <reference types="./scheduler.d.ts" />

import { unstable_NormalPriority, unstable_cancelCallback, unstable_now, unstable_scheduleCallback, unstable_shouldYield, } from "scheduler";
import { createInstanceFactory, include, init, mix, props, } from "../__internal__/mixins.js";
import { newInstance, none, pipe, pipeLazy } from "../functions.js";
import { SchedulerLike_now } from "../scheduling.js";
import { SchedulerImplementationLike_runContinuation, SchedulerImplementationLike_scheduleContinuation, SchedulerImplementationLike_shouldYield, SchedulerImplementation_mixin, } from "../scheduling/Scheduler/__internal__/SchedulerImplementation.mixin.js";
import { DisposableLike_dispose } from "../util.js";
import * as Disposable from "../util/Disposable.js";
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
export const getScheduler = /*@__PURE__*/ (() => {
    const schedulerCache = newInstance(Map);
    return (options = {}) => {
        const priority = options.priority ?? unstable_NormalPriority;
        return (schedulerCache.get(priority) ??
            (() => {
                const scheduler = createReactScheduler(priority);
                schedulerCache.set(priority, scheduler);
                return scheduler;
            })());
    };
})();
