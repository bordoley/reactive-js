import {
  DelegatingSubscriber,
  Operator,
  SubscriberLike,
} from "@reactive-js/rx-core";

class ScanSubscriber<T, TAcc> extends DelegatingSubscriber<T, TAcc> {
  private scanner: (acc: TAcc, next: T) => TAcc;
  private acc: TAcc;

  constructor(
    delegate: SubscriberLike<TAcc>,
    scanner: (acc: TAcc, next: T) => TAcc,
    initialValue: TAcc,
  ) {
    super(delegate);
    this.scanner = scanner;
    this.acc = initialValue;
  }

  protected onNext(next: T) {
    const prevAcc = this.acc;
    const nextAcc = this.scanner(prevAcc, next);
    this.acc = nextAcc;

    this.delegate.next(nextAcc);
  }

  protected onComplete(error: Error | void) {
    this.delegate.complete(error);
  }
}

export const scan = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: TAcc,
): Operator<T, TAcc> => subscriber =>
  new ScanSubscriber(subscriber, scanner, initialValue);
