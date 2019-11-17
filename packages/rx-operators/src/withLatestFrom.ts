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

class WithLatestFromSubscriber<TA, TB, TC> extends DelegatingSubscriber<
  TA,
  TC
> {
  private readonly selector: (a: TA, b: TB) => TC;
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

    this.subscription.add(
      connect(
        Observable.lift(
          other,
          observe(new WithLatestFromSubscriber.InnerObserver(this)),
        ),
        this.scheduler,
      ),
    );
  }

  protected onNext(data: TA) {
    if (this.otherLatest !== undefined) {
      const result = this.selector(data, this.otherLatest);
      this.delegate.next(result);
    }
  }

  protected onComplete(error?: Error) {
    this.delegate.complete(error);
  }
}

export const withLatestFrom = <TA, TB, TC>(
  other: ObservableLike<TB>,
  selector: (a: TA, b: TB) => TC,
): Operator<TA, TC> => subscriber =>
  new WithLatestFromSubscriber(subscriber, other, selector);
