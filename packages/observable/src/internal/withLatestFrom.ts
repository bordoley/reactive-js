import {
  subscribe,
  DelegatingSubscriber,
  ErrorLike,
  ObservableLike,
  SubscriberLike,
  ObserverLike,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";

class WithLatestFromSubscriber<TA, TB, TC> extends DelegatingSubscriber<TA, TC>
  implements ObserverLike<TB> {
  private otherLatest: [TB] | undefined;

  constructor(
    delegate: SubscriberLike<TC>,
    other: ObservableLike<TB>,
    private readonly selector: (a: TA, b: TB) => TC,
  ) {
    super(delegate);
    this.selector = selector;

    this.add(pipe(other, observe(this), subscribe(this)));
  }

  next(data: TA) {
    const otherLatest = this.otherLatest;

    if (!this.isDisposed && otherLatest !== undefined) {
      const [other] = otherLatest;
      const result = this.selector(data, other);
      this.delegate.next(result);
    }
  }

  onComplete(error?: ErrorLike) {
    if (error !== undefined) {
      this.complete(error);
    }
  }

  onNext(data: TB) {
    const otherLatest = this.otherLatest;

    if (otherLatest === undefined) {
      this.otherLatest = [data];
    } else {
      otherLatest[0] = data;
    }
  }
}

const operator = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): SubscriberOperatorLike<TA, TC> => subscriber =>
  new WithLatestFromSubscriber(subscriber, other, selector);

export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): ObservableOperatorLike<TA, TC> => lift(operator(other, selector));
