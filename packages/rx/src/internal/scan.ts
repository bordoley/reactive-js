import {
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftEnumerable } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";

class ScanSubscriber<T, TAcc> extends AbstractDelegatingSubscriber<T, TAcc> {
  constructor(
    delegate: SubscriberLike<TAcc>,
    private readonly scanner: (acc: TAcc, next: T) => TAcc,
    private acc: TAcc,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    const nextAcc = this.scanner(this.acc, next);
    this.acc = nextAcc;

    this.delegate.notify(nextAcc);
  }
}

const operator = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): SubscriberOperatorLike<T, TAcc> => subscriber =>
  new ScanSubscriber(subscriber, scanner, initialValue());

export const scan = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): ObservableOperatorLike<T, TAcc> =>
  liftEnumerable(operator(scanner, initialValue));
