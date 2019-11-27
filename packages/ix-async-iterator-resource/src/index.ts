import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import {
  AsyncIteratorLike,
  DelegatingAsyncIterator,
} from "@reactive-js/ix-async-iterator";
import {
  connect,
  ObservableLike,
  ObservableOperator,
  pipe as observablePipe,
} from "@reactive-js/rx-observable";
import { ObservableResourceLike } from "@reactive-js/rx-observable-resource";
import {
  distinctUntilChanged,
  scan,
  shareReplayLast,
  startWith,
} from "@reactive-js/rx-observables";
import { SchedulerLike } from "@reactive-js/scheduler";
import { SubscriberLike } from "@reactive-js/rx-subscriber";

import {
  create as subjectCreate,
  SubjectResourceLike,
} from "@reactive-js/rx-subject";

/** @noInheritDoc */
export interface AsyncIteratorResourceLike<TReq, T>
  extends AsyncIteratorLike<TReq, T>,
    ObservableResourceLike<T> {}

class DelegatingAsyncIteratorResource<TReq, T>
  extends DelegatingAsyncIterator<TReq, T>
  implements AsyncIteratorResourceLike<TReq, T> {
  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }
  readonly disposable: DisposableLike;

  constructor(
    observable: ObservableLike<T>,
    dispatcher: (req: TReq) => void,
    disposable: DisposableLike,
  ) {
    super(observable, dispatcher);
    this.disposable = disposable;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
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
}

export interface AsyncIteratorResourceOperator<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorResourceLike<TSrcReq, TSrc>): AsyncIteratorResourceLike<
    TReq,
    T
  >;
}

export const lift = <TReq, T, TReqA, TA>(
  operator?: ObservableOperator<T, TA>,
  mapper?: (req: TReqA) => TReq,
): AsyncIteratorResourceOperator<TReq, T, TReqA, TA> => iterator => {
  const [observable, dispatcher, disposable] =
    iterator instanceof DelegatingAsyncIteratorResource
      ? [iterator.observable, iterator.dispatcher, iterator.disposable]
      : [iterator, (req: any) => iterator.dispatch(req), iterator];

  const pipedObservable =
    operator !== undefined ? observablePipe(observable, operator) : observable;

  const mappedDispatcher: (req: TReqA) => void =
    mapper !== undefined ? req => dispatcher(mapper(req)) : dispatcher;

  return new DelegatingAsyncIteratorResource(
    pipedObservable,
    mappedDispatcher,
    disposable,
  );
};

export function pipe<TSrcReq, TSrc, TReqA, TA>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperator<TSrcReq, TSrc, TReqA, TA>,
): AsyncIteratorResourceLike<TReqA, TA>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperator<TReqA, TA, TReqB, TB>,
): AsyncIteratorResourceLike<TReqB, TB>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB, TReqC, TC>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperator<TReqB, TB, TReqC, TC>,
): AsyncIteratorResourceLike<TReqC, TC>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB, TReqC, TC, TReqD, TD>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperator<TReqC, TC, TReqD, TD>,
): AsyncIteratorResourceLike<TReqD, TD>;
export function pipe<
  TSrcReq,
  TSrc,
  TReqA,
  TA,
  TReqB,
  TB,
  TReqC,
  TC,
  TReqD,
  TD,
  TReqE,
  TE
>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperator<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorResourceOperator<TReqD, TD, TReqE, TE>,
): AsyncIteratorResourceLike<TReqE, TE>;
export function pipe<
  TSrcReq,
  TSrc,
  TReqA,
  TA,
  TReqB,
  TB,
  TReqC,
  TC,
  TReqD,
  TD,
  TReqE,
  TE,
  TReqF,
  TF
>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperator<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorResourceOperator<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorResourceOperator<TReqE, TE, TReqF, TF>,
): AsyncIteratorResourceLike<TReqF, TF>;
export function pipe<
  TSrcReq,
  TSrc,
  TReqA,
  TA,
  TReqB,
  TB,
  TReqC,
  TC,
  TReqD,
  TD,
  TReqE,
  TE,
  TReqF,
  TF,
  TReqG,
  TG
