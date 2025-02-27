/// <reference types="./PostTaskScheduler.d.ts" />

import { Map, Map_delete, Map_get, Map_set, } from "../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../../__internal__/mixins.js";
import CurrentTimeSchedulerMixin from "../../concurrent/__mixins__/CurrentTimeSchedulerMixin.js";
import { SchedulerContinuationLike_dueTime, SchedulerContinuationLike_run, SchedulerMixinHostLike_schedule, SchedulerMixinHostLike_shouldYield, } from "../../concurrent/__mixins__/SchedulerMixin.js";
import { SchedulerLike_maxYieldInterval, SchedulerLike_now, } from "../../concurrent.js";
import { bindMethod, ignore, newInstance, none, pipe, } from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
const createPostTaskScheduler = /*@__PURE__*/ (() => {
    const postTaskScheduler = globalThis.scheduler;
    const PostTaskScheduler_priority = Symbol("PostTaskScheduler_priority");
    return mixInstanceFactory(include(CurrentTimeSchedulerMixin), function PostTaskScheduler(instance, priority) {
        init(CurrentTimeSchedulerMixin, instance);
        instance[PostTaskScheduler_priority] = priority;
        return instance;
    }, props({
        [PostTaskScheduler_priority]: "user-visible",
    }), {
        [SchedulerLike_maxYieldInterval]: 5,
        [SchedulerMixinHostLike_shouldYield]: false,
        [SchedulerMixinHostLike_schedule](continuation) {
            const now = this[SchedulerLike_now];
            const dueTime = continuation[SchedulerContinuationLike_dueTime];
            const delay = dueTime - now;
            const signal = pipe(continuation, DisposableContainer.toAbortSignal);
            postTaskScheduler
                .postTask(bindMethod(continuation, SchedulerContinuationLike_run), {
                delay: delay >= 15 ? 15 : none,
                priority: this[PostTaskScheduler_priority],
                signal,
            })
                .catch(ignore);
        },
    });
})();
export const get = /*@__PURE__*/ (() => {
    const schedulerCache = newInstance(Map);
    return (priority = "user-visible") => schedulerCache[Map_get](priority) ??
        (() => {
            const scheduler = createPostTaskScheduler(priority);
            schedulerCache[Map_set](priority, scheduler);
            return pipe(scheduler, DisposableContainer.onDisposed(_ => schedulerCache[Map_delete](priority)));
        })();
})();
