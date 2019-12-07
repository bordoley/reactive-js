import { AsyncIteratorLike, AsyncIteratorOperatorLike } from "@reactive-js/ix";
import {
  ErrorLike,
  ObservableLike,
  ObservableOperatorLike,
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
} from "@reactive-js/observable";
import { SchedulerLike } from "@reactive-js/scheduler";

class AsyncIteratorImpl<TReq, T> implements AsyncIteratorLike<TReq, T> {
  readonly dispatcher: (req: TReq) => void;
  readonly observable: ObservableLike<T>;
  constructor(observable: ObservableLike<T>, dispatcher: (req: TReq) => void) {
    this.observable = observable;
    this.dispatcher = dispatcher;
  }

  dispatch(req: TReq) {
    this.dispatcher(req);
  }

  subscribe(subscriber: SubscriberLike<T>) {
    this.observable.subscribe(subscriber);
  }
}

const liftImpl = <TReq, T, TReqA, TA>(
  operator?: ObservableOperatorLike<T, TA>,
  mapper?: (req: TReqA) => TReq,
): AsyncIteratorOperatorLike<TReq, T, TReqA, TA> => iterator => {
  // Cheat here. AsyncIteratorResourceImpl follows the same protocol, so
  // dynamically pull properties off of it.
  const observable: ObservableLike<any> =
    (iterator as any).observable || iterator;
  const dispatcher: (req: TReq) => void =
    (iterator as any).dispatcher || ((req: TReq) => iterator.dispatch(req));

  const pipedObservable =
    operator !== undefined ? pipeObs(observable, operator) : observable;
  const mappedDispatcher: (req: TReqA) => void =
    mapper !== undefined ? req => dispatcher(mapper(req)) : (dispatcher as any);

  return new AsyncIteratorImpl(pipedObservable, mappedDispatcher);
};

export const lift = <TReq, T, TA>(
  operator: ObservableOperatorLike<T, TA>,
): AsyncIteratorOperatorLike<TReq, T, TReq, TA> => liftImpl(operator, undefined);

export const liftReq = <TReq, T, TReqA>(
  mapper: (req: TReqA) => TReq,
): AsyncIteratorOperatorLike<TReq, T, TReqA, T> => liftImpl(undefined, mapper);

export function pipe<TSrcReq, TSrc, TReqA, TA>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperatorLike<TSrcReq, TSrc, TReqA, TA>,
): AsyncIteratorLike<TReqA, TA>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperatorLike<TReqA, TA, TReqB, TB>,
): AsyncIteratorLike<TReqB, TB>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB, TReqC, TC>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperatorLike<TReqB, TB, TReqC, TC>,
): AsyncIteratorLike<TReqC, TC>;
export function pipe<TSrcReq, TSrc, TReqA, TA, TReqB, TB, TReqC, TC, TReqD, TD>(
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperatorLike<TReqC, TC, TReqD, TD>,
): AsyncIteratorLike<TReqD, TD>;
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
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperatorLike<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorOperatorLike<TReqD, TD, TReqE, TE>,
): AsyncIteratorLike<TReqE, TE>;
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
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperatorLike<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorOperatorLike<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorOperatorLike<TReqE, TE, TReqF, TF>,
): AsyncIteratorLike<TReqF, TF>;
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
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperatorLike<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorOperatorLike<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorOperatorLike<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorOperatorLike<TReqF, TF, TReqG, TG>,
): AsyncIteratorLike<TReqG, TG>;
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
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperatorLike<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorOperatorLike<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorOperatorLike<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorOperatorLike<TReqF, TF, TReqG, TG>,
  op8: AsyncIteratorOperatorLike<TReqG, TG, TReqH, TH>,
): AsyncIteratorLike<TReqH, TH>;
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
  src: AsyncIteratorLike<TSrcReq, TSrc>,
  op1: AsyncIteratorOperatorLike<TSrcReq, TSrc, TReqA, TA>,
  op2: AsyncIteratorOperatorLike<TReqA, TA, TReqB, TB>,
  op3: AsyncIteratorOperatorLike<TReqB, TB, TReqC, TC>,
  op4: AsyncIteratorOperatorLike<TReqC, TC, TReqD, TD>,
  op5: AsyncIteratorOperatorLike<TReqD, TD, TReqE, TE>,
  op6: AsyncIteratorOperatorLike<TReqE, TE, TReqF, TF>,
  op7: AsyncIteratorOperatorLike<TReqF, TF, TReqG, TG>,
  op8: AsyncIteratorOperatorLike<TReqG, TG, TReqH, TH>,
  op9: AsyncIteratorOperatorLike<TReqH, TH, TReqI, TI>,
): AsyncIteratorLike<TReqI, TI>;
export function pipe(
  src: AsyncIteratorLike<any, any>,
  ...operators: AsyncIteratorOperatorLike<any, any, any, any>[]
) {
  return operators.reduce((acc, next) => next(acc), src);
}

