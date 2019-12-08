import { DisposableLike, DisposableOrTeardown } from "@reactive-js/disposable";
import {
  ErrorLike,
  ObservableLike,
  ObservableResourceLike,
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

export interface ObservableResourceOperatorLike<A, B> {
  (observable: ObservableResourceLike<A>): ObservableResourceLike<B>;
}

class LiftedObservableResource<T> implements ObservableResourceLike<T> {
  readonly disposable: DisposableLike;
  readonly observable: ObservableLike<T>;
  constructor(observable: ObservableLike<T>, disposable: DisposableLike) {
    this.observable = observable;
    this.disposable = disposable;
  }

  get isDisposed() {
    return this.disposable.isDisposed;
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

export const lift = <A, B>(
  operator: ObservableOperatorLike<A, B>,
): ObservableResourceOperatorLike<A, B> => observableResource => {
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
  op1: ObservableResourceOperatorLike<T, A>,
): ObservableResourceLike<A>;
export function pipe<T, A, B>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperatorLike<T, A>,
  op2: ObservableResourceOperatorLike<A, B>,
): ObservableResourceLike<B>;
export function pipe<T, A, B, C>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperatorLike<T, A>,
  op2: ObservableResourceOperatorLike<A, B>,
  op3: ObservableResourceOperatorLike<B, C>,
): ObservableResourceLike<C>;
export function pipe<T, A, B, C, D>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperatorLike<T, A>,
  op2: ObservableResourceOperatorLike<A, B>,
  op3: ObservableResourceOperatorLike<B, C>,
  op4: ObservableResourceOperatorLike<C, D>,
): ObservableResourceLike<D>;
export function pipe<T, A, B, C, D, E>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperatorLike<T, A>,
  op2: ObservableResourceOperatorLike<A, B>,
  op3: ObservableResourceOperatorLike<B, C>,
  op4: ObservableResourceOperatorLike<C, D>,
  op5: ObservableResourceOperatorLike<D, E>,
): ObservableResourceLike<E>;
export function pipe<T, A, B, C, D, E, F>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperatorLike<T, A>,
  op2: ObservableResourceOperatorLike<A, B>,
  op3: ObservableResourceOperatorLike<B, C>,
  op4: ObservableResourceOperatorLike<C, D>,
  op5: ObservableResourceOperatorLike<D, E>,
  op6: ObservableResourceOperatorLike<E, F>,
): ObservableResourceLike<F>;
export function pipe<T, A, B, C, D, E, F, G>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperatorLike<T, A>,
  op2: ObservableResourceOperatorLike<A, B>,
  op3: ObservableResourceOperatorLike<B, C>,
  op4: ObservableResourceOperatorLike<C, D>,
  op5: ObservableResourceOperatorLike<D, E>,
  op6: ObservableResourceOperatorLike<E, F>,
  op7: ObservableResourceOperatorLike<F, G>,
): ObservableResourceLike<G>;
export function pipe<T, A, B, C, D, E, F, G, H>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperatorLike<T, A>,
  op2: ObservableResourceOperatorLike<A, B>,
  op3: ObservableResourceOperatorLike<B, C>,
  op4: ObservableResourceOperatorLike<C, D>,
  op5: ObservableResourceOperatorLike<D, E>,
  op6: ObservableResourceOperatorLike<E, F>,
  op7: ObservableResourceOperatorLike<F, G>,
  op8: ObservableResourceOperatorLike<G, H>,
): ObservableResourceLike<H>;
export function pipe<T, A, B, C, D, E, F, G, H, I>(
  src: ObservableResourceLike<T>,
  op1: ObservableResourceOperatorLike<T, A>,
  op2: ObservableResourceOperatorLike<A, B>,
  op3: ObservableResourceOperatorLike<B, C>,
  op4: ObservableResourceOperatorLike<C, D>,
  op5: ObservableResourceOperatorLike<D, E>,
  op6: ObservableResourceOperatorLike<E, F>,
  op7: ObservableResourceOperatorLike<F, G>,
  op8: ObservableResourceOperatorLike<G, H>,
  op9: ObservableResourceOperatorLike<H, I>,
): ObservableResourceLike<I>;
export function pipe(
  source: ObservableResourceLike<any>,
  ...operators: Array<ObservableResourceOperatorLike<any, any>>
): ObservableResourceLike<any> {
  return operators.reduce((acc, next) => next(acc), source);
}

