/// <reference types="./__private__.d.ts" />

export const SchedulerTaskLike_continuation = Symbol("SchedulerTaskLike_continuation");
export const SchedulerTaskLike_dueTime = Symbol("SchedulerTaskLike_dueTime");
export const SchedulerTaskLike_id = Symbol("SchedulerTaskLike_id");
export const SchedulerTask_comparator = (a, b) => {
    const diff = a[SchedulerTaskLike_dueTime] - b[SchedulerTaskLike_dueTime];
    return diff !== 0 ? diff : a[SchedulerTaskLike_id] - b[SchedulerTaskLike_id];
};
