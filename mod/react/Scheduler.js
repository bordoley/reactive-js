/// <reference types="./Scheduler.d.ts" />

import { unstable_NormalPriority, unstable_now, unstable_scheduleCallback, unstable_shouldYield, } from "scheduler";
import { Map, Map_delete, Map_get, Map_set, } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { bindMethod, newInstance, none, pipe } from "../functions.js";
import * as DefaultScheduler from "../utils/DefaultScheduler.js";
import * as DisposableContainer from "../utils/DisposableContainer.js";
import SchedulerMixin, { SchedulerContinuationLike_dueTime, SchedulerContinuationLike_run, SchedulerMixinHostLike_schedule, SchedulerMixinHostLike_shouldYield, } from "../utils/__mixins__/SchedulerMixin.js";
import { SchedulerLike_now } from "../utils.js";
const createReactScheduler = /*@__PURE__*/ (() => {
    const ReactScheduler_priority = Symbol("ReactScheduler_priority");
    return mixInstanceFactory(include(SchedulerMixin), function ReactPriorityScheduler(priority) {
        init(SchedulerMixin, this);
        this[ReactScheduler_priority] = priority;
        return this;
    }, props({
        [ReactScheduler_priority]: 3,
    }), {
        get [SchedulerLike_now]() {
            return unstable_now();
        },
        get [SchedulerMixinHostLike_shouldYield]() {
            return unstable_shouldYield();
        },
        [SchedulerMixinHostLike_schedule](continuation) {
            const now = this[SchedulerLike_now];
            const dueTime = continuation[SchedulerContinuationLike_dueTime];
            const delay = dueTime - now;
            unstable_scheduleCallback(this[ReactScheduler_priority], bindMethod(continuation, SchedulerContinuationLike_run), delay > 0 ? { delay } : none);
        },
    });
})();
export const getImpl = /*@__PURE__*/ (() => {
    const schedulerCache = newInstance(Map);
    return (priority = unstable_NormalPriority) => schedulerCache[Map_get](priority) ??
        (() => {
            const scheduler = createReactScheduler(priority);
            schedulerCache[Map_set](priority, scheduler);
            return pipe(scheduler, DisposableContainer.onDisposed(_ => schedulerCache[Map_delete](priority)));
        })();
})();
export const get = (priority = unstable_NormalPriority) => getImpl(priority);
DefaultScheduler.set(getImpl(unstable_NormalPriority));
