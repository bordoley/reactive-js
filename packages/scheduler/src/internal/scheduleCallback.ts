import { DisposableLike } from "@reactive-js/disposable";
import { SchedulerLike } from "./interfaces";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";

class CallbackSchedulerContinuation extends AbstractSchedulerContinuation {
  constructor(private readonly cb: () => void) {
    super();
  }

  produce(_?: () => boolean) {
    this.cb();
    return -1;
  }
}

export const scheduleCallback = (
  scheduler: SchedulerLike,
  callback: () => void,
  delay = 0,
): DisposableLike => {
  const continuation = new CallbackSchedulerContinuation(callback);
  scheduler.schedule(continuation, delay);
  return continuation;
};
