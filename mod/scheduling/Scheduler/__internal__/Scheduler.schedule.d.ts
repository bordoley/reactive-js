import { Function1, SideEffect } from "../../../functions.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Scheduler_schedule: (f: SideEffect, options?: {
    readonly delay?: number;
}) => Function1<SchedulerLike, DisposableLike>;
export default Scheduler_schedule;
