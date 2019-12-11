import {
  connect,
  createSubject,
  SubjectResourceLike,
  SubscriberLike,
  MulticastObservableLike,
  MulticastObservableResourceLike,
} from "@reactive-js/rx";

import {
  distinctUntilChanged,
  ignoreElements,
  merge,
  onNext,
  scan,
  share,
  startWith,
} from "@reactive-js/observable";

import { pipe, OperatorLike } from "@reactive-js/pipe";

import { SchedulerLike } from "@reactive-js/scheduler";

import { DisposableOrTeardown } from "@reactive-js/disposable";

/** @noInheritDoc */
export interface AsyncIteratorLike<TReq, T> extends MulticastObservableLike<T> {
  dispatch(request: TReq): void;
}

/** @noInheritDoc */
export interface AsyncIteratorResourceLike<TReq, T>
  extends AsyncIteratorLike<TReq, T>,
    MulticastObservableResourceLike<T> {}

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
  readonly observable: MulticastObservableLike<T>;

  constructor(
    subject: SubjectResourceLike<TReq>,
    observable: MulticastObservableLike<T>,
  ) {
    this.subject = subject;
    this.observable = observable;
  }

  get isDisposed(): boolean {
    return this.subject.isDisposed;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
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
  operator: OperatorLike<
    MulticastObservableLike<TReq>,
    MulticastObservableLike<T>
  >,
) => {
  const subject = createSubject();
  const observable = operator(subject);
  return new AsyncIteratorResourceImpl(subject, observable);
};

export const createEventEmitter = <T>(): EventEmitterResourceLike<T> =>
  createAsyncIteratorResource(x => x);

export const createReducerStore = <TAction, T>(
  initialState: T,
  reducer: (state: T, action: TAction) => T,
  scheduler: SchedulerLike,
  equals?: (a: T, b: T) => boolean,
): AsyncIteratorResourceLike<TAction, T> => {
  const operator: OperatorLike<
    MulticastObservableLike<TAction>,
    MulticastObservableLike<T>
  > = obs =>
    pipe(
      obs,
      scan(reducer, () => initialState),
      startWith(initialState),
      distinctUntilChanged(equals),
      share(scheduler, 1),
    );
  const store = createAsyncIteratorResource(operator);
  pipe(store, connect(scheduler), d => store.add(d));
  return store;
};

const stateStoreReducer = <T>(state: T, action: StateUpdaterLike<T>) =>
  action(state);
export const createStateStore = <T>(
  initialState: T,
  scheduler: SchedulerLike,
  equals?: (a: T, b: T) => boolean,
): StateStoreResourceLike<T> =>
  createReducerStore(initialState, stateStoreReducer, scheduler, equals);

export const createPersistentStateStore = <T>(
  persistentStore: AsyncIteratorLike<T, T>,
  initialState: T,
  scheduler: SchedulerLike,
  equals?: (a: T, b: T) => boolean,
): StateStoreResourceLike<T> => {
  const dispatch = (req: StateUpdaterLike<T>) => store.dispatch(req);

  const operator: OperatorLike<
    MulticastObservableLike<StateUpdaterLike<T>>,
    MulticastObservableLike<T>
  > = obs => {
    const onPersistentStoreChangedStream = pipe(
      persistentStore,
      onNext(v => dispatch(_ => v)),
      ignoreElements(),
    );

    const stateObs = pipe(
      obs,
      scan(
        (acc: T, next: StateUpdaterLike<T>) => next(acc),
        () => initialState,

        ),
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
