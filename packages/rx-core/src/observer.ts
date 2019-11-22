export interface ObserverLike<T> {
  complete(error?: Error): void;
  next(data: T): void;
}

export enum NotificationKind {
  Next = 1,
  Complete = 2,
}

export type Notification<T> =
  | [NotificationKind.Next, T]
  | [NotificationKind.Complete, Error | undefined];

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
