import { Function2, Optional, SideEffect } from "../../../functions.js";
import { ContinuationLike, SchedulerLike } from "../../../scheduling.js";
export declare const Continuation__getCurrentContinuation: () => Optional<ContinuationLike>;
export declare const Continuation__yield: (delay?: number) => void;
export declare const Continuation__now: () => number;
declare const Continuation_create: Function2<SchedulerLike, SideEffect, ContinuationLike>;
export default Continuation_create;
