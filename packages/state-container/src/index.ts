import { DisposableLike, Disposable } from "@reactive-js/disposables";

import {
  connect,
  Observable,
  DelegatingSubscriber,
  ObservableLike,
  SubscriberLike,
} from "@reactive-js/rx-core";

import { SchedulerLike, SchedulerContinuation } from "@reactive-js/scheduler";

import { distinctUntilChanged } from "@reactive-js/rx-operators";

import {
  EventResource,
  EventResourceLike,
  shareReplayLast,
} from "@reactive-js/rx-imperative";

import { AsyncIteratorLike } from "@reactive-js/ix-core";

export interface StateUpdater<T> {
  (oldState: T): T;
}

export interface StateContainerLike<T> extends ObservableLike<T> {
  dispatch(request: StateUpdater<T>): void;
}

export interface StateContainerResourceLike<T>
  extends AsyncIteratorLike<StateUpdater<T>, T>,
    StateContainerLike<T> {}

class BatchScanOnSchedulerSubscriber<T> extends DelegatingSubscriber<
  StateUpdater<T>,
  T
> {
  private readonly nextQueue: Array<StateUpdater<T>> = [];
  private readonly priority: number | undefined;
  private isComplete = false;
  private error: Error | undefined;

  private acc: T;

  constructor(delegate: SubscriberLike<T>, initialValue: T, priority?: number) {
    super(delegate);
    this.acc = initialValue;
    this.priority = priority;
  }

  private readonly drainQueue: SchedulerContinuation = shouldYield => {
    try {
      while (this.nextQueue.length > 0) {
        const stateUpdater = this.nextQueue.shift() as StateUpdater<T>;
        this.acc = stateUpdater(this.acc);

        const yieldRequest = shouldYield();
        const hasMoreEvents = this.remainingEvents > 0;

        if (!hasMoreEvents || yieldRequest) {
          this.delegate.next(this.acc);
        }

        if (yieldRequest && hasMoreEvents) {
          return { continuation: this.drainQueue, delay: 0, priority: this.priority };
        }
      }
    } catch (error) {
      this.nextQueue.length = 0;
      this.complete(error);
      return;
    }

    if (this.isComplete) {
      this.delegate.complete(this.error);
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

  protected onComplete(error?: Error) {
    this.isComplete = true;
    this.error = error;
    this.scheduleDrainQueue();
  }
}

const batchScanOnScheduler = <T>(initialState: T, priority?: number) => (
  subscriber: SubscriberLike<T>,
) => new BatchScanOnSchedulerSubscriber(subscriber, initialState, priority);

class StateContainerResourceImpl<T> implements StateContainerResourceLike<T> {
  private readonly dispatcher: EventResourceLike<StateUpdater<T>>;
  private readonly delegate: ObservableLike<T>;
  private readonly disposable: DisposableLike;

  constructor(
    initialState: T,
    scheduler: SchedulerLike,
    equals: (a: T, b: T) => boolean,
    priority?: number
  ) {
    this.dispatcher = EventResource.create();
    this.delegate = shareReplayLast(
      Observable.lift(
        this.dispatcher,
        batchScanOnScheduler(initialState, priority),
        distinctUntilChanged(equals),
      ),
      scheduler,
    );

    this.disposable = Disposable.compose(
      this.dispatcher,
      connect(this.delegate, scheduler),
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
  priority?: number,
): StateContainerResourceLike<T> =>
  new StateContainerResourceImpl(initialState, scheduler, equals, priority);

export const StateContainerResource = {
  create,
};
