import { DelegatingSubscriber, Notifications, ObservableLike, Observable, ObservableResourceLike, SchedulerLike, SchedulerContinuationLike, SubscriberLike } from "@rx-min/rx-core";

import { EventSource, EventSourceLike } from './eventSource';
import { shareReplayLast } from './sharedObservable';

type StateUpdater<T> = (oldState: T) => T;

export interface ObservableStateLike<T> extends ObservableLike<T> {
  dispatch(updater: StateUpdater<T>): void;
}

export interface ObservableStateStoreLike<T> extends ObservableStateLike<T>, ObservableResourceLike<T> { }

class ObservableStateSubscriber<T> extends DelegatingSubscriber<StateUpdater<T>, T> {
  private readonly scheduler: SchedulerLike;
  private readonly nextQueue: Array<StateUpdater<T>> = [];
  private isComplete = false;
  private error: Error | undefined;

  private acc: T;

  constructor(delegate: SubscriberLike<T>, initialValue: T, scheduler: SchedulerLike) {
    super(delegate);
    this.acc = initialValue;
    this.scheduler = scheduler;
  }

  private readonly drainQueue: SchedulerContinuationLike = (shouldYield) => {
    try {
      const oldAcc = this.acc;

      while (this.nextQueue.length > 0) {
        const stateUpdater = (this.nextQueue.shift() as StateUpdater<T>);
        this.acc = stateUpdater(this.acc);

        const yieldRequest = shouldYield();
        const hasMoreEvents = this.remainingEvents > 0;
        const stateChanged = this.acc !== oldAcc;

        if ((!hasMoreEvents || yieldRequest) && stateChanged) {
          this.delegate.notify(Notifications.next, this.acc);
        }

        if (yieldRequest && hasMoreEvents) {
          return this.drainQueue;
        }
      }
    } catch (error) {
      this.nextQueue.length = 0;
      this.notify(Notifications.complete, error);
      return;
    }

    if (this.isComplete) {
      this.delegate.notify(Notifications.complete, this.error);
    }
  }

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.scheduler.schedule(this.drainQueue);
    }
  }

  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }

  protected onNext(data: StateUpdater<T>) {
    this.nextQueue.push(data);
    this.scheduleDrainQueue();
  }

  protected onComplete(error: Error | undefined) {
    this.isComplete = true;
    this.error = error;
    this.scheduleDrainQueue();
  }
}

class ObservableStateStoreImpl<T> implements ObservableStateStoreLike<T>{
  private readonly dispatcher: EventSourceLike<StateUpdater<T>> = EventSource.create();
  private readonly delegate: ObservableLike<T>;

  constructor(initialState: T, scheduler: SchedulerLike) {
    this.delegate = shareReplayLast(
      Observable.lift(
        this.dispatcher,
        subscriber => new ObservableStateSubscriber(subscriber, initialState, scheduler),
      ),
      scheduler
    );
  }

  get isDisposed() {
    return this.dispatcher.isDisposed;
  }

  dispose() {
    this.dispatcher.dispose();
  }

  subscribe(subscriber: SubscriberLike<T>) {
    return this.delegate.subscribe(subscriber);
  }

  dispatch(updater: StateUpdater<T>) {
    this.dispatcher.dispatch(updater);
  }
}

const create = <T>(initialValue: T, scheduler: SchedulerLike): ObservableStateStoreLike<T> =>
  new ObservableStateStoreImpl(initialValue, scheduler);

export const ObservableStateStore = {
  create,
};