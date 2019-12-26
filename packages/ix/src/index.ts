import { DisposableOrTeardown, DisposableLike } from "@reactive-js/disposable";
import { OperatorLike, pipe } from "@reactive-js/pipe";
import {
  createSubject,
  distinctUntilChanged,
  ignoreElements,
  merge,
  MulticastObservableLike,
  MulticastObservableResourceLike,
  ObservableLike,
  onNext,
  scan,
  share,
  startWith,
  SubjectResourceLike,
  SubscriberLike,
  subscribe,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";

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

export interface AsyncIteratorOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorLike<TSrcReq, TSrc>): AsyncIteratorLike<TReq, T>;
}

class LiftedIteratorImpl<TReq, T> implements AsyncIteratorLike<TReq, T> {
  constructor(
    readonly dispatcher: (req: TReq) => void,
    readonly observable: MulticastObservableLike<T>,
  ) {}

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  dispatch(req: TReq) {
    this.dispatcher(req);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

const liftImpl = <TReq, T, TReqA, TA>(
  operator?: OperatorLike<ObservableLike<T>, MulticastObservableLike<TA>>,
  dispatchOperator?: (dispatcher: (req: TReq) => void) => (req: TReqA) => void,
): AsyncIteratorOperatorLike<TReq, T, TReqA, TA> => iterator => {
  // Cheat here. AsyncIteratorResourceImpl follows the same protocol, so
  // dynamically pull properties off of it.
  const observable: MulticastObservableLike<T> =
    (iterator as any).observable || iterator;
  const dispatcher: (req: TReq) => void =
    (iterator as any).dispatcher || ((req: any) => iterator.dispatch(req));

  const liftedObservable =
    operator !== undefined ? operator(observable) : observable;

  const liftedDispatcher: (req: TReqA) => void =
    dispatchOperator !== undefined
      ? dispatchOperator(dispatcher)
      : (dispatcher as any);

  return new LiftedIteratorImpl(
    liftedDispatcher,
    liftedObservable as MulticastObservableLike<TA>,
  );
};

export const lift = <TReq, T, TA>(
  operator: OperatorLike<ObservableLike<T>, MulticastObservableLike<TA>>,
): AsyncIteratorOperatorLike<TReq, T, TReq, TA> =>
  liftImpl(operator, undefined);

export const liftReq = <TReq, T, TReqA>(
  operator: (dispatcher: (req: TReq) => void) => (ref: TReqA) => void,
): AsyncIteratorOperatorLike<TReq, T, TReqA, T> =>
  liftImpl(undefined, operator);
