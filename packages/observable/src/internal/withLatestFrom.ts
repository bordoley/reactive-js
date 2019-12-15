import { DisposableLike } from "@reactive-js/disposable";
import {
  subscribe,
  AbstractDelegatingSubscriber,
  ErrorLike,
  ObservableLike,
  ObserverLike,
  SubscriberLike,
} from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";
import { lift } from "./lift";
import { observe } from "./observe";
import { pipe } from "@reactive-js/pipe";

class WithLatestFromSubscriber<TA, TB, TC> extends AbstractDelegatingSubscriber<
  TA,
  TC
> {
  static InnerObserver = class<TA, TB, TC> implements ObserverLike<TB> {
    private readonly parent: WithLatestFromSubscriber<TA, TB, TC>;
    constructor(parent: WithLatestFromSubscriber<TA, TB, TC>) {
      this.parent = parent;
    }

    complete(error?: ErrorLike) {
      if (error !== undefined) {
        this.parent.complete(error);
      }
    }

    next(data: TB) {
      if (this.parent.otherLatest === undefined) {
        this.parent.otherLatest = [data];
      } else {
        this.parent.otherLatest[0] = data;
      }
    }
  };

  private otherLatest: [TB] | undefined;
  private readonly otherSubscription: DisposableLike;
  private readonly selector: (a: TA, b: TB) => TC;

  constructor(
    delegate: SubscriberLike<TC>,
    other: ObservableLike<TB>,
    selector: (a: TA, b: TB) => TC,
  ) {
    super(delegate);
    this.selector = selector;

    this.otherSubscription = pipe(
      other,
      observe(new WithLatestFromSubscriber.InnerObserver(this)),
      subscribe(this),
    );

    this.add(this.otherSubscription);
  }

  completeUnsafe(error?: ErrorLike) {
    this.remove(this.otherSubscription);
    this.delegate.complete(error);
  }

  nextUnsafe(data: TA) {
    if (this.otherLatest !== undefined) {
      const [otherLatest] = this.otherLatest;
      const result = this.selector(data, otherLatest);
      // Performance: Bypass safety checks and directly
      // sink notifcations to the delegate.
      (this.delegate as AbstractDelegatingSubscriber<TC, unknown>).nextUnsafe(
        result,
      );
    }
  }
}

const operator = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): SubscriberOperatorLike<TA, TC> => subscriber =>
  subscriber instanceof AbstractDelegatingSubscriber
    ? new WithLatestFromSubscriber(subscriber, other, selector)
    : (subscriber as SubscriberLike<any>);

export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): ObservableOperatorLike<TA, TC> => lift(operator(other, selector));
