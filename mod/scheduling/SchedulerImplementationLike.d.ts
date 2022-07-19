import { Function1 } from '../util/functions.js';
import { ContinuationLike } from "./ContinuationLike.mjs";
import { SchedulerLike_inContinuation } from "./SchedulerLike.mjs";
declare const runContinuation: <TScheduler extends {
    [SchedulerLike_inContinuation]: boolean;
}>(continuation: ContinuationLike) => Function1<TScheduler, TScheduler>;
export { runContinuation };
