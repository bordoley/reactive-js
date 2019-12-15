import { ErrorLike, ObserverLike, SubscriberLike } from "./interfaces";
import { AbstractSubscriber, checkState } from "./abstractSubscriber";

const __DEV__ = process.env.NODE_ENV !== "production";

/**
 * Abstract base class for implementing SubscriberOperatorLikes.
 *
 * @noInheritDoc
 */
export abstract class AbstractDelegatingSubscriber<TA, TB> extends AbstractSubscriber<
TA
> {
  readonly delegate: ObserverLike<TB>;
  private isStopped = false;

  constructor(delegate: SubscriberLike<TB>) {
    super(
      (delegate as any).scheduler || delegate,
      (delegate as any).subscription || delegate,
    );

    this.delegate = delegate;

    this.add(() => {
      this.isStopped = true;
    });
  }

  /** @ignore */
  get isSubscribed() {
    return (this.delegate as SubscriberLike<unknown>).isSubscribed;
  }

  /** @ignore */
  complete(error?: ErrorLike) {
    if (__DEV__) {
      checkState(this);
    }

    if (!this.isStopped) {
      this.isStopped = true;
      this.tryComplete(error);
    }
  }

  /** @ignore */
  next(data: TA) {
    if (__DEV__) {
      checkState(this);
    }

    if (!this.isStopped) {
      this.tryNext(data);
    }
  }

  /**
   * Override to handle complete notification. Implementations
   * may throw errors which will be caught and propogated.
   *
   * @param error
   */
  abstract completeUnsafe(error?: ErrorLike): void;

  /**
   * Overried to handle incoming next notifications. Implementations
   * may throw errors which will be caught and propogated.
   *
   * @param data
   */
  abstract nextUnsafe(data: TA): void;

  private tryComplete(error?: ErrorLike) {
    try {
      this.completeUnsafe(error);
    } catch (cause) {
      this.delegate.complete({ cause, parent: error } as ErrorLike);
    }
  }

  private tryNext(data: TA) {
    try {
      this.nextUnsafe(data);
    } catch (cause) {
      this.complete({ cause });
    }
  }
}