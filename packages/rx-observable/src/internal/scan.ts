import { SubscriberLike } from "@reactive-js/rx-core";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift, SubscriberOperator } from "./lift";
import { ObservableOperator } from "./pipe";

class ScanSubscriber<T, TAcc> extends DelegatingSubscriber<T, TAcc> {
  private acc: TAcc;
  private scanner: (acc: TAcc, next: T) => TAcc;

  constructor(
    delegate: SubscriberLike<TAcc>,
    scanner: (acc: TAcc, next: T) => TAcc,
    initialValue: TAcc,
  ) {
    super(delegate);
    this.scanner = scanner;
    this.acc = initialValue;
  }

  protected onComplete(error?: Error) {
    this.delegate.complete(error);
  }

  protected onNext(next: T) {
    const prevAcc = this.acc;
    const nextAcc = this.scanner(prevAcc, next);
    this.acc = nextAcc;

    this.delegate.next(nextAcc);
  }
}

const operator = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: TAcc,
): SubscriberOperator<T, TAcc> => subscriber =>
  new ScanSubscriber(subscriber, scanner, initialValue);

export const scan = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: TAcc,
): ObservableOperator<T, TAcc> => lift(operator(scanner, initialValue));
