import { DisposableLike } from "@reactive-js/disposable";
import { ObservableLike, ObserverLike, SubscriberLike } from "@reactive-js/rx-core";
import { DelegatingSubscriber } from "./delegatingSubscriber";
import { lift, SubscriberOperator } from "./lift";
import { connect } from "./connect";
import { ObservableOperator, pipe } from "./pipe";
import { observe } from "./observe";

class WithLatestFromSubscriber<TA, TB, TC> extends DelegatingSubscriber<
  TA,
  TC
> {
  static InnerObserver = class<TA, TB, TC> implements ObserverLike<TB> {
    private readonly parent: WithLatestFromSubscriber<TA, TB, TC>;

    constructor(parent: WithLatestFromSubscriber<TA, TB, TC>) {
      this.parent = parent;
    }

    complete(error?: Error) {
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

    this.otherSubscription = connect(
      pipe(other, observe(new WithLatestFromSubscriber.InnerObserver(this))),
      this,
    );

    this.add(this.otherSubscription);
  }

  protected onComplete(error?: Error) {
    this.remove(this.otherSubscription);
    this.delegate.complete(error);
  }

  protected onNext(data: TA) {
    if (this.otherLatest !== undefined) {
      const [otherLatest] = this.otherLatest;
      const result = this.selector(data, otherLatest);
      this.delegate.next(result);
    }
  }
}

const operator = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): SubscriberOperator<TA, TC> => subscriber =>
  new WithLatestFromSubscriber(subscriber, other, selector);

export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): ObservableOperator<TA, TC> => lift(operator(other, selector));
