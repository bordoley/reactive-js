import {
  ObservableLike,
  SubscriberLike,
  SubscriberOperatorLike,
  ObservableOperatorLike,
  ErrorLike,
} from "./interfaces";
import { DelegatingSubscriber } from "./subscriber";
import { liftObservable } from "./lift";

class CatchErrorSubscriber<T> extends DelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly onError: (error: unknown) => ObservableLike<T> | void,
  ) {
    super(delegate);
  }

  complete(error?: ErrorLike) {
    if (this.dispose()) {
      if (error !== undefined) {
        try {
          const { cause } = error;
          const result = this.onError(cause) || undefined;
          if (result !== undefined) {
            result.subscribe(this.delegate);
          } else {
            this.delegate.complete(error);
          }
        } catch (cause) {
          this.delegate.complete({ cause, parent: error } as ErrorLike);
        }
      } else {
        this.delegate.complete();
      }
    }
  }

  next(data: T) {
    this.delegate.next(data);
  }
}

const operator = <T>(
  onError: (error: unknown) => ObservableLike<T> | void,
): SubscriberOperatorLike<T, T> => subscriber =>
  new CatchErrorSubscriber(subscriber, onError);

export const catchError = <T>(
  onError: (error: unknown) => ObservableLike<T> | void,
): ObservableOperatorLike<T, T> => liftObservable(operator(onError));
