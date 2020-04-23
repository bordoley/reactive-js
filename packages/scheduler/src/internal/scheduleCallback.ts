import { DisposableLike } from "@reactive-js/disposable";
import { SchedulerLike, CallbackContinuation } from "./interfaces";
import { AbstractSchedulerContinuation } from "./abstractSchedulerContinuation";
import { isSome } from "@reactive-js/option";

class CallbackSchedulerContinuation extends AbstractSchedulerContinuation {
  constructor(private cb: CallbackContinuation) {
    super();
  }

  produce(shouldYield?: () => boolean) {
    const result = this.cb(shouldYield);
    if (result) {
      this.cb = result;
    }
    return isSome(result) ? 0 : -1;
  }
}

export const schedule = (callback: CallbackContinuation, delay = 0) => (
  scheduler: SchedulerLike,
): DisposableLike => {
  const continuation = new CallbackSchedulerContinuation(callback);
  scheduler.schedule(continuation, delay);
  return continuation;
};
