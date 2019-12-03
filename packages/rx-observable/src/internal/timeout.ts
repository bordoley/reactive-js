import {
  createSerialDisposable,
  SerialDisposableLike,
} from "@reactive-js/disposable";
import { ErrorLike, SubscriberLike } from "@reactive-js/rx-core";
import { connect } from "./connect";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift, SubscriberOperator } from "./lift";
import { onError } from "./observe";
import { ObservableOperator, pipe } from "./pipe";
import { throws } from "./throws";

const timeoutError = Symbol("TimeoutError");

class TimeoutSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly duration: number;
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();

  constructor(delegate: SubscriberLike<T>, duration: number) {
    super(delegate);
    this.duration = duration;

    this.add(this.durationSubscription);
  }

  protected onComplete(error?: ErrorLike) {
    this.durationSubscription.dispose();
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    this.setupTimeout();
    this.delegate.next(data);
  }

  private readonly setupTimeout = () => {
    this.durationSubscription.disposable = connect(
      pipe(
        throws(timeoutError, this.duration),
        onError(cause => this.complete({ cause })),
      ),
      this,
    );
  };
}

const operator = <T>(
  duration: number,
): SubscriberOperator<T, T> => subscriber =>
  new TimeoutSubscriber(subscriber, duration);

export const timeout = <T>(duration: number): ObservableOperator<T, T> =>
  lift(operator(duration));
