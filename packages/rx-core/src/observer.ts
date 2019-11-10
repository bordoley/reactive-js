export type NotifyNext = 1;
export type NotifyComplete = 2;
export type Notification = NotifyNext | NotifyComplete;

export const Notifications = {
  next: 1 as NotifyNext,
  complete: 2 as NotifyComplete
};

export interface ObserverLike<T> {
  notify(notification: NotifyNext, data: T): void;
  notify(notification: NotifyComplete, data: Error | undefined): void;
  notify(notification: Notification, data: T | Error | undefined): void;
}