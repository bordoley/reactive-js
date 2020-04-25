import { AbstractDisposable, Exception } from "../../disposable";
import { none, Option, isSome } from "../../option";
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

/** @noInheritDoc */
export abstract class AbstractSchedulerContinuation extends AbstractDisposable
  implements SchedulerContinuationLike {
  private isActive = false;
  private readonly listeners: Set<
    SchedulerContinuationRunStatusChangedListenerLike
  > = new Set();

  constructor() {
    super();

    this.add(() => {
      if (!this.isActive) {
        this.listeners.clear();
      }
    });
  }

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

  /**
   * Return < 0 to signal done.
   * @param shouldYield
   */
  abstract produce(shouldYield?: () => boolean): number;

  run(shouldYield?: () => boolean) {
    const listeners = this.listeners;
    let result = -1;
    let error: Option<Exception> = none;

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
    if (!isDisposed && isSome(error)) {
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
