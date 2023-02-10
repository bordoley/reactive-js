import { Function2, SideEffect, Function1 } from "../../../functions.js";
import { SchedulerLike, ContinuationLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const createContinuation: Function2<SchedulerLike, SideEffect, ContinuationLike>;
declare const Scheduler_schedule: (f: SideEffect | ContinuationLike, options?: {
    readonly delay?: number;
}) => Function1<SchedulerLike, DisposableLike>;
export { createContinuation, Scheduler_schedule as default };
