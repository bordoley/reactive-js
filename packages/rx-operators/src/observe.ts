import {
  observe,
  Notification,
  Notifications,
  Operator,
} from "@reactive-js/rx-core";
export { observe } from "@reactive-js/rx-core";

export const onNext = <T>(onNext: (data: T) => void): Operator<T, T> =>
  observe({
    notify: (notif: Notification, data: T | Error | void) => {
      switch (notif) {
        case Notifications.next:
          onNext(data as T);
      }
    },
  });

export const onComplete = <T>(
  onComplete: (err: Error | void) => void,
): Operator<T, T> =>
  observe({
    notify: (notif: Notification, data: T | Error | void) => {
      switch (notif) {
        case Notifications.complete:
          onComplete(data as Error | void);
      }
    },
  });

export const onError = <T>(onError: (error: Error) => void): Operator<T, T> =>
  observe({
    notify: (notif: Notification, data: T | Error | void) => {
      switch (notif) {
        case Notifications.complete:
          if (data !== undefined) {
            onError(data as Error);
          }
      }
    },
  });
