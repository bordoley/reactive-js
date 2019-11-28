import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import { AsyncIteratorLike } from "@reactive-js/ix-async-iterator";
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
import { SubscriberLike } from "@reactive-js/rx-subscriber";
import { SchedulerLike, SchedulerOptions } from "@reactive-js/scheduler";

import {
  create as createSubject,
  SubjectResourceLike,
} from "@reactive-js/rx-subject";

/** @noInheritDoc */
export interface AsyncIteratorResourceLike<TReq, T>
  extends AsyncIteratorLike<TReq, T>,
    ObservableResourceLike<T> {}

class AsyncIteratorResourceImpl<TReq, T>
  implements AsyncIteratorResourceLike<TReq, T> {
  get isDisposed(): boolean {
    return this.disposable.isDisposed;
  }
  readonly dispatcher: (req: TReq) => void;

  readonly disposable: DisposableLike;
  readonly observable: ObservableLike<T>;

  constructor(
    dispatcher: (req: TReq) => void,
    disposable: DisposableLike,
    observable: ObservableLike<T>,
  ) {
    this.dispatcher = dispatcher;
    this.disposable = disposable;
    this.observable = observable;
  }

  add(
    disposable: DisposableOrTeardown,
    ...disposables: DisposableOrTeardown[]
  ) {
    this.disposable.add(disposable, ...disposables);
  }

  dispatch(req: TReq) {
    this.dispatcher(req);
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
    this.observable.subscribe(subscriber);
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
    iterator instanceof AsyncIteratorResourceImpl
      ? [iterator.observable, iterator.dispatcher, iterator.disposable]
      : [iterator, (req: any) => iterator.dispatch(req), iterator];

  const pipedObservable =
    operator !== undefined ? observablePipe(observable, operator) : observable;

  const mappedDispatcher: (req: TReqA) => void =
    mapper !== undefined ? req => dispatcher(mapper(req)) : dispatcher;

  return new AsyncIteratorResourceImpl(
    mappedDispatcher,
    disposable,
    pipedObservable,
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

export const createEvent = <T>(
  options?: SchedulerOptions,
): AsyncIteratorResourceLike<T, T> => {
  const subject = createSubject(options);
  const dispatcher = (req: T) => subject.next(req);

  return new AsyncIteratorResourceImpl(dispatcher, subject, subject);
};

export interface StateUpdater<T> {
  (oldState: T): T;
}

export const createStateStore = <T>(
  initialState: T,
  equals?: (a: T, b: T) => boolean,
  scheduler?: SchedulerLike,
  options?: SchedulerOptions,
): AsyncIteratorResourceLike<StateUpdater<T>, T> => {
  const subject: SubjectResourceLike<StateUpdater<T>> = createSubject(options);
  const dispatcher = (req: StateUpdater<T>) => subject.next(req);
  const observable = observablePipe(
    subject,
    scan((acc: T, next) => next(acc), initialState),
    startWith(initialState),
    distinctUntilChanged(equals),
    shareReplayLast(scheduler, options),
  );

  subject.add(connect(observable, scheduler));

  return new AsyncIteratorResourceImpl(dispatcher, subject, observable);
};
