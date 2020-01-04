import {
  ObservableLike,
  ObservableOperatorLike,
  ObserverLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { liftObservable } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";
import { subscribe } from "./subscribe";
import { AutoDisposingDelegatingSubscriber } from "./subscriber";
import { ErrorLike } from "@reactive-js/disposable";

class WithLatestFromSubscriber<TA, TB, TC>
  extends AutoDisposingDelegatingSubscriber<TA, TC>
  implements ObserverLike<TB> {
  private otherLatest: TB | undefined;
  private hasLatest = false;

  constructor(
    delegate: SubscriberLike<TC>,
    other: ObservableLike<TB>,
    private readonly selector: (a: TA, b: TB) => TC,
  ) {
    super(delegate);
    this.selector = selector;

    this.add(pipe(other, observe(this), subscribe(this)));
  }

  notifyNext(data: TA) {
    if (!this.isDisposed && this.hasLatest) {
      const result = this.selector(data, this.otherLatest as TB);
      this.delegate.notifyNext(result);
    }
  }

  onComplete(error?: ErrorLike) {
    if (error !== undefined) {
      this.dispose(error);
    }
  }

  onNext(data: TB) {
    this.hasLatest = true;
    this.otherLatest = data;
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
): ObservableOperatorLike<TA, TC> => liftObservable(operator(other, selector));
