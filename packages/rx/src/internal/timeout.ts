import {
  createSerialDisposable,
  SerialDisposableLike,
  ErrorLike,
} from "@reactive-js/disposable";
import {
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftObservable } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { subscribe } from "./subscribe";
import { AutoDisposingDelegatingSubscriber } from "./subscriber";
import { throws } from "./throws";

const timeoutError = Symbol("TimeoutError");

class TimeoutSubscriber<T> extends AutoDisposingDelegatingSubscriber<T, T>
  implements ObserverLike<unknown> {
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();

  constructor(
    delegate: SubscriberLike<T>,
    private readonly duration: ObservableLike<unknown>,
  ) {
    super(delegate);
    this.add(this.durationSubscription);
    this.setupDurationSubscription();
  }

  private setupDurationSubscription() {
    this.durationSubscription.inner = pipe(
      this.duration,
      observe(this),
      subscribe(this),
    );
  }

  notifyNext(data: T) {
    this.setupDurationSubscription();
    this.delegate.notifyNext(data);
  }

  onComplete(error?: ErrorLike) {
    this.dispose(error);
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
  liftObservable(
    operator(
      typeof duration === "number" ? throws(timeoutError, duration) : duration,
    ),
  );
