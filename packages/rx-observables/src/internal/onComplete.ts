import { lift, ObservableOperator } from "@reactive-js/rx-observable";
import { observe, SubscriberOperator } from "@reactive-js/rx-subscriber";

const ignore = <T>(data: T) => {};

const operator = <T>(
  onComplete: (err?: Error) => void,
): SubscriberOperator<T, T> =>
  observe({
    next: ignore,
    complete: onComplete,
  });

export const onComplete = <T>(
  onComplete: (err?: Error) => void,
): ObservableOperator<T, T> => lift(operator(onComplete));
