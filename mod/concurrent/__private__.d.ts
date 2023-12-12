import { ContinuationLike } from "../concurrent.js";
export declare const SchedulerTaskLike_continuation: unique symbol;
export declare const SchedulerTaskLike_dueTime: unique symbol;
export declare const SchedulerTaskLike_id: unique symbol;
export interface SchedulerTaskLike {
    readonly [SchedulerTaskLike_continuation]: ContinuationLike;
    [SchedulerTaskLike_dueTime]: number;
    [SchedulerTaskLike_id]: number;
}
