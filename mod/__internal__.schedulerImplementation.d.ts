import { DisposableLike } from "./disposable.mjs";
import { Function1 } from "./functions.mjs";
import { SchedulerContinuationLike } from "./scheduler.mjs";
interface SchedulerImplementationLike extends DisposableLike {
    inContinuation: boolean;
}
declare const runContinuation: <TScheduler extends SchedulerImplementationLike>(continuation: SchedulerContinuationLike) => Function1<TScheduler, TScheduler>;
export { SchedulerImplementationLike, runContinuation };
