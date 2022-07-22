import { ContinuationLike, run } from "../scheduling/ContinuationLike";
import { isDisposed } from "../util/DisposableLike";
import { Function1 } from "../util/functions";

export const SchedulerLike_inContinuation = Symbol(
  "SchedulerLike_inContinuation",
);

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
