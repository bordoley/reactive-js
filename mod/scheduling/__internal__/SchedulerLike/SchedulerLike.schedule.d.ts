import { Function2, SideEffect, Function1 } from "../../../functions.js";
import { SchedulerLike, ContinuationLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const createContinuation: Function2<SchedulerLike, SideEffect, ContinuationLike>;
declare const SchedulerLike__schedule: (f: SideEffect | ContinuationLike, options?: {
    readonly delay?: number;
}) => Function1<SchedulerLike, DisposableLike>;
export { createContinuation, SchedulerLike__schedule as default };
