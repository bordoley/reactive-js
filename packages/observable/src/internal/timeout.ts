import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  SubscriberLike,
  subscribe,
  AbstractDelegatingSubscriber,
  ObservableLike,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";
import { onComplete } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { throws } from "./throws";

const timeoutError = Symbol("TimeoutError");

class TimeoutSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();

  constructor(
    delegate: SubscriberLike<T>,
    private readonly duration: ObservableLike<unknown>,
  ) {
    super(delegate);
    this.add(this.durationSubscription);
  }

  next(data: T) {
    if (!this.isDisposed) {
      this.durationSubscription.disposable = pipe(
        this.duration,
        onComplete(error => this.complete(error)),
        subscribe(this),
      );

      this.delegate.next(data);
    }
  }
}

const operator = <T>(
  duration: ObservableLike<unknown>,
): SubscriberOperatorLike<T, T> => subscriber =>
  new TimeoutSubscriber(subscriber, duration);

export const timeout = <T>(
  duration: number | ObservableLike<unknown>,
): ObservableOperatorLike<T, T> =>
  lift(
    operator(
      typeof duration === "number" ? throws(timeoutError, duration) : duration,
    ),
  );
