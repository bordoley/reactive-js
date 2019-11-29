/**
 * An observer of push-based notifications.
 */
export interface ObserverLike<T> {
  /**
   * Called by a provider to indicate that it is done sending push-based notifications.
   *
   * @param error If present, indicates that the provider experienced an error condition.
   */
  complete(error?: Error): void;

  /**
   * Provides the next item to observe.
   *
   * @param data
   */
  next(data: T): void;
}