import { add, createDisposable, dispose } from "@reactive-js/disposable";
import { SchedulerContinuationLike } from "./interfaces";

export abstract class AbstractSchedulerContinuation implements SchedulerContinuationLike {
  readonly add = add;
  readonly disposable = createDisposable();
  readonly dispose = dispose;

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  abstract produce(shouldYield?: () => boolean): number;

  run(shouldYield?: () => boolean) {
    if (!this.isDisposed) {
      try {
        return this.produce(shouldYield);
      } catch (cause) {
        const error = { cause };
        this.dispose(error);
      }
    }
    return 0; 
  }
}