import {
  observe,
  Notification,
  Notifications,
  Operator
} from "@rx-min/rx-core";
export { observe } from "@rx-min/rx-core";

export const onNext = <T>(onNext: (data: T) => void): Operator<T, T> =>
  observe({
    notify: (notif: Notification, data: T | Error | undefined) => {
      switch (notif) {
        case Notifications.next:
          onNext(data as T);
      }
    }
  });

export const onComplete = <T>(
  onComplete: (err: Error | undefined) => void
): Operator<T, T> =>
  observe({
    notify: (notif: Notification, data: T | Error | undefined) => {
      switch (notif) {
        case Notifications.complete:
          onComplete(data as Error | undefined);
      }
    }
  });

export const onError = <T>(onError: (error: Error) => void): Operator<T, T> =>
  observe({
    notify: (notif: Notification, data: T | Error | undefined) => {
      switch (notif) {
        case Notifications.complete:
          if (data !== undefined) {
            onError(data as Error);
          }
      }
    }
  });
