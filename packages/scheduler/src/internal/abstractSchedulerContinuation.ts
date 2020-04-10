import {
  add,
  createDisposable,
  dispose,
  ErrorLike,
} from "@reactive-js/disposable";
import {
  SchedulerContinuationLike,
  SchedulerContinuationRunStatusChangedListenerLike,
} from "./interfaces";

const notifyListeners = (
  listeners: Set<SchedulerContinuationRunStatusChangedListenerLike>,
  state: boolean,
) => {
  for (const listener of listeners) {
    listener.onRunStatusChanged(state);
  }
};

export abstract class AbstractSchedulerContinuation
  implements SchedulerContinuationLike {
  readonly add = add;
  private isActive = false;
  readonly disposable = createDisposable(() => {
    if (!this.isActive) {
      this.listeners.clear();
    }
  });
  readonly dispose = dispose;
  private readonly listeners: Set<
    SchedulerContinuationRunStatusChangedListenerLike
  > = new Set();

  addListener(
    _ev: "onRunStatusChanged",
    listener: SchedulerContinuationRunStatusChangedListenerLike,
  ): void {
    if (!this.isDisposed) {
      this.listeners.add(listener);
    }
  }

  removeListener(
    _ev: "onRunStatusChanged",
    listener: SchedulerContinuationRunStatusChangedListenerLike,
  ): void {
    this.listeners.delete(listener);
  }

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  /**
   * Return < 0 to signal done.
   * @param shouldYield
   */
  abstract produce(shouldYield?: () => boolean): number;

  run(shouldYield?: () => boolean) {
    const listeners = this.listeners;
    let result = -1;
    let error: ErrorLike | undefined = undefined;

    if (!this.isDisposed) {
      this.isActive = true;
      notifyListeners(listeners, true);
      try {
        result = this.produce(shouldYield);
      } catch (cause) {
        error = { cause };
      }
      this.isActive = false;
      notifyListeners(listeners, false);
    }

    const isDisposed = this.isDisposed;
    if (!isDisposed && error !== undefined) {
      this.dispose(error);
    } else if (!isDisposed && result < 0) {
      this.dispose();
    } else if (isDisposed) {
      // Disposing the continuation does not clear the listeners if it was active
      // so check again here and if disposed, clean up.
      listeners.clear();
    }

    return result;
  }
}
