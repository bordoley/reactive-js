import {
  DelegatingSubscriber,
  Notifications,
  Operator,
  SubscriberLike,
} from "@rx-min/rx-core";

import {
  SchedulerLike,
  SchedulerContinuation,
} from "@rx-min/scheduler"

class ObserveOnSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly observeOnScheduler: SchedulerLike;
  private readonly nextQueue: Array<T> = [];
  private isComplete = false;
  private error: Error | void = undefined;

  constructor(delegate: SubscriberLike<T>, observeOnScheduler: SchedulerLike) {
    super(delegate);
    this.observeOnScheduler = observeOnScheduler;
  }

  private readonly drainQueue: SchedulerContinuation = shouldYield => {
    while (this.nextQueue.length > 0) {
      const next = this.nextQueue.shift();
      this.delegate.notify(Notifications.next, next);

      const yieldRequest = shouldYield();
      const hasMoreEvents = this.remainingEvents > 0;

      if (yieldRequest && hasMoreEvents) {
        return this.drainQueue;
      }
    }

    if (this.isComplete) {
      this.delegate.notify(Notifications.complete, this.error);
    }
  };

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.observeOnScheduler.schedule(this.drainQueue);
    }
  }

  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }

  protected onNext(data: T) {
    this.nextQueue.push(data);
    this.scheduleDrainQueue();
  }

  protected onComplete(error: Error | void) {
    this.isComplete = true;
    this.error = error;
    this.scheduleDrainQueue();
  }
}

export const observeOn = <T>(
  scheduler: SchedulerLike | void,
): Operator<T, T> => subscriber =>
  new ObserveOnSubscriber(subscriber, scheduler || subscriber.scheduler);
