import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import {
  ErrorLike,
  ObservableLike,
  ObservableResourceLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx-core";
import {
  concatAll as concatAllObs,
  distinctUntilChanged as distinctUntilChangedObs,
  endWith as endWithObs,
  exhaust as exhaustObs,
  ignoreElements as ignoreElementsObs,
  keep as keepObs,
  map as mapObs,
  mergeAll as mergeAllObs,
  ObservableOperator,
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
} from "@reactive-js/rx-observable";

import { SchedulerLike } from "@reactive-js/scheduler";
import { number } from "prop-types";

class LiftedObservableResource<T> implements ObservableResourceLike<T> {
  get isDisposed() {
    return this.disposable.isDisposed;
  }
  readonly disposable: DisposableLike;
  readonly observable: ObservableLike<T>;

  constructor(observable: ObservableLike<T>, disposable: DisposableLike) {
    this.observable = observable;
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

  subscribe(subscriber: SubscriberLike<T>): void {
    this.observable.subscribe(subscriber);
  }
}

export interface ObservableResourceOperator<A, B> {
  (observable: ObservableResourceLike<A>): ObservableResourceLike<B>;
}

export const lift = <A, B>(
  operator: ObservableOperator<A, B>,
): ObservableResourceOperator<A, B> => observableResource => {
  const observable = pipeObs(
    observableResource instanceof LiftedObservableResource
      ? observableResource.observable
      : observableResource,
    operator,
  );

  const disposable =
    observableResource instanceof LiftedObservableResource
      ? observableResource.disposable
      : observableResource;

  return new LiftedObservableResource(observable, disposable);
};

export function pipe<T, A>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
): ObservableResourceLike<A>;
export function pipe<T, A, B>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
): ObservableResourceLike<B>;
export function pipe<T, A, B, C>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
): ObservableResourceLike<C>;
export function pipe<T, A, B, C, D>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
): ObservableResourceLike<D>;
export function pipe<T, A, B, C, D, E>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
  op5: ObservableResourceOperator<D, E>,
): ObservableResourceLike<E>;
export function pipe<T, A, B, C, D, E, F>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
  op5: ObservableResourceOperator<D, E>,
  op6: ObservableResourceOperator<E, F>,
): ObservableResourceLike<F>;
export function pipe<T, A, B, C, D, E, F, G>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
  op5: ObservableResourceOperator<D, E>,
  op6: ObservableResourceOperator<E, F>,
  op7: ObservableResourceOperator<F, G>,
): ObservableResourceLike<G>;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
  op5: ObservableResourceOperator<D, E>,
  op6: ObservableResourceOperator<E, F>,
  op7: ObservableResourceOperator<F, G>,
  op8: ObservableResourceOperator<G, H>,
): ObservableResourceLike<H>;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperator<T, A>,
  op2: ObservableResourceOperator<A, B>,
  op3: ObservableResourceOperator<B, C>,
  op4: ObservableResourceOperator<C, D>,
  op5: ObservableResourceOperator<D, E>,
  op6: ObservableResourceOperator<E, F>,
  op7: ObservableResourceOperator<F, G>,
  op8: ObservableResourceOperator<G, H>,
  op9: ObservableResourceOperator<H, I>,
): ObservableResourceLike<I>;
export function pipe(
  source: ObservableResourceLike<any>,
  ...operators: Array<ObservableResourceOperator<any, any>>
): ObservableResourceLike<any> {
  return operators.reduce((acc, next) => next(acc), source);
}

export const concatAll = <T>(
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): ObservableResourceOperator<ObservableLike<T>, T> =>
  lift(concatAllObs(maxBufferSize));

export const distinctUntilChanged = <T>(
  equals?: (a: T, b: T) => boolean,
): ObservableResourceOperator<T, T> => lift(distinctUntilChangedObs(equals));

export const endWith = <T>(
  value: T,
  ...values: T[]
): ObservableResourceOperator<T, T> => lift(endWithObs(value, ...values));

export const exhaust = <T>(): ObservableResourceOperator<
  ObservableLike<T>,
  T
> => lift(exhaustObs());

export const ignoreElements = <TA, TB>(): ObservableResourceOperator<TA, TB> =>
  lift(ignoreElementsObs());

export const keep = <T>(
  predicate: (data: T) => boolean,
): ObservableResourceOperator<T, T> => lift(keepObs(predicate));

export const map = <TA, TB>(
  mapper: (data: TA) => TB,
): ObservableResourceOperator<TA, TB> => lift(mapObs(mapper));

export const mergeAll = <T>(options?: {
  maxBufferSize?: number;
  maxConcurrency?: number;
}): ObservableResourceOperator<ObservableLike<T>, T> =>
  lift(mergeAllObs(options));

export const observe = <T>(
  observer: ObserverLike<T>,
): ObservableResourceOperator<T, T> => lift(observeObs(observer));

export const onComplete = <T>(
  onComplete: (err?: ErrorLike) => void,
): ObservableResourceOperator<T, T> => lift(onCompleteObs(onComplete));

export const onError = <T>(
  onError: (err: unknown) => void,
): ObservableResourceOperator<T, T> => lift(onErrorObs(onError));

export const onNext = <T>(
  onNext: (next: T) => void,
): ObservableResourceOperator<T, T> => lift(onNextObs(onNext));

export const repeat = <T>(
  predicate?: ((count: number) => boolean) | number,
): ObservableResourceOperator<T, T> => lift(repeatObs(predicate));

export const retry = <T>(
  predicate?: (count: number, error: unknown) => boolean,
): ObservableResourceOperator<T, T> => lift(retryObs(predicate));

export const scan = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: TAcc,
): ObservableResourceOperator<T, TAcc> => lift(scanObs(scanner, initialValue));

export const share = <T>(
  scheduler: SchedulerLike,
  replayCount?: number,
): ObservableResourceOperator<T, T> => lift(shareObs(scheduler, replayCount));

export const startWith = <T>(
  value: T,
  ...values: T[]
): ObservableResourceOperator<T, T> => lift(startWithObs(value, ...values));

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableResourceOperator<T, T> => lift(subscribeOnObs(scheduler));

export const switchAll = <T>(): ObservableResourceOperator<
  ObservableLike<T>,
  T
> => lift(switchAllObs());

export const take = <T>(count: number): ObservableResourceOperator<T, T> =>
  lift(takeObs(count));

export const takeLast = <T>(count: number): ObservableResourceOperator<T, T> =>
  lift(takeLastObs(count));

export const takeWhile = <T>(
  predicate: (next: T) => boolean,
): ObservableResourceOperator<T, T> => lift(takeWhileObs(predicate));

export const throttleFirst = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableResourceOperator<T, T> => lift(throttleFirstObs(durationSelector));

export const throttle = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableResourceOperator<T, T> => lift(throttleObs(durationSelector));

export const throttleTime = <T>(
  duration: number,
): ObservableResourceOperator<T, T> => lift(throttleTimeObs(duration));

export const throttleFirstTime = <T>(
  duration: number,
): ObservableResourceOperator<T, T> => lift(throttleFirstTimeObs(duration));

export const throttleLast = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableResourceOperator<T, T> => lift(throttleLastObs(durationSelector));

export const throttleLastTime = <T>(
  duration: number,
): ObservableResourceOperator<T, T> => lift(throttleLastTimeObs(duration));

export const timeout = <T>(
  duration: number,
): ObservableResourceOperator<T, T> => lift(timeoutObs(duration));

export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): ObservableResourceOperator<TA, TC> =>
  lift(withLatestFromObs(other, selector));
