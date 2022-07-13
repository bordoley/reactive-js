import { isDisposed } from "../util/DisposableLike";
import { Function1 } from "../util/functions";
import { ContinuationLike, run } from "./ContinuationLike";
import { SchedulerLike, SchedulerLike_inContinuation } from "./SchedulerLike";

export interface SchedulerImplementationLike extends SchedulerLike {
  [SchedulerLike_inContinuation]: boolean;
}

export const runContinuation =
  <TScheduler extends SchedulerImplementationLike>(
    continuation: ContinuationLike,
  ): Function1<TScheduler, TScheduler> =>
  scheduler => {
    if (!isDisposed(continuation)) {
      scheduler[SchedulerLike_inContinuation] = true;
      run(continuation);
      scheduler[SchedulerLike_inContinuation] = false;
    }
    return scheduler;
  };
