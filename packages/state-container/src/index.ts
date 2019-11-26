import {
  create as disposableCreate,
  DisposableLike,
  DisposableOrTeardown,
} from "@reactive-js/disposable";

import {
  DelegatingSubscriber,
  SubscriberLike,
} from "@reactive-js/rx-subscriber";

import {
  connect,
  lift,
  ObservableLike,
  pipe,
} from "@reactive-js/rx-observable";

import {
  SchedulerContinuation,
  SchedulerContinuationResult,
  SchedulerLike,
} from "@reactive-js/scheduler";

import {
  distinctUntilChanged,
  shareReplayLast,
  startWith,
} from "@reactive-js/rx-observables";

import {
  create as eventResourceCreate,
  EventResourceLike,
} from "@reactive-js/rx-event";

import { AsyncIteratorLike } from "@reactive-js/ix-async-iterator";
import { AsyncIteratorResourceLike } from "@reactive-js/ix-async-iterator-resource";

export interface StateUpdater<T> {
  (oldState: T): T;
}

/** @noInheritDoc */
export interface StateContainerLike<T>
  extends AsyncIteratorLike<StateUpdater<T>, T> {}

/** @noInheritDoc */
export interface StateContainerResourceLike<T>
  extends AsyncIteratorResourceLike<StateUpdater<T>, T>,
    StateContainerLike<T> {}

class BatchScanOnSchedulerSubscriber<T> extends DelegatingSubscriber<
  StateUpdater<T>,
  T
> {
  private get remainingEvents() {
    return this.nextQueue.length + (this.isComplete ? 1 : 0);
  }
  private acc: T;
  private readonly continuation: SchedulerContinuationResult;
  private error: Error | undefined;

  private isComplete = false;
  private readonly nextQueue: Array<StateUpdater<T>> = [];
  private readonly priority?: number;

  constructor(delegate: SubscriberLike<T>, initialValue: T, priority?: number) {
    super(delegate);

    this.acc = initialValue;
    this.priority = priority;

    this.continuation = {
      continuation: this.drainQueue,
      priority: this.priority,
    };

    this.add(this.clearQueue);
  }

  protected onComplete(error?: Error) {
    this.isComplete = true;
    this.error = error;
    this.scheduleDrainQueue();
  }

  protected onNext(data: StateUpdater<T>) {
    this.nextQueue.push(data);
    this.scheduleDrainQueue();
  }
  private readonly clearQueue: DisposableOrTeardown = () => {
    this.nextQueue.length = 0;
  };

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
          return this.continuation;
        }
      }
    } catch (error) {
      this.remove(this.clearQueue);
      this.complete(error);
      return;
    }

    if (this.isComplete) {
      this.remove(this.clearQueue);
      this.delegate.complete(this.error);
    }
    return;
  };

  private scheduleDrainQueue() {
    if (this.remainingEvents === 1) {
      this.schedule(this.drainQueue, 0, this.priority);
    }
  }
}

const batchScanOnScheduler = <T>(initialState: T, priority?: number) => (
  subscriber: SubscriberLike<T>,
) => new BatchScanOnSchedulerSubscriber(subscriber, initialState, priority);

class StateContainerResourceImpl<T> implements StateContainerResourceLike<T> {
  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }
  private readonly delegate: ObservableLike<T>;
  private readonly dispatcher: EventResourceLike<StateUpdater<T>>;
  private readonly disposable: DisposableLike;

  constructor(
    initialState: T,
    equals: (a: T, b: T) => boolean,
    scheduler?: SchedulerLike,
    priority?: number,
  ) {
    this.dispatcher = eventResourceCreate();
    this.delegate = pipe(
      lift(this.dispatcher, batchScanOnScheduler(initialState, priority)),
      startWith(initialState),
      distinctUntilChanged(equals),
      shareReplayLast(scheduler, priority),
    );

    this.disposable = disposableCreate();
    this.disposable.add(this.dispatcher, connect(this.delegate, scheduler));
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  dispatch(updater: StateUpdater<T>) {
    this.dispatcher.dispatch(updater);
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.delegate.subscribe(subscriber);
  }
}

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

export const create = <T>(
  initialState: T,
  equals: (a: T, b: T) => boolean = referenceEquality,
  scheduler?: SchedulerLike,
  priority?: number,
): StateContainerResourceLike<T> =>
  new StateContainerResourceImpl(initialState, equals, scheduler, priority);
