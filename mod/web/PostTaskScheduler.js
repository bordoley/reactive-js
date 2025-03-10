/// <reference types="./PostTaskScheduler.d.ts" />

import * as DisposableContainer from "..//utils/DisposableContainer.js";
import { Map, Map_delete, Map_get, Map_set, } from "../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, } from "../__internal__/mixins.js";
import { bindMethod, ignore, newInstance, pipe } from "../functions.js";
import CurrentTimeSchedulerMixin from "../utils/__mixins__/CurrentTimeSchedulerMixin.js";
import { SchedulerContinuationLike_dueTime, SchedulerContinuationLike_run, SchedulerMixinHostLike_schedule, SchedulerMixinHostLike_shouldYield, } from "../utils/__mixins__/SchedulerMixin.js";
import { SchedulerLike_maxYieldInterval, SchedulerLike_now, } from "../utils.js";
const createPostTaskScheduler = /*@__PURE__*/ (() => {
    const postTaskScheduler = globalThis.scheduler;
    const PostTaskScheduler_priority = Symbol("PostTaskScheduler_priority");
    return mixInstanceFactory(include(CurrentTimeSchedulerMixin), function PostTaskScheduler(priority) {
        init(CurrentTimeSchedulerMixin, this);
        this[PostTaskScheduler_priority] = priority;
        return this;
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
                delay,
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
