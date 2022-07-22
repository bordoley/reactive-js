import { ContinuationLike } from '../scheduling/ContinuationLike.js';
import { Function1 } from '../util/functions.js';
declare const SchedulerLike_inContinuation: unique symbol;
declare const runContinuation: <TScheduler extends {
    [SchedulerLike_inContinuation]: boolean;
}>(continuation: ContinuationLike) => Function1<TScheduler, TScheduler>;
export { SchedulerLike_inContinuation, runContinuation };
