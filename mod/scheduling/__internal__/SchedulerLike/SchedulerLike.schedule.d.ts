import { Function2, SideEffect, Function1 } from "../../../functions.mjs";
import { SchedulerLike, ContinuationLike } from "../../../scheduling.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const createContinuation: Function2<SchedulerLike, SideEffect, ContinuationLike>;
declare const schedule: (f: SideEffect | ContinuationLike, options?: {
    readonly delay?: number;
}) => Function1<SchedulerLike, DisposableLike>;
export { createContinuation, schedule };
