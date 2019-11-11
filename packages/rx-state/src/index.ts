import {
  DelegatingSubscriber,
  Notifications,
  ObservableLike,
  Observable,
  ObservableResourceLike,
  SchedulerLike,
  SchedulerContinuation,
  SubscriberLike,
} from "@rx-min/rx-core";

import { distinctUntilChanged, map } from "@rx-min/rx-operators";
import {
  EventResource,
  EventResourceLike,
  shareReplayLast,
} from "@rx-min/rx-imperative";

export type StateUpdater<T> = (oldState: T) => T;

export interface ObservableStateLike<T> extends ObservableLike<T> {
  dispatch(updater: StateUpdater<T>): void;
}

export interface ObservableStateResourceLike<T>
  extends ObservableStateLike<T>,
    ObservableResourceLike<T> {}

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
  private readonly dispatcher: EventResourceLike<
    StateUpdater<T>
  > = EventResource.create();
  private readonly delegate: ObservableLike<T>;

  constructor(initialState: T, scheduler: SchedulerLike) {
    this.delegate = shareReplayLast(
      Observable.lift(
        this.dispatcher,
        observableState(initialState),
        distinctUntilChanged(),
      ),
      scheduler,
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

const create = <T>(
  initialValue: T,
  scheduler: SchedulerLike,
): ObservableStateResourceLike<T> =>
  new ObservableStateResourceImpl(initialValue, scheduler);

class MappedObservableState<TSrc, T> implements ObservableStateLike<T> {
  private readonly delegate: ObservableStateLike<TSrc>;
  private readonly sourceReducer: (acc: TSrc, updater: StateUpdater<T>) => TSrc;
  private readonly observable: ObservableLike<T>;

  constructor(
    delegate: ObservableStateLike<TSrc>,
    sourceReducer: (acc: TSrc, updater: StateUpdater<T>) => TSrc,
    mapper: (v: TSrc) => T,
  ) {
    this.delegate = delegate;
    this.sourceReducer = sourceReducer;
    this.observable = Observable.lift(
      delegate,
      map(mapper),
      distinctUntilChanged(),
    );
  }

  dispatch(updater: StateUpdater<T>) {
    this.delegate.dispatch(state => this.sourceReducer(state, updater));
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

const createMapped = <TSrc, T>(
  delegate: ObservableStateLike<TSrc>,
  sourceReducer: (acc: TSrc, updater: StateUpdater<T>) => TSrc,
  mapper: (v: TSrc) => T,
): ObservableStateLike<T> =>
  new MappedObservableState(delegate, sourceReducer, mapper);

export const ObservableState = {
  create,
  map: createMapped,
};