export const concatAll = <TReq, T>(
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): AsyncIteratorOperatorLike<TReq, ObservableLike<T>, TReq, T> =>
  lift(concatAllObs(maxBufferSize));

export const distinctUntilChanged = <TReq, T>(
  equals?: (a: T, b: T) => boolean,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> =>
  lift(distinctUntilChangedObs(equals));

export const endWith = <TReq, T>(
  value: T,
  ...values: T[]
): AsyncIteratorOperatorLike<TReq, T, TReq, T> =>
  lift(endWithObs(value, ...values));

export const exhaust = <TReq, T>(): AsyncIteratorOperatorLike<
  TReq,
  ObservableLike<T>,
  TReq,
  T
> => lift(exhaustObs());

export const ignoreElements = <TReq, TA, TB>(): AsyncIteratorOperatorLike<
  TReq,
  TA,
  TReq,
  TB
> => lift(ignoreElementsObs());

export const keep = <TReq, T>(
  predicate: (data: T) => boolean,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(keepObs(predicate));

export const map = <TReq, TA, TB>(
  mapper: (data: TA) => TB,
): AsyncIteratorOperatorLike<TReq, TA, TReq, TB> => lift(mapObs(mapper));

export const mergeAll = <TReq, T>(options?: {
  maxBufferSize?: number;
  maxConcurrency?: number;
}): AsyncIteratorOperatorLike<TReq, ObservableLike<T>, TReq, T> =>
  lift(mergeAllObs(options));

export const observe = <TReq, T>(
  observer: ObserverLike<T>,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(observeObs(observer));

export const onComplete = <TReq, T>(
  onComplete: (err?: ErrorLike) => void,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(onCompleteObs(onComplete));

export const onError = <TReq, T>(
  onError: (err: unknown) => void,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(onErrorObs(onError));

export const onNext = <TReq, T>(
  onNext: (next: T) => void,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(onNextObs(onNext));

export const repeat = <TReq, T>(
  predicate?: ((count: number) => boolean) | number,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(repeatObs(predicate));

export const retry = <TReq, T>(
  predicate?: (count: number, error: unknown) => boolean,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(retryObs(predicate));

export const scan = <TReq, T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: TAcc,
): AsyncIteratorOperatorLike<TReq, T, TReq, TAcc> =>
  lift(scanObs(scanner, initialValue));

export const share = <TReq, T>(
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> =>
  lift(shareObs(scheduler, replayCount));

export const startWith = <TReq, T>(
  value: T,
  ...values: T[]
): AsyncIteratorOperatorLike<TReq, T, TReq, T> =>
  lift(startWithObs(value, ...values));

export const subscribeOn = <TReq, T>(
  scheduler: SchedulerLike,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(subscribeOnObs(scheduler));

export const switchAll = <TReq, T>(): AsyncIteratorOperatorLike<
  TReq,
  ObservableLike<T>,
  TReq,
  T
> => lift(switchAllObs());

export const take = <TReq, T>(
  count: number,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(takeObs(count));

export const takeLast = <TReq, T>(
  count: number,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(takeLastObs(count));

export const takeWhile = <TReq, T>(
  predicate: (next: T) => boolean,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(takeWhileObs(predicate));

export const throttle = <TReq, T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> =>
  lift(throttleObs(durationSelector));

export const throttleTime = <TReq, T>(
  duration: number,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(throttleTimeObs(duration));

export const throttleFirst = <TReq, T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> =>
  lift(throttleFirstObs(durationSelector));

export const throttleFirstTime = <TReq, T>(
  duration: number,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> =>
  lift(throttleFirstTimeObs(duration));

export const throttleLast = <TReq, T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> =>
  lift(throttleLastObs(durationSelector));

export const throttleLastTime = <TReq, T>(
  duration: number,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> =>
  lift(throttleLastTimeObs(duration));

export const timeout = <TReq, T>(
  duration: number,
): AsyncIteratorOperatorLike<TReq, T, TReq, T> => lift(timeoutObs(duration));

export const withLatestFrom = <TReq, TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): AsyncIteratorOperatorLike<TReq, TA, TReq, TC> =>
  lift(withLatestFromObs(other, selector));
