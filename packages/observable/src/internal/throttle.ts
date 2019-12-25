import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  empty,
  subscribe,
  DelegatingSubscriber,
  ErrorLike,
  ObservableLike,
  SubscriberLike,
  ObserverLike,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";

export const enum ThrottleMode {
  First = 1,
  Last = 2,
  Interval = 3,
}

class ThrottleSubscriber<T> extends DelegatingSubscriber<T, T>
  implements ObserverLike<unknown> {
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();
  private value: [T] | undefined = undefined;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly durationSelector: (next: T) => ObservableLike<unknown>,
    private readonly mode: ThrottleMode,
  ) {
    super(delegate);

    this.add(this.durationSubscription);
  }

  private notifyNext() {
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
  }

  private setupDurationSubscription(next: T) {
    this.durationSubscription.disposable = pipe(
      this.durationSelector(next),
      observe(this),
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
      const value = this.value;

      if (value !== undefined) {
        value[0] = data;
      } else {
        this.value = [data];
      }

      const durationSubscriptionDisposableIsDisposed = this.durationSubscription
        .disposable.isDisposed;

      if (
        durationSubscriptionDisposableIsDisposed &&
        this.mode !== ThrottleMode.Last
      ) {
        this.notifyNext();
      } else if (durationSubscriptionDisposableIsDisposed) {
        this.setupDurationSubscription(data);
      }
    }
  }

  onComplete(error?: ErrorLike) {
    if (error !== undefined) {
      this.complete(error);
    } else {
      this.notifyNext();
    }
  }

  onNext(_: unknown) {}
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
