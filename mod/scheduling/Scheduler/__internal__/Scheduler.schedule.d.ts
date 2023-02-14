import { SideEffect, Function1 } from "../../../functions.js";
import { ContinuationLike, SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Scheduler_schedule: (f: SideEffect | ContinuationLike, options?: {
    readonly delay?: number;
}) => Function1<SchedulerLike, DisposableLike>;
export { Scheduler_schedule as default };
