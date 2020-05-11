import { DisposableLike, dispose } from "../../disposable";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";
import { SchedulerLike } from "./interfaces";
import { SideEffect1 } from "../../functions";

class CallbackSchedulerContinuation extends AbstractSchedulerContinuation {
  constructor(private cb: SideEffect1<SchedulerLike>) {
    super();
  }

  produce(scheduler: SchedulerLike) {
    this.cb(scheduler);
    dispose(this);
  }
}

export const schedule = (
  callback: SideEffect1<SchedulerLike>,
  options = { delay: 0 },
) => (scheduler: SchedulerLike): DisposableLike => {
  const continuation = new CallbackSchedulerContinuation(callback);
  scheduler.schedule(continuation, options);
  return continuation;
};
