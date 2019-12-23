import { ObservableLike, SubscriberLike, ErrorLike } from "@reactive-js/rx";

class ThrowsObservable<T> implements ObservableLike<T> {
  constructor(
    private readonly error: ErrorLike,
    private readonly delay: number,
  ) {}

  subscribe = (subscriber: SubscriberLike<T>) => {
    const continuation = (_: () => boolean) => {
      subscriber.complete(this.error);
    };

    subscriber.schedule(continuation, this.delay);
  };
}

export const throws = <T>(cause: unknown, delay = 0): ObservableLike<T> => {
  const error = { cause };
  return new ThrowsObservable(error, delay);
};
