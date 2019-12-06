import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import { SchedulerContinuationLike } from "@reactive-js/scheduler";

export const fromArray = <T>(
  values: ReadonlyArray<T>,
  delay = 0,
): ObservableLike<T> => {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    let index = 0;

    const continuation: SchedulerContinuationLike = (
      shouldYield: () => boolean,
    ) => {
      if (index < values.length && delay > 0) {
        const value = values[index];
        index++;
        subscriber.next(value);
        subscriber.schedule(continuation, delay);
        return;
      } else {
        while (index < values.length) {
          const value = values[index];
          index++;
          subscriber.next(value);

          if (shouldYield()) {
            subscriber.schedule(continuation, delay);
            return;
          }
        }

        subscriber.complete();
        return;
      }
    };

    subscriber.schedule(continuation, delay);
  };

  return { subscribe };
};

export const empty = <T>(delay?: number): ObservableLike<T> =>
  fromArray([], delay);

export const ofValue = <T>(value: T, delay?: number): ObservableLike<T> =>
  fromArray([value], delay);

export function fromScheduledValues<T>(
  value: [number, T],
  ...values: Array<[number, T]>
): ObservableLike<T>;
export function fromScheduledValues<T>(
  ...values: Array<[number, T]>
): ObservableLike<T> {
  const subscribe = (subscriber: SubscriberLike<T>) => {
    let index = 0;

    const continuation: SchedulerContinuationLike = (
      shouldYield: () => boolean,
    ) => {
      while (index < values.length) {
        const [, value] = values[index];
        index++;
        subscriber.next(value);

        if (index < values.length) {
          const delay = values[index][0] || 0;

          if (delay > 0) {
            subscriber.schedule(continuation, delay);
            return;
          } else if (shouldYield()) {
            subscriber.schedule(continuation, 0);
            return;
          }
        }
      }

      subscriber.complete();
      return;
    };

    const [delay] = values[index];
    subscriber.schedule(continuation, delay);
  };

  return { subscribe };
}
