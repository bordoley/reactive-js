import {
  connect,
  observe,
  DelegatingSubscriber,
  ObservableLike,
  Operator,
  SubscriberLike,
  Observable,
  ObserverLike,
} from "@reactive-js/rx-core";
import { DisposableLike } from "@reactive-js/disposables";

class WithLatestFromSubscriber<TA, TB, TC> extends DelegatingSubscriber<
  TA,
  TC
> {
  private readonly selector: (a: TA, b: TB) => TC;
  private readonly otherSubscription: DisposableLike;

  private otherLatest: TB | undefined;

  static InnerObserver = class<TA, TB, TC> implements ObserverLike<TB> {
    private readonly parent: WithLatestFromSubscriber<TA, TB, TC>;

    constructor(parent: WithLatestFromSubscriber<TA, TB, TC>) {
      this.parent = parent;
    }

    next(data: TB) {
      this.parent.otherLatest = data;
    }

    complete(error?: Error) {
      if (error !== undefined) {
        this.parent.complete(error);
      }
    }
  };

  constructor(
    delegate: SubscriberLike<TC>,
    other: ObservableLike<TB>,
    selector: (a: TA, b: TB) => TC,
  ) {
    super(delegate);
    this.selector = selector;

    this.otherSubscription = connect(
      Observable.lift(
        other,
        observe(new WithLatestFromSubscriber.InnerObserver(this)),
      ),
      this.scheduler,
    );

    this.subscription.add(this.otherSubscription);
  }

  protected onNext(data: TA) {
    if (this.otherLatest !== undefined) {
      const result = this.selector(data, this.otherLatest);
      this.delegate.next(result);
    }
  }

  protected onComplete(error?: Error) {
    this.delegate.complete(error);
    this.subscription.remove(this.otherSubscription);
  }
}

export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): Operator<TA, TC> => subscriber =>
  new WithLatestFromSubscriber(subscriber, other, selector);
