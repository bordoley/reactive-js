import {
  connect,
  createSubject,
  ObservableLike,
  ObservableResourceLike,
  SubjectResourceLike,
  SubscriberLike,
  ObservableOperatorLike,
} from "@reactive-js/rx";

import {
  distinctUntilChanged,
  ignoreElements,
  merge,
  onNext,
  pipe,
  scan,
  share,
  startWith,
} from "@reactive-js/observable";

import { SchedulerLike } from "@reactive-js/scheduler";

import { DisposableOrTeardown } from "@reactive-js/disposable";

/** @noInheritDoc */
export interface AsyncIteratorLike<TReq, T> extends ObservableLike<T> {
  dispatch(request: TReq): void;
}

export interface AsyncIteratorOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorLike<TSrcReq, TSrc>): AsyncIteratorLike<TReq, T>;
}

/** @noInheritDoc */
export interface AsyncIteratorResourceLike<TReq, T>
  extends AsyncIteratorLike<TReq, T>,
    ObservableResourceLike<T> {}

export interface AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorResourceLike<TSrcReq, TSrc>): AsyncIteratorResourceLike<
    TReq,
    T
  >;
}

export interface StateUpdaterLike<T> {
  (oldState: T): T;
}

/** @noInheritDoc */
export type StateStoreLike<T> = AsyncIteratorLike<StateUpdaterLike<T>, T>;

/** @noInheritDoc */
export interface StateStoreResourceLike<T>
  extends StateStoreLike<T>,
    AsyncIteratorResourceLike<StateUpdaterLike<T>, T> {}

/** @noInheritDoc */
export type EventEmitterLike<T> = AsyncIteratorLike<T, T>;

/** @noInheritDoc */
export interface EventEmitterResourceLike<T>
  extends EventEmitterLike<T>,
    AsyncIteratorResourceLike<T, T> {}

class AsyncIteratorResourceImpl<TReq, T>
  implements AsyncIteratorResourceLike<TReq, T> {
  readonly subject: SubjectResourceLike<TReq>;
  readonly observable: ObservableLike<T>;

  constructor(
    subject: SubjectResourceLike<TReq>,
    observable: ObservableLike<T>,
  ) {
    this.subject = subject;
    this.observable = observable;
  }

  get isDisposed(): boolean {
    return this.subject.isDisposed;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subject.add(disposable, ...disposables);
  }

  dispatch(req: TReq) {
    this.subject.next(req);
  }

  dispose() {
    this.subject.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subject.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

const createAsyncIteratorResource = <TReq, T>(
  operator: ObservableOperatorLike<TReq, T>,
) => {
  const subject = createSubject();
  const observable = operator(subject);
  return new AsyncIteratorResourceImpl(subject, observable);
};

export const createEventEmitter = <T>(): EventEmitterResourceLike<T> =>
  createAsyncIteratorResource(x => x);

export const createStateStore = <T>(
  initialState: T,
  scheduler: SchedulerLike,
  equals?: (a: T, b: T) => boolean,
): StateStoreResourceLike<T> => {
  const operator: ObservableOperatorLike<StateUpdaterLike<T>, T> = obs =>
    pipe(
      obs,
      scan((acc: T, next: StateUpdaterLike<T>) => next(acc), initialState),
      startWith(initialState),
      distinctUntilChanged(equals),
      share(scheduler, 1),
    );
  const store = createAsyncIteratorResource(operator);
  store.add(connect(store, scheduler));
  return store;
};

export const createPersistentStateStore = <T>(
  persistentStore: AsyncIteratorLike<T, StateUpdaterLike<T>>,
  initialState: T,
  scheduler: SchedulerLike,
  equals?: (a: T, b: T) => boolean,
): StateStoreResourceLike<T> => {
  const dispatch = (req: StateUpdaterLike<T>) => store.dispatch(req);

  const operator: ObservableOperatorLike<StateUpdaterLike<T>, T> = obs => {
    const onPersistentStoreChangedStream = pipe(
      persistentStore,
      onNext(dispatch),
      ignoreElements(),
    );

    const stateObs = pipe(
      obs,
      scan((acc: T, next: StateUpdaterLike<T>) => next(acc), initialState),
      distinctUntilChanged(equals),
      onNext(next => persistentStore.dispatch(next)),
    );

    return pipe(
      merge(onPersistentStoreChangedStream, stateObs),
      share(scheduler, 1),
    );
  };

  const store = createAsyncIteratorResource(operator);
  return store;
};
