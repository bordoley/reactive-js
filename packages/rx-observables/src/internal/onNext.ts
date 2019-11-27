import { lift, ObservableOperator } from "@reactive-js/rx-observable";
import { observe, SubscriberOperator } from "@reactive-js/rx-subscriber";

const ignore = <T>(data: T) => {};

const operator = <T>(onNext: (data: T) => void): SubscriberOperator<T, T> =>
  observe({
    next: onNext,
    complete: ignore,
  });

export const onNext = <T>(
  onNext: (next: T) => void,
): ObservableOperator<T, T> => observable => lift(observable, operator(onNext));
