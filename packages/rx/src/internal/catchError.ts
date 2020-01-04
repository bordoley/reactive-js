import {
  ObservableLike,
  SubscriberLike,
  SubscriberOperatorLike,
  ObservableOperatorLike,
} from "./interfaces";
import { DelegatingSubscriber } from "./subscriber";
import { liftObservable } from "./lift";
import { ErrorLike } from "@reactive-js/disposable";

class CatchErrorSubscriber<T> extends DelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly onError: (error: unknown) => ObservableLike<T> | void,
  ) {
    super(delegate);

    this.add((error?: ErrorLike) => {
      if (error !== undefined) {
        try {
          const { cause } = error;
          const result = this.onError(cause) || undefined;
          if (result !== undefined) {
            result.subscribe(this.delegate);
          } else {
            this.delegate.dispose(error);
          }
        } catch (cause) {
          this.delegate.dispose({ cause, parent: error } as ErrorLike);
        }
      } else {
        this.delegate.dispose();
      }
    });
  }

  notifyNext(data: T) {
    this.delegate.notifyNext(data);
  }
}

const operator = <T>(
  onError: (error: unknown) => ObservableLike<T> | void,
): SubscriberOperatorLike<T, T> => subscriber =>
  new CatchErrorSubscriber(subscriber, onError);

export const catchError = <T>(
  onError: (error: unknown) => ObservableLike<T> | void,
): ObservableOperatorLike<T, T> => liftObservable(operator(onError));
