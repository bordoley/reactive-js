import {
  MonoTypeDelegatingSubscriber,
  Notifications,
  Operator,
  SchedulerLike,
  SchedulerContinuation,
  SubscriberLike
} from "@rx-min/rx-core";

class ObserveOnSubscriber<T> extends MonoTypeDelegatingSubscriber<T> {
  private readonly observeOnScheduler: SchedulerLike;
  private readonly nextQueue: Array<T> = [];
  private isComplete = false;
  private error: Error | undefined;

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

  protected onComplete(error: Error | undefined) {
    this.isComplete = true;
    this.error = error;
    this.scheduleDrainQueue();
  }
}

export const observeOn = <T>(
  observeOnScheduler: SchedulerLike
): Operator<T, T> => subscriber =>
  new ObserveOnSubscriber(subscriber, observeOnScheduler);