>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperator<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorResourceOperator<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorResourceOperator<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorResourceOperator<TReqF, TF, TReqG, TG>,
): AsyncIteratorResourceLike<TReqG, TG>;
export function pipe<
  TSrcReq,
  TSrc,
  TReqA,
  TA,
  TReqB,
  TB,
  TReqC,
  TC,
  TReqD,
  TD,
  TReqE,
  TE,
  TReqF,
  TF,
  TReqG,
  TG,
  TReqH,
  TH
>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperator<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorResourceOperator<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorResourceOperator<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorResourceOperator<TReqF, TF, TReqG, TG>,
  op8: AsyncIteratorResourceOperator<TReqG, TG, TReqH, TH>,
): AsyncIteratorResourceLike<TReqH, TH>;
export function pipe<
  TSrcReq,
  TSrc,
  TReqA,
  TA,
  TReqB,
  TB,
  TReqC,
  TC,
  TReqD,
  TD,
  TReqE,
  TE,
  TReqF,
  TF,
  TReqG,
  TG,
  TReqH,
  TH,
  TReqI,
  TI
>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperator<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperator<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperator<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperator<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorResourceOperator<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorResourceOperator<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorResourceOperator<TReqF, TF, TReqG, TG>,
  op8: AsyncIteratorResourceOperator<TReqG, TG, TReqH, TH>,
  op9: AsyncIteratorResourceOperator<TReqH, TH, TReqI, TI>,
): AsyncIteratorResourceLike<TReqI, TI>;
export function pipe(
  src: AsyncIteratorResourceLike<any, any>,
  ...operators: AsyncIteratorResourceOperator<any, any, any, any>[]
) {
  return operators.reduce((acc, next) => next(acc), src);
}

class EventResourceImpl<T> implements AsyncIteratorResourceLike<T, T> {
  get isDisposed() {
    return this.subject.isDisposed;
  }
  private readonly subject: SubjectResourceLike<T>;

  constructor(priority?: number) {
    this.subject = subjectCreate(priority);
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.subject.add(disposable, ...disposables);
  }

  dispatch(event: T) {
    this.subject.next(event);
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
    this.subject.subscribe(subscriber);
  }
}

export const createEvent = <T>(
  priority?: number,
): AsyncIteratorResourceLike<T, T> => new EventResourceImpl(priority);

export interface StateUpdater<T> {
  (oldState: T): T;
}

class StateStoreImpl<T>
  implements AsyncIteratorResourceLike<StateUpdater<T>, T> {
  get isDisposed(): boolean {
    return this.dispatcher.isDisposed;
  }
  private readonly delegate: ObservableLike<T>;
  private readonly dispatcher: AsyncIteratorResourceLike<
    StateUpdater<T>,
    StateUpdater<T>
  >;

  constructor(
    delegate: ObservableLike<T>,
    dispatcher: AsyncIteratorResourceLike<StateUpdater<T>, StateUpdater<T>>,
  ) {
    this.delegate = delegate;
    this.dispatcher = dispatcher;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.dispatcher.add(disposable, ...disposables);
  }

  dispatch(updater: StateUpdater<T>) {
    this.dispatcher.dispatch(updater);
  }

  dispose() {
    this.dispatcher.dispose();
  }

  remove(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.dispatcher.remove(disposable, ...disposables);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.delegate.subscribe(subscriber);
  }
}

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

export const createStateStore = <T>(
  initialState: T,
  equals: (a: T, b: T) => boolean = referenceEquality,
  scheduler?: SchedulerLike,
  priority?: number,
): AsyncIteratorResourceLike<StateUpdater<T>, T> => {
  const dispatcher: AsyncIteratorResourceLike<
    StateUpdater<T>,
    StateUpdater<T>
  > = createEvent();
  const delegate = observablePipe(
    dispatcher,
    scan((acc: T, next) => next(acc), initialState),
    startWith(initialState),
    distinctUntilChanged(equals),
    shareReplayLast(scheduler, priority),
  );

  dispatcher.add(connect(delegate, scheduler));
  return new StateStoreImpl(delegate, dispatcher);
};
