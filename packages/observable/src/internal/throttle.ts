import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  subscribe,
  DelegatingSubscriber,
  ErrorLike,
  ObservableLike,
  SubscriberLike,
} from "@reactive-js/rx";
import { empty } from "./fromArray";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";
import { onComplete } from "./observe";
import { pipe } from "@reactive-js/pipe";

export const enum ThrottleMode {
  First = 1,
  Last = 2,
  Interval = 3,
}

class ThrottleSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();
  private value: [T] | undefined = undefined;
  private readonly notifyNext = () => {
    const value = this.value;
    if (value !== undefined) {
      this.value = undefined;
      const [next] = value;

      this.setupDurationSubscription(next);

      try {
        this.delegate.next(next);
      } catch (cause) {
        this.delegate.complete({ cause });
      }
    }
  };

  constructor(
    delegate: SubscriberLike<T>,
    private readonly durationSelector: (next: T) => ObservableLike<unknown>,
    private readonly mode: ThrottleMode,
  ) {
    super(delegate);

    this.add(this.durationSubscription);
  }

  private setupDurationSubscription(next: T) {
    this.durationSubscription.disposable = pipe(
      this.durationSelector(next),
      onComplete(this.notifyNext),
      subscribe(this),
    );
  }

  complete(error?: ErrorLike) {
    if (
      !this.isDisposed &&
      error === undefined &&
      this.mode !== ThrottleMode.First
    ) {
      this.notifyNext();
    }
    this.delegate.complete(error);
  }

  next(data: T) {
    if (!this.isDisposed) {
      if (this.value !== undefined) {
        this.value[0] = data;
      } else {
        this.value = [data];
      }

      if (
        this.durationSubscription.disposable.isDisposed &&
        this.mode !== ThrottleMode.Last
      ) {
        this.notifyNext();
      } else if (this.durationSubscription.disposable.isDisposed) {
        this.setupDurationSubscription(data);
      }
    }
  }
}

const throttleOperator = <T>(
  durationSelector: (next: T) => ObservableLike<unknown>,
  mode: ThrottleMode,
): SubscriberOperatorLike<T, T> => subscriber =>
  new ThrottleSubscriber(subscriber, durationSelector, mode);

export const throttle = <T>(
  duration: ((next: T) => ObservableLike<unknown>) | number,
  mode: ThrottleMode = ThrottleMode.Interval,
): ObservableOperatorLike<T, T> =>
  lift(
    throttleOperator(
      typeof duration === "number" ? _ => empty(duration) : duration,
      mode,
    ),
  );
