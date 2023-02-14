import { Function2, SideEffect } from "../../../functions.js";
import { SchedulerLike, ContinuationLike } from "../../../scheduling.js";
declare const Continuation__yield: (delay?: number) => void;
declare const Continuation_create: Function2<SchedulerLike, SideEffect, ContinuationLike>;
export { Continuation__yield, Continuation_create as default };
