import {
  add,
  createDisposable,
  dispose,
  DisposableLike,
} from "@reactive-js/disposable";
import { SchedulerContinuationLike, SchedulerLike } from "./interfaces";

class CallbackSchedulerContinuation implements SchedulerContinuationLike {
  readonly add = add;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  constructor(private readonly cb: () => void) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  run(_?: () => boolean) {
    if (!this.isDisposed) {
      try {
        this.cb();
        this.dispose();
      } catch (cause) {
        const error = { cause };
        this.dispose(error);
      }
    }
    return 0;
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
