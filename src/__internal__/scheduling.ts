import { Function1 } from "../functions";
import { ContinuationLike, SchedulerLike_inContinuation } from "../scheduling";
import { run } from "../scheduling/ContinuationLike";
import { isDisposed } from "../util/DisposableLike";

export const runContinuation =
  <TScheduler extends { [SchedulerLike_inContinuation]: boolean }>(
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
