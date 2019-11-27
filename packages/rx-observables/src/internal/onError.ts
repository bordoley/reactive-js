import { lift, ObservableOperator } from "@reactive-js/rx-observable";
import { observe, SubscriberOperator } from "@reactive-js/rx-subscriber";

const ignore = <T>(data: T) => {};

const operator = <T>(
  onError: (error: Error) => void,
): SubscriberOperator<T, T> =>
  observe({
    next: ignore,
    complete: (error?: Error) => {
      if (error !== undefined) {
        onError(error);
      }
    },
  });

export const onError = <T>(
  onError: (err: Error) => void,
): ObservableOperator<T, T> =>
  lift(operator(onError));
