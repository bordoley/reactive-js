import { DisposableLike, dispose } from "../../disposable";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";
import { SchedulerLike } from "./interfaces";

class CallbackSchedulerContinuation extends AbstractSchedulerContinuation {
  constructor(private cb: (scheduler: SchedulerLike) => void) {
    super();
  }

  produce(scheduler: SchedulerLike) {
    this.cb(scheduler);
    dispose(this);
  }
}

export const schedule = (
  callback: (scheduler: SchedulerLike) => void,
  options = { delay: 0 },
) => (scheduler: SchedulerLike): DisposableLike => {
  const continuation = new CallbackSchedulerContinuation(callback);
  scheduler.schedule(continuation, options);
  return continuation;
};
