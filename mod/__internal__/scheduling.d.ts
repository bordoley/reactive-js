import { ContinuationLike } from "../scheduling/ContinuationLike.mjs";
import { Function1 } from "../util/functions.mjs";
declare const SchedulerLike_inContinuation: unique symbol;
declare const runContinuation: <TScheduler extends {
    [SchedulerLike_inContinuation]: boolean;
}>(continuation: ContinuationLike) => Function1<TScheduler, TScheduler>;
export { SchedulerLike_inContinuation, runContinuation };
