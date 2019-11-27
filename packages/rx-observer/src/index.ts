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

/**
 * Enumeration of valid notification types.
 */
export enum NotificationKind {
  Next = 1,
  Complete = 2,
}

/** Materialized notification */
export type Notification<T> =
  | [NotificationKind.Next, T]
  | [NotificationKind.Complete, Error | undefined];

/**
 * Notifies the observer with the materialized notification.
 *
 * @param observer
 * @param notification
 */
export const notify = <T>(
  observer: ObserverLike<T>,
  notification: Notification<T>,
) => {
  switch (notification[0]) {
    case NotificationKind.Next:
      observer.next(notification[1]);
      break;
    case NotificationKind.Complete:
      observer.complete(notification[1]);
      break;
  }
};
