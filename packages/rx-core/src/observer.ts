export interface ObserverLike<T> {
  next(data: T): void;
  complete(error: Error | void): void;
}

export const next = 1;
export const complete = 2;

export type Notification<T> = [1, T] | [2, Error | undefined];

export const notify = <T>(observer: ObserverLike<T>, notification: Notification<T>) => {
  switch (notification[0]) {
    case next:
      observer.next(notification[1]);
      break;
    case complete:
      observer.complete(notification[1])
      break;
  }
};