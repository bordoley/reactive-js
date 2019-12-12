import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  connect,
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
};

class ThrottleSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly durationSelector: (next: T) => ObservableLike<unknown>;
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();
  private readonly mode: ThrottleMode;
  private value: [T] | undefined = undefined;
  private readonly notifyNext = () => {
    const value = this.value;
    if (value !== undefined) {
      this.value = undefined;
      const [next] = value;

      this.setupDurationSubscription(next);

      this.delegate.next(next);
    }
  };

  constructor(
    delegate: SubscriberLike<T>,
    durationSelector: (next: T) => ObservableLike<unknown>,
    mode: ThrottleMode,
  ) {
    super(delegate);
    this.durationSelector = durationSelector;
    this.mode = mode;

    this.add(this.durationSubscription);
  }

  private setupDurationSubscription(next: T) {
    this.durationSubscription.disposable = pipe(
      this.durationSelector(next),
      onComplete(this.notifyNext),
      connect(this),
    );
  }

  protected onComplete(error?: ErrorLike) {
    this.remove(this.durationSubscription);
    if (error === undefined && this.mode !== ThrottleMode.First) {
      this.notifyNext();
    }
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    if (this.value !== undefined) {
      this.value[0] = data;
    } else {
      this.value = [data];
    }

    if (this.durationSubscription.disposable.isDisposed && this.mode !== ThrottleMode.Last) {
      this.notifyNext();
    } else if (this.durationSubscription.disposable.isDisposed) {
      this.setupDurationSubscription(data);
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
): ObservableOperatorLike<T, T> => lift(
  throttleOperator(
    typeof duration === "number" 
      ? _ => empty(duration)
      : duration,
    mode,
  )
)
