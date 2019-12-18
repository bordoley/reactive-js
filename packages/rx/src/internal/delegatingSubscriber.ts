import { ErrorLike, SubscriberLike } from "./interfaces";
import { AbstractSubscriber, checkState } from "./abstractSubscriber";

const __DEV__ = process.env.NODE_ENV !== "production";

/**
 * Abstract base class for implementing SubscriberOperatorLikes.
 *
 * @noInheritDoc
 */
export abstract class AbstractDelegatingSubscriber<
  TA,
  TB
> extends AbstractSubscriber<TA> {
  readonly delegate: SubscriberLike<TB>;
  isCompleted = false;

  constructor(delegate: SubscriberLike<TB>) {
    super(
      (delegate as any).scheduler || delegate,
      (delegate as any).disposable || delegate,
    );

    this.delegate = delegate;

    this.add(() => {
      this.isCompleted = true;
    });
  }

  /** @ignore */
  get isSubscribed() {
    return this.delegate.isSubscribed;
  }

  /** @ignore */
  complete(error?: ErrorLike) {
    if (__DEV__) {
      checkState(this);
    }

    if (!this.isCompleted) {
      this.isCompleted = true;
      this.tryComplete(error);
    }
  }

  /** @ignore */
  next(data: TA) {
    if (__DEV__) {
      checkState(this);
    }

    if (!this.isCompleted) {
      this.tryNext(data);
    }
  }

  /**
   * Override to handle complete notification. Implementations
   * may throw errors which will be caught and propogated.
   *
   * @param error
   */
  protected abstract completeUnsafe(error?: ErrorLike): void;

  /** @ignore */
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
