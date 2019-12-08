import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import {
  AsyncIteratorResourceLike,
  AsyncIteratorResourceOperatorLike,
} from "@reactive-js/ix";
import {
  ErrorLike,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx";
import {
  concatAll as concatAllObs,
  distinctUntilChanged as distinctUntilChangedObs,
  endWith as endWithObs,
  exhaust as exhaustObs,
  ignoreElements as ignoreElementsObs,
  keep as keepObs,
  map as mapObs,
  mergeAll as mergeAllObs,
  observe as observeObs,
  onComplete as onCompleteObs,
  onError as onErrorObs,
  onNext as onNextObs,
  pipe as pipeObs,
  repeat as repeatObs,
  retry as retryObs,
  scan as scanObs,
  share as shareObs,
  startWith as startWithObs,
  subscribeOn as subscribeOnObs,
  switchAll as switchAllObs,
  take as takeObs,
  takeLast as takeLastObs,
  takeWhile as takeWhileObs,
  throttle as throttleObs,
  throttleFirst as throttleFirstObs,
  throttleFirstTime as throttleFirstTimeObs,
  throttleLast as throttleLastObs,
  throttleLastTime as throttleLastTimeObs,
  throttleTime as throttleTimeObs,
  timeout as timeoutObs,
  withLatestFrom as withLatestFromObs,
  ObservableOperatorLike,
} from "@reactive-js/observable";
import { SchedulerLike } from "@reactive-js/scheduler";

export interface AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReq, T> {
  (iter: AsyncIteratorResourceLike<TSrcReq, TSrc>): AsyncIteratorResourceLike<
    TReq,
    T
  >;
}

class LiftedIteratorResourceImpl<TReq, T>
  implements AsyncIteratorResourceLike<TReq, T> {
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

  get isDisposed(): boolean {
    return this.disposable.isDisposed;
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

const liftImpl = <TReq, T, TReqA, TA>(
  operator?: ObservableOperatorLike<T, TA>,
  mapper?: (req: TReqA) => TReq,
): AsyncIteratorResourceOperatorLike<TReq, T, TReqA, TA> => iterator => {
  const observable = (iterator as any).observable || iterator;
  const dispatcher =
    (iterator as any).dispatcher || ((req: any) => iterator.dispatch(req));
  const disposable = (iterator as any).disposable || iterator;

  const pipedObservable =
    operator !== undefined ? pipeObs(observable, operator) : observable;

  const mappedDispatcher: (req: TReqA) => void =
    mapper !== undefined ? req => dispatcher(mapper(req)) : dispatcher;

  return new LiftedIteratorResourceImpl(
    mappedDispatcher,
    disposable,
    pipedObservable,
  );
};

export const lift = <TReq, T, TA>(
  operator: ObservableOperatorLike<T, TA>,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, TA> =>
  liftImpl(operator, undefined);

export const liftReq = <TReq, T, TReqA>(
  mapper: (req: TReqA) => TReq,
): AsyncIteratorResourceOperatorLike<TReq, T, TReqA, T> =>
  liftImpl(undefined, mapper);

export function pipe<TSrcReq, TSrc, TReqA, TA>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReqA, TA>,
): AsyncIteratorResourceLike<TReqA, TA>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperatorLike<TReqA, TA, TReqB, TB>,
): AsyncIteratorResourceLike<TReqB, TB>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB, TReqC, TC>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperatorLike<TReqB, TB, TReqC, TC>,
): AsyncIteratorResourceLike<TReqC, TC>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB, TReqC, TC, TReqD, TD>(
  src: AsyncIteratorResourceLike<TSrcReq, TSrc>,
  op1: AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperatorLike<TReqC, TC, TReqD, TD>,
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
  op1: AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperatorLike<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorResourceOperatorLike<TReqD, TD, TReqE, TE>,
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
  op1: AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperatorLike<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorResourceOperatorLike<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorResourceOperatorLike<TReqE, TE, TReqF, TF>,
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
  op1: AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperatorLike<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorResourceOperatorLike<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorResourceOperatorLike<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorResourceOperatorLike<TReqF, TF, TReqG, TG>,
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
  op1: AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperatorLike<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorResourceOperatorLike<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorResourceOperatorLike<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorResourceOperatorLike<TReqF, TF, TReqG, TG>,
  op8: AsyncIteratorResourceOperatorLike<TReqG, TG, TReqH, TH>,
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
  op1: AsyncIteratorResourceOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorResourceOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorResourceOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorResourceOperatorLike<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorResourceOperatorLike<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorResourceOperatorLike<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorResourceOperatorLike<TReqF, TF, TReqG, TG>,
  op8: AsyncIteratorResourceOperatorLike<TReqG, TG, TReqH, TH>,
  op9: AsyncIteratorResourceOperatorLike<TReqH, TH, TReqI, TI>,
): AsyncIteratorResourceLike<TReqI, TI>;
export function pipe(
  src: AsyncIteratorResourceLike<any, any>,
  ...operators: AsyncIteratorResourceOperatorLike<any, any, any, any>[]
) {
  return operators.reduce((acc, next) => next(acc), src);
}

export const concatAll = <TReq, T>(
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): AsyncIteratorResourceOperatorLike<TReq, ObservableLike<T>, TReq, T> =>
  lift(concatAllObs(maxBufferSize));

export const distinctUntilChanged = <TReq, T>(
  equals?: (a: T, b: T) => boolean,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(distinctUntilChangedObs(equals));

export const endWith = <TReq, T>(
  value: T,
  ...values: T[]
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(endWithObs(value, ...values));

export const exhaust = <TReq, T>(): AsyncIteratorResourceOperatorLike<
  TReq,
  ObservableLike<T>,
  TReq,
  T
> => lift(exhaustObs());

export const ignoreElements = <
  TReq,
  TA,
  TB
>(): AsyncIteratorResourceOperatorLike<TReq, TA, TReq, TB> =>
  lift(ignoreElementsObs());

export const keep = <TReq, T>(
  predicate: (data: T) => boolean,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(keepObs(predicate));

export const map = <TReq, TA, TB>(
  mapper: (data: TA) => TB,
): AsyncIteratorResourceOperatorLike<TReq, TA, TReq, TB> =>
  lift(mapObs(mapper));

export const mergeAll = <TReq, T>(options?: {
  maxBufferSize?: number;
  maxConcurrency?: number;
}): AsyncIteratorResourceOperatorLike<TReq, ObservableLike<T>, TReq, T> =>
  lift(mergeAllObs(options));

export const observe = <TReq, T>(
  observer: ObserverLike<T>,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(observeObs(observer));

export const onComplete = <TReq, T>(
  onComplete: (err?: ErrorLike) => void,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(onCompleteObs(onComplete));

export const onError = <TReq, T>(
  onError: (err: unknown) => void,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(onErrorObs(onError));

export const onNext = <TReq, T>(
  onNext: (next: T) => void,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(onNextObs(onNext));

export const repeat = <TReq, T>(
  predicate?: ((count: number) => boolean) | number,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(repeatObs(predicate));

export const retry = <TReq, T>(
  predicate?: (count: number, error: unknown) => boolean,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(retryObs(predicate));

export const scan = <TReq, T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: TAcc,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, TAcc> =>
  lift(scanObs(scanner, initialValue));

export const share = <TReq, T>(
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(shareObs(scheduler, replayCount));

export const startWith = <TReq, T>(
  value: T,
  ...values: T[]
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(startWithObs(value, ...values));

export const subscribeOn = <TReq, T>(
  scheduler: SchedulerLike,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(subscribeOnObs(scheduler));

export const switchAll = <TReq, T>(): AsyncIteratorResourceOperatorLike<
  TReq,
  ObservableLike<T>,
  TReq,
  T
> => lift(switchAllObs());

export const take = <TReq, T>(
  count: number,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> => lift(takeObs(count));

export const takeLast = <TReq, T>(
  count: number,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(takeLastObs(count));

export const takeWhile = <TReq, T>(
  predicate: (next: T) => boolean,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(takeWhileObs(predicate));

export const throttle = <TReq, T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(throttleObs(durationSelector));

export const throttleTime = <TReq, T>(
  duration: number,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(throttleTimeObs(duration));

export const throttleFirst = <TReq, T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(throttleFirstObs(durationSelector));

export const throttleFirstTime = <TReq, T>(
  duration: number,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(throttleFirstTimeObs(duration));

export const throttleLast = <TReq, T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(throttleLastObs(durationSelector));

export const throttleLastTime = <TReq, T>(
  duration: number,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(throttleLastTimeObs(duration));

export const timeout = <TReq, T>(
  duration: number,
): AsyncIteratorResourceOperatorLike<TReq, T, TReq, T> =>
  lift(timeoutObs(duration));

export const withLatestFrom = <TReq, TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): AsyncIteratorResourceOperatorLike<TReq, TA, TReq, TC> =>
  lift(withLatestFromObs(other, selector));
