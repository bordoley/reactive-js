import {
  add,
  createDisposable,
  dispose,
  DisposableLike,
} from "@reactive-js/disposable";
import { OperatorLike } from "@reactive-js/pipe";
import { SchedulerContinuationLike, SchedulerLike } from "./interfaces";

class CallbackSchedulerContinuation implements SchedulerContinuationLike {
  readonly add = add;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  constructor(private readonly cb: () => void, readonly delay: number) {}

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
  }
}

export const scheduleCallback = (
  callback: () => void,
  delay = 0,
): OperatorLike<SchedulerLike, DisposableLike> => scheduler => {
  const continuation = new CallbackSchedulerContinuation(callback, delay);
  scheduler.schedule(continuation);
  return continuation;
};
