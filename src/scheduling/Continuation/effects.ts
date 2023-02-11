import { newInstance } from "../../functions";
import { SchedulerLike_inContinuation } from "../../scheduling";
import shouldYield from "../Scheduler/__internal__/Scheduler.shouldYield";
import * as CurrentScheduler from "../__internal__/CurrentScheduler";
import YieldError from "../__internal__/YieldError";

export const __yield = (delay = 0) => {
  const scheduler = CurrentScheduler.get();
  scheduler[SchedulerLike_inContinuation];

  if (
    scheduler[SchedulerLike_inContinuation] &&
    (delay > 0 || shouldYield(scheduler))
  ) {
    throw newInstance(YieldError, delay);
  }
};
