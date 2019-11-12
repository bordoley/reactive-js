import { DisposableLike, Disposable } from "@rx-min/rx-disposables";

import {
  DelegatingSubscriber,
  Notifications,
  ObservableLike,
  Observable,
  SchedulerLike,
  SchedulerContinuation,
  SubscriberLike,
} from "@rx-min/rx-core";

import { distinctUntilChanged } from "@rx-min/rx-operators";

import {
  EventResource,
  EventResourceLike,
  shareReplayLast,
} from "@rx-min/rx-imperative";

import { AsyncIteratorLike } from "@rx-min/ix-core";

export interface StateUpdater<T> {
  (oldState: T): T;
}

export interface ObservableStateLike<T> extends ObservableLike<T> {
  dispatch(request: StateUpdater<T>): void;
}

export interface ObservableStateResourceLike<T>
  extends AsyncIteratorLike<StateUpdater<T>, T>,
    ObservableStateLike<T> {}

class ObservableStateSubscriber<T> extends DelegatingSubscriber<
  StateUpdater<T>,
  T
> {
  private readonly nextQueue: Array<StateUpdater<T>> = [];
  private isComplete = false;
  private error: Error | undefined;

  private acc: T;

  constructor(delegate: SubscriberLike<T>, initialValue: T) {
    super(delegate);
    this.acc = initialValue;
  }

  private readonly drainQueue: SchedulerContinuation = shouldYield => {
    try {
      while (this.nextQueue.length > 0) {
        const stateUpdater = this.nextQueue.shift() as StateUpdater<T>;
        this.acc = stateUpdater(this.acc);

        const yieldRequest = shouldYield();
        const hasMoreEvents = this.remainingEvents > 0;

        if (!hasMoreEvents || yieldRequest) {
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
  };

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

const observableState = <T>(initialState: T) => (
  subscriber: SubscriberLike<T>,
) => new ObservableStateSubscriber(subscriber, initialState);

class ObservableStateResourceImpl<T> implements ObservableStateResourceLike<T> {
  private readonly dispatcher: EventResourceLike<StateUpdater<T>>;
  private readonly delegate: ObservableLike<T>;
  private readonly disposable: DisposableLike;

  constructor(
    initialState: T,
    scheduler: SchedulerLike,
    equals: (a: T, b: T) => boolean,
  ) {
    this.dispatcher = EventResource.create();
    this.delegate = shareReplayLast(
      Observable.lift(
        this.dispatcher,
        observableState(initialState),
        distinctUntilChanged(equals),
      ),
      scheduler,
    );

    this.disposable = Disposable.compose(
      this.dispatcher,
      Observable.connect(this.delegate, scheduler),
    );
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  dispose() {
    this.disposable.dispose();
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.delegate.subscribe(subscriber);
  }

  dispatch(updater: StateUpdater<T>) {
    this.dispatcher.dispatch(updater);
  }
}

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

const create = <T>(
  initialState: T,
  scheduler: SchedulerLike,
  equals: (a: T, b: T) => boolean = referenceEquality,
): ObservableStateResourceLike<T> =>
  new ObservableStateResourceImpl(initialState, scheduler, equals);

export const ObservableStateResource = {
  create,
};