export const concatAll = <T>(
  maxBufferSize = Number.MAX_SAFE_INTEGER,
): ObservableResourceOperatorLike<ObservableLike<T>, T> =>
  lift(concatAllObs(maxBufferSize));

export const distinctUntilChanged = <T>(
  equals?: (a: T, b: T) => boolean,
): ObservableResourceOperatorLike<T, T> =>
  lift(distinctUntilChangedObs(equals));

export const endWith = <T>(
  value: T,
  ...values: T[]
): ObservableResourceOperatorLike<T, T> => lift(endWithObs(value, ...values));

export const exhaust = <T>(): ObservableResourceOperatorLike<
  ObservableLike<T>,
  T
> => lift(exhaustObs());

export const ignoreElements = <TA, TB>(): ObservableResourceOperatorLike<
  TA,
  TB
> => lift(ignoreElementsObs());

export const keep = <T>(
  predicate: (data: T) => boolean,
): ObservableResourceOperatorLike<T, T> => lift(keepObs(predicate));

export const map = <TA, TB>(
  mapper: (data: TA) => TB,
): ObservableResourceOperatorLike<TA, TB> => lift(mapObs(mapper));

export const mergeAll = <T>(options?: {
  maxBufferSize?: number;
  maxConcurrency?: number;
}): ObservableResourceOperatorLike<ObservableLike<T>, T> =>
  lift(mergeAllObs(options));

export const observe = <T>(
  observer: ObserverLike<T>,
): ObservableResourceOperatorLike<T, T> => lift(observeObs(observer));

export const onComplete = <T>(
  onComplete: (err?: ErrorLike) => void,
): ObservableResourceOperatorLike<T, T> => lift(onCompleteObs(onComplete));

export const onError = <T>(
  onError: (err: unknown) => void,
): ObservableResourceOperatorLike<T, T> => lift(onErrorObs(onError));

export const onNext = <T>(
  onNext: (next: T) => void,
): ObservableResourceOperatorLike<T, T> => lift(onNextObs(onNext));

export const repeat = <T>(
  predicate?: ((count: number) => boolean) | number,
): ObservableResourceOperatorLike<T, T> => lift(repeatObs(predicate));

export const retry = <T>(
  predicate?: (count: number, error: unknown) => boolean,
): ObservableResourceOperatorLike<T, T> => lift(retryObs(predicate));

export const scan = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: TAcc,
): ObservableResourceOperatorLike<T, TAcc> =>
  lift(scanObs(scanner, initialValue));

export const share = <T>(
  scheduler: SchedulerLike,
  replayCount?: number,
): ObservableResourceOperatorLike<T, T> =>
  lift(shareObs(scheduler, replayCount));

export const startWith = <T>(
  value: T,
  ...values: T[]
): ObservableResourceOperatorLike<T, T> => lift(startWithObs(value, ...values));

export const subscribeOn = <T>(
  scheduler: SchedulerLike,
): ObservableResourceOperatorLike<T, T> => lift(subscribeOnObs(scheduler));

export const switchAll = <T>(): ObservableResourceOperatorLike<
  ObservableLike<T>,
  T
> => lift(switchAllObs());

export const take = <T>(count: number): ObservableResourceOperatorLike<T, T> =>
  lift(takeObs(count));

export const takeLast = <T>(
  count: number,
): ObservableResourceOperatorLike<T, T> => lift(takeLastObs(count));

export const takeWhile = <T>(
  predicate: (next: T) => boolean,
): ObservableResourceOperatorLike<T, T> => lift(takeWhileObs(predicate));

export const throttleFirst = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableResourceOperatorLike<T, T> =>
  lift(throttleFirstObs(durationSelector));

export const throttle = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableResourceOperatorLike<T, T> => lift(throttleObs(durationSelector));

export const throttleTime = <T>(
  duration: number,
): ObservableResourceOperatorLike<T, T> => lift(throttleTimeObs(duration));

export const throttleFirstTime = <T>(
  duration: number,
): ObservableResourceOperatorLike<T, T> => lift(throttleFirstTimeObs(duration));

export const throttleLast = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
): ObservableResourceOperatorLike<T, T> =>
  lift(throttleLastObs(durationSelector));

export const throttleLastTime = <T>(
  duration: number,
): ObservableResourceOperatorLike<T, T> => lift(throttleLastTimeObs(duration));

export const timeout = <T>(
  duration: number,
): ObservableResourceOperatorLike<T, T> => lift(timeoutObs(duration));

export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): ObservableResourceOperatorLike<TA, TC> =>
  lift(withLatestFromObs(other, selector));
