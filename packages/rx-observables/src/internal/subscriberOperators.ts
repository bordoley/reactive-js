import {
  ObservableLike,
  ObservableOperator,
  observableOperatorFrom,
} from "@reactive-js/rx-observable";

import { ObserverLike } from "@reactive-js/rx-observer";

import {
  concat as concactSubscriberOperator,
  distinctUntilChanged as distinctUntilChangedSubscriberOperator,
  exhaust as exhaustSubscriberOperator,
  ignoreElements as ignoreElementsSubscriberOperator,
  keep as keepSubscriberOperator,
  map as mapSubscriberOperator,
  mapTo as mapToSubscriberOperator,
  merge as mergeSubscriberOperator,
  observe as observeSubscriberOperator,
  onComplete as onCompleteSubscriberOperator,
  onError as onErrorSubscriberOperator,
  onNext as onNextSubscriberOperator,
  scan as scanSubscriberOperator,
  switch_ as switchSubscriberOperator,
  take as takeSubscriberOperator,
  takeLast as takeLastSubscriberOperator,
  withLatestFrom as withLatestFromSubscriberOperator,
} from "@reactive-js/rx-subscriber-operators";

export const concatAll = <T>(
  maxBufferSize?: number,
): ObservableOperator<ObservableLike<T>, T> =>
  observableOperatorFrom(concactSubscriberOperator(maxBufferSize));

export const distinctUntilChanged = <T>(
  equals?: (a: T, b: T) => boolean,
): ObservableOperator<T, T> =>
  observableOperatorFrom(distinctUntilChangedSubscriberOperator(equals));

export const exhaust = <T>(): ObservableOperator<ObservableLike<T>, T> =>
  observableOperatorFrom(exhaustSubscriberOperator());

export const ignoreElements = <T>(): ObservableOperator<ObservableLike<T>, T> =>
  observableOperatorFrom(ignoreElementsSubscriberOperator());

export const keep = <T>(
  predicate: (data: T) => boolean,
): ObservableOperator<T, T> =>
  observableOperatorFrom(keepSubscriberOperator(predicate));

export const map = <TA, TB>(
  mapper: (data: TA) => TB,
): ObservableOperator<TA, TB> =>
  observableOperatorFrom(mapSubscriberOperator(mapper));

export const mapTo = <TA, TB>(value: TB): ObservableOperator<TA, TB> =>
  observableOperatorFrom(mapToSubscriberOperator(value));

export const mergeAll = <T>(options?: {
  maxBufferSize?: number;
  maxConcurrency?: number;
}): ObservableOperator<ObservableLike<T>, T> =>
  observableOperatorFrom(mergeSubscriberOperator(options));

export const observe = <T>(
  observer: ObserverLike<T>,
): ObservableOperator<T, T> =>
  observableOperatorFrom(observeSubscriberOperator(observer));

export const onComplete = <T>(
  onComplete: (err?: Error) => void,
): ObservableOperator<T, T> =>
  observableOperatorFrom(onCompleteSubscriberOperator(onComplete));

export const onError = <T>(
  onError: (err: Error) => void,
): ObservableOperator<T, T> =>
  observableOperatorFrom(onErrorSubscriberOperator(onError));

export const onNext = <T>(
  onNext: (next: T) => void,
): ObservableOperator<T, T> =>
  observableOperatorFrom(onNextSubscriberOperator(onNext));

export const scan = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: TAcc,
): ObservableOperator<T, TAcc> =>
  observableOperatorFrom(scanSubscriberOperator(scanner, initialValue));

// tslint:disable-next-line variable-name
export const switch_ = <T>(): ObservableOperator<ObservableLike<T>, T> =>
  observableOperatorFrom(switchSubscriberOperator());

export const take = <T>(count: number): ObservableOperator<T, T> =>
  observableOperatorFrom(takeSubscriberOperator(count));

export const takeLast = <T>(
  count: number,
  priority?: number,
): ObservableOperator<T, T> =>
  observableOperatorFrom(takeLastSubscriberOperator(count, priority));

export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): ObservableOperator<TA, TC> =>
  observableOperatorFrom(withLatestFromSubscriberOperator(other, selector));
