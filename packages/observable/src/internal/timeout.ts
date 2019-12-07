import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import {
  ErrorLike,
  ObservableOperator,
  SubscriberLike,
  SubscriberOperator,
} from "@reactive-js/rx";
import { connect } from "./connect";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift } from "./lift";
import { onError } from "./observe";
import { pipe } from "./pipe";
import { throws } from "./throws";

const timeoutError = Symbol("TimeoutError");

class TimeoutSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly duration: number;
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();
  private readonly setupTimeout = () => {
    this.durationSubscription.disposable = connect(
      pipe(
        throws(timeoutError, this.duration),
        onError(cause => this.complete({ cause })),
      ),
      this,
    );
  };
  constructor(delegate: SubscriberLike<T>, duration: number) {
    super(delegate);
    this.duration = duration;

    this.add(this.durationSubscription);
  }

  protected onComplete(error?: ErrorLike) {
    this.remove(this.durationSubscription);
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    this.setupTimeout();
    this.delegate.next(data);
  }
}

const operator = <T>(
  duration: number,
): SubscriberOperator<T, T> => subscriber =>
  new TimeoutSubscriber(subscriber, duration);

export const timeout = <T>(duration: number): ObservableOperator<T, T> =>
  lift(operator(duration));
