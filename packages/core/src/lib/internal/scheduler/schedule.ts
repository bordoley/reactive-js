import { DisposableLike, dispose } from "../../disposable";
import { SideEffect1 } from "../../functions";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";
import {
  PrioritySchedulerLike,
  SchedulerLike,
  SchedulerContinuationLike,
} from "./interfaces";

class CallbackSchedulerContinuation extends AbstractSchedulerContinuation {
  constructor(private cb: SideEffect1<SchedulerLike>) {
    super();
  }

  continueUnsafe(scheduler: SchedulerLike) {
    this.cb(scheduler);
    dispose(this);
  }
}

export const schedule = (
  scheduler: SchedulerLike,
  schedulerContinuation: SideEffect1<SchedulerLike> | SchedulerContinuationLike,
  options = { delay: 0 },
): DisposableLike => {
  const continuation =
    schedulerContinuation instanceof Function
      ? new CallbackSchedulerContinuation(schedulerContinuation)
      : schedulerContinuation;
  scheduler.schedule(continuation, options);
  return continuation;
};

export const scheduleWithPriority = (
  scheduler: PrioritySchedulerLike,
  schedulerContinuation: SideEffect1<SchedulerLike> | SchedulerContinuationLike,
  options: { priority: number; delay?: number },
): DisposableLike => {
  const continuation =
    schedulerContinuation instanceof Function
      ? new CallbackSchedulerContinuation(schedulerContinuation)
      : schedulerContinuation;
  scheduler.schedule(continuation, options);
  return continuation;
};
