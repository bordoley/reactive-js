import { DisposableLike } from "../../disposable";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";
import { SchedulerLike } from "./interfaces";

class CallbackSchedulerContinuation extends AbstractSchedulerContinuation {
  constructor(private cb: (scheduler: SchedulerLike) => void) {
    super();
  }

  produce(scheduler: SchedulerLike) {
    this.cb(scheduler);
    this.dispose();
  }
}

export const schedule = (
  callback: (scheduler: SchedulerLike) => void,
  delay = 0,
) => (scheduler: SchedulerLike): DisposableLike => {
  const continuation = new CallbackSchedulerContinuation(callback);
  scheduler.schedule(continuation, delay);
  return continuation;
};
