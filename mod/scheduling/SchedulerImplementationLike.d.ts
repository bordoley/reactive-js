import { Function1 } from '../util/functions.js';
import { ContinuationLike } from "./ContinuationLike.mjs";
import { SchedulerLike, SchedulerLike_inContinuation } from "./SchedulerLike.mjs";
interface SchedulerImplementationLike extends SchedulerLike {
    [SchedulerLike_inContinuation]: boolean;
}
declare const runContinuation: <TScheduler extends SchedulerImplementationLike>(continuation: ContinuationLike) => Function1<TScheduler, TScheduler>;
export { SchedulerImplementationLike, runContinuation };
