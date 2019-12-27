import { DisposableOrTeardown } from "@reactive-js/disposable";
import { pipe } from "@reactive-js/pipe";
import {
  createSubject,
  distinctUntilChanged,
  ignoreElements,
  merge,
  MulticastObservableLike,
  onNext,
  publish,
  scan,
  SubjectResourceLike,
  SubscriberLike,
  ObservableLike,
  ObservableOperatorLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  AsyncIteratorLike,
  AsyncIteratorResourceLike,
  EventEmitterResourceLike,
  StateStoreResourceLike,
  StateUpdaterLike,
} from "./interfaces";

class AsyncIteratorResourceImpl<TReq, T>
  implements AsyncIteratorResourceLike<TReq, T> {
  constructor(
    private readonly dispatcher: SubjectResourceLike<TReq>,
    private readonly observable: MulticastObservableLike<T>,
  ) {}

  get isDisposed(): boolean {
    return this.dispatcher.isDisposed;
  }

  get subscriberCount(): number {
    return this.observable.subscriberCount;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.dispatcher.add(disposable, ...disposables);
    return this;
  }

  dispatch(req: TReq) {
    this.dispatcher.onNext(req);
  }

  dispose() {
    this.dispatcher.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.dispatcher.remove(disposable, ...disposables);
    return this;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

export const createAsyncIteratorResource = <TReq, T>(
  operator: ObservableOperatorLike<TReq, T>,
  scheduler: SchedulerLike,
  replayCount = 0,
): AsyncIteratorResourceLike<TReq, T> => {
  const dispatcher = createSubject();
  const observable = pipe(
    dispatcher,
    operator,
    publish(scheduler, replayCount),
  );
  dispatcher.add(observable);

  return new AsyncIteratorResourceImpl(dispatcher, observable);
};

export const createEventEmitter = <T>(config: {
  scheduler: SchedulerLike,
  replayCount: number
} | void): EventEmitterResourceLike<T> => {
  config = config || undefined;
  if (config !== undefined) {
    return createAsyncIteratorResource(x => x, config.scheduler, config.replayCount);
  } else {
    const dispatcher = createSubject();
    return new AsyncIteratorResourceImpl(dispatcher, dispatcher);
  }
};

export const createPersistentStateStore = <T>(
  persistentStore: AsyncIteratorLike<T, T>,
  initialState: T,
  scheduler: SchedulerLike,
  equals?: (a: T, b: T) => boolean,
): StateStoreResourceLike<T> => {
  const operator = (
    obs: ObservableLike<StateUpdaterLike<T>>,
  ): ObservableLike<T> => {
    const onPersistentStoreChangedStream = pipe(
      persistentStore,
      onNext((v: T) => iter.dispatch((_: T): T => v)),
      ignoreElements(),
    );

    const stateObs = pipe(
      obs,
      scan(
        (acc: T, next: StateUpdaterLike<T>) => next(acc),
        () => initialState,
      ),
      distinctUntilChanged(equals),
      onNext((next: T) => persistentStore.dispatch(next)),
    );

    return merge<T>(onPersistentStoreChangedStream, stateObs);
  };

  const iter = createAsyncIteratorResource(operator, scheduler, 1);
  return iter;
};
