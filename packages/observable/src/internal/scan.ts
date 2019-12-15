import {
  ErrorLike,
  SubscriberLike,
  AbstractDelegatingSubscriber,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";

class ScanSubscriber<T, TAcc> extends AbstractDelegatingSubscriber<T, TAcc> {
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

  completeUnsafe(error?: ErrorLike) {
    this.delegate.complete(error);
  }

  nextUnsafe(next: T) {
    const prevAcc = this.acc;
    const nextAcc = this.scanner(prevAcc, next);
    this.acc = nextAcc;

    // Performance: Bypass safety checks and directly
    // sink notifcations to the delegate.
    (this.delegate as AbstractDelegatingSubscriber<TAcc, unknown>).nextUnsafe(nextAcc);
  }
}

const operator = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): SubscriberOperatorLike<T, TAcc> => subscriber =>
  subscriber instanceof AbstractDelegatingSubscriber
    ? new ScanSubscriber(subscriber, scanner, initialValue())
    : subscriber as SubscriberLike<any>;
  
export const scan = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => TAcc,
  initialValue: () => TAcc,
): ObservableOperatorLike<T, TAcc> => lift(operator(scanner, initialValue));
