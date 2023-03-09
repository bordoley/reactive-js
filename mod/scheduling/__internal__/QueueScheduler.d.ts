import { Function1, SideEffect } from "../../functions.js";
import { PauseableSchedulerLike, PrioritySchedulerLike, SchedulerLike, SchedulerLike_schedule } from "../../scheduling.js";
import { DisposableLike } from "../../util.js";
export type QueueSchedulerOptions = {
    readonly priority?: number;
    readonly delay?: number;
};
export interface QueueSchedulerLike extends DisposableLike, PauseableSchedulerLike, PrioritySchedulerLike {
    [SchedulerLike_schedule](effect: SideEffect, options?: QueueSchedulerOptions): DisposableLike;
}
export declare const create: Function1<SchedulerLike, QueueSchedulerLike>;
