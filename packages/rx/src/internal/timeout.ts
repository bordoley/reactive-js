import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  ErrorLike,
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { subscribe } from "./subscribe";
import { DelegatingSubscriber } from "./subscriber";
import { throws } from "./throws";

const timeoutError = Symbol("TimeoutError");

class TimeoutSubscriber<T> extends DelegatingSubscriber<T, T>
  implements ObserverLike<unknown> {
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
      this.durationSubscription.inner = pipe(
        this.duration,
        observe(this),
        subscribe(this),
      );

      this.delegate.next(data);
    }
  }

  onComplete(error?: ErrorLike) {
    this.complete(error);
  }

  onNext(_: unknown) {}
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
