import { DisposableLike } from "../../disposable.ts";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation.ts";
import { SchedulerLike } from "./interfaces.ts";

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
  options = { delay: 0 },
) => (scheduler: SchedulerLike): DisposableLike => {
  const continuation = new CallbackSchedulerContinuation(callback);
  scheduler.schedule(continuation, options);
  return continuation;
};
