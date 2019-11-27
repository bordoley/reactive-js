import { DisposableLike } from "@reactive-js/disposable";
import { ObserverLike } from "@reactive-js/rx-observer";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  AbstractSubscriberImpl,
  checkState,
  SubscriberLike,
} from "./subscriber";

const getSubscriberScheduler = <T>(
  delegate: SubscriberLike<T>,
): SchedulerLike => (delegate as any).scheduler || delegate;

const getSubscriberSubscription = <T>(
  delegate: SubscriberLike<T>,
): DisposableLike => (delegate as any).subscription || delegate;

const __DEV__ = process.env.NODE_ENV !== "production";

/**
 * @noInheritDoc
 *
 * Abstract base class for implementing SubscriberOperators.
 */
export abstract class DelegatingSubscriber<
  TA,
  TB
> extends AbstractSubscriberImpl<TA> {
  /** @ignore */
  get isConnected() {
    return this.source.isConnected;
  }
  readonly delegate: ObserverLike<TB>;

  private isStopped = false;
  private readonly source: SubscriberLike<any>;

  constructor(delegate: SubscriberLike<TB>) {
    super(
      getSubscriberScheduler(delegate),
      getSubscriberSubscription(delegate),
    );

    this.delegate = delegate;

    this.source =
      delegate instanceof DelegatingSubscriber ? delegate.source : delegate;

    this.add(() => {
      this.isStopped = true;
    });
  }

  /** @ignore */
  complete(error?: Error) {
    if (__DEV__) {
      checkState(this);
    }

    if (!this.isStopped) {
      this.isStopped = true;
      this.tryOnComplete(error);
    }
  }

  /** @ignore */
  next(data: TA) {
    if (__DEV__) {
      checkState(this);
    }

    if (!this.isStopped) {
      this.tryOnNext(data);
    }
  }

  /**
   * Override to handle complete notification. Implementations
   * may throw errors which will be caught and propogated.
   *
   * @param error
   */
  protected abstract onComplete(error?: Error): void;

  /**
   * Overried to handle incoming next notifications. Implementations
   * may throw errors which will be caught and propogated.
   *
   * @param data
   */
  protected abstract onNext(data: TA): void;

  private tryOnComplete(error?: Error) {
    try {
      this.onComplete(error);
    } catch (e) {
      // FIXME: if error isn't null the delegate error should
      // reference both exceptions so that we don't swallow them.
      this.delegate.complete(e);
    }
  }

  private tryOnNext(data: TA) {
    try {
      this.onNext(data);
    } catch (e) {
      this.complete(e);
    }
  }
}
