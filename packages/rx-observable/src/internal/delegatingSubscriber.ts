import { ErrorLike, ObserverLike, SubscriberLike } from "@reactive-js/rx-core";
import { AbstractSubscriberImpl, checkState } from "./abstractSubscriber";

const __DEV__ = process.env.NODE_ENV !== "production";

/**
 * Abstract base class for implementing SubscriberOperators.
 *
 * @noInheritDoc
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
      (delegate as any).scheduler || delegate,
      (delegate as any).subscription || delegate,
    );

    this.delegate = delegate;

    this.source =
      delegate instanceof DelegatingSubscriber ? delegate.source : delegate;

    this.add(() => {
      this.isStopped = true;
    });
  }

  /** @ignore */
  complete(error?: ErrorLike) {
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
  protected abstract onComplete(error?: ErrorLike): void;

  /**
   * Overried to handle incoming next notifications. Implementations
   * may throw errors which will be caught and propogated.
   *
   * @param data
   */
  protected abstract onNext(data: TA): void;

  private tryOnComplete(error?: ErrorLike) {
    try {
      this.onComplete(error);
    } catch (cause) {
      this.delegate.complete({ cause, parent: error } as ErrorLike);
    }
  }

  private tryOnNext(data: TA) {
    try {
      this.onNext(data);
    } catch (cause) {
      this.complete({ cause });
    }
  }
}
