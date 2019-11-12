import { DisposableLike, Disposable } from "@rx-min/rx-disposables";

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

import {
  distinctUntilChanged,
  map,
  onNext,
  scan,
  ignoreElements,
} from "@rx-min/rx-operators";

import {
  EventResource,
  EventResourceLike,
  shareReplayLast,
} from "@rx-min/rx-imperative";

import { merge } from "@rx-min/rx-observables";

import { AsyncIterableLike } from "@rx-min/ix-core";

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

class MappedObservableState<TSrc, T> implements ObservableStateLike<T> {
  private readonly delegate: ObservableStateLike<TSrc>;
  private readonly sourceReducer: (acc: TSrc, updater: StateUpdater<T>) => TSrc;
  private readonly observable: ObservableLike<T>;

  constructor(
    delegate: ObservableStateLike<TSrc>,
    sourceReducer: (acc: TSrc, updater: StateUpdater<T>) => TSrc,
    mapper: (v: TSrc) => T,
    equals: (a: T, b: T) => boolean,
  ) {
    this.delegate = delegate;
    this.sourceReducer = sourceReducer;
    this.observable = Observable.lift(
      delegate,
      map(mapper),
      distinctUntilChanged(equals),
    );
  }

  dispatch(updater: StateUpdater<T>) {
    this.delegate.dispatch(state => this.sourceReducer(state, updater));
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

const createMappedObservableState = <TSrc, T>(
  delegate: ObservableStateLike<TSrc>,
  sourceReducer: (acc: TSrc, updater: StateUpdater<T>) => TSrc,
  mapper: (v: TSrc) => T,
  equals: (a: T, b: T) => boolean = referenceEquality,
): ObservableStateLike<T> =>
  new MappedObservableState(delegate, sourceReducer, mapper, equals);

export const ObservableState = {
  map: createMappedObservableState,
};

const pairify = <T>([_, oldState]: [T, T], next: T): [T, T] => [oldState, next];

const mapLast = <T>([_, state]: [T, T]): T => state;

class ObservableSyncedStateResourceImpl<TReq, T>
  implements ObservableStateResourceLike<T> {
  private readonly delegate: ObservableStateResourceLike<T>;
  private readonly observable: ObservableLike<T>;
  private readonly disposable: DisposableLike;

  constructor(
    asyncIterable: AsyncIterableLike<TReq, T>,
    computeReq: (oldState: T, newState: T) => TReq | void,
    initialState: T,
    initialRequest: TReq,
    scheduler: SchedulerLike,
    equals: (a: T, b: T) => boolean,
  ) {
    this.delegate = create(initialState, scheduler, equals);

    const iterator = asyncIterable.iterateAsync();

    const onStateChanged = ([oldState, newState]: [T, T]) => {
      const req = computeReq(oldState, newState);
      if (req !== undefined) {
        iterator.request(req);
      }
    };

    const initialScanState: [T, T] = [initialState, initialState];

    this.observable = shareReplayLast(
      merge(
        Observable.lift(
          iterator,
          onNext(next => this.delegate.dispatch(_ => next)),
          ignoreElements(),
        ),
        Observable.lift(
          this.delegate,
          scan(pairify, initialScanState),
          onNext(onStateChanged),
          map(mapLast),
        ),
      ),
      scheduler,
    );

    this.disposable = Disposable.compose(
      Observable.connect(this.observable, scheduler),
      iterator,
      this.delegate,
    );

    iterator.request(initialRequest);
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  dispose() {
    this.disposable.dispose();
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }

  dispatch(updater: StateUpdater<T>) {
    this.delegate.dispatch(updater);
  }
}

const createSynced = <TReq, T>(
  asyncIterable: AsyncIterableLike<TReq, T>,
  computeReq: (oldState: T, newState: T) => TReq | void,
  initialState: T,
  initialRequest: TReq,
  scheduler: SchedulerLike,
  equals: (a: T, b: T) => boolean = referenceEquality,
): ObservableStateResourceLike<T> =>
  new ObservableSyncedStateResourceImpl(
    asyncIterable,
    computeReq,
    initialState,
    initialRequest,
    scheduler,
    equals,
  );

class MappedObservableStateResource<TSrc, T>
  extends MappedObservableState<TSrc, T>
  implements ObservableStateResourceLike<T> {
  private readonly disposable: ObservableStateResourceLike<TSrc>;

  constructor(
    delegate: ObservableStateResourceLike<TSrc>,
    sourceReducer: (acc: TSrc, updater: StateUpdater<T>) => TSrc,
    mapper: (v: TSrc) => T,
    equals: (a: T, b: T) => boolean,
  ) {
    super(delegate, sourceReducer, mapper, equals);
    this.disposable = delegate;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
  }

  dispose() {
    this.disposable.dispose();
  }
}

const createMappedObservableStateResource = <TSrc, T>(
  delegate: ObservableStateResourceLike<TSrc>,
  sourceReducer: (acc: TSrc, updater: StateUpdater<T>) => TSrc,
  mapper: (v: TSrc) => T,
  equals: (a: T, b: T) => boolean = referenceEquality,
): ObservableStateResourceLike<T> =>
  new MappedObservableStateResource(delegate, sourceReducer, mapper, equals);

export const ObservableStateResource = {
  create,
  createSynced,
  map: createMappedObservableStateResource,
};
