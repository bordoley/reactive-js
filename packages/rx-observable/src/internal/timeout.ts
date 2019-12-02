import { DelegatingSubscriber } from "./delegatingSubscriber";
import { SubscriberLike } from "@reactive-js/rx-core";
import {
  SerialDisposableLike,
  createSerialDisposable,
} from "@reactive-js/disposable";
import { throws } from "./throws";
import { connect } from "./connect";
import { onError } from './observe';
import { pipe, ObservableOperator } from './pipe';
import { SubscriberOperator, lift } from './lift';

class TimeoutSubscriber<T> extends DelegatingSubscriber<T, T> {
  private readonly durationSubscription: SerialDisposableLike = createSerialDisposable();
  private readonly duration: number;

  constructor(delegate: SubscriberLike<T>, duration: number) {
    super(delegate);
    this.duration = duration;

    this.add(this.durationSubscription);
  }

  private readonly setupTimeout = () => {
    this.durationSubscription.disposable = connect(
      pipe(
        throws(new Error("Timeout"), this.duration),
        onError(err => this.complete(err)),
      ), 
      this
    );
  };

  protected onComplete(error?: Error) {
    this.durationSubscription.dispose();
    this.delegate.complete(error);
  }

  protected onNext(data: T) {
    this.setupTimeout();
    this.delegate.next(data);
  }
}

const operator = <T>(duration: number): SubscriberOperator<T, T> => subscriber =>
  new TimeoutSubscriber(subscriber, duration);

export const timeout = <T>(duration: number): ObservableOperator<T, T> =>
  lift(operator(duration));