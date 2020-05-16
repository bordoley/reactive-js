import { AbstractDisposable, Exception, add, dispose } from "../../disposable";
import { none, Option, isSome } from "../../option";
import {
  SchedulerLike,
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
  private listeners: Set<
    SchedulerContinuationRunStatusChangedListenerLike
  > = new Set();

  constructor() {
    super();

    add(this, () => {
      this.listeners = new Set();
    });
  }

  /** @ignore */
  addListener(
    _ev: "onRunStatusChanged",
    listener: SchedulerContinuationRunStatusChangedListenerLike,
  ) {
    if (!this.isDisposed) {
      this.listeners.add(listener);
    }
  }

  /** @ignore */
  removeListener(
    _ev: "onRunStatusChanged",
    listener: SchedulerContinuationRunStatusChangedListenerLike,
  ) {
    this.listeners.delete(listener);
  }

  abstract continueUnsafe(scheduler: SchedulerLike): void;

  /** @ignore */
  continue(scheduler: SchedulerLike) {
    const listeners = this.listeners;
    let error: Option<Exception> = none;

    if (!this.isDisposed) {
      notifyListeners(listeners, true);
      try {
        this.continueUnsafe(scheduler);
      } catch (cause) {
        error = { cause };
      }
      notifyListeners(listeners, false);
    }

    const isDisposed = this.isDisposed;
    if (!isDisposed && isSome(error)) {
      dispose(this, error);
    }
  }
}
