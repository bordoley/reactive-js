import {
  subscribe,
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

import { pipe } from "@reactive-js/pipe";

import { SchedulerLike } from "@reactive-js/scheduler";

import { DisposableOrTeardown, DisposableLike } from "@reactive-js/disposable";

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
  constructor(
    readonly dispatch: (req: TReq) => void,
    private readonly observable: MulticastObservableLike<T>,
    private readonly disposable: DisposableLike,
  ) {}

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
    return this;
  }

  dispose() {
    this.disposable.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.remove(disposable, ...disposables);
    return this;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

export const createAsyncIteratorResource = <TReq, T>(
  dispatch: (req: TReq) => void,
  observable: MulticastObservableLike<T>,
  disposable: DisposableLike,
): AsyncIteratorResourceLike<TReq, T> =>
  new AsyncIteratorResourceImpl(dispatch, observable, disposable);

export const createEventEmitter = <T>(): EventEmitterResourceLike<T> => {
  const dispatcher = createSubject();
  return createAsyncIteratorResource(
    dispatcher.onNext.bind(dispatcher),
    dispatcher,
    dispatcher,
  );
};

export const createReducerStore = <TAction, T>(
  initialState: T,
  reducer: (state: T, action: TAction) => T,
  scheduler: SchedulerLike,
  equals?: (a: T, b: T) => boolean,
): AsyncIteratorResourceLike<TAction, T> => {
  const dispatcher = createSubject();
  const observable = pipe(
    dispatcher,
    scan(reducer, () => initialState),
    startWith(initialState),
    distinctUntilChanged(equals),
    share(scheduler, 1),
  );
  const store = createAsyncIteratorResource(
    dispatcher.onNext.bind(dispatcher),
    observable,
    dispatcher,
  );

  return store.add(pipe(store, subscribe(scheduler)));
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
  const dispatcher: SubjectResourceLike<StateUpdaterLike<T>> = createSubject();

  const onPersistentStoreChangedStream = pipe(
    persistentStore,
    onNext(v => dispatcher.onNext(_ => v)),
    ignoreElements(),
  );

  const stateObs = pipe(
    dispatcher,
    scan(
      (acc: T, next: StateUpdaterLike<T>) => next(acc),
      () => initialState,
    ),
    distinctUntilChanged(equals),
    onNext(next => persistentStore.dispatch(next)),
  );

  const observable = pipe(
    merge(onPersistentStoreChangedStream, stateObs),
    share(scheduler, 1),
  );

  return createAsyncIteratorResource(
    dispatcher.onNext.bind(dispatcher),
    observable,
    dispatcher,
  );
};
